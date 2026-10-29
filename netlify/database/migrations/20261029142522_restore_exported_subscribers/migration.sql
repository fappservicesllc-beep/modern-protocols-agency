CREATE TABLE "subscribers" (
	"id" serial PRIMARY KEY,
	"first_name" text NOT NULL,
	"email" text NOT NULL UNIQUE,
	"business_type" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
