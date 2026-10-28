# The Modern Protocols

Migration of the latest HeyLloyd ZIP export for `web.themodernprotocols.com`.
The exported English/Spanish pages, visual design, copy, assets, contact form,
newsletter section, and popup are preserved. There is no HeyLloyd runtime or
GoHighLevel integration. See [MIGRATION.md](MIGRATION.md) for the comparison and
production cutover requirements.

## Stack and data ownership

React 18, TypeScript, Vite 5, Tailwind 3, wouter, and TanStack Query on the client;
Express 4 on Node.js; PostgreSQL through Drizzle ORM and `pg` on the server.
The same Express API runs on a Node host or in the included Netlify Function.
A static-only upload is insufficient: the forms require the API and database.

- Contact: `POST /api/inquiries` validates and saves `name`, `email`, `brand`
  (company/business), `service`, `budget`, and `message` to `inquiries`.
- Newsletter and popup: `POST /api/subscribers` saves `firstName`, `email`, and
  `businessType` to `subscribers`. Repeated exact email addresses update that
  subscriber instead of adding another row; their original timestamp is retained.
- Both tables have a generated ID and database-generated `created_at` timestamp.
- A submission returns 201 only after its database write succeeds. Invalid data
  returns 400; failed persistence returns 500. Optional email failure does not
  undo a saved record. No form data is forwarded to a CRM or third-party form service.
- `GET /api/inquiries` and `GET /api/subscribers` retrieve records newest first.
  They require `Authorization: Bearer <ADMIN_API_TOKEN>`. A missing configuration
  returns 503, and a missing/wrong token returns 401. Lists are not publicly cached.
  There is no new admin dashboard; use the authenticated API or database client.

## Local development

Use Node 24 (`.nvmrc`), npm, and a PostgreSQL database dedicated to this app.

```sh
npm ci
cp .env.example .env
# Fill in DATABASE_URL and a long random ADMIN_API_TOKEN locally.
# RESEND_API_KEY is optional; leave it unset for local testing.
npm run db:migrate
npm run dev
```

The default port is 5173. `npm run dev`, `npm start`, and `npm run db:migrate`
load `.env` using Node's native support. The test command reads the inherited
environment so it can target an explicitly selected test database.

```sh
npm run check
npm run build
# Use a disposable test database with the exported tables initialized;
# RESEND_API_KEY must be unset to prevent real notification emails.
DATABASE_URL='postgresql://...' npm test
npm start
```

Tests write temporary, unique `example.test` records and remove them afterward.
They exercise actual PostgreSQL storage, validation, retrieval authorization,
newsletter upserts, and the Netlify handler. Do not run them against production.

`npm run db:migrate` executes `migrations/0001_init.sql` in a transaction. Its
`CREATE TABLE IF NOT EXISTS` statements preserve existing rows and make repeated
setup safe on a compatible schema. It is not an upgrade engine for arbitrary older
schemas; inspect existing tables and back up production before applying changes.
Do not run automatic schema pushes against the old live database.

## Production with Netlify

`netlify.toml` builds `dist/public`, bundles `netlify/functions/api.ts` with esbuild,
and routes `/api/*` to the Express Function before the SPA fallback. `serverless-http`
is the only migration-specific runtime dependency. The Function does not call
`listen()` or load Vite. Netlify supplies the function runtime; it does not use
`npm start`.

1. Connect this repository and select the reviewed migration branch/commit.
2. Configure **server-side function environment** variables: `DATABASE_URL` and
   `ADMIN_API_TOKEN`; optionally `RESEND_API_KEY`. Never expose them as `VITE_*`.
3. Use a durable PostgreSQL database you control, reachable from the function.
   Prefer the provider's pooled connection URL and verified TLS configuration.
   Netlify Functions has no durable local filesystem for contact storage.
4. Run `npm run db:migrate` once against the target database from a trusted
   environment. Transfer historical data separately, then verify row counts.
   Database migration is deliberately not a build hook.
5. Verify a deploy preview: homepage/assets, both languages, contact, newsletter,
   popup, private retrieval, and records surviving a new function invocation.
   Verify Netlify's `/api/*` rewrite on the hosted preview; local handler tests
   cannot prove the hosted routing configuration has been applied.
6. Only after verification, connect `web.themodernprotocols.com`, configure DNS
   as Netlify instructs, and confirm TLS. Keep the old host/database until the
   record transfer and cutover are confirmed. No deployment or DNS changes have
   been made by this migration.

Alternatively, any Node host can run `npm ci`, `npm run build`, and `npm start`
with the same database and variables. Keep build dependencies until the build
finishes. Do not commit `node_modules`, `dist`, `.env`, or lead exports.

## Optional existing integrations

- **Resend:** notifications to `themodernprotocols@gmail.com`; default sender
  `onboarding@resend.dev`. Reconnect the key and verify sender permissions before
  enabling. The shared sandbox sender has recipient restrictions. Email delivery
  is not required for internal storage and is not verified by migration tests.
- **Meta Pixel:** existing ID `2879856492350769`, PageView and form conversion events
  retained. Verify ownership/domain and applicable consent configuration before
  deployment. Browser analytics are independent of successful database writes.
- **Google Fonts:** existing Cormorant Garamond, Inter, and JetBrains Mono requests
  to `fonts.googleapis.com`/`fonts.gstatic.com` retained.
- **Links:** Agent OS points to `realestate.themodernprotocols.com`; portfolio links
  point to erwinperezmedia.com, thelittleseamstress.com, and sexosentido.us. Confirm
  these destinations before launch.

All secrets belong in local ignored configuration or the host's environment
settings. Existing production records and credentials were not included in the ZIP.
