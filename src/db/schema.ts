import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { db } from "./drizzle";

export const jobSeekers = sqliteTable("job_seekers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nationality: text("nationality").notNull(),
  idNumber: text("idNumber").notNull(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  mobileNumber: text("mobileNumber").notNull(),
  email: text("email").notNull(),
  ethnicity: text("ethnicity").notNull(),
  currentSalaryRate: text("currentSalaryRate").notNull(),
  currentSalaryRange: text("currentSalary").notNull(),
  cvUploadPath: text("cvUploadPath").notNull(),
});
export type InsertJobSeeker = typeof jobSeekers.$inferInsert;
export type SelectJobSeeker = typeof jobSeekers.$inferSelect;

export const vacancies = sqliteTable("vacancies", {
  vacancyId: integer("vacancyId").primaryKey({ autoIncrement: true }),
  postedBy: text("postedBy").notNull(),
  companyName: text("companyName").notNull(),
  postedByEmail: text("postedByEmail").notNull(),
  postedByMobile: text("postedByMobile").notNull(),
  postedBySource: text("postedBySource").notNull(),
  jobNiche: text("niche").notNull(),
  jobTitle: text("jobTitle").notNull(),
  jobDescription: text("description").notNull(),
  jobRegion: text("region").notNull(),
  workingModel: text("workingModel", {
    enum: ["hybrid", "on-site", "remote"],
  }).notNull(),
  vacancyFilePath: text("vacancyFile").notNull(),
});
export type InsertVacancy = typeof vacancies.$inferInsert;
export type SelectVacancy = typeof vacancies.$inferSelect;

/*--------------- Job Seekers Actions --------------- */

export const addJobSeeker = async (jobSeeker: InsertJobSeeker) => {
  try {
    const res = await db.insert(jobSeekers).values(jobSeeker).returning();
    if (res.length < 1) throw new Error("Something weird happened");
    return res[0];
  } catch (error) {
    console.error(error)
    throw error;
  }
};

/*--------------- Vacancies Actions --------------- */

export const addVacancy = async (vacancy: InsertVacancy) => {
  try {
    const res = await db.insert(vacancies).values(vacancy).returning();
    if (res.length < 1) throw new Error("Something weird happened");
    return res[0];
  } catch (error) {
    console.error(error)
    return null;
  }
};
