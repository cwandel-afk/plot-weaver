import type { InferSelectModel } from "drizzle-orm";
import { playerCharacterTable } from "~/server/database/schema"; // Adjust the path as necessary

type PlayerType = InferSelectModel<typeof playerCharacterTable>;

export class Player implements PlayerType {
  id: string = "";
  userEmail: string = "";
  campaign: string = "";
  name: string = "";
  class: string = "";
  level: string | null = null;
  background: string | null = null;
  playerName: string | null = null;
  race: string | null = null;
  alignment: string | null = null;
  experience: string | null = null;
  hitPoints: string | null = null;
  tempHitPoints: string | null = null;
  currentHitPoints: string | null = null;
  hitPointsCalculation: string | null = null;
  armorClass: string | null = null;
  armorClassType: string | null = null;
  speed: string | null = null;
  stats: string | null = null;
  inspiration: string | null = null;
  proficiencyBonus: string | null = null;
  initiative: string | null = null;
  savingThrows: string | null = null;
  skills: string | null = null;
  passivePerception: string | null = null;
  languages: string | null = null;
  actions: string | null = null;
  otherProficiencies: string | null = null;
  equipment: string | null = null;
  personalityTraits: string | null = null;
  ideals: string | null = null;
  bonds: string | null = null;
  flaws: string | null = null;
  features: string | null = null;
  age: string | null = null;
  height: string | null = null;
  weight: string | null = null;
  eyes: string | null = null;
  skin: string | null = null;
  hair: string | null = null;
  backstory: string | null = null;
  appearance: string | null = null;
  alliesOrganizations: string | null = null;
  treasure: string | null = null;
  spellcastingAbility: string | null = null;
  spellSaveDC: string | null = null;
  spellAttackBonus: string | null = null;
  spellSlots: string | null = null;
  cantripsKnown: string | null = null;
  spellSlotsLevel1: string | null = null;
  spellSlotsLevel2: string | null = null;
  spellSlotsLevel3: string | null = null;
  spellSlotsLevel4: string | null = null;
  spellSlotsLevel5: string | null = null;
  spellSlotsLevel6: string | null = null;
  spellSlotsLevel7: string | null = null;
  spellSlotsLevel8: string | null = null;
  spellSlotsLevel9: string | null = null;

  constructor(init?: Partial<Player>) {
    Object.assign(this, init);
  }

  get ArmorClass() {
    return this.armorClass;
  }

  get HitPoints() {
    return this.hitPoints;
  }

  get Speed() {
    return this.speed;
  }

  get Stats() {
    const rawStats = this.stats
      ? Object.entries(this.stats)
          .map((stat) => `${stat[1]}`)
          .join("")
      : "";

    const stats = rawStats.split(",");
    if (stats.length !== 12 && stats.length !== 1) {
      const _stats = JSON.parse(rawStats || "");
      const str = `Str: ${_stats.strength} ( ${this.getModifier(
        _stats.strength
      )} ), `;
      const dex = `Dex: ${_stats.dexterity} ( ${this.getModifier(
          _stats.dexterity
        )} )`,
        con = `Con: ${_stats.constitution} ( ${this.getModifier(
          _stats.constitution
        )} )`,
        int = `Int: ${_stats.intelligence} ( ${this.getModifier(
          _stats.intelligence
        )} )`,
        wis = `Wis: ${_stats.wisdom} ( ${this.getModifier(_stats.wisdom)} )`,
        cha = `Cha: ${_stats.charisma} ( ${this.getModifier(
          _stats.charisma
        )} )`;

      return `${str} ${dex}, ${con}, ${int}, ${wis}, ${cha}`;
    }

    const str = `Str: ${stats[0]} ${stats[1]}, `,
      dex = `Dex: ${stats[2]} ${stats[3]}`,
      con = `Con: ${stats[4]} ${stats[5]}`,
      int = `Int: ${stats[6]} ${stats[7]}`,
      wis = `Wis: ${stats[8]} ${stats[9]}`,
      cha = `Cha: ${stats[10]} ${stats[11]}`;

    return `${str}, ${dex}, ${con}, ${int}, ${wis}, ${cha}`;
  }

  getModifier(stat: number | string) {
    return Math.floor((Number(stat) - 10) / 2);
  }
}
