import { drizzle } from "drizzle-orm/pglite";
import { Pool } from "pg";

// Use your Neon connection details here
const pool = new Pool({
  host: process.env.NEON_HOST,
  port: 5432,
  user: process.env.NEON_USER,
  password: process.env.NEON_PASSWORD,
  database: process.env.NEON_DATABASE,
  ssl: true, // Neon requires SSL
});

export const db = drizzle(pool);
