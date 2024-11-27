// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   out: "./migrations",
//   schema: "./server/database/schema.ts",
//   driver: "pglite",
//   dbCredentials: {
//     url: "postgresql://plot-weaver_owner:X7pjhMnwG9fE@ep-yellow-dream-a5vdxusb.us-east-2.aws.neon.tech/plot-weaver?sslmode=require",
//   },
//   dialect: "postgresql",
// });

import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./server/database/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEON_CONNECTION_STRING!,
  },
});
