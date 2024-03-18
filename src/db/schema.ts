import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const userInfo = sqliteTable("user_info", {
  id: integer("id").primaryKey(),
  nationality: text("nationality").notNull(),
  idNumber: text("idNumber").notNull(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  mobileNumber: text("mobileNumber").notNull(),
  email: text("email").notNull(),
  ethnicity: text("ethnicity").notNull(),
  currentSalaryRate: text("currentSalaryRate").notNull(),
  currentSalary: integer("currentSalary").notNull(),
  cvUploadPath: text("cvUploadPath").notNull(),
});

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => userInfo.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  content: text("content").notNull(),
  created_at: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updated_at: text("updated_at").notNull(),
});
