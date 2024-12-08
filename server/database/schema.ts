import { is } from "drizzle-orm";
import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const campaignsTable = pgTable("campaigns", {
  id: text("id").primaryKey().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  notes: text("notes"),
  documents: text("documents"), // Assuming documents are stored as a JSON string
});

export const monstersTable = pgTable("monsters", {
  id: text("id").primaryKey().unique(),
  name: text("name").notNull(),
  size: text("size").notNull(),
  type: text("type").notNull(),
  alignment: text("alignment").notNull(),
  armourClass: text("armour_class").notNull(),
  armourClassType: text("armour_class_type").notNull(),
  hitPoints: text("hit_points").notNull(),
  hitPointsCalculation: text("hit_points_calculation").notNull(),
  speed: text("speed").notNull(), // Assuming speed is stored as a JSON string
  stats: text("stats").notNull(), // Assuming stats are stored as a JSON string
  savingThrows: text("saving_throws"), // Assuming saving throws are stored as a JSON string
  skills: text("skills"), // Assuming skills are stored as a JSON string
  immunitiesResistances: text("immunities_resistances").notNull(), // Assuming immunities and resistances are stored as a JSON string
  senses: text("senses").notNull(), // Assuming senses are stored as a JSON string
  passivePerception: text("passive_perception"),
  languages: text("languages").notNull(),
  challengeRating: text("challenge_rating").notNull(),
  experience: text("experience").notNull(),
  traits: text("traits").notNull(), // Assuming traits are stored as a JSON string
  actions: text("actions").notNull(), // Assuming actions are stored as a JSON string
  reactions: text("reactions"), // Assuming reactions are stored as a JSON string
  legendaryActions: text("legendary_actions"), // Assuming legendary actions are stored as a JSON string
});

export const playerCharacterTable = pgTable("playerCharacter", {
  id: text("id").primaryKey().unique(),
  campaign: text("campaign").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  playerClass: text("playerClass").notNull(),
  level: text("level").notNull(),
  background: text("background").notNull(),
  entity: text("entity").notNull(),
});
