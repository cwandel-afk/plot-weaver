import { drizzle } from "drizzle-orm/neon-http";

const connStr = useRuntimeConfig().public.NEON_CONNECTION_STRING;
if (!connStr) {
  throw new Error("NEON_CONNECTION_STRING is not defined");
}

export const db = drizzle(connStr);
