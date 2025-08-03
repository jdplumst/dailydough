import { Hono } from "hono";
import { config } from "dotenv";
import { auth } from "./lib/better-auth";
import { session } from "./db/schema";
import { Client, neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
const app = new Hono<{ Bindings: CloudflareBindings }>();

config({ path: ".dev.vars" });

app.get("/", (c) => c.text("Hello Cloudflare Workers!"));

app.on(["GET", "POST"], "/api/*", (c) => {
  return auth(c.env).handler(c.req.raw);
});

app.get("/health", async (c, ctx) => {
  // console.log(process.env.DATABASE_URL);

  const sql = neon(c.env.DATABASE_URL);
  const db = drizzle(sql);
  const result = await db.select().from(session);
  return c.text("Hi");
});

export default app;
