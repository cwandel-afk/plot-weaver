<script setup>
import { Monster } from "@/composables/useMonsters";

const { user } = useUserSession();
const { getMonsters } = useMonsters();
const monsters = ref([]);

getMonsters(user.value.email).then((monstersData) => {
  monstersData.forEach(async (monsterData) => {
    const monster = new Monster({
      id: monsterData.id,
      name: monsterData.name,
      size: monsterData.size || "",
      type: monsterData.type || "",
      alignment: monsterData.alignment || "",
      armorClass: monsterData.armorClass || 0,
      armorClassType: monsterData.armorClassType || "",
      hitPoints: monsterData.hitPoints || 0,
      hitPointsCalculation: monsterData.hitPointsCalculation || "",
      speed: monsterData.speed || {},
      stats: monsterData.stats || {},
      savingThrows: JSON.stringify(monsterData.savingThrows || {}),
      skills: JSON.stringify(monsterData.skills || {}),
      immunitiesResistances: JSON.stringify(
        monsterData.immunitiesResistances || {}
      ),
      senses: JSON.stringify(monsterData.senses || {}),
      passivePerception: monsterData.passivePerception || 0,
      languages: monsterData.languages || "",
      challengeRating: monsterData.challengeRating || "",
      experience: monsterData.experience || 0,
      traits: JSON.stringify(monsterData.traits || {}),
      actions: JSON.stringify(monsterData.actions || {}),
      reactions: JSON.stringify(monsterData.reactions || {}),
      legendaryActions: JSON.stringify(monsterData.legendaryActions || {}),
      userEmail: monsterData.userEmail,
    });

    // await addMonster(monster);
    monsters.value.push(monster);
  });
});
</script>

<template>
  <div>
    <div class="flex items-center justify-between w-full h-20 px-6">
      <h1>My Monsters</h1>
      <NuxtLink to="monsters/add">
        <button
          class="hover:border-purple-700 p-3 font-medium tracking-wider text-white bg-gray-600 border-4 border-purple-400 rounded-md"
        >
          Add
        </button>
      </NuxtLink>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th>Type</th>
          <th>Alignment</th>
          <th>AC</th>
          <th>HP</th>
          <th>Speed</th>
          <th>Stats</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="monster in monsters" :key="monster.name">
          <NuxtLink :to="`/monsters/edit-${monster.id}`">
            <td>{{ monster.name }}</td>
            <td>{{ monster.size }}</td>
            <td>{{ monster.type }}</td>
            <td>{{ monster.alignment }}</td>
            <td>{{ monster.armorClass }}</td>
            <td>{{ monster.hitPoints }}</td>
            <td>{{ monster.Speed }}</td>
            <td>{{ monster.Stats }}</td>
          </NuxtLink>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
