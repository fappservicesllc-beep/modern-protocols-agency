import { createHash, timingSafeEqual } from "node:crypto";
import type { RequestHandler } from "express";

// Contact records are private. Leave retrieval disabled until a server-only
// token is configured; never expose this token in frontend/VITE_ variables.
export const requireAdmin: RequestHandler = (req, res, next) => {
  const expected = process.env.ADMIN_API_TOKEN;
  res.set("Cache-Control", "no-store");
  if (!expected) {
    res.status(503).json({ error: "Record retrieval is not configured" });
    return;
  }
  const authorization = req.get("authorization") ?? "";
  const supplied = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
  const digest = (value: string) => createHash("sha256").update(value).digest();
  if (!supplied || !timingSafeEqual(digest(supplied), digest(expected))) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
};
