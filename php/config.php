<?php
/**
 * Satnam Voyages - Core PHP Configuration
 * Configure your Gmail SMTP credentials and contact details here.
 */

// 1. Gmail SMTP Credentials
// GMAIL_USER: Your full Gmail address (e.g., example@gmail.com)
define('GMAIL_USER', getenv('GMAIL_USER') ?: 'YOUR_GMAIL_ADDRESS@gmail.com');

// GMAIL_APP_PASSWORD: 16-character Google App Password (spaces will be automatically removed)
// Generate at: https://myaccount.google.com/apppasswords (Requires 2-Step Verification ON)
define('GMAIL_APP_PASSWORD', getenv('GMAIL_APP_PASSWORD') ?: 'YOUR_16_CHAR_APP_PASSWORD');

// 2. Notification Recipient
// RECEIVER_EMAIL: Inbox where customer inquiry notifications should arrive (defaults to GMAIL_USER)
define('RECEIVER_EMAIL', getenv('CONTACT_RECEIVER_EMAIL') ?: GMAIL_USER);

// 3. Company & Concierge Details
define('COMPANY_NAME', 'Satnam Voyages');
define('COMPANY_PHONE', '+91 98117 76525');
define('WHATSAPP_NUMBER', '919811776525');
define('COMPANY_EMAIL', 'info@satnamvoyages.com');
define('WEBSITE_URL', 'https://satnamvoyages.com');

// 4. Debugging & Error Reporting (Set to false in production)
define('SMTP_DEBUG', false);
