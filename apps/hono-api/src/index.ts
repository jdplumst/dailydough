import { Hono } from "hono";
import { auth } from "./lib/better-auth";
import { session } from "./db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/", (c) => c.text("Hello Cloudflare Workers!"));

app.on(["GET", "POST"], "/api/*", (c) => {
  return auth(c.env).handler(c.req.raw);
});

app.get("/health", async (c) => {
  const sql = neon(c.env.DATABASE_URL);
  const db = drizzle(sql);
  await db.select().from(session);
  return c.text("Hi");
});

export default app;
