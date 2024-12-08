import { monstersTable } from "~/server/database/schema";
import { type InferSelectModel } from "drizzle-orm";
import { eq } from "drizzle-orm";

type MonsterType = InferSelectModel<typeof monstersTable>;

export class Monster implements MonsterType {
  id = "";
  name = "";
  size!: string;
  type!: string;
  alignment!: string;
  armourClass!: string;
  armourClassType!: string;
  hitPoints!: string;
  hitPointsCalculation!: string;
  speed!: string;
  stats!: string;
  savingThrows!: string | null;
  skills!: string | null;
  immunitiesResistances!: string;
  senses!: string;
  passivePerception!: string | null;
  languages!: string;
  challengeRating!: string;
  experience!: string;
  traits!: string;
  actions!: string;
  reactions!: string | null;
  legendaryActions!: string | null;

  constructor(init?: Partial<Monster>) {
    Object.assign(this, init);
  }

  get Speed() {
    return Object.entries(this.speed)
      .map((spd) => `${spd[1]}`)
      .join("");
  }

  get Stats() {
    const rawStats = Object.entries(this.stats)
      .map((stat) => `${stat[1]}`)
      .join("");

    const stats = rawStats.split(",");

    const str = `Str: ${stats[0]} ${stats[1]}, `,
      dex = `Dex: ${stats[2]} ${stats[3]}`,
      con = `Con: ${stats[4]} ${stats[5]}`,
      int = `Int: ${stats[6]} ${stats[7]}`,
      wis = `Wis: ${stats[8]} ${stats[9]}`,
      cha = `Cha: ${stats[10]} ${stats[11]}`;

    return `${str}, ${dex}, ${con}, ${int}, ${wis}, ${cha}`;
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

  const getMonsters = async () => {
    const allMonsters = await db
      .select()
      .from(monstersTable)
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
