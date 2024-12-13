import { monstersTable } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const monster = await readBody(event);

  if (!monster || !monster.id || !monster.userEmail) {
    throw createError({
      status: 400,
      message: "Missing required fields to create a monster",
    });
  }

  const insertedMonster = await db
    .insert(monstersTable)
    .values({
      id: monster.id,
      userEmail: monster.userEmail,
      name: monster.name,
      size: monster.size,
      type: monster.type,
      alignment: monster.alignment,
      armorClass: monster.armorClass,
      armorClassType: monster.armorClassType,
      hitPoints: monster.hitPoints,
      hitPointsCalculation: monster.hitPointsCalculation,
      speed: monster.speed ? JSON.stringify(monster.speed) : null,
      stats: monster.stats ? JSON.stringify(monster.stats) : null,
      immunitiesResistances: monster.immunitiesResistances
        ? JSON.stringify(monster.immunitiesResistances)
        : null,
      senses: monster.senses ? JSON.stringify(monster.senses) : null,
      languages: monster.languages ? JSON.stringify(monster.languages) : null,
      challengeRating: monster.challengeRating,
      experience: monster.experience,
      traits: monster.traits ? JSON.stringify(monster.traits) : null,
      actions: monster.actions ? JSON.stringify(monster.actions) : null,
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
    .returning()
    .then((mon) => {
      return mon[0];
    })
    .catch((err) => {
      console.error(`\n\n[ MONSTER POST ] Error adding monster: ${err}\n\n`);
    });

  return insertedMonster;
});
