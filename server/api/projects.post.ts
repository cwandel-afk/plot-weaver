import { defineEventHandler, readBody } from "h3";
import { projectsTable } from "~/server/database/schema";
import { db } from "~/server/database/index";

export default defineEventHandler(async (event) => {
  console.log("Project [ POST ] event", event);
  const body = await readBody(event);

  const newProject = {
    id: body.id,
    name: body.name,
    description: body.description,
    notes: body.notes,
  };

  const insertedProject = await db
    .insert(projectsTable)
    .values(newProject)
    .returning();
  return insertedProject;
});
