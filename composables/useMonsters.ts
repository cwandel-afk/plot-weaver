import { Monster } from "~/models/monster.model";

export const useMonsters = () => {
  const _monsters = useState<Monster[]>(() => []);
  const monsters = computed(() => _monsters.value);

  const addMonster = async (monster: Monster) => {
    const newID = crypto.randomUUID();
    await $fetch("/api/monster", {
      method: "POST",
      body: {
        ...monster,
        id: newID,
      },
    })
      .then((response) => {
        _monsters.value.push(new Monster(response));
      })
      .catch((error) => {
        console.error("ERROR [Monster Add]", error);
      });
  };

  const removeMonster = async (monster: Monster) => {
    await $fetch(`/api/monster/${monster.id}`, {
      method: "DELETE",
    })
      .then(() => {
        _monsters.value = _monsters.value.filter((m) => m.id !== monster.id);
      })
      .catch((error) => {
        console.error("Error deleting monster", error);
      });
  };

  const updateMonster = async (monster: Monster) => {
    await $fetch("/api/monster/", {
      method: "PUT",
      body: {
        ...monster,
      },
    })
      .then((response) => {
        const index = _monsters.value.findIndex((p) => p === monster);
        _monsters.value[index] = monster;
      })
      .catch((error) => {
        console.error("ERROR [Monster Update]", error);
      });
  };

  const findMonster = (id: string) => {
    return _monsters.value.find((p) => p.id === id);
  };

  const getMonsters = async (email: string) => {
    await $fetch(`/api/monsters`, {
      method: "GET",
      params: {
        email,
      },
    })
      .then((response) => {
        _monsters.value = response as Monster[];
      })
      .catch((error) => {
        console.error("ERROR [Monsters Get]", error);
      });
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
