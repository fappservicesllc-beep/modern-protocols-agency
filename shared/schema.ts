import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  brand: text("brand").notNull(),
  service: text("service").notNull(),
  budget: text("budget").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertInquirySchema = createInsertSchema(inquiries, {
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  brand: z.string().min(1, "Brand name required"),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget"),
  message: z.string().min(10, "Tell us a bit more (min 10 characters)"),
}).omit({ id: true, createdAt: true });

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  email: text("email").notNull().unique(),
  businessType: text("business_type").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers, {
  firstName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  businessType: z.string().min(1, "Select your business type"),
}).omit({ id: true, createdAt: true });

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;
