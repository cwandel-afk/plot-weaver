<script setup>
import TabsNavigation from "~/components/tabs-navigation.vue";

const { campaigns } = useCampaigns();
const { players, getPlayers } = usePlayers();
const { user } = useUserSession();
const tabs = campaigns.value.map((campaign) => campaign.name);

const selectedTab = ref("Players");
const selectTab = (tab) => {
  selectedTab.value = tab;
};

onMounted(() => {
  getPlayers(user.value.email);
});
</script>

<template>
  <div>
    <NuxtLayout>
      <TabsNavigation :tabs="tabs" @tab-selected="(tab) => selectTab(tab)">
      </TabsNavigation>

      <div class="flex items-center justify-between w-full h-20 px-6">
        <h1>Players</h1>
        <NuxtLink to="players/add">
          <button>Add</button>
        </NuxtLink>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>AC</th>
            <th>HP</th>
            <th>Class</th>
            <th>Level</th>
            <th>Player Name</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="player in players"
            :key="player.id"
            @click="$router.push(`/players/edit-${player.id}`)"
          >
            <td>{{ player.name }}</td>
            <td>{{ player.armorClass }}</td>
            <td>{{ player.hitPoints }}</td>
            <td>{{ player.class }}</td>
            <td>{{ player.level }}</td>
            <td>{{ player.playerName }}</td>
          </tr>
        </tbody>
      </table>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
