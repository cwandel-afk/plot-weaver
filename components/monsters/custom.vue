<script setup>
const { user } = useUserSession();
const { getMonsters, monsters } = useMonsters();

getMonsters(user.value.email);
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
        <tr
          v-for="monster in monsters"
          :key="monster.name"
          @click="$router.push(`/monsters/edit-${monster.id}`)"
        >
          <td>{{ monster.name }}</td>
          <td>{{ monster.size }}</td>
          <td>{{ monster.type }}</td>
          <td>{{ monster.alignment }}</td>
          <td>{{ monster.armorClass }}</td>
          <td>{{ monster.hitPoints }}</td>
          <td>{{ monster.Speed }}</td>
          <td>{{ monster.Stats }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
