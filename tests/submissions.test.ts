import { test } from "node:test";
import assert from "node:assert/strict";
import { handleSubmissions } from "../server/submissions.js";

const env = () => undefined;
test("retrieval fails closed when the admin token is missing", async () => {
  for (const path of ["inquiries", "newsletter"]) {
    const response = await handleSubmissions(new Request(`https://example.test/api/${path}`), env);
    assert.equal(response.status, 503);
    assert.equal(response.headers.get("cache-control"), "no-store");
  }
});
test("retrieval rejects absent and incorrect bearer credentials before querying", async () => {
  for (const path of ["inquiries", "newsletter"]) {
    for (const authorization of ["", "Bearer incorrect", "Basic incorrect"]) {
      const response = await handleSubmissions(new Request(`https://example.test/api/${path}`, { headers: { authorization } }), () => "test-only".repeat(8));
      assert.equal(response.status, 401);
    }
  }
});
test("short configured tokens do not enable retrieval", async () => {
  const response = await handleSubmissions(new Request("https://example.test/api/inquiries"), () => "short");
  assert.equal(response.status, 503);
});
test("invalid submissions cannot reach database writes", async () => {
  for (const path of ["inquiries", "newsletter"]) {
    for (const body of ["not-json", "{}", '{"email":"invalid"}']) {
      const response = await handleSubmissions(new Request(`https://example.test/api/${path}`, { method: "POST", body }), env);
      assert.equal(response.status, 400);
    }
  }
});
test("oversized submissions and unsupported methods are rejected", async () => {
  assert.equal((await handleSubmissions(new Request("https://example.test/api/inquiries", { method: "POST", body: "x".repeat(16001) }), env)).status, 413);
  const response = await handleSubmissions(new Request("https://example.test/api/newsletter", { method: "DELETE" }), env);
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("allow"), "GET, POST");
});
