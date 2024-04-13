CREATE TABLE `vacancies` (
	`vacancyId` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`postedBy` text NOT NULL,
	`companyName` text NOT NULL,
	`postedByEmail` text NOT NULL,
	`postedByMobile` text NOT NULL,
	`postedBySource` text NOT NULL,
	`niche` text NOT NULL,
	`jobTitle` text NOT NULL,
	`description` text NOT NULL,
	`region` text NOT NULL,
	`workingModel` text NOT NULL,
	`vacancyFile` text NOT NULL
);
--> statement-breakpoint
DROP TABLE `posts`;--> statement-breakpoint
ALTER TABLE `user_info` RENAME TO `job_seekers`;--> statement-breakpoint
ALTER TABLE job_seekers ADD `nationality` text NOT NULL;--> statement-breakpoint
ALTER TABLE `job_seekers` DROP COLUMN `name`;