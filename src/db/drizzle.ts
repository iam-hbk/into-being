import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const local = "http://127.0.0.1:8080";

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client);
