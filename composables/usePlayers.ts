import { playerCharacterTable } from "~/server/database/schema";
import { eq } from "drizzle-orm";
import { type InferSelectModel } from "drizzle-orm";

type PlayerCharacter = InferSelectModel<typeof playerCharacterTable>;

export class Player implements PlayerCharacter {
  id = "";
  campaign = "";
  name = "";
  description = "";
  playerClass = "";
  level = "";
  background = "";
  entity = "";

  constructor(init?: Partial<Player>) {
    Object.assign(this, init);
  }
}

export const usePlayers = () => {
  const _players = useState<Player[]>(() => []);
  const players = computed(() => _players.value);

  const db = useNeonDatabase();

  const addPlayer = async (player: Player) => {
    const insertedPlayer = await db
      .insert(playerCharacterTable)
      .values(player)
      .returning()
      .then(() => {
        _players.value.push(player);
      })
      .catch((err) => {
        console.error(`[ usePlayers ] Error adding player: ${err}`);
      });
    return insertedPlayer;
  };

  const removePlayer = (player: Player) => {
    db.delete(playerCharacterTable)
      .where(eq(playerCharacterTable.id, player.id))
      .then(() => {
        _players.value = _players.value.filter((p) => p !== player);

        console.log(
          `[ usePlayers ] Player with id ${player.id} removed successfully.`
        );
      })
      .catch((err) => {
        console.error(`[ usePlayers ] Error removing player: ${err}`);
      });
  };

  const updatePlayer = (player: Player, updatedPlayer: Player) => {
    db.update(playerCharacterTable)
      .set(updatedPlayer)
      .where(eq(playerCharacterTable.id, player.id))
      .then(() => {
        const index = _players.value.findIndex((p) => p === player);
        _players.value[index] = updatedPlayer;
        console.log(
          `[ usePlayers ] Player with id ${player.id} updated successfully.`
        );
      })
      .catch((err) => {
        console.error(`[ usePlayers ] Error updating player: ${err}`);
      });
  };

  const findPlayer = (id: string) => {
    return _players.value.find((p) => p.id === id);
  };

  const getPlayers = async () => {
    const allPlayers = await db
      .select()
      .from(playerCharacterTable)
      .then((rows) => (_players.value = rows.map((row) => new Player(row))));
    return allPlayers;
  };

  return {
    _players,
    players,
    addPlayer,
    getPlayers,
    removePlayer,
    updatePlayer,
    findPlayer,
  };
};
