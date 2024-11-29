ALTER TABLE "projects" RENAME TO "campaigns";--> statement-breakpoint
ALTER TABLE "entity" RENAME COLUMN "project" TO "campaign";--> statement-breakpoint
ALTER TABLE "playerCharacter" RENAME COLUMN "project" TO "campaign";--> statement-breakpoint
ALTER TABLE "campaigns" DROP CONSTRAINT "projects_id_unique";--> statement-breakpoint
ALTER TABLE "campaigns" ADD CONSTRAINT "campaigns_id_unique" UNIQUE("id");