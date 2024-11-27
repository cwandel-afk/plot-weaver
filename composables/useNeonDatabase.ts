import { drizzle } from "drizzle-orm/neon-http";

export const useNeonDatabase = () => {
  const connStr = useRuntimeConfig().app.NEON_CONNECTION_STRING;
  if (!connStr) {
    throw new Error("NEON_CONNECTION_STRING is not defined");
  }

  const db = drizzle(connStr);

  return db;
};
