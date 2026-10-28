import { getDb } from "./db";
import {
  inquiries,
  subscribers,
  type InsertInquiry,
  type Inquiry,
  type InsertSubscriber,
  type Subscriber,
} from "@shared/schema";
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
  async createSubscriber(data: InsertSubscriber): Promise<Subscriber> {
    const db = getDb();
    const [row] = await db
      .insert(subscribers)
      .values(data)
      .onConflictDoUpdate({
        target: subscribers.email,
        set: { firstName: data.firstName, businessType: data.businessType },
      })
      .returning();
    return row;
  },
  async listSubscribers(): Promise<Subscriber[]> {
    const db = getDb();
    return db.select().from(subscribers).orderBy(desc(subscribers.createdAt));
  },
};
