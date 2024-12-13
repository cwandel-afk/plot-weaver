import { playerCharacterTable } from "~/server/database/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const player = await readBody(event);

  if (!player || !player.id || !player.userEmail) {
    throw createError({
      status: 400,
      message: "Missing required fields to update a player character",
    });
  }

  const updatedPlayer = db
    .update(playerCharacterTable)
    .set({
      ...player,
      speed: player.speed ? JSON.stringify(player.speed) : null,
      stats: player.stats ? JSON.stringify(player.stats) : null,
      savingThrows: player.savingThrows
        ? JSON.stringify(player.savingThrows)
        : null,
      skills: player.skills ? JSON.stringify(player.skills) : null,
      actions: player.actions ? JSON.stringify(player.actions) : null,
      otherProficiencies: player.otherProficiencies
        ? JSON.stringify(player.otherProficiencies)
        : null,
      equipment: player.equipment ? JSON.stringify(player.equipment) : null,
      features: player.features ? JSON.stringify(player.features) : null,
      alliesOrganizations: player.alliesOrganizations
        ? JSON.stringify(player.alliesOrganizations)
        : null,
      treasure: player.treasure ? JSON.stringify(player.treasure) : null,
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
    .where(eq(playerCharacterTable.id, player.id))
    .returning()
    .then((plr) => {
      return plr[0];
    })
    .catch((err) => {
      console.error(
        `\n\n[ PLAYER PUT ] Error updating player character: ${err}\n\n`
      );
    });

  return updatedPlayer;
});
