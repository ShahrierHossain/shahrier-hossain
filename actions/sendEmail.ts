'use server';

import nodemailer from 'nodemailer';
import { validateString, getErrorMessage } from '@/lib/utils';

const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
const smtpService = process.env.SMTP_SERVICE; // e.g., 'gmail' (optional)
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASSWORD;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const defaultFrom = process.env.SMTP_FROM || `<${smtpUser || 'hossainshahrier.sh@gmail.com'}>`;

if (!smtpUser || !smtpPass) {
  throw new Error('SMTP credentials must be defined in environment variables');
}

if (!siteUrl) {
  throw new Error('NEXT_PUBLIC_SITE_URL must be defined in environment variables');
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  service: smtpService, 
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail') as string;
  const message = formData.get('message') as string;

  // Simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return { error: 'Invalid sender email' };
  }
  if (!validateString(message, 5000)) {
    return { error: 'Invalid message' };
  }

  // Fetch rendered HTML from the API route
  let emailContent;
  try {
    const response = await fetch(`${siteUrl}/api/renderEmail`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, senderEmail }),
    });
    const result = await response.json();
    emailContent = result.emailContent;
  } catch (error) {
    return { error: 'Failed to render email content' };
  }

  const mailOptions = {
    from: defaultFrom,
    to: "shahrierhossain2025@gmail.com",
    subject: 'New message from Shahrier Hossain Contact Form',
    html: emailContent,
    replyTo: senderEmail,
  };

  let data;
  try {
    data = await transporter.sendMail(mailOptions);
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
