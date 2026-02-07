import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = 'mytajcy@gmail.com';

export type ContactBody = {
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  message: string;
};

function validateBody(body: unknown): body is ContactBody {
  if (!body || typeof body !== 'object') return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.fullName === 'string' &&
    b.fullName.trim().length > 0 &&
    typeof b.email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.message === 'string' &&
    b.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!validateBody(body)) {
      return NextResponse.json(
        { error: 'Invalid or missing fields: fullName, email, message required.' },
        { status: 400 }
      );
    }

    const { fullName, email, phoneCountryCode, phoneNumber, message } = body;
    // Vercel: set GMAIL_APP_PASSWORD and optionally GMAIL_USER in Project → Settings → Environment Variables (Production + Preview).
    const gmailUser = process.env.GMAIL_USER || RECIPIENT_EMAIL;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailAppPassword) {
      console.error('GMAIL_APP_PASSWORD is not set. Set in .env.local (local) or Vercel env vars (production).');
      return NextResponse.json(
        { error: 'Email is not configured. Please try again later.' },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const phoneDisplay =
      phoneNumber.trim() !== ''
        ? `${phoneCountryCode || ''} ${phoneNumber.trim()}`.trim()
        : '—';

    const html = `
      <h2>New inquiry from MyTajcy website</h2>
      <p><strong>Full name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phoneDisplay)}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
      <hr />
      <p style="color: #666; font-size: 12px;">Sent from the contact form on your website.</p>
    `;

    const text = [
      'New inquiry from MyTajcy website',
      '',
      `Full name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phoneDisplay}`,
      '',
      'Message:',
      message,
    ].join('\n');

    await transporter.sendMail({
      from: `"MyTajcy Website" <${gmailUser}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `[MyTajcy] Inquiry from ${fullName}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('Contact API error:', msg);
    // Invalid login / App Password issues show up in Vercel logs (e.g. "Invalid login")
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email directly.' },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
