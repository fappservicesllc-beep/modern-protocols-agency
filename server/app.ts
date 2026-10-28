import express from "express";
import { registerRoutes } from "./routes";

// Shared by the local Node server, Netlify Function, and integration tests.
export function createApp() {
  const app = express();
  app.disable("x-powered-by");
  app.use(express.json({ limit: "1mb" }));
  registerRoutes(app);
  app.use("/api", (_req, res) => {
    res.status(404).json({ error: "Not found" });
  });
  return app;
}
