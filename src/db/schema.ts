import { mysqlTable, varchar, double, serial } from "drizzle-orm/mysql-core";

export const userInfo = mysqlTable("user_info", {
  id: serial("id").primaryKey(),
  nationality: varchar("nationality", { length: 50 }),
  idNumber: varchar("idNumber", { length: 50 }),
  firstName: varchar("firstName", { length: 100 }),
  lastName: varchar("lastName", { length: 100 }),
  mobileNumber: varchar("mobileNumber", { length: 15 }),
  email: varchar("email", { length: 100 }),
  ethnicity: varchar("ethnicity", { length: 50 }),
  currentSalaryRate: varchar("currentSalaryRate", { length: 50 }),
  currentSalary: double("currentSalary"),
  cvUploadPath: varchar("cvUploadPath", { length: 255 }),
});
