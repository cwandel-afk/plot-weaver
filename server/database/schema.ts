import { is } from "drizzle-orm";
import {
  boolean,
  integer,
  PgInteger,
  pgTable,
  text,
} from "drizzle-orm/pg-core";

export const campaignsTable = pgTable("campaigns", {
  id: text("id").primaryKey().unique(),
  userEmail: text("userEmail").notNull(),
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
  class: text("playerClass").notNull(),
  level: text("level").notNull(),
  background: text("background").notNull(),
  playerName: text("playerName").notNull(),
  race: text("race").notNull(),
  alignment: text("alignment").notNull(),
  experience: text("experience").notNull(),
  hitPoints: text("hit_points"),
  tempHitPoints: text("hit_points"),
  currentHitPoints: text("hit_points"),
  hitPointsCalculation: text("hit_points_calculation"),
  armorClass: text("armor_class"),
  armorClassType: text("armor_class_type"),
  speed: text("speed"), // Assuming speed is stored as a JSON string
  stats: text("stats"), // Assuming stats are stored as a JSON string
  inspiration: text("inspiration"),
  proficiencyBonus: text("proficiency_bonus"),
  initiative: text("initiative"),
  savingThrows: text("saving_throws"), // Assuming saving throws are stored as a JSON string
  skills: text("skills"), // Assuming skills are stored as a JSON string
  passivePerception: text("passive_perception"),
  languages: text("languages"),
  actions: text("actions"), // Assuming actions are stored as a JSON string
  otherProficiencies: text("other_proficiencies"), // Assuming other proficiencies are stored as a JSON string
  equipment: text("equipment"), // Assuming equipment is stored as a JSON string
  personalityTraits: text("personality_traits"),
  ideals: text("ideals"),
  bonds: text("bonds"),
  flaws: text("flaws"),
  features: text("features"), // Assuming features are stored as a JSON string
  age: text("age"),
  height: text("height"),
  weight: text("weight"),
  eyes: text("eyes"),
  skin: text("skin"),
  hair: text("hair"),
  backstory: text("backstory"),
  appearance: text("appearance"),
  alliesOrganizations: text("allies_organizations"), // Assuming allies and organizations are stored as a JSON string
  treasure: text("treasure"), // Assuming treasure is stored as a JSON string
  spellcastingAbility: text("spellcasting_ability"),
  spellSaveDC: text("spell_save_dc"),
  spellAttackBonus: text("spell_attack_bonus"),
  spellSlots: text("spell_slots"), // Assuming spell slots are stored as a JSON string
  cantripsKnown: text("cantrips_known"), // Assuming cantrips known are stored as a JSON string
  spellSlotsLevel1: text("spell_slots_level_1"), // Assuming spell slots are stored as a JSON string
  spellSlotsLevel2: text("spell_slots_level_2"), // Assuming spell slots are stored as a JSON string
  spellSlotsLevel3: text("spell_slots_level_3"), // Assuming spell slots are stored as a JSON string
  spellSlotsLevel4: text("spell_slots_level_4"), // Assuming spell slots are stored as a JSON string
  spellSlotsLevel5: text("spell_slots_level_5"), // Assuming spell slots are stored as a JSON string
  spellSlotsLevel6: text("spell_slots_level_6"), // Assuming spell slots are stored as a JSON string
  spellSlotsLevel7: text("spell_slots_level_7"), // Assuming spell slots are stored as a JSON string
  spellSlotsLevel8: text("spell_slots_level_8"), // Assuming spell slots are stored as a JSON string
  spellSlotsLevel9: text("spell_slots_level_9"), // Assuming spell slots are stored as a JSON string
});
