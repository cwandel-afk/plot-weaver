CREATE TABLE IF NOT EXISTS "players" (
	"playerID" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"entity" text,
	CONSTRAINT "players_playerID_unique" UNIQUE("playerID")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"notes" text,
	"documents" text,
	CONSTRAINT "projects_id_unique" UNIQUE("id")
);
