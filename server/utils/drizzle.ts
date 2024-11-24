import { drizzle } from "drizzle-orm/d1";
// import { hubDatabase } from "#imports";
export { sql, eq, and, or } from "drizzle-orm";

import * as schema from "../database/schema";
import { useNitro } from "nuxt/kit";

export const tables = schema;

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema });
}
