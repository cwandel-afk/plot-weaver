import { monstersTable } from "~/server/database/schema";

export default defineEventHandler((event) => {
  const id = event.context.params?.["id"];

  if (!id) {
    throw createError({
      status: 400,
      message: "No Monster ID provided",
    });
  }

  db.delete(monstersTable)
    .where(eq(monstersTable.id, id))
    .returning()
    .catch((err) => {
      console.error(
        `\n\n[ MONSTER DELETE ] Error deleting monster: ${err}\n\n`
      );
    });

  return { id };
});
