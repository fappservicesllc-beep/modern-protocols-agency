import { getDb } from "./db";
import type { InsertInquiry, Inquiry } from "@shared/schema";
import { inquiries } from "../db/schema.js";
import { desc } from "drizzle-orm";

export const storage = {
  async createInquiry(data: InsertInquiry): Promise<Inquiry> {
    const db = getDb();
    const [row] = await db.insert(inquiries).values(data).returning();
    return row;
  },
  async listInquiries(): Promise<Inquiry[]> {
    const db = getDb();
    return db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
  },
};
