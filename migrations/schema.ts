import { sqliteTable, AnySQLiteColumn, integer, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const jobSeekers = sqliteTable("job_seekers", {
	id: integer("id").primaryKey().notNull(),
	idNumber: text("idNumber").notNull(),
	firstName: text("firstName").notNull(),
	lastName: text("lastName").notNull(),
	mobileNumber: text("mobileNumber").notNull(),
	email: text("email").notNull(),
	ethnicity: text("ethnicity").notNull(),
	currentSalaryRate: text("currentSalaryRate").notNull(),
	currentSalary: integer("currentSalary").notNull(),
	cvUploadPath: text("cvUploadPath").notNull(),
	nationality: text("nationality").notNull(),
});

export const vacancies = sqliteTable("vacancies", {
	vacancyId: integer("vacancyId").primaryKey({ autoIncrement: true }).notNull(),
	postedBy: text("postedBy").notNull(),
	companyName: text("companyName").notNull(),
	postedByEmail: text("postedByEmail").notNull(),
	postedByMobile: text("postedByMobile").notNull(),
	postedBySource: text("postedBySource").notNull(),
	niche: text("niche").notNull(),
	jobTitle: text("jobTitle").notNull(),
	description: text("description").notNull(),
	region: text("region").notNull(),
	workingModel: text("workingModel").notNull(),
	vacancyFile: text("vacancyFile").notNull(),
});