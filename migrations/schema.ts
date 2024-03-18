import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const userInfo = sqliteTable("user_info", {
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

export const posts = sqliteTable("posts", {
	id: integer("id").primaryKey().notNull(),
	userId: integer("user_id").notNull().references(() => userInfo.id, { onDelete: "cascade" } ),
	title: text("title").notNull(),
	content: text("content").notNull(),
	createdAt: text("created_at").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	updatedAt: text("updated_at").notNull(),
});