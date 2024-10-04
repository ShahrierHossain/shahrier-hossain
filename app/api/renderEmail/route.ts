// app/api/renderEmail/route.ts

import { NextResponse } from 'next/server';
import ContactFormEmail from '@/email/contact-form-email';

function renderEmailContent(message: string, senderEmail: string) {
  return `
    <html>
      <body>
        <h2>Contact Form Message</h2>
        <p>Message: ${message}</p>
        <p>From: ${senderEmail}</p>
      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  const { message, senderEmail } = await request.json();
  const emailContent = renderEmailContent(message, senderEmail);

  return NextResponse.json({ emailContent });
}
