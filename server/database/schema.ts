import { pgTable, text } from "drizzle-orm/pg-core";

export const players = pgTable("players", {
  playerID: text("playerID").primaryKey().unique(),
  name: text("name").notNull(),
  entity: text("entity"),
});

export const projectsTable = pgTable("projects", {
  id: text("id").primaryKey().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  notes: text("notes"),
  documents: text("documents"), // Assuming documents are stored as a JSON string
});
