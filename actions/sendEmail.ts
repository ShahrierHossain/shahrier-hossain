'use server';

import mailgun from 'mailgun-js';
import { validateString, getErrorMessage } from '@/lib/utils';

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;

if (!apiKey || !domain) {
  throw new Error(
    'Mailgun API key and domain must be defined in environment variables'
  );
}

const mg = mailgun({ apiKey: apiKey, domain: domain });

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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/renderEmail`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, senderEmail }),
      }
    );
    const result = await response.json();
    emailContent = result.emailContent;
  } catch (error) {
    return { error: 'Failed to render email content' };
  }

  const emailData = {
    from: 'Contact Form <onboarding@your-domain.com>',
    to: 'hossainshahrier.sh@gmail.com',
    subject: 'Message from contact form',
    html: emailContent,
    'h:Reply-To': senderEmail,
  };

  let data;
  try {
    data = await mg.messages().send(emailData);
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
