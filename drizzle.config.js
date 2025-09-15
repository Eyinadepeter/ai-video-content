import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_K0UTFOuD1rRe@ep-damp-violet-adoheda9-pooler.c-2.us-east-1.aws.neon.tech/Video%20Ai?sslmode=require&channel_binding=require",
  },
});
