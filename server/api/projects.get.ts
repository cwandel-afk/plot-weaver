import { defineEventHandler } from "h3";
import { db } from "~/server/database/index";
import { projectsTable } from "~/server/database/schema";

export default defineEventHandler(async () => {
  const allProjects = await db.select().from(projectsTable);

  return allProjects;
});
