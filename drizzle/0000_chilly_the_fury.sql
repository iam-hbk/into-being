CREATE TABLE `form_data`.`user_info` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`nationality` varchar(50),
	`idNumber` varchar(50),
	`firstName` varchar(100),
	`lastName` varchar(100),
	`mobileNumber` varchar(15),
	`email` varchar(100),
	`ethnicity` varchar(50),
	`currentSalaryRate` varchar(50),
	`currentSalary` double,
	`cvUploadPath` varchar(255),
	CONSTRAINT `user_info_id` PRIMARY KEY(`id`)
);
