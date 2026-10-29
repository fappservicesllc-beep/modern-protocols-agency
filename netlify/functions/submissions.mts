import type { Config } from "@netlify/functions";
import { handleSubmissions } from "../../server/submissions.js";

export default async (request: Request) => handleSubmissions(request, name => Netlify.env.get(name));

export const config: Config = { path: ["/api/inquiries", "/api/subscribers", "/api/newsletter"] };
