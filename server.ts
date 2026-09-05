import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper to construct Gmail SMTP Transporter
function getTransporter() {
  const user = process.env.GMAIL_USER || process.env.GMAIL_EMAIL;
  const pass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS || process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user.trim(),
      pass: pass.trim().replace(/\s+/g, ''), // Google 16-character app passwords often contain spaces
    },
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  const configured = Boolean(
    (process.env.GMAIL_USER || process.env.GMAIL_EMAIL) &&
    (process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS || process.env.SMTP_PASSWORD)
  );
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    gmailConfigured: configured,
  });
});

// API endpoints to handle booking inquiries & contact forms via Gmail SMTP
// Supports both modern React (/api/send-inquiry) and Core PHP (send-inquiry.php) paths
app.post(['/api/send-inquiry', '/send-inquiry.php', '/php/send-inquiry.php'], async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      travelDate,
      travelers,
      adults,
      children,
      serviceChoice,
      tourTitle,
      vehicleChoice,
      vehicle,
      tier,
      pickupLocation,
      specialRequests,
      notes,
      refCode,
      source = 'Website Form',
    } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Name and phone number are required.',
      });
    }

    const packageName = tourTitle || serviceChoice || 'Custom India Tour Inquiry';
    const chosenVehicle = vehicle || vehicleChoice || 'Not specified';
    const chosenTier = tier || 'Standard / Deluxe';
    const guestCount = travelers || (adults ? `${adults} Adults${children ? `, ${children} Children` : ''}` : '2 Pax');
    const inquiryRef = refCode || `SV-${Date.now().toString().slice(-6)}`;
    const userComments = specialRequests || notes || 'None specified';

    const transporter = getTransporter();

    // If credentials are not yet added to environment variables
    if (!transporter) {
      console.warn('Gmail SMTP credentials not configured (GMAIL_USER or GMAIL_APP_PASSWORD missing).');
      return res.status(200).json({
        success: true,
        emailSent: false,
        warning: 'GMAIL_USER and GMAIL_APP_PASSWORD not configured in environment variables. Form received locally.',
        refCode: inquiryRef,
      });
    }

    const senderEmail = (process.env.GMAIL_USER || process.env.GMAIL_EMAIL)!.trim();
    const recipientEmail = (process.env.CONTACT_RECEIVER_EMAIL || senderEmail).trim();

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF6F0; border: 1px solid #E8DFD3; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #141210; color: #ffffff; padding: 24px 20px; text-align: center; border-bottom: 3px solid #EA580C;">
          <h1 style="margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px; color: #FFFFFF;">Satnam Voyages</h1>
          <p style="margin: 6px 0 0 0; color: #FDBA74; font-size: 13px; font-weight: 600;">NEW TRIP INQUIRY & BOOKING REQUEST</p>
        </div>

        <div style="padding: 24px;">
          <div style="background-color: #ffffff; border-radius: 8px; padding: 16px; margin-bottom: 20px; border: 1px solid #E8DFD3;">
            <p style="margin: 0 0 8px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; font-weight: bold;">Booking Reference</p>
            <p style="margin: 0; font-size: 18px; font-weight: bold; color: #EA580C; font-family: monospace;">#${inquiryRef}</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px 0; color: #6B7280; font-weight: 600; width: 40%;">Lead Traveler:</td>
              <td style="padding: 10px 0; color: #111827; font-weight: bold;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px 0; color: #6B7280; font-weight: 600;">Phone / WhatsApp:</td>
              <td style="padding: 10px 0; color: #111827; font-weight: bold;"><a href="tel:${phone}" style="color: #EA580C; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px 0; color: #6B7280; font-weight: 600;">Email:</td>
              <td style="padding: 10px 0; color: #111827;">${email ? `<a href="mailto:${email}" style="color: #2563EB;">${email}</a>` : 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px 0; color: #6B7280; font-weight: 600;">Package / Circuit:</td>
              <td style="padding: 10px 0; color: #111827; font-weight: bold;">${packageName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px 0; color: #6B7280; font-weight: 600;">Travel Date:</td>
              <td style="padding: 10px 0; color: #111827;">${travelDate || 'Flexible / To be confirmed'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px 0; color: #6B7280; font-weight: 600;">Travelers:</td>
              <td style="padding: 10px 0; color: #111827;">${guestCount}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px 0; color: #6B7280; font-weight: 600;">Vehicle Preference:</td>
              <td style="padding: 10px 0; color: #111827;">${chosenVehicle}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px 0; color: #6B7280; font-weight: 600;">Hotel Tier:</td>
              <td style="padding: 10px 0; color: #111827;">${chosenTier}</td>
            </tr>
            ${pickupLocation ? `
            <tr style="border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px 0; color: #6B7280; font-weight: 600;">Pickup Location:</td>
              <td style="padding: 10px 0; color: #111827;">${pickupLocation}</td>
            </tr>` : ''}
            <tr style="border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px 0; color: #6B7280; font-weight: 600;">Source Form:</td>
              <td style="padding: 10px 0; color: #6B7280;">${source}</td>
            </tr>
          </table>

          <div style="margin-top: 16px; padding: 14px; background-color: #ffffff; border-radius: 8px; border: 1px solid #E8DFD3;">
            <p style="margin: 0 0 6px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; font-weight: bold;">Special Notes / Custom Requests:</p>
            <p style="margin: 0; font-size: 14px; color: #374151; white-space: pre-wrap;">${userComments}</p>
          </div>

          <div style="margin-top: 20px; text-align: center;">
            <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; font-size: 13px;">
              Chat on WhatsApp with Traveler
            </a>
          </div>
        </div>

        <div style="background-color: #1C1917; color: #9CA3AF; padding: 14px; text-align: center; font-size: 12px;">
          Sent automatically by Satnam Voyages Booking Portal • <a href="https://satnamvoyages.com" style="color: #EA580C; text-decoration: none;">satnamvoyages.com</a>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Satnam Voyages" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email && email.includes('@') ? email : senderEmail,
      subject: `[New Inquiry #${inquiryRef}] ${packageName} - ${name}`,
      text: `New Booking Inquiry from ${name} (${phone})\nPackage: ${packageName}\nDate: ${travelDate || 'Flexible'}\nGuests: ${guestCount}\nVehicle: ${chosenVehicle}\nNotes: ${userComments}\nRef: #${inquiryRef}`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return res.status(200).json({
      success: true,
      emailSent: true,
      messageId: info.messageId,
      refCode: inquiryRef,
    });
  } catch (error: any) {
    console.error('Error sending email via Nodemailer:', error);
    return res.status(500).json({
      success: false,
      emailSent: false,
      error: error.message || 'Failed to send inquiry email via Gmail SMTP.',
    });
  }
});

// Start server with Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Satnam Voyages server running on port ${PORT}`);
  });
}

startServer();
