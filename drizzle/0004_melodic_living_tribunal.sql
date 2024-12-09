ALTER TABLE "campaigns" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "monsters" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "playerCharacter" ADD COLUMN "user_id" text NOT NULL;