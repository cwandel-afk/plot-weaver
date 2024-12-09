import { monstersTable } from "~/server/database/schema";
import { type InferSelectModel } from "drizzle-orm";
import { eq } from "drizzle-orm";

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

    if (stats.length !== 12) {
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

export const useMonsters = () => {
  const _monsters = useState<Monster[]>(() => []);
  const monsters = computed(() => _monsters.value);

  const db = useNeonDatabase();

  const addMonster = async (monster: Monster) => {
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
      .then(() => {
        _monsters.value.push(monster);
      })
      .catch((err) => {
        console.error(`[ useMonsters ] Error adding monster: ${err}`);
      });
    return insertedMonster;
  };

  const removeMonster = (monster: Monster) => {
    db.delete(monstersTable)
      .where(eq(monstersTable.id, monster.id))
      .then(() => {
        _monsters.value = _monsters.value.filter((p) => p !== monster);

        console.log(
          `[ useMonsters ] Monster with id ${monster.id} removed successfully.`
        );
      })
      .catch((err) => {
        console.error(`[ useMonsters ] Error removing monster: ${err}`);
      });
  };

  const updateMonster = (monster: Monster, updatedMonster: Monster) => {
    db.update(monstersTable)
      .set({
        ...updatedMonster,
        savingThrows: updatedMonster.savingThrows
          ? JSON.stringify(updatedMonster.savingThrows)
          : null,
        skills: updatedMonster.skills
          ? JSON.stringify(updatedMonster.skills)
          : null,
        passivePerception: updatedMonster.passivePerception
          ? JSON.stringify(updatedMonster.passivePerception)
          : null,
        reactions: updatedMonster.reactions
          ? JSON.stringify(updatedMonster.reactions)
          : null,
        legendaryActions: updatedMonster.legendaryActions
          ? JSON.stringify(updatedMonster.legendaryActions)
          : null,
      })
      .where(eq(monstersTable.id, monster.id))
      .then(() => {
        const index = _monsters.value.findIndex((p) => p === monster);
        _monsters.value[index] = updatedMonster;
        console.log(
          `[ useMonsters ] Monster with id ${monster.id} updated successfully.`
        );
      })
      .catch((err) => {
        console.error(`[ useMonsters ] Error updating monster: ${err}`);
      });
  };

  const findMonster = (id: string) => {
    return _monsters.value.find((p) => p.id === id);
  };

  const getMonsters = async (email: string) => {
    const allMonsters = await db
      .select()
      .from(monstersTable)
      .where(eq(monstersTable.userEmail, email))
      .then(
        (rows) =>
          (_monsters.value = rows.map(
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
          ))
      );
    return allMonsters;
  };

  return {
    _monsters,
    monsters,
    addMonster,
    getMonsters,
    removeMonster,
    updateMonster,
    findMonster,
  };
};
