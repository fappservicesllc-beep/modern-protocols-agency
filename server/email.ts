import { Resend } from "resend";
import type { Inquiry } from "../shared/schema.js";
const INQUIRY_RECIPIENT = "themodernprotocols@gmail.com";
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendInquiryEmail(inquiry: Inquiry, apiKey?: string) {
  const resend = apiKey ? new Resend(apiKey) : null;
  if (!resend) {
    console.warn("[inquiries] RESEND_API_KEY not set — skipping email");
    return;
  }
  const rows: Array<[string, string]> = [
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Brand", inquiry.brand ?? "—"],
    ["Service Interest", inquiry.service ?? "—"],
    ["Budget", inquiry.budget ?? "—"],
    ["Message", inquiry.message],
    ["Submitted", new Date(inquiry.createdAt).toLocaleString("en-US", { timeZone: "America/New_York" }) + " ET"],
  ];
  const html = `
    <div style="font-family: Georgia, 'Times New Roman', serif; color:#0a0a0a; max-width:600px; margin:0 auto; padding:32px; background:#f5f5f0;">
      <div style="border-top:1px solid #c9a961; border-bottom:1px solid #c9a961; padding:24px 0; margin-bottom:24px;">
        <div style="font-size:11px; letter-spacing:0.3em; text-transform:uppercase; color:#c9a961; margin-bottom:8px;">The Modern Protocols</div>
        <div style="font-size:24px; font-weight:300;">New Inquiry</div>
      </div>
      <table style="width:100%; border-collapse:collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #e5e5e0; vertical-align:top; width:140px; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:#c9a961;">${escapeHtml(label)}</td>
            <td style="padding:12px 0; border-bottom:1px solid #e5e5e0; font-size:14px; line-height:1.6; color:#0a0a0a; white-space:pre-wrap;">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  await resend.emails.send({
    from: "The Modern Protocols <onboarding@resend.dev>",
    to: INQUIRY_RECIPIENT,
    replyTo: inquiry.email,
    subject: `New Inquiry — ${inquiry.name}${inquiry.brand ? ` (${inquiry.brand})` : ""}`,
    html,
    text,
  });
}

