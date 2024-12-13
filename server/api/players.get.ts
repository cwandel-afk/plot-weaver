import { Player } from "~/models/player.model";
import { playerCharacterTable } from "../database/schema";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { email } = query as { email: string };

  if (!email) {
    throw createError({
      status: 400,
      message: "No user email provided",
    });
  }
  const allPlayerCharacters = await db
    .select()
    .from(playerCharacterTable)
    .where(eq(playerCharacterTable.userEmail, email))
    .then((rows) => {
      return rows.map(
        (row) =>
          new Player({
            ...row,
          })
      );
    })
    .catch((err) => {
      console.error(
        `\n\n[ PLAYERS GET ] Error fetching player characters: ${err}\n\n`
      );
    });
  return allPlayerCharacters;
});
