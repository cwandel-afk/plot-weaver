import { is } from "drizzle-orm";
import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const campaignsTable = pgTable("campaigns", {
  id: text("id").primaryKey().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  notes: text("notes"),
  documents: text("documents"), // Assuming documents are stored as a JSON string
});

export const entityTable = pgTable("entity", {
  id: text("id").primaryKey().unique(),
  campaign: text("campaign").notNull(),
  isPlayerCharacter: boolean("isPlayerCharacter").notNull(),
  isNonPlayerCharacter: boolean("isNonPlayerCharacter").notNull(),
  isMonster: boolean("isMonster").notNull(),
  isCustom: boolean("isCustom").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  strength: integer("strength").notNull(),
  dexterity: integer("dexterity").notNull(),
  constitution: integer("constitution").notNull(),
  intelligence: integer("intelligence").notNull(),
  wisdom: integer("wisdom").notNull(),
  charisma: integer("charisma").notNull(),
  armorClass: integer("armorClass").notNull(),
  hitPoints: integer("hitPoints").notNull(),
  temporaryHitPoints: integer("temporaryHitPoints"),
  speed: integer("speed").notNull(),
  walkingSpeed: integer("walkingSpeed"),
  flyingSpeed: integer("flyingSpeed"),
  swimmingSpeed: integer("swimmingSpeed"),
  climbingSpeed: integer("climbingSpeed"),
  burrowingSpeed: integer("burrowingSpeed"),
  initiative: text("initiative").notNull(),
  attackBonus: text("attackBonus").notNull(),
  damageRolls: text("damageRolls").notNull(),
  savingThrows: text("savingThrows").notNull(),
  hitDice: text("hitDice").notNull(),
  damageResistances: text("damageResistances"),
  damageImmunities: text("damageImmunities"),
  damageVulnerabilities: text("damageVulnerabilities"),
  conditionImmunities: text("conditionImmunities"),
  passivePerception: integer("passivePerception").notNull(),
  visionTypes: text("visionTypes").notNull(),
  acrobatics: integer("acrobatics"),
  animalHandling: integer("animalHandling"),
  arcana: integer("arcana"),
  athletics: integer("athletics"),
  deception: integer("deception"),
  history: integer("history"),
  insight: integer("insight"),
  intimidation: integer("intimidation"),
  investigation: integer("investigation"),
  medicine: integer("medicine"),
  nature: integer("nature"),
  perception: integer("perception"),
  performance: integer("performance"),
  persuasion: integer("persuasion"),
  religion: integer("religion"),
  sleightOfHand: integer("sleightOfHand"),
  stealth: integer("stealth"),
  survival: integer("survival"),
  traitsAndFeatures: text("traitsAndFeatures").notNull(),
  innateTraits: text("innateTraits"),
  classFeatures: text("classFeatures"),
  legendaryActions: text("legendaryActions"),
  lairActions: text("lairActions"),
  regionalEffects: text("regionalEffects"),
  racialTraits: text("racialTraits"),
  backgroundFeatures: text("backgroundFeatures"),
  spells: text("spellcastingAndMagic"),
  spellSaveDC: integer("spellSaveDC"),
  spellAttackBonus: integer("spellAttackBonus"),
  spellSlots: integer("spellSlots"),
  preparedKnownSpells: text("preparedKnownSpells"),
  spellLevel: text("spellLevel"),
  magicalResistances: text("magicalResistances"),
  innateSpellcasting: text("innateSpellcasting"),
  actions: text("actions").notNull(),
  multiattack: text("multiattack"),
  bonusActions: text("bonusActions"),
  reactions: text("reactions"),
  specialActions: text("specialActions"),
  sizeAndSpace: text("sizeAndSpace").notNull(),
  sizeCategory: text("sizeCategory"),
  reach: text("reach"),
  spaceOccupied: text("spaceOccupied"),
  personality: text("alignmentAndPersonality").notNull(),
  alignment: text("alignment"),
  ideals: text("ideals"),
  bonds: text("bonds"),
  flaws: text("flaws"),
  personalityTraits: text("personalityTraits"),
  languages: text("languages").notNull(),
  miscellaneousStats: text("miscellaneousStats").notNull(),
  challengeRating: text("challengeRating"),
  experiencePoints: text("experiencePoints"),
  toolProficiencies: text("toolProficiencies"),
  equipment: text("equipment"),
  factionsOrAffiliations: text("factionsOrAffiliations"),
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
