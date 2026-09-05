# Satnam Voyages — Core PHP Deployment Guide

This folder (`/php`) contains the complete **Core PHP** conversion of the Satnam Voyages website and Gmail SMTP booking engine.

## 🚀 Key Advantages of this Core PHP Version
1. **Zero External Dependencies**: Does **NOT** require Composer, Node.js, NPM, or third-party packages (like PHPMailer).
2. **Pure Native Gmail SMTP**: Uses standard PHP stream sockets (`smtp-mailer.php`) connecting directly to `smtp.gmail.com:587` with TLS encryption and Google AUTH LOGIN.
3. **100% Compatible with Any Shared Hosting**: Runs instantly on **cPanel**, **Hostinger**, **GoDaddy**, **Bluehost**, **Namecheap**, **Apache**, **Nginx**, and local **XAMPP / MAMP**.

---

## 📁 File Structure

- `index.php` — Full standalone homepage with hero banner, orange subheading, "Book Your Journey" button, dynamic tour circuits, fleet cards, and interactive inquiry modal.
- `config.php` — Central configuration file for your Gmail ID, Google App Password, receiver email, and company details.
- `smtp-mailer.php` — Pure Core PHP Gmail SMTP socket client with TLS negotiation and automatic whitespace stripping for 16-character Google App Passwords.
- `send-inquiry.php` — Production-grade form handler that receives JSON/AJAX or standard HTML POSTs, formats a branded HTML email, and sends it via Gmail SMTP.
- `tours-data.php` — PHP data arrays containing tour circuits, highlights, pricing, and vehicle tariffs.
- `.htaccess` — Apache security rules, GZIP compression, and config protection.

---

## ⚙️ How to Configure Your Gmail Credentials

1. Open `php/config.php` in any code or text editor (or via cPanel File Manager).
2. Update the two primary lines:
   ```php
   // Enter your full Gmail address
   define('GMAIL_USER', 'your-actual-email@gmail.com');

   // Enter your 16-character Google App Password (from https://myaccount.google.com/apppasswords)
   define('GMAIL_APP_PASSWORD', 'abcd efgh ijkl mnop');

   // (Optional) The email where you want to receive booking notices (defaults to GMAIL_USER)
   define('RECEIVER_EMAIL', 'reservations@satnamvoyages.com');
   ```

### How to generate a Google App Password:
1. Go to your [Google Account Security Settings](https://myaccount.google.com/security).
2. Make sure **2-Step Verification** is turned **ON**.
3. In the search bar at the top, type **"App passwords"** (or visit [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)).
4. Enter an app name (e.g., `Satnam Voyages PHP Website`) and click **Create**.
5. Google will display a 16-character password (e.g., `wxyz abcd efgh ijkl`). Copy and paste it into `config.php`.

---

## 🌐 How to Upload to Hosting (cPanel / Hostinger / GoDaddy / Apache)

1. Log in to your hosting control panel (cPanel, hPanel, etc.).
2. Open **File Manager** and navigate to your `public_html` directory (or your domain's document root).
3. Upload all files from the `php/` folder directly into `public_html`:
   - `index.php`
   - `config.php`
   - `smtp-mailer.php`
   - `send-inquiry.php`
   - `tours-data.php`
   - `.htaccess`
4. Open your domain (e.g. `https://yourdomain.com`) in your browser.
5. Submit a test booking inquiry — you will receive the notification instantly in your Gmail inbox with a reference code and direct WhatsApp link!
