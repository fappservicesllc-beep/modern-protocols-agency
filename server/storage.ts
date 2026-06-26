import { getDb } from "./db";
import { inquiries, type InsertInquiry, type Inquiry } from "@shared/schema";
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
