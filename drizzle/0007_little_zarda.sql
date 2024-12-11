ALTER TABLE "playerCharacter" ADD COLUMN "playerName" text NOT NULL;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "race" text NOT NULL;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "alignment" text NOT NULL;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "experience" text NOT NULL;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "hit_points" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "hit_points_calculation" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "armor_class" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "armor_class_type" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "speed" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "stats" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "inspiration" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "proficiency_bonus" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "initiative" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "saving_throws" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "skills" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "passive_perception" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "languages" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "actions" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "other_proficiencies" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "equipment" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "personality_traits" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "ideals" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "bonds" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "flaws" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "features" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "age" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "height" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "weight" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "eyes" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "skin" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "hair" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "backstory" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "appearance" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "allies_organizations" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "treasure" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spellcasting_ability" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spell_save_dc" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spell_attack_bonus" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spell_slots" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "cantrips_known" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spell_slots_level_1" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spell_slots_level_2" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spell_slots_level_3" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spell_slots_level_4" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spell_slots_level_5" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spell_slots_level_6" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spell_slots_level_7" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spell_slots_level_8" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "spell_slots_level_9" text;--> statement-breakpoint
ALTER TABLE "playerCharacter" DROP COLUMN IF EXISTS "description";--> statement-breakpoint
ALTER TABLE "playerCharacter" DROP COLUMN IF EXISTS "entity";