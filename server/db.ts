import pkg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@shared/schema";

const { Pool } = pkg;

let _pool: pkg.Pool | null = null;
let _db: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (!_db) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set");
    }
    _pool = new Pool({ connectionString: process.env.DATABASE_URL });
    _db = drizzle(_pool, { schema });
  }
  return _db;
}
