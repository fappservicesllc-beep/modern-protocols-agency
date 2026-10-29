# Submission storage

The website uses Netlify Database (managed PostgreSQL) through the Drizzle adapter. Netlify provisions the connection and applies the SQL in `netlify/database/migrations/` during deployment. No manually configured `DATABASE_URL` is required. Preview deployments use isolated database branches; production uses the main database.

Contact submissions use `POST /api/inquiries`. Newsletter subscriptions use `POST /api/newsletter` with an email field. The server assigns IDs and creation timestamps. Duplicate normalized newsletter email addresses do not create duplicate records. Email notifications are optional and failures do not prevent contact storage.

Set `ADMIN_API_TOKEN` directly in Netlify environment settings to a random secret of at least 32 characters, available to Functions in production and deploy-preview contexts. Never include it in source code, a URL, or client JavaScript. Set optional `RESEND_API_KEY` there too. Redeploy after configuration changes.

Private retrieval uses GET on each submission endpoint with an Authorization header using the Bearer scheme. Missing configuration disables retrieval; missing or incorrect credentials are rejected. Responses are marked no-store. Both endpoints support `limit` (1–500, default 100) and `offset` (default 0) for pagination. Keep the token in a trusted server or API client.

## Verification after deployment

Submit a contact inquiry and newsletter signup with clearly labeled test data. Retrieve each through an authenticated API client and confirm the generated ID and timestamp. Check that absent and incorrect credentials cannot retrieve either collection. Confirm storage still works without optional email notifications. Repeat against production after publishing: preview records do not move into production automatically.

## Historical records

The repository contains schema definitions, not historical submission records. Keep the original database and site intact until a data-only export is available. Import approved records into the production database through a trusted administrative connection, preserving original IDs and timestamps and matching the inquiry columns in `db/schema.ts`. Reconcile newsletter email casing and duplicates before importing, reset serial sequences after preserving IDs, and compare source/destination counts and timestamp ranges. Do not run the old schema export over the newly managed database. No historical import has been performed.

## Set up the admin secret in Netlify

1. Open https://app.netlify.com/projects/modern-protocol-agency and go to Project configuration → Environment variables.
2. Select Add a variable → Add a single variable. Use the key `ADMIN_API_TOKEN`.
3. Generate a random secret using a trusted password manager (at least 32 characters) and paste it directly into Netlify. Keep a copy in the password manager for your private API client. Do not paste it into chat or commit it to the repository.
4. Mark it as containing secret values if that option is available. Include the Functions scope and both Production and Deploy Previews contexts. If scope selection is unavailable, use the available scope that includes Functions.
5. Save the variable. Deploy the updated code to the preview; setting a variable alone does not update an existing deploy. Once preview storage and access checks pass, publish the code to production and repeat the checks there.

The database adapter receives its managed connection from Netlify automatically. Adding an external `DATABASE_URL` is not required by this implementation and does not replace deployment of the new function and migration.
