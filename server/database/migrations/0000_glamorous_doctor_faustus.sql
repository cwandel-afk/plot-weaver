CREATE TABLE `players` (
	`playerID` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`entity` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `players_playerID_unique` ON `players` (`playerID`);