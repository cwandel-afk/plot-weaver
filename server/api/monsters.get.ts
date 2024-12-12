import { Monster } from "~/models/monster.model";
import { monstersTable } from "../database/schema";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { email } = query as { email: string };

  if (!email) {
    throw createError({
      status: 400,
      message: "No user email provided",
    });
  }
  const allMonsters = await db
    .select()
    .from(monstersTable)
    .where(eq(monstersTable.userEmail, email))
    .then((rows) => {
      console.log("Monsters fetched successfully");
      return rows.map(
        (row) =>
          new Monster({
            ...row,
            savingThrows: row.savingThrows
              ? JSON.parse(row.savingThrows)
              : null,
            skills: row.skills ? JSON.parse(row.skills) : null,
            passivePerception: row.passivePerception
              ? JSON.parse(row.passivePerception)
              : null,
            reactions: row.reactions ? JSON.parse(row.reactions) : null,
            legendaryActions: row.legendaryActions
              ? JSON.parse(row.legendaryActions)
              : null,
          })
      );
    })
    .catch((err) => {
      console.error(`\n\n[ MONSTERS GET ] Error fetching monsters: ${err}\n\n`);
    });
  return allMonsters;
});
