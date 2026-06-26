import type { Express } from "express";
import type { Server } from "http";
import express from "express";
import path from "path";
import fs from "fs";

export async function setupVite(app: Express, server: Server) {
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
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "..", "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "..", "shared"),
      },
    },
    root: path.resolve(import.meta.dirname, "..", "client"),
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: true,
    },
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    if (url.startsWith("/api")) return next();
    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "..", "dist", "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(`Could not find build dir: ${distPath}`);
  }
  app.use(express.static(distPath));
  app.use("*", (req, res, next) => {
    if (req.originalUrl.startsWith("/api")) return next();
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
