import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const players = sqliteTable("players", {
  playerID: text("playerID").primaryKey().unique(),
  name: text("name").notNull(),
  entity: text("entity"),
});
