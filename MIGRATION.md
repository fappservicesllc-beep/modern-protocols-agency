# ZIP migration record

## Source and comparison (October 28, 2026)

Source of truth: user-uploaded `the-modern-protocols.zip` (16,909,801 bytes).
Baseline repository commit: `ffea6fb73210fe6873f34d4f05667ec90ecfad25` (`launch`).
ZIP SHA-256: `a4548580f449857ca1c50dc5775de6d074704efca17c2a8bfa532492c8b231d4`.
The ZIP contains 66 project files, plus directories and macOS metadata. macOS
resource forks were excluded. No source came from the older build artifacts.

Excluding `.git`, tracked `node_modules`, and tracked `dist`, the comparison found
18 additions, 24 changes, and 24 byte-identical files. The dependency manifests
in the ZIP matched the baseline exactly. The changes below were explained in chat
before replacement or deletion. The original ZIP and a recoverable Git bundle
and file archive were kept outside the checkout in the current environment.

## Exported behavior preserved

The frontend, translations, styling, images, and video are copied unchanged from
the ZIP. This includes all three form placements (contact, newsletter, popup),
canonical English values behind translated labels, Meta Pixel helpers, and
external fonts. Contact fields and the exported PostgreSQL schema are unchanged.
The existing inquiries table is retained; the ZIP adds subscribers with a unique
email and upsert behavior. The database is ordinary PostgreSQL, not a proprietary
HeyLloyd storage API. Its hosted instance and records do not travel with the ZIP.

## Minimal migration changes beyond the ZIP

- Removed `server/ghl.ts` and all forwarding calls; no GHL fallback or configuration
  remains. Both inquiry and subscriber records are stored by the app itself.
- Protected both list APIs with a server-only bearer token. Existing public list
  APIs exposed personal records; private retrieval remains possible without a
  form redesign or a new third-party service.
- Extracted shared Express app initialization and added the Netlify adapter,
  `/api` routing, and JSON 404s. The Node development/production server remains.
- Added native `.env` loading, a Node version declaration, repeatable SQL migration
  command, and database-backed integration tests. Added pool cleanup for tests.
- Replaced exported documentation/environment examples that instructed users to
  reconnect GHL or suggested the unauthenticated record lists were acceptable.
- Removed stale HeyLloyd preview/editor files and old upload copies absent from
  the export. Removed dependency/build artifacts from Git tracking; installation
  and build regenerate ignored local artifacts.

## Production records and cutover

No production API was called, no personal records were downloaded, no real email
was sent, and no database or DNS deployment was performed. The ZIP README claims
historical records exist, but this has not been independently verified. Obtain a
secure backup/export from the old PostgreSQL host before retiring it. Restore into
the new database, preserve IDs/timestamps, reset serial sequences after import,
and compare row counts. Do not commit this backup. Keep the old service available
until a controlled final sync/cutover avoids losing submissions during migration.

Production still needs a durable DATABASE_URL, a private ADMIN_API_TOKEN, and
optional Resend configuration. Netlify adapter tests validate the handler locally;
a hosted deploy preview and provider connectivity must still be validated before
DNS cutover. No redesign is included or authorized for this phase.

## File comparison

### Added

- `.env.example`
- `.gitignore`
- `README.md`
- `client/public/agent-os-mockup.mp4`
- `client/public/real-estate-kit.png`
- `client/src/components/announcement-bar.tsx`
- `client/src/components/lang-toggle.tsx`
- `client/src/components/newsletter-popup.tsx`
- `client/src/components/newsletter.tsx`
- `client/src/components/real-estate.tsx`
- `client/src/components/sticky-magnet.tsx`
- `client/src/lib/i18n.tsx`
- `client/src/lib/pixel.ts`
- `client/src/lib/translations.ts`
- `migrations/0001_init.sql`
- `server/ghl.ts`

### Changed

- `client/index.html`
- `client/src/App.tsx`
- `client/src/components/about.tsx`
- `client/src/components/contact.tsx`
- `client/src/components/faq.tsx`
- `client/src/components/footer.tsx`
- `client/src/components/hero.tsx`
- `client/src/components/methodology.tsx`
- `client/src/components/nav.tsx`
- `client/src/components/problem.tsx`
- `client/src/components/results.tsx`
- `client/src/components/services.tsx`
- `client/src/components/testimonials.tsx`
- `client/src/components/who-its-for.tsx`
- `client/src/components/work.tsx`
- `client/src/index.css`
- `client/src/pages/home.tsx`
- `server/routes.ts`
- `server/storage.ts`
- `shared/schema.ts`
- `tailwind.config.ts`

### Unchanged

- `client/public/erwin-perez.png`
- `client/public/logo.png`
- `client/public/sexo-sentido.jpg`
- `client/public/sexo-sentido.png`
- `client/public/work/little-seamstress.png`
- `client/src/components/dashboard-mock.tsx`
- `client/src/components/process.tsx`
- `client/src/components/stats.tsx`
- `client/src/components/ui/toaster.tsx`
- `client/src/hooks/use-reveal.ts`
- `client/src/lib/queryClient.ts`
- `client/src/lib/utils.ts`
- `client/src/main.tsx`
- `components.json`
- `drizzle.config.ts`
- `package-lock.json`
- `package.json`
- `postcss.config.js`
- `server/db.ts`
- `server/index.ts`
- `server/vite.ts`
- `tsconfig.json`
- `vite.config.ts`

### Old Only

- `.heylloyd/ready`
- `.heylloyd/restart.log`
- `.lloyd-notes.md`
- `attached_assets/1b2edeb1-44a7-43d0-b691-e66e2a056d57-Bride_Image_1.png`
- `attached_assets/3a68551b-c3ac-4389-b29a-dfac8637870d-40340BBE-F8B9-488B-B8A5-2075935796A2.PNG`
- `attached_assets/40a2cb25-546e-438d-8547-34794a7da273-Logo_Final.png`
- `attached_assets/9cc738b9-ad97-4f59-a2f6-ded0557f1c43-Hero_Image.png`
- `attached_assets/a42707f0-6c6e-4bb1-b08c-f9a1defaa073-SEXO_SENTIDO_PODCAST_IG.JPG`
- `client/public/__heylloyd/picker.js`
- `client/public/__heylloyd/ready.js`
- `public/__heylloyd/picker.js`
- `public/__heylloyd/ready.js`

## Validation in this cloud instance

- Locked dependency installation, TypeScript check, and production build passed.
- Exported frontend and asset comparison: 42 files checked, zero differences.
- Seven database-backed test checks passed, including the Netlify handler and
  both original/rewritten request paths. No tests were skipped.
- SQL setup was executed repeatedly without losing existing schema/data.
- Development HTML, transformed React module, health, PNG assets, and MP4 served.
- Production HTML and bundled JS/CSS served; a record written in development was
  retrieved after restarting in production mode, then the fixture was removed.
- Anonymous record retrieval returned 401. Missing admin configuration and invalid
  submissions were tested separately.
- Netlify Function esbuild bundle succeeded. A hosted Netlify preview, real email,
  historical-data import, and production database access are not yet validated.
