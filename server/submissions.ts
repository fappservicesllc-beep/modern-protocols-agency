import { createHash, timingSafeEqual } from "node:crypto";
import { desc } from "drizzle-orm";
import { getDb } from "../db/index.js";
import { inquiries, newsletterSubscribers } from "../db/schema.js";
import { insertInquirySchema, insertNewsletterSchema } from "../shared/schema.js";
import { sendInquiryEmail } from "./email.js";

export async function handleSubmissions(request: Request, env: (name: string) => string | undefined) {
  const respond = (body: unknown, status = 200) => Response.json(body, {
    status, headers: { "Cache-Control": "no-store" },
  });
  const newsletter = new URL(request.url).pathname === "/api/newsletter";
  if (request.method === "GET") {
    const expected = env("ADMIN_API_TOKEN");
    if (!expected || expected.length < 32) return respond({ error: "Private retrieval is not configured" }, 503);
    const provided = request.headers.get("authorization")?.match(/^Bearer (.+)$/)?.[1] ?? "";
    const digest = (value: string) => createHash("sha256").update(value).digest();
    if (!provided || !timingSafeEqual(digest(provided), digest(expected))) return respond({ error: "Unauthorized" }, 401);
    try {
      const db = getDb();
      const rawLimit = Number(new URL(request.url).searchParams.get("limit") ?? 100);
      const limit = Number.isInteger(rawLimit) ? Math.max(1, Math.min(500, rawLimit)) : 100;
      const rawOffset = Number(new URL(request.url).searchParams.get("offset") ?? 0);
      const offset = Number.isSafeInteger(rawOffset) && rawOffset >= 0 ? rawOffset : 0;
      const rows = newsletter
        ? await db.select().from(newsletterSubscribers).orderBy(desc(newsletterSubscribers.createdAt), desc(newsletterSubscribers.id)).limit(limit).offset(offset)
        : await db.select().from(inquiries).orderBy(desc(inquiries.createdAt), desc(inquiries.id)).limit(limit).offset(offset);
      return respond(rows);
    } catch { return respond({ error: "Unable to retrieve submissions" }, 503); }
  }
  if (request.method !== "POST") return new Response("Method not allowed", { status: 405, headers: { Allow: "GET, POST" } });
  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > 16000) return respond({ error: "Submission too large" }, 413);
    body = JSON.parse(text);
  } catch { return respond({ error: "Invalid JSON" }, 400); }
  if (newsletter) {
    const parsed = insertNewsletterSchema.safeParse(body);
    if (!parsed.success) return respond({ error: "Valid email required" }, 400);
    try {
      await getDb().insert(newsletterSubscribers).values(parsed.data).onConflictDoNothing();
      return respond({ success: true }, 201);
    } catch { return respond({ error: "Unable to save subscription. Please try again." }, 503); }
  }
  const parsed = insertInquirySchema.safeParse(body);
  if (!parsed.success) return respond({ error: "Validation failed", details: parsed.error.flatten() }, 400);
  try {
    const [row] = await getDb().insert(inquiries).values(parsed.data).returning();
    try { await sendInquiryEmail(row, env("RESEND_API_KEY")); }
    catch { console.warn("Inquiry saved; email notification failed"); }
    return respond({ id: row.id, createdAt: row.createdAt }, 201);
  } catch { return respond({ error: "Unable to save inquiry. Please try again." }, 503); }
}
