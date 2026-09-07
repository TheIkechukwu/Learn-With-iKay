import { CONTACT_PHONE } from "@/lib/email/constants";

export function emailShell(bodyHtml: string, previewText: string): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Learn With iKay</title>
  </head>
  <body style="margin:0; padding:0; background-color:#faf9f7; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <span style="display:none; font-size:1px; color:#faf9f7; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden;">
      ${previewText}
    </span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#faf9f7; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e3e2e0;">
            <tr>
              <td style="background-color:#1b3b2f; padding:26px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                  
                    <td style="padding-left:10px; vertical-align:middle;">
                      <span style="color:#ffffff; font-size:16px; font-weight:700;">Learn With iKay</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="background-color:#f4f4f1; padding:20px 32px; border-top:1px solid #e3e2e0;">
                <p style="margin:0; font-size:12px; color:#727974; line-height:1.6;">
                  Learn With iKay &middot; Academic Precision in Data Science Education<br />
                  hello@learnwithikay.com &middot; ${CONTACT_PHONE}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function detailRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 0; border-bottom:1px solid #eeeeeb; font-size:11.5px; font-weight:600; letter-spacing:0.05em; text-transform:uppercase; color:#727974; width:140px; vertical-align:top;">${label}</td>
      <td style="padding:10px 0; border-bottom:1px solid #eeeeeb; font-size:14.5px; color:#1a1c1b; vertical-align:top;">${value}</td>
    </tr>`;
}

export function ctaButton(label: string, href: string): string {
  return `<a href="${href}" style="display:inline-block; margin-top:22px; padding:12px 26px; background-color:#c9e265; color:#03251a; font-weight:700; font-size:14px; text-decoration:none; border-radius:999px;">${label}</a>`;
}

export function sectionLabel(text: string): string {
  return `<p style="margin:22px 0 6px; font-size:11.5px; font-weight:600; letter-spacing:0.05em; text-transform:uppercase; color:#727974;">${text}</p>`;
}

export function paragraph(text: string): string {
  return `<p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:#414844;">${text}</p>`;
}

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}