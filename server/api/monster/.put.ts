import { monstersTable } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const monster = await readBody(event);

  if (!monster || !monster.id || !monster.userEmail) {
    throw createError({
      status: 400,
      message: "Missing required fields to create a monster",
    });
  }

  const updatedMonster = db
    .update(monstersTable)
    .set({
      ...monster,
      savingThrows: monster.savingThrows
        ? JSON.stringify(monster.savingThrows)
        : null,
      skills: monster.skills ? JSON.stringify(monster.skills) : null,
      passivePerception: monster.passivePerception
        ? JSON.stringify(monster.passivePerception)
        : null,
      reactions: monster.reactions ? JSON.stringify(monster.reactions) : null,
      legendaryActions: monster.legendaryActions
        ? JSON.stringify(monster.legendaryActions)
        : null,
    })
    .where(eq(monstersTable.id, monster.id))
    .returning()
    .then((mon) => {
      return mon[0];
    })
    .catch((err) => {
      console.error(`\n\n[ MONSTER PUT ] Error updating monster: ${err}\n\n`);
    });

  return updatedMonster;
});
