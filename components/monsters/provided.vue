<script setup lang="ts">
import { Monster } from "@/composables/useMonsters";
import monstersData from "@/assets/data/monsters.json";
const monsters = ref<Monster[]>([]);

const parse_speed = (speed: any) => {
  return Object.entries(speed)
    .map((spd) => `${spd[1]}`)
    .join(", ");
};

const parse_stats = (stats: any) => {
  return Object.entries(stats)
    .map((stat) => `${stat[1]}`)
    .join(", ");
};

monstersData.forEach(async (monsterData) => {
  const monster = new Monster({
    name: monsterData.name,
    size: monsterData.size,
    type: monsterData.type,
    alignment: monsterData.alignment,
    armourClass: monsterData.armour_class,
    armourClassType: monsterData.armour_class_type,
    hitPoints: monsterData.hit_points,
    hitPointsCalculation: monsterData.hit_points_calculation,
    speed: parse_speed(monsterData.speed),
    stats: parse_stats(monsterData.stats),
    savingThrows: JSON.stringify(monsterData.saving_throws),
    skills: JSON.stringify(monsterData.skills),
    immunitiesResistances: JSON.stringify(monsterData.immunities_resistances),
    senses: JSON.stringify(monsterData.senses),
    passivePerception: monsterData.passive_perception,
    languages: monsterData.languages,
    challengeRating: monsterData.challenge_rating,
    experience: monsterData.experience,
    traits: JSON.stringify(monsterData.traits),
    actions: JSON.stringify(monsterData.actions),
    reactions: JSON.stringify(monsterData.reactions),
    legendaryActions: JSON.stringify(monsterData.legendary_actions),
  });

  // await addMonster(monster);
  monsters.value.push(monster);
});
</script>

<template>
  <div>
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
          <td>{{ monster.name }}</td>
          <td>{{ monster.size }}</td>
          <td>{{ monster.type }}</td>
          <td>{{ monster.alignment }}</td>
          <td>{{ monster.armourClass }}</td>
          <td>{{ monster.hitPoints }}</td>
          <td>{{ monster.Speed }}</td>
          <td>{{ monster.Stats }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
