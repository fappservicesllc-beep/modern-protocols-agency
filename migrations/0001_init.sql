-- The Modern Protocols — initial database schema
-- Run this once against a fresh PostgreSQL database before starting the app.
--   psql "$DATABASE_URL" -f migrations/0001_init.sql
--
-- Alternatively, with the repo installed you can run:  npm run db:push
-- (drizzle-kit reads shared/schema.ts and syncs the database automatically)

CREATE TABLE IF NOT EXISTS inquiries (
  id          serial PRIMARY KEY,
  name        text NOT NULL,
  email       text NOT NULL,
  brand       text NOT NULL,
  service     text NOT NULL,
  budget      text NOT NULL,
  message     text NOT NULL,
  created_at  timestamp NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS subscribers (
  id             serial PRIMARY KEY,
  first_name     text NOT NULL,
  email          text NOT NULL UNIQUE,
  business_type  text NOT NULL,
  created_at     timestamp NOT NULL DEFAULT now()
);
