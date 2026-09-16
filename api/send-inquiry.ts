import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

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
      pass: pass.trim().replace(/\s+/g, ''),
    },
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

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

    // Send a thank-you confirmation email to the client, if they gave a valid email
    if (email && email.includes('@')) {
      try {
        const thankYouHtml = `
          <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF6F0; border: 1px solid #E8DFD3; border-radius: 12px; overflow: hidden;">
            <div style="background-color: #141210; color: #ffffff; padding: 24px 20px; text-align: center; border-bottom: 3px solid #EA580C;">
              <h1 style="margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px; color: #FFFFFF;">Satnam Voyages</h1>
              <p style="margin: 6px 0 0 0; color: #FDBA74; font-size: 13px; font-weight: 600;">THANK YOU FOR YOUR INQUIRY</p>
            </div>
            <div style="padding: 24px;">
              <p style="font-size: 15px; color: #1C1917;">Hi ${name},</p>
              <p style="font-size: 14px; color: #374151; line-height: 1.6;">
                Thank you for reaching out to <strong>Satnam Voyages</strong>! We've received your inquiry and our tour manager will contact you at <strong>${phone}</strong> within 15 minutes with your custom quote and itinerary details.
              </p>
              <div style="background-color: #ffffff; border-radius: 8px; padding: 16px; margin: 20px 0; border: 1px solid #E8DFD3;">
                <p style="margin: 0 0 8px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; font-weight: bold;">Your Booking Reference</p>
                <p style="margin: 0; font-size: 18px; font-weight: bold; color: #EA580C; font-family: monospace;">#${inquiryRef}</p>
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr style="border-bottom: 1px solid #E5E7EB;">
                  <td style="padding: 10px 0; color: #6B7280; font-weight: 600; width: 40%;">Package / Circuit:</td>
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
              </table>
              <p style="font-size: 13px; color: #6B7280; margin-top: 20px;">
                Need to reach us sooner? Reply to this email or message us directly on WhatsApp.
              </p>
              <div style="margin-top: 16px; text-align: center;">
                <a href="https://wa.me/919718450905" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; font-size: 13px;">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div style="background-color: #1C1917; color: #9CA3AF; padding: 14px; text-align: center; font-size: 12px;">
              Satnam Voyages • <a href="https://satnamvoyages.com" style="color: #EA580C; text-decoration: none;">satnamvoyages.com</a>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Satnam Voyages" <${senderEmail}>`,
          to: email.trim(),
          replyTo: recipientEmail,
          subject: `We've received your inquiry! [Ref #${inquiryRef}] - Satnam Voyages`,
          text: `Hi ${name},\n\nThank you for reaching out to Satnam Voyages! We've received your inquiry and our tour manager will contact you at ${phone} within 15 minutes.\n\nBooking Reference: #${inquiryRef}\nPackage: ${packageName}\nTravel Date: ${travelDate || 'Flexible'}\nTravelers: ${guestCount}\n\nNeed to reach us sooner? Reply to this email or WhatsApp us at +91 97184 50905.`,
          html: thankYouHtml,
        });
        console.log('Thank-you email sent to client:', email);
      } catch (thankYouError: any) {
        // Don't fail the whole request if just the client confirmation email fails
        console.error('Failed to send thank-you email to client:', thankYouError.message || thankYouError);
      }
    }

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
}