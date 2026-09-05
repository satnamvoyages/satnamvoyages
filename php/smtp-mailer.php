<?php
/**
 * Satnam Voyages - Pure Core PHP Gmail SMTP Mailer
 * Connects directly to smtp.gmail.com:587 using standard PHP stream sockets and STARTTLS.
 * No external Composer packages (like PHPMailer) are required — 100% pure Core PHP!
 */

class CoreGmailMailer {
    private string $host = 'smtp.gmail.com';
    private int $port = 587;
    private int $timeout = 25;
    private string $username;
    private string $password;
    private $socket = null;
    private string $lastLog = '';

    public function __construct(string $username, string $password) {
        $this->username = trim($username);
        // Google 16-character app passwords often come with spaces (e.g., "abcd efgh ijkl mnop")
        $this->password = preg_replace('/\s+/', '', trim($password));
    }

    public function send(string $to, string $subject, string $htmlBody, string $replyTo = '', string $senderName = 'Satnam Voyages'): array {
        if (empty($this->username) || empty($this->password) || $this->username === 'YOUR_GMAIL_ADDRESS@gmail.com') {
            return [
                'success' => false,
                'error' => 'Gmail SMTP credentials are not configured in php/config.php. Please set GMAIL_USER and GMAIL_APP_PASSWORD.'
            ];
        }

        try {
            // 1. Open socket connection to Gmail SMTP on port 587
            $context = stream_context_create([
                'ssl' => [
                    'verify_peer' => true,
                    'verify_peer_name' => true,
                    'allow_self_signed' => false,
                ]
            ]);

            $this->socket = @stream_socket_client(
                "tcp://{$this->host}:{$this->port}",
                $errno,
                $errstr,
                $this->timeout,
                STREAM_CLIENT_CONNECT,
                $context
            );

            if (!$this->socket) {
                throw new Exception("Failed to connect to {$this->host}:{$this->port} ($errno - $errstr)");
            }

            stream_set_timeout($this->socket, $this->timeout);

            // Read welcome banner
            $this->getResponse();

            // 2. Handshake EHLO
            $hostname = !empty($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'localhost';
            $this->sendCommand("EHLO {$hostname}");

            // 3. STARTTLS
            $this->sendCommand("STARTTLS");

            // Upgrade connection to TLS crypto
            $cryptoMethod = STREAM_CRYPTO_METHOD_TLS_CLIENT;
            if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) {
                $cryptoMethod |= STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
            }
            if (defined('STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT')) {
                $cryptoMethod |= STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT;
            }

            $tlsSuccess = @stream_socket_enable_crypto($this->socket, true, $cryptoMethod);
            if (!$tlsSuccess) {
                throw new Exception("TLS negotiation with {$this->host} failed.");
            }

            // 4. Send EHLO again post-TLS
            $this->sendCommand("EHLO {$hostname}");

            // 5. Authenticate via AUTH LOGIN
            $this->sendCommand("AUTH LOGIN");
            $this->sendCommand(base64_encode($this->username));
            $this->sendCommand(base64_encode($this->password));

            // 6. MAIL FROM
            $this->sendCommand("MAIL FROM:<{$this->username}>");

            // 7. RCPT TO
            $this->sendCommand("RCPT TO:<{$to}>");

            // 8. DATA command
            $this->sendCommand("DATA");

            // 9. Construct email headers and payload
            $headers = [];
            $headers[] = "Date: " . date('r');
            $headers[] = "To: <{$to}>";
            $headers[] = "From: =?UTF-8?B?" . base64_encode($senderName) . "?= <{$this->username}>";
            if (!empty($replyTo)) {
                $headers[] = "Reply-To: <{$replyTo}>";
            }
            $headers[] = "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=";
            $headers[] = "MIME-Version: 1.0";
            $headers[] = "Content-Type: text/html; charset=UTF-8";
            $headers[] = "Content-Transfer-Encoding: base64";
            $headers[] = "X-Mailer: Satnam Voyages Core PHP Mailer";

            // Normalize line endings in message
            $encodedBody = chunk_split(base64_encode($htmlBody));

            $emailPayload = implode("\r\n", $headers) . "\r\n\r\n" . $encodedBody . "\r\n.";

            // Send payload terminated by \r\n.\r\n
            $this->sendCommand($emailPayload);

            // 10. QUIT
            $this->sendCommand("QUIT");
            @fclose($this->socket);

            return [
                'success' => true,
                'message' => 'Email dispatched successfully via Gmail SMTP.'
            ];

        } catch (Exception $e) {
            if ($this->socket) {
                @fclose($this->socket);
            }
            return [
                'success' => false,
                'error' => $e->getMessage(),
                'log' => $this->lastLog
            ];
        }
    }

    private function sendCommand(string $command): string {
        if (!$this->socket) {
            throw new Exception("Socket is closed.");
        }

        // Mask password in debug log for security
        $logCommand = (str_starts_with($command, base64_encode($this->password))) ? '[AUTH_SECRET_MASKED]' : $command;
        $this->lastLog .= "CLIENT: {$logCommand}\n";

        fwrite($this->socket, $command . "\r\n");
        $response = $this->getResponse();
        $this->lastLog .= "SERVER: {$response}\n";

        $code = (int)substr($response, 0, 3);
        // Valid response codes for SMTP are 2xx and 3xx (like 334 for auth challenges or 354 for data)
        if ($code >= 400 || $code === 0) {
            throw new Exception("SMTP Error [{$code}]: {$response}");
        }

        return $response;
    }

    private function getResponse(): string {
        $response = '';
        while ($line = fgets($this->socket, 512)) {
            $response .= $line;
            // The 4th character of a multi-line reply is '-', whereas the final line has ' '
            if (isset($line[3]) && $line[3] === ' ') {
                break;
            }
        }
        return trim($response);
    }
}
