import type { Express } from "express";
import { handleSubmissions } from "./submissions.js";

export function registerRoutes(app: Express) {
  app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
  app.all(["/api/inquiries", "/api/newsletter"], async (req, res) => {
    const headers = new Headers();
    if (req.headers.authorization) headers.set("authorization", req.headers.authorization);
    headers.set("content-type", "application/json");
    const request = new Request(`http://localhost${req.originalUrl}`, {
      method: req.method,
      headers,
      ...(req.method === "POST" ? { body: JSON.stringify(req.body) } : {}),
    });
    const response = await handleSubmissions(request, name => process.env[name]);
    response.headers.forEach((value, key) => res.setHeader(key, value));
    res.status(response.status).send(await response.text());
  });
}
