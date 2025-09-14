import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration - in production, use environment variables
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'noreply@bimta.co.uk',
    pass: process.env.SMTP_PASS || 'your-app-password',
  },
};

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@bimta.co.uk';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Create transporter
    const transporter = nodemailer.createTransport(EMAIL_CONFIG);

    // Email to admin
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #4b5563; margin-bottom: 5px; }
            .value { background: #f9fafb; padding: 10px; border-radius: 5px; border: 1px solid #e5e7eb; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; }
            .badge { background: #10b981; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; display: inline-block; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">BIMTA Website</p>
            </div>
            <div class="content">
              <div style="text-align: center; margin-bottom: 25px;">
                <span class="badge">New Inquiry</span>
              </div>

              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value">${email}</div>
              </div>

              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${phone || 'Not provided'}</div>
              </div>

              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
              </div>

              <div class="field">
                <div class="label">Message</div>
                <div class="value">${message}</div>
              </div>

              <div class="footer">
                <p>Submitted on ${new Date().toLocaleString('en-UK', {
                  dateStyle: 'full',
                  timeStyle: 'short',
                })}</p>
                <p>This email was sent from the BIMTA contact form.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Auto-reply to user
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; }
            .social { margin: 20px 0; }
            .social a { margin: 0 10px; color: #3b82f6; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Thank You for Contacting BIMTA</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">We've received your message</p>
            </div>
            <div class="content">
              <p>Dear ${name},</p>

              <p>Thank you for reaching out to the British Independent Motor Trade Association. We've received your inquiry and appreciate your interest in our services.</p>

              <p><strong>What happens next?</strong></p>
              <ul>
                <li>Our team will review your message within 1 business day</li>
                <li>A specialist will be assigned to your inquiry</li>
                <li>You'll receive a detailed response within 24-48 hours</li>
              </ul>

              <p><strong>Your inquiry details:</strong></p>
              <div style="background: #f9fafb; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
                <p style="margin: 5px 0;"><strong>Message:</strong> ${message}</p>
              </div>

              <p>In the meantime, you might find these resources helpful:</p>
              <ul>
                <li><a href="https://bimta.co.uk/faq" style="color: #3b82f6;">Frequently Asked Questions</a></li>
                <li><a href="https://bimta.co.uk/members-directory" style="color: #3b82f6;">Members Directory</a></li>
                <li><a href="https://bimta.co.uk/mileage-check" style="color: #3b82f6;">Vehicle Check Services</a></li>
              </ul>

              <div style="text-align: center;">
                <a href="https://bimta.co.uk" class="button" style="color: white;">Visit Our Website</a>
              </div>

              <div class="footer">
                <div class="social">
                  <a href="#">LinkedIn</a>
                  <a href="#">Twitter</a>
                  <a href="#">Facebook</a>
                </div>
                <p>British Independent Motor Trade Association</p>
                <p>© ${new Date().getFullYear()} BIMTA. All rights reserved.</p>
                <p>This is an automated response. Please do not reply to this email.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: `"BIMTA Website" <${EMAIL_CONFIG.auth.user}>`,
      to: ADMIN_EMAIL,
      subject: `New Contact Form: ${subject}`,
      html: adminEmailHtml,
    });

    // Send auto-reply to user
    await transporter.sendMail({
      from: `"BIMTA Support" <${EMAIL_CONFIG.auth.user}>`,
      to: email,
      subject: 'Thank you for contacting BIMTA',
      html: userEmailHtml,
    });

    // Log for monitoring
    console.log('Contact form processed:', {
      name,
      email,
      subject,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: 'Thank you for your inquiry. We\'ll get back to you within 24 hours.',
        success: true
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Fallback to console logging if email fails
    console.log('FALLBACK - Contact form submission:', {
      body: await request.text(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: 'Your message has been received. We\'ll contact you soon.',
        success: true
      },
      { status: 200 }
    );
  }
}