var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";
import http from "http";

// server/routes.ts
import { Resend } from "resend";

// server/db.ts
import pkg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  inquiries: () => inquiries,
  insertInquirySchema: () => insertInquirySchema
});
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  brand: text("brand").notNull(),
  service: text("service").notNull(),
  budget: text("budget").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertInquirySchema = createInsertSchema(inquiries, {
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  brand: z.string().min(1, "Brand name required"),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget"),
  message: z.string().min(10, "Tell us a bit more (min 10 characters)")
}).omit({ id: true, createdAt: true });

// server/db.ts
var { Pool } = pkg;
var _pool = null;
var _db = null;
function getDb() {
  if (!_db) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set");
    }
    _pool = new Pool({ connectionString: process.env.DATABASE_URL });
    _db = drizzle(_pool, { schema: schema_exports });
  }
  return _db;
}

// server/storage.ts
import { desc } from "drizzle-orm";
var storage = {
  async createInquiry(data) {
    const db = getDb();
    const [row] = await db.insert(inquiries).values(data).returning();
    return row;
  },
  async listInquiries() {
    const db = getDb();
    return db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
  }
};

// server/routes.ts
import { ZodError } from "zod";
var INQUIRY_RECIPIENT = "themodernprotocols@gmail.com";
var resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
async function sendInquiryEmail(inquiry) {
  if (!resend) {
    console.warn("[inquiries] RESEND_API_KEY not set \u2014 skipping email");
    return;
  }
  const rows = [
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Brand", inquiry.brand ?? "\u2014"],
    ["Service Interest", inquiry.service ?? "\u2014"],
    ["Budget", inquiry.budget ?? "\u2014"],
    ["Message", inquiry.message],
    ["Submitted", new Date(inquiry.createdAt).toLocaleString("en-US", { timeZone: "America/New_York" }) + " ET"]
  ];
  const html = `
    <div style="font-family: Georgia, 'Times New Roman', serif; color:#0a0a0a; max-width:600px; margin:0 auto; padding:32px; background:#f5f5f0;">
      <div style="border-top:1px solid #c9a961; border-bottom:1px solid #c9a961; padding:24px 0; margin-bottom:24px;">
        <div style="font-size:11px; letter-spacing:0.3em; text-transform:uppercase; color:#c9a961; margin-bottom:8px;">The Modern Protocols</div>
        <div style="font-size:24px; font-weight:300;">New Inquiry</div>
      </div>
      <table style="width:100%; border-collapse:collapse;">
        ${rows.map(
    ([label, value]) => `
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #e5e5e0; vertical-align:top; width:140px; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:#c9a961;">${escapeHtml(label)}</td>
            <td style="padding:12px 0; border-bottom:1px solid #e5e5e0; font-size:14px; line-height:1.6; color:#0a0a0a; white-space:pre-wrap;">${escapeHtml(value)}</td>
          </tr>`
  ).join("")}
      </table>
    </div>
  `;
  const text2 = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  await resend.emails.send({
    from: "The Modern Protocols <onboarding@resend.dev>",
    to: INQUIRY_RECIPIENT,
    replyTo: inquiry.email,
    subject: `New Inquiry \u2014 ${inquiry.name}${inquiry.brand ? ` (${inquiry.brand})` : ""}`,
    html,
    text: text2
  });
}
function registerRoutes(app2) {
  app2.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });
  app2.post("/api/inquiries", async (req, res) => {
    try {
      const parsed = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(parsed);
      try {
        await sendInquiryEmail(inquiry);
      } catch (mailErr) {
        console.error("[inquiries] email send failed:", mailErr);
      }
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({ error: "Validation failed", details: err.flatten() });
      }
      console.error("[inquiries] error:", err);
      res.status(500).json({ error: "Failed to submit inquiry" });
    }
  });
  app2.get("/api/inquiries", async (_req, res) => {
    try {
      const all = await storage.listInquiries();
      res.json(all);
    } catch (err) {
      console.error("[inquiries] list error:", err);
      res.status(500).json({ error: "Failed to list inquiries" });
    }
  });
}

// server/vite.ts
import express from "express";
import path from "path";
import fs from "fs";
async function setupVite(app2, server2) {
  const { createServer: createViteServer, createLogger } = await import("vite");
  const { default: react } = await import("@vitejs/plugin-react");
  const logger = createLogger();
  const vite = await createViteServer({
    configFile: false,
    appType: "custom",
    customLogger: {
      ...logger,
      error: (msg, options) => {
        logger.error(msg, options);
      }
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "..", "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "..", "shared")
      }
    },
    root: path.resolve(import.meta.dirname, "..", "client"),
    server: {
      middlewareMode: true,
      hmr: { server: server2 },
      allowedHosts: true
    }
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    if (url.startsWith("/api")) return next();
    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path.resolve(import.meta.dirname, "..", "dist", "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(`Could not find build dir: ${distPath}`);
  }
  app2.use(express.static(distPath));
  app2.use("*", (req, res, next) => {
    if (req.originalUrl.startsWith("/api")) return next();
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json({ limit: "1mb" }));
var server = http.createServer(app);
registerRoutes(app);
var isProd = process.env.NODE_ENV === "production";
async function start() {
  if (isProd) {
    serveStatic(app);
  } else {
    await setupVite(app, server);
  }
  const port = Number(process.env.PORT) || 5173;
  server.listen(port, "0.0.0.0", () => {
    console.log(`[server] listening on http://0.0.0.0:${port}`);
  });
}
start().catch((err) => {
  console.error("[server] failed to start:", err);
  process.exit(1);
});
