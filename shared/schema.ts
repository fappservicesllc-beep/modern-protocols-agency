import { inquiries } from "../db/schema.js";
import { z } from "zod";
export { inquiries, newsletterSubscribers } from "../db/schema.js";

export const insertInquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  brand: z.string().min(1, "Brand name required"),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget"),
  message: z.string().min(10, "Tell us a bit more (min 10 characters)"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

export const insertNewsletterSchema = z.object({ email: z.string().trim().email().max(320).transform(value => value.toLowerCase()) });
