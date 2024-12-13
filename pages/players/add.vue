<script setup>
import { usePlayers } from "~/composables/usePlayers";
import FormField from "~/layouts/form-field.vue";
import FormStatField from "~/layouts/form-stat-field.vue";

const router = useRouter();
const { addPlayer } = usePlayers();
const { user } = useUserSession();

const player = ref({
  name: "",
  class: "",
  level: 0,
  hitPoints: 0,
  armorClass: 0,
  playerName: "",
});

const createPlayer = async () => {
  addPlayer({
    userEmail: user.value.email,
    campaign: "Campaign 1",
    background: "Background 1",
    //stats: getStats(),
    ...player.value,
  }).then(() => {
    router.push("/players");
  });
};

const getStats = () => {
  return {
    strength: player.value.stats.strength,
    dexterity: player.value.stats.dexterity,
    constitution: player.value.stats.constitution,
    intelligence: player.value.stats.intelligence,
    wisdom: player.value.stats.wisdom,
    charisma: player.value.stats.charisma,
  };
};
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="grid items-center justify-center w-full h-full">
        <form
          class="rounded-xl flex flex-col items-center justify-center p-3 space-y-3 bg-gray-700 border-2 border-gray-500 shadow-lg"
          @submit.prevent="createPlayer"
        >
          <div class="flex items-center w-full space-x-3">
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
          </div>
          <div class="flex items-center justify-between w-full">
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
          </div>
          <button
            type="submit"
            class="w-96 p-2 text-2xl font-bold text-white bg-purple-500 border-4 border-purple-800 rounded-md"
          >
            Add Player
          </button>
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
