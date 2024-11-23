CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`notes` text,
	`documents` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `projects_id_unique` ON `projects` (`id`);