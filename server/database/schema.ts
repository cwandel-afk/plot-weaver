import { is } from "drizzle-orm";
import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const campaignsTable = pgTable("campaigns", {
  id: text("id").primaryKey().unique(),
  userEmail: text("user_id").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  notes: text("notes"),
  documents: text("documents"), // Assuming documents are stored as a JSON string
});

export const monstersTable = pgTable("monsters", {
  id: text("id").primaryKey().unique(),
  userEmail: text("user_id").notNull(),
  name: text("name").notNull(),
  size: text("size"),
  type: text("type"),
  alignment: text("alignment"),
  armorClass: text("armor_class"),
  armorClassType: text("armor_class_type"),
  hitPoints: text("hit_points"),
  hitPointsCalculation: text("hit_points_calculation"),
  speed: text("speed"), // Assuming speed is stored as a JSON string
  stats: text("stats"), // Assuming stats are stored as a JSON string
  savingThrows: text("saving_throws"), // Assuming saving throws are stored as a JSON string
  skills: text("skills"), // Assuming skills are stored as a JSON string
  immunitiesResistances: text("immunities_resistances"), // Assuming immunities and resistances are stored as a JSON string
  senses: text("senses"), // Assuming senses are stored as a JSON string
  passivePerception: text("passive_perception"),
  languages: text("languages"),
  challengeRating: text("challenge_rating"),
  experience: text("experience"),
  traits: text("traits"), // Assuming traits are stored as a JSON string
  actions: text("actions"), // Assuming actions are stored as a JSON string
  reactions: text("reactions"), // Assuming reactions are stored as a JSON string
  legendaryActions: text("legendary_actions"), // Assuming legendary actions are stored as a JSON string
});

export const playerCharacterTable = pgTable("playerCharacter", {
  id: text("id").primaryKey().unique(),
  userEmail: text("user_id").notNull(),
  campaign: text("campaign").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  playerClass: text("playerClass").notNull(),
  level: text("level").notNull(),
  background: text("background").notNull(),
  entity: text("entity").notNull(),
});
