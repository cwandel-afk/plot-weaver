import { playerCharacterTable } from "~/server/database/schema";

export default defineEventHandler((event) => {
  const id = event.context.params?.["id"];

  if (!id) {
    throw createError({
      status: 400,
      message: "No Player ID provided",
    });
  }

  db.delete(playerCharacterTable)
    .where(eq(playerCharacterTable.id, id))
    .returning()
    .catch((err) => {
      console.error(`\n\n[ PLAYER DELETE ] Error deleting player: ${err}\n\n`);
    });

  return { id };
});
