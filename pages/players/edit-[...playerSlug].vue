<script setup>
import { ref, onMounted } from "vue";
import { usePlayers } from "~/composables/usePlayers";
import FormField from "~/layouts/form-field.vue";
import { useRouter, useRoute } from "vue-router";
import { BackwardIcon, TrashIcon } from "@heroicons/vue/24/solid";

const router = useRouter();
const route = useRoute();
const { findPlayer, updatePlayer, removePlayer } = usePlayers();
const { user } = useUserSession();

const playerSlug = Array.isArray(route.params.playerSlug)
  ? route.params.playerSlug[0]
  : route.params.playerSlug;

const player = ref({
  id: "",
  name: "",
  class: "",
  level: 0,
  hitPoints: 0,
  armorClass: 0,
  playerName: "",
});

const loadPlayer = async () => {
  const plyr = findPlayer(playerSlug) || null;
  if (plyr) {
    player.value = { ...plyr };
  }
};

const update = async () => {
  if (player.value) {
    await updatePlayer(player.value)
      .then(() => {
        router.replace({ path: "/players" });
      })
      .catch((error) => {
        console.error("Error updating player", error);
      });
  }
};

const remove = async (player) => {
  removePlayer(player)
    .then(() => {
      router.replace({ path: "/players" });
    })
    .catch((error) => {
      console.error("Error removing player", error);
    });
};

onMounted(() => {
  loadPlayer();
});
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="grid items-center justify-center w-full h-full">
        <form
          class="grid items-center justify-center grid-flow-row grid-cols-2 gap-4"
          @submit.prevent="update"
        >
          <FormField fieldId="name" label="Player Name">
            <input
              type="text"
              id="name"
              name="name"
              v-model="player.name"
              class="w-96 p-2 border-4 border-gray-800"
            />
          </FormField>
          <FormField fieldId="class" label="Class">
            <input
              type="text"
              id="class"
              name="class"
              v-model="player.class"
              class="w-56 p-2 border-4 border-gray-800"
            />
          </FormField>
          <FormField fieldId="level" label="Level">
            <input
              type="number"
              id="level"
              name="level"
              v-model="player.level"
              class="w-28 p-2 mr-3 border-4 border-gray-800"
            />
          </FormField>
          <FormField fieldId="hitPoints" label="HP">
            <input
              type="number"
              id="hitPoints"
              name="hitPoints"
              v-model="player.hitPoints"
              class="w-28 p-2 mr-3 border-4 border-gray-800"
            />
          </FormField>
          <FormField fieldId="armorClass" label="AC">
            <input
              type="number"
              id="armorClass"
              name="armorClass"
              v-model="player.armorClass"
              class="w-28 p-2 mr-3 border-4 border-gray-800"
            />
          </FormField>
          <FormField fieldId="playerName" label="Player Name">
            <input
              type="text"
              id="playerName"
              name="playerName"
              v-model="player.playerName"
              class="w-28 p-2 mr-3 border-4 border-gray-800"
            />
          </FormField>
          <div class="flex justify-between w-full col-span-3">
            <button @click="router.replace({ name: 'players' })">
              <BackwardIcon class="size-6"></BackwardIcon>
            </button>
            <button type="submit">Save Player</button>
            <button @click="remove(player)">
              <TrashIcon class="size-6"></TrashIcon>
            </button>
          </div>
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
