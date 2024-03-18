import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config({ path: "./.env.local" });

const envSchema = z.object({
  TURSO_CONNECTION_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),
});

// Attempt to validate the environment variables
const validatedEnv = envSchema.parse({
  TURSO_CONNECTION_URL: process.env.TURSO_CONNECTION_URL,
  TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
});


export default {
  schema: "./src/db/schema.ts",
  out: "./migrations",
  driver: "turso",
  dbCredentials: {
    url: validatedEnv.TURSO_CONNECTION_URL,
    authToken: validatedEnv.TURSO_AUTH_TOKEN,
  },
} satisfies Config;
