import { Player } from "~/models/player.model";

export const usePlayers = () => {
  const _players = useState<Player[]>(() => []);
  const players = computed(() => _players.value);

  const addPlayer = async (player: Player) => {
    const newID = crypto.randomUUID();
    await $fetch("/api/player", {
      method: "POST",
      body: {
        ...player,
        id: newID,
      },
    })
      .then((response) => {
        // _players.value.push(new Player(response));
      })
      .catch((error) => {
        console.error("ERROR [Player Add]", error);
      });
  };

  const removePlayer = async (player: Player) => {
    await $fetch(`/api/player/${player.id}`, {
      method: "DELETE",
    })
      .then(() => {
        _players.value = _players.value.filter((p) => p.id !== player.id);
      })
      .catch((error) => {
        console.error("Error deleting player", error);
      });
  };

  const updatePlayer = async (player: Player) => {
    await $fetch("/api/player/", {
      method: "PUT",
      body: {
        ...player,
      },
    })
      .then((response) => {
        const index = _players.value.findIndex((p) => p === player);
        _players.value[index] = player;
      })
      .catch((error) => {
        console.error("ERROR [Player Update]", error);
      });
  };

  const findPlayer = (id: string) => {
    return _players.value.find((p) => p.id === id);
  };

  const getPlayers = async (email: string) => {
    await $fetch(`/api/players`, {
      method: "GET",
      params: {
        email,
      },
    })
      .then((response) => {
        _players.value = response as Player[];
      })
      .catch((error) => {
        console.error("ERROR [Players Get]", error);
      });
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
