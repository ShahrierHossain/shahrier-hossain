// lib/emailTemplates.ts

export default function renderContactFormEmail({
  message,
  senderEmail,
}: {
  message: string;
  senderEmail: string;
}) {
  return `
    <html>
      <body>
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${senderEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </body>
    </html>
  `;
}
