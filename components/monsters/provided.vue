<script setup lang="ts">
import monstersData from "@/assets/data/monsters.json";
import { Monster } from "~/models/monster.model";
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
    armorClass: monsterData.armour_class,
    armorClassType: monsterData.armour_class_type,
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
          <th>AC</th>
          <th>HP</th>
          <th>Stats</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="monster in monsters" :key="monster.name">
          <td>{{ monster.name }}</td>
          <td>{{ monster.size }}</td>
          <td>{{ monster.type }}</td>
          <td>{{ monster.armorClass }}</td>
          <td>{{ monster.hitPoints }}</td>
          <td>{{ monster.Stats }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
