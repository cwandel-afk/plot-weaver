import { playerCharacterTable } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const player = await readBody(event);

  if (!player || !player.id || !player.userEmail) {
    throw createError({
      status: 400,
      message: "Missing required fields to create a player",
    });
  }

  console.log(`\n\n[ PLAYER POST ] Player: ${JSON.stringify(player)}\n\n`);

  const insertedPlayer = await db
    .insert(playerCharacterTable)
    .values({
      id: player.id,
      userEmail: player.userEmail,
      campaign: player.campaign,
      name: player.name,
      class: player.class,
      level: player.level,
      background: player.background || null,
      playerName: player.playerName,
      race: player.race || null,
      alignment: player.alignment || null,
      experience: player.experience || null,
      hitPoints: player.hitPoints,
      tempHitPoints: player.tempHitPoints || null,
      currentHitPoints: player.currentHitPoints || null,
      hitPointsCalculation: player.hitPointsCalculation || null,
      armorClass: player.armorClass,
      armorClassType: player.armorClassType || null,
      speed: player.speed ? JSON.stringify(player.speed) : null,
      stats: player.stats ? JSON.stringify(player.stats) : null,
      inspiration: player.inspiration || null,
      proficiencyBonus: player.proficiencyBonus || null,
      initiative: player.initiative || null,
      savingThrows: player.savingThrows
        ? JSON.stringify(player.savingThrows)
        : null,
      skills: player.skills ? JSON.stringify(player.skills) : null,
      passivePerception: player.passivePerception || null,
      languages: player.languages ? JSON.stringify(player.languages) : null,
      actions: player.actions ? JSON.stringify(player.actions) : null,
      otherProficiencies: player.otherProficiencies
        ? JSON.stringify(player.otherProficiencies)
        : null,
      equipment: player.equipment ? JSON.stringify(player.equipment) : null,
      personalityTraits: player.personalityTraits || null,
      ideals: player.ideals || null,
      bonds: player.bonds || null,
      flaws: player.flaws || null,
      features: player.features ? JSON.stringify(player.features) : null,
      age: player.age || null,
      height: player.height || null,
      weight: player.weight || null,
      eyes: player.eyes || null,
      skin: player.skin || null,
      hair: player.hair || null,
      backstory: player.backstory || null,
      appearance: player.appearance || null,
      alliesOrganizations: player.alliesOrganizations
        ? JSON.stringify(player.alliesOrganizations)
        : null,
      treasure: player.treasure ? JSON.stringify(player.treasure) : null,
      spellcastingAbility: player.spellcastingAbility || null,
      spellSaveDC: player.spellSaveDC || null,
      spellAttackBonus: player.spellAttackBonus || null,
      spellSlots: player.spellSlots ? JSON.stringify(player.spellSlots) : null,
      cantripsKnown: player.cantripsKnown
        ? JSON.stringify(player.cantripsKnown)
        : null,
      spellSlotsLevel1: player.spellSlotsLevel1
        ? JSON.stringify(player.spellSlotsLevel1)
        : null,
      spellSlotsLevel2: player.spellSlotsLevel2
        ? JSON.stringify(player.spellSlotsLevel2)
        : null,
      spellSlotsLevel3: player.spellSlotsLevel3
        ? JSON.stringify(player.spellSlotsLevel3)
        : null,
      spellSlotsLevel4: player.spellSlotsLevel4
        ? JSON.stringify(player.spellSlotsLevel4)
        : null,
      spellSlotsLevel5: player.spellSlotsLevel5
        ? JSON.stringify(player.spellSlotsLevel5)
        : null,
      spellSlotsLevel6: player.spellSlotsLevel6
        ? JSON.stringify(player.spellSlotsLevel6)
        : null,
      spellSlotsLevel7: player.spellSlotsLevel7
        ? JSON.stringify(player.spellSlotsLevel7)
        : null,
      spellSlotsLevel8: player.spellSlotsLevel8
        ? JSON.stringify(player.spellSlotsLevel8)
        : null,
      spellSlotsLevel9: player.spellSlotsLevel9
        ? JSON.stringify(player.spellSlotsLevel9)
        : null,
    })
    .returning()
    .then((plr) => {
      return plr[0];
    })
    .catch((err) => {
      console.error(`\n\n[ PLAYER POST ] Error adding player: ${err}\n\n`);
    });

  return insertedPlayer;
});
