import type { InferSelectModel } from "drizzle-orm";
import type { monstersTable } from "~/server/database/schema";

type MonsterType = InferSelectModel<typeof monstersTable>;

export class Monster implements MonsterType {
  id: string = "";
  userId: string = "";
  userEmail: string = "";
  name = "";
  size: string | null = null;
  type: string | null = null;
  alignment: string | null = null;
  armorClass: string | null = null;
  armorClassType: string | null = null;
  hitPoints: string | null = null;
  hitPointsCalculation: string | null = null;
  speed: string | null = null;
  stats: string | null = null;
  savingThrows: string | null = null;
  skills: string | null = null;
  immunitiesResistances: string | null = null;
  senses: string | null = null;
  passivePerception: string | null = null;
  languages: string | null = null;
  challengeRating: string | null = null;
  experience: string | null = null;
  traits: string | null = null;
  actions: string | null = null;
  reactions: string | null = null;
  legendaryActions: string | null = null;

  constructor(init?: Partial<Monster>) {
    Object.assign(this, init);
  }

  get ArmorClass() {
    return `${this.armorClass} (${this.armorClassType})`;
  }

  get HitPoints() {
    return `${this.hitPoints} (${this.hitPointsCalculation})`;
  }

  get Challenge() {
    return `${this.challengeRating} (${this.experience} XP)`;
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
