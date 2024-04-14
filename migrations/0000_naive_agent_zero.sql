CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user_info`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `user_info` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`idNumber` text NOT NULL,
	`firstName` text NOT NULL,
	`lastName` text NOT NULL,
	`mobileNumber` text NOT NULL,
	`email` text NOT NULL,
	`ethnicity` text NOT NULL,
	`currentSalaryRate` text NOT NULL,
	`currentSalary` integer NOT NULL,
	`cvUploadPath` text NOT NULL
);
