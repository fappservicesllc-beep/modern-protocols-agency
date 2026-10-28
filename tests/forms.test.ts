import assert from "node:assert/strict";
import { once } from "node:events";
import { randomUUID } from "node:crypto";
import { test } from "node:test";
import pg from "pg";
import { createApp } from "../server/app";

test("forms persist in PostgreSQL and records stay private", async (t) => {
  assert.ok(process.env.DATABASE_URL, "Use a dedicated test DATABASE_URL and run db:migrate first");
  assert.ok(!process.env.RESEND_API_KEY, "Unset RESEND_API_KEY so tests never send real email");
  const token = randomUUID();
  process.env.ADMIN_API_TOKEN = token;
  const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  const server = createApp().listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  assert.ok(address && typeof address !== "string");
  const origin = `http://127.0.0.1:${address.port}`;
  const email = `migration-${randomUUID()}@example.test`;
  const inquiry = {
    name: "Migration Test", email, brand: "Example Business",
    service: "Website Creation", budget: "$5k – $15k",
    message: "Please preserve this complete inquiry.",
  };
  const request = (path: string, body?: unknown, adminToken?: string) => fetch(origin + path, {
    method: body ? "POST" : "GET",
    headers: { "Content-Type": "application/json", ...(adminToken ? { Authorization: `Bearer ${adminToken}` } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  try {
    await t.test("rejects invalid contact data without storing it", async () => {
      const response = await request("/api/inquiries", { ...inquiry, email: "invalid" });
      assert.equal(response.status, 400);
    });
    await t.test("stores every contact field and a database timestamp", async () => {
      const response = await request("/api/inquiries", inquiry);
      assert.equal(response.status, 201);
      const saved = await response.json();
      for (const [key, value] of Object.entries(inquiry)) assert.equal(saved[key], value);
      assert.ok(Number.isInteger(saved.id));
      assert.ok(Number.isFinite(Date.parse(saved.createdAt)));
      const rows = await client.query("SELECT * FROM inquiries WHERE email = $1", [email]);
      assert.equal(rows.rowCount, 1);
      assert.equal(rows.rows[0].message, inquiry.message);
      assert.equal(rows.rows[0].brand, inquiry.brand);
      assert.ok(rows.rows[0].created_at instanceof Date);
    });
    await t.test("protects both record lists and permits authorized retrieval", async () => {
      for (const path of ["/api/inquiries", "/api/subscribers"]) {
        for (const badToken of [undefined, "wrong-token"]) {
          const denied = await request(path, undefined, badToken);
          assert.equal(denied.status, 401);
          assert.equal(denied.headers.get("cache-control"), "no-store");
          assert.deepEqual(await denied.json(), { error: "Unauthorized" });
        }
      }
      const allowed = await request("/api/inquiries", undefined, token);
      assert.equal(allowed.status, 200);
      assert.ok((await allowed.json()).some((row: { email: string }) => row.email === email));
      delete process.env.ADMIN_API_TOKEN;
      assert.equal((await request("/api/inquiries", undefined, token)).status, 503);
      process.env.ADMIN_API_TOKEN = token;
    });
    await t.test("newsletter and popup data persist; duplicate email updates one record", async () => {
      assert.equal((await request("/api/subscribers", { firstName: "A", email, businessType: "Other" })).status, 400);
      let original: { id: number; createdAt: string } | undefined;
      for (const firstName of ["Newsletter Test", "Popup Test"]) {
        const response = await request("/api/subscribers", { firstName, email, businessType: "Real Estate" });
        assert.equal(response.status, 201);
        const saved = await response.json();
        assert.equal(saved.firstName, firstName);
        if (original) {
          assert.equal(saved.id, original.id);
          assert.equal(saved.createdAt, original.createdAt);
        }
        original = saved;
      }
      const rows = await client.query("SELECT * FROM subscribers WHERE email = $1", [email]);
      assert.equal(rows.rowCount, 1);
      assert.equal(rows.rows[0].first_name, "Popup Test");
      const response = await request("/api/subscribers", undefined, token);
      assert.ok((await response.json()).some((row: { email: string }) => row.email === email));
    });
    await t.test("unknown API routes return JSON 404", async () => {
      const response = await request("/api/missing");
      assert.equal(response.status, 404);
      assert.deepEqual(await response.json(), { error: "Not found" });
    });
    await t.test("Netlify handler accepts rewritten paths and saves to the same database", async () => {
      const { handler } = await import("../netlify/functions/api");
      for (const path of ["/api/health", "/.netlify/functions/api/api/health"]) {
        const response = await handler({ path, httpMethod: "GET", headers: {}, body: null }, {});
        assert.equal(response.statusCode, 200);
        assert.deepEqual(JSON.parse(response.body), { status: "ok" });
      }
      const response = await handler({
        path: "/.netlify/functions/api/api/inquiries", httpMethod: "POST",
        headers: { "content-type": "application/json" }, body: JSON.stringify(inquiry),
      }, {});
      assert.equal(response.statusCode, 201);
      assert.equal(JSON.parse(response.body).brand, inquiry.brand);
      const denied = await handler({
        path: "/.netlify/functions/api/api/inquiries", httpMethod: "GET", headers: {}, body: null,
      }, {});
      assert.equal(denied.statusCode, 401);
    });
  } finally {
    await client.query("DELETE FROM inquiries WHERE email = $1", [email]);
    await client.query("DELETE FROM subscribers WHERE email = $1", [email]);
    await client.end();
    server.closeAllConnections();
    await new Promise<void>((resolve) => server.close(() => resolve()));
    // Drizzle's application pool otherwise keeps the test process alive.
    const { closeDb } = await import("../server/db");
    await closeDb();
    delete process.env.ADMIN_API_TOKEN;
  }
});
