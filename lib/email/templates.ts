import { CONTACT_PHONE, SITE_URL } from "@/lib/email/constants";
import { ctaButton, detailRow, emailShell, escapeHtml, paragraph, sectionLabel } from "@/lib/email/layout";

type EmailPayload = { subject: string; html: string };

export function contactAdminEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): EmailPayload {
  const subject = `New contact message: ${data.subject || "General enquiry"}`;
  const body = `
    ${paragraph("You&rsquo;ve received a new message from the contact form.")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailRow("Name", escapeHtml(data.name))}
      ${detailRow("Email", escapeHtml(data.email))}
      ${detailRow("Subject", escapeHtml(data.subject || "\u2014"))}
    </table>
    ${sectionLabel("Message")}
    <p style="margin:0; font-size:15px; line-height:1.7; color:#1a1c1b; white-space:pre-line;">${escapeHtml(data.message)}</p>
    ${ctaButton(`Reply to ${data.name.split(" ")[0]}`, `mailto:${data.email}`)}
  `;
  return { subject, html: emailShell(body, subject) };
}

export function contactUserEmail(data: { name: string }): EmailPayload {
  const subject = "We've received your message";
  const firstName = data.name.split(" ")[0];
  const body = `
    ${paragraph(`Hi ${escapeHtml(firstName)},`)}
    ${paragraph(
      "Thanks for reaching out to Learn With iKay. We&rsquo;ve received your message and typically reply within one working day."
    )}
    ${paragraph(`If your question is urgent, you can also reach us directly on WhatsApp at ${CONTACT_PHONE}.`)}
    ${ctaButton("Visit our website", SITE_URL)}
  `;
  return { subject, html: emailShell(body, subject) };
}

export function enrollAdminEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  linkedin?: string;
  program: string;
  experienceLevel: string;
  statement: string;
}): EmailPayload {
  const subject = `New application: ${data.firstName} ${data.lastName} \u2014 ${data.program}`;
  const body = `
    ${paragraph("A new programme application has been submitted.")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailRow("Name", escapeHtml(`${data.firstName} ${data.lastName}`))}
      ${detailRow("Email", escapeHtml(data.email))}
      ${data.linkedin ? detailRow("LinkedIn", escapeHtml(data.linkedin)) : ""}
      ${detailRow("Programme", escapeHtml(data.program))}
      ${detailRow("Experience level", escapeHtml(data.experienceLevel))}
    </table>
    ${sectionLabel("Statement of intent")}
    <p style="margin:0; font-size:15px; line-height:1.7; color:#1a1c1b; white-space:pre-line;">${escapeHtml(data.statement)}</p>
    ${ctaButton(`Reply to ${data.firstName}`, `mailto:${data.email}`)}
  `;
  return { subject, html: emailShell(body, subject) };
}

export function enrollUserEmail(data: { firstName: string; program: string }): EmailPayload {
  const subject = "Your application has been received";
  const body = `
    ${paragraph(`Hi ${escapeHtml(data.firstName)},`)}
    ${paragraph(
      `Thank you for applying to <strong>${escapeHtml(
        data.program
      )}</strong>. We&rsquo;ve received your application, and our team reviews new applications every Monday and Thursday.`
    )}
    ${paragraph(
      "Expect a short screening conversation within three working days. In the meantime, feel free to reply to this email with any questions."
    )}
    ${ctaButton("Explore our programmes", `${SITE_URL}/services`)}
  `;
  return { subject, html: emailShell(body, subject) };
}