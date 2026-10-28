import http from "http";
import { createApp } from "./app";
import { setupVite, serveStatic } from "./vite";

const app = createApp();

const server = http.createServer(app);


const isProd = process.env.NODE_ENV === "production";

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
