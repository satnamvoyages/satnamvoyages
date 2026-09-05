<?php
/**
 * Satnam Voyages - Core PHP Inquiry & Booking Submission Handler
 * Receives booking requests and sends branded notification emails via Gmail SMTP.
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/smtp-mailer.php';

// Set headers for CORS and JSON response
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 1. Detect if request is JSON or standard Form POST
$isJson = false;
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (stripos($contentType, 'application/json') !== false) {
    $isJson = true;
    $rawInput = file_get_contents('php://input');
    $data = json_decode($rawInput, true) ?: [];
} else {
    $data = $_POST;
}

// 2. Extract & Sanitize Fields
$name = trim(htmlspecialchars($data['name'] ?? ''));
$phone = trim(htmlspecialchars($data['phone'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL) ? trim($data['email']) : '';
$travelDate = trim(htmlspecialchars($data['travelDate'] ?? 'Flexible'));
$travelers = trim(htmlspecialchars($data['travelers'] ?? ($data['adults'] ?? '2')));
$serviceChoice = trim(htmlspecialchars($data['serviceChoice'] ?? ($data['tourTitle'] ?? 'Delhi / Golden Triangle Tour')));
$vehicleChoice = trim(htmlspecialchars($data['vehicleChoice'] ?? ($data['vehicle'] ?? 'Toyota Innova Crysta')));
$tier = trim(htmlspecialchars($data['tier'] ?? 'Deluxe'));
$pickupLocation = trim(htmlspecialchars($data['pickupLocation'] ?? ''));
$notes = trim(htmlspecialchars($data['notes'] ?? ($data['specialRequests'] ?? 'None specified')));
$refCode = trim(htmlspecialchars($data['refCode'] ?? 'SV-' . substr(time(), -6)));
$source = trim(htmlspecialchars($data['source'] ?? 'Website Inquiry Form'));

// 3. Validate Required Fields
if (empty($name) || empty($phone)) {
    if ($isJson) {
        header('Content-Type: application/json');
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => 'Please provide both your name and phone/WhatsApp number.'
        ]);
        exit;
    } else {
        echo "<script>alert('Please provide your name and phone number.'); window.history.back();</script>";
        exit;
    }
}

// 4. Construct Branded HTML Email Template
$cleanPhone = preg_replace('/[^0-9]/', '', $phone);
$whatsAppUrl = "https://wa.me/{$cleanPhone}";

$emailHtml = '
<div style="font-family: \'Segoe UI\', Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #FAF6F0; border: 1px solid #E8DFD3; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
  <div style="background-color: #141210; color: #ffffff; padding: 24px 20px; text-align: center; border-bottom: 3px solid #EA580C;">
    <h1 style="margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1.5px; color: #FFFFFF;">' . htmlspecialchars(COMPANY_NAME) . '</h1>
    <p style="margin: 6px 0 0 0; color: #FDBA74; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">New Booking Inquiry via Gmail SMTP</p>
  </div>

  <div style="padding: 24px;">
    <div style="background-color: #ffffff; border-radius: 8px; padding: 16px; margin-bottom: 20px; border: 1px solid #E8DFD3; text-align: center;">
      <p style="margin: 0 0 6px 0; font-size: 11px; color: #6B7280; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Booking Reference Code</p>
      <p style="margin: 0; font-size: 20px; font-weight: bold; color: #EA580C; font-family: monospace;">#' . htmlspecialchars($refCode) . '</p>
    </div>

    <table style="width: 100%; border-collapse: collapse; font-size: 14px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #E8DFD3;">
      <tr style="border-bottom: 1px solid #F3F4F6;">
        <td style="padding: 12px 16px; color: #6B7280; font-weight: 600; width: 40%;">Lead Traveler:</td>
        <td style="padding: 12px 16px; color: #111827; font-weight: bold;">' . htmlspecialchars($name) . '</td>
      </tr>
      <tr style="border-bottom: 1px solid #F3F4F6;">
        <td style="padding: 12px 16px; color: #6B7280; font-weight: 600;">Phone / WhatsApp:</td>
        <td style="padding: 12px 16px; color: #111827; font-weight: bold;"><a href="tel:' . htmlspecialchars($phone) . '" style="color: #EA580C; text-decoration: none;">' . htmlspecialchars($phone) . '</a></td>
      </tr>
      <tr style="border-bottom: 1px solid #F3F4F6;">
        <td style="padding: 12px 16px; color: #6B7280; font-weight: 600;">Email Address:</td>
        <td style="padding: 12px 16px; color: #111827;">' . (!empty($email) ? '<a href="mailto:' . htmlspecialchars($email) . '" style="color: #2563EB;">' . htmlspecialchars($email) . '</a>' : '<span style="color: #9CA3AF;">Not provided</span>') . '</td>
      </tr>
      <tr style="border-bottom: 1px solid #F3F4F6;">
        <td style="padding: 12px 16px; color: #6B7280; font-weight: 600;">Package / Circuit:</td>
        <td style="padding: 12px 16px; color: #111827; font-weight: bold;">' . htmlspecialchars($serviceChoice) . '</td>
      </tr>
      <tr style="border-bottom: 1px solid #F3F4F6;">
        <td style="padding: 12px 16px; color: #6B7280; font-weight: 600;">Travel Date:</td>
        <td style="padding: 12px 16px; color: #111827;">' . htmlspecialchars($travelDate) . '</td>
      </tr>
      <tr style="border-bottom: 1px solid #F3F4F6;">
        <td style="padding: 12px 16px; color: #6B7280; font-weight: 600;">Travelers Count:</td>
        <td style="padding: 12px 16px; color: #111827;">' . htmlspecialchars($travelers) . ' Pax</td>
      </tr>
      <tr style="border-bottom: 1px solid #F3F4F6;">
        <td style="padding: 12px 16px; color: #6B7280; font-weight: 600;">Vehicle Preference:</td>
        <td style="padding: 12px 16px; color: #111827;">' . htmlspecialchars($vehicleChoice) . '</td>
      </tr>
      <tr style="border-bottom: 1px solid #F3F4F6;">
        <td style="padding: 12px 16px; color: #6B7280; font-weight: 600;">Accommodation Tier:</td>
        <td style="padding: 12px 16px; color: #111827;">' . htmlspecialchars($tier) . '</td>
      </tr>';

if (!empty($pickupLocation)) {
    $emailHtml .= '
      <tr style="border-bottom: 1px solid #F3F4F6;">
        <td style="padding: 12px 16px; color: #6B7280; font-weight: 600;">Pickup Location:</td>
        <td style="padding: 12px 16px; color: #111827;">' . htmlspecialchars($pickupLocation) . '</td>
      </tr>';
}

$emailHtml .= '
      <tr>
        <td style="padding: 12px 16px; color: #6B7280; font-weight: 600;">Form Source:</td>
        <td style="padding: 12px 16px; color: #6B7280;">' . htmlspecialchars($source) . '</td>
      </tr>
    </table>

    <div style="margin-top: 16px; padding: 14px 16px; background-color: #ffffff; border-radius: 8px; border: 1px solid #E8DFD3;">
      <p style="margin: 0 0 6px 0; font-size: 11px; color: #6B7280; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Special Requests / Chauffeur Notes:</p>
      <p style="margin: 0; font-size: 13px; color: #374151; line-height: 1.5; white-space: pre-wrap;">' . nl2br(htmlspecialchars($notes)) . '</p>
    </div>

    <div style="margin-top: 22px; text-align: center;">
      <a href="' . $whatsAppUrl . '" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">
        💬 Chat on WhatsApp with ' . htmlspecialchars($name) . '
      </a>
    </div>
  </div>

  <div style="background-color: #1C1917; color: #9CA3AF; padding: 14px; text-align: center; font-size: 11px; border-top: 1px solid #333;">
    Sent automatically by ' . htmlspecialchars(COMPANY_NAME) . ' Core PHP Portal • <a href="' . htmlspecialchars(WEBSITE_URL) . '" style="color: #EA580C; text-decoration: none;">' . htmlspecialchars(WEBSITE_URL) . '</a>
  </div>
</div>';

// 5. Send via Core PHP Gmail SMTP Mailer
$subject = "[Inquiry #{$refCode}] {$serviceChoice} - {$name}";
$mailer = new CoreGmailMailer(GMAIL_USER, GMAIL_APP_PASSWORD);
$result = $mailer->send(RECEIVER_EMAIL, $subject, $emailHtml, $email, COMPANY_NAME);

// 6. Handle Response
if ($isJson) {
    header('Content-Type: application/json');
    if ($result['success']) {
        echo json_encode([
            'success' => true,
            'emailSent' => true,
            'refCode' => $refCode,
            'message' => 'Your inquiry has been submitted and sent via Gmail SMTP!'
        ]);
    } else {
        // Even if SMTP failed (e.g. pending credentials), acknowledge reception and return warning
        echo json_encode([
            'success' => true,
            'emailSent' => false,
            'refCode' => $refCode,
            'warning' => $result['error'],
            'message' => 'Inquiry received. Configure GMAIL_USER and GMAIL_APP_PASSWORD in config.php to send automated emails.'
        ]);
    }
    exit;
} else {
    // Return a friendly HTML confirmation page for regular form posts
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Inquiry Received — <?php echo htmlspecialchars(COMPANY_NAME); ?></title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-[#FAF6F0] min-h-screen flex items-center justify-center p-4 font-sans text-stone-800">
      <div class="max-w-md w-full bg-white rounded-2xl p-8 border border-[#E8DFD3] shadow-xl text-center space-y-4">
        <div class="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 class="text-2xl font-bold uppercase tracking-tight text-stone-900">Inquiry Received!</h2>
        <div class="inline-block px-3 py-1 bg-stone-100 rounded-lg text-xs font-mono font-bold text-[#EA580C] border border-stone-200">
          Ref: #<?php echo htmlspecialchars($refCode); ?>
        </div>

        <?php if ($result['success']): ?>
          <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs">
            Dispatched via <strong>Gmail SMTP</strong> to our booking concierge!
          </div>
        <?php else: ?>
          <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 text-xs text-left">
            Inquiry registered. (Note: Add your <code>GMAIL_USER</code> and <code>GMAIL_APP_PASSWORD</code> in <code>php/config.php</code> to deliver live emails).
          </div>
        <?php endif; ?>

        <p class="text-sm text-stone-600">
          Thank you, <strong><?php echo htmlspecialchars($name); ?></strong>. Our tour manager will contact you at <strong><?php echo htmlspecialchars($phone); ?></strong> within 15 minutes with complete route and pricing details.
        </p>

        <div class="pt-4 flex flex-col sm:flex-row gap-2">
          <a href="<?php echo $whatsAppUrl; ?>" target="_blank" class="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-xs uppercase tracking-wider transition">
            Chat on WhatsApp
          </a>
          <a href="index.php" class="flex-1 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition">
            Back to Home
          </a>
        </div>
      </div>
    </body>
    </html>
    <?php
    exit;
}
