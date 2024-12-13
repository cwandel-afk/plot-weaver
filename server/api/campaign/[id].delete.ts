import { campaignsTable } from "~/server/database/schema";

export default defineEventHandler((event) => {
  const id = event.context.params?.["id"];

  if (!id) {
    throw createError({
      status: 400,
      message: "No Campaign ID provided",
    });
  }

  db.delete(campaignsTable)
    .where(eq(campaignsTable.id, id))
    .returning()
    .catch((err) => {
      console.error(
        `\n\n[ CAMPAIGN DELETE ] Error deleting campaign: ${err}\n\n`
      );
    });

  return { id };
});
