import { drizzle } from "drizzle-orm/neon-http";

if (process.env.NEON_CONNECTION_STRING === undefined) {
  throw new Error("NEON_CONNECTION_STRING is not defined");
}

export const db = drizzle(process.env.NEON_CONNECTION_STRING ?? "");
