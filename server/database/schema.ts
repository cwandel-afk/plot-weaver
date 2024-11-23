import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const players = sqliteTable("players", {
  playerID: text("playerID").primaryKey().unique(),
  name: text("name").notNull(),
  entity: text("entity"),
});

export const projects = sqliteTable("projects", {
  id: text("id").primaryKey().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  notes: text("notes"),
  documents: text("documents"), // Assuming documents are stored as a JSON string
});
