<script setup>
import { ref, onMounted } from "vue";
import { useMonsters, Monster } from "~/composables/useMonsters";
import FormField from "~/layouts/form-field.vue";
import FormStatField from "~/layouts/form-stat-field.vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const { findMonster, updateMonster, removeMonster } = useMonsters();
const { user } = useUserSession();

const monsterSlug = Array.isArray(route.params.monsterSlug)
  ? route.params.monsterSlug[0]
  : route.params.monsterSlug;
const monster = ref(null);

const name = ref("");
const type = ref("");
const hitPoints = ref(0);
const armorClass = ref(0);
const speed = ref(0);
const stats = ref({
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
});
const size = ref("");
const alignment = ref("");
const armorClassType = ref("");
const hitPointsCalculation = ref("");
const savingThrows = ref("");
const skills = ref("");
const immunitiesResistances = ref("");
const senses = ref("");
const passivePerception = ref("");
const languages = ref("");
const challengeRating = ref("");
const experience = ref("");
const traits = ref("");
const actions = ref("");
const reactions = ref("");
const legendaryActions = ref("");

const getStats = () => {
  return {
    strength: stats.value.strength,
    dexterity: stats.value.dexterity,
    constitution: stats.value.constitution,
    intelligence: stats.value.intelligence,
    wisdom: stats.value.wisdom,
    charisma: stats.value.charisma,
  };
};

const loadMonster = async () => {
  monster.value = findMonster(monsterSlug) || null;
  if (monster.value) {
    name.value = monster.value.name;
    type.value = monster.value.type || "";
    hitPoints.value = monster.value.hitPoints
      ? parseInt(monster.value.hitPoints)
      : 0;
    armorClass.value = monster.value.armorClass
      ? parseInt(monster.value.armorClass)
      : 0;
    speed.value = monster.value.speed ? parseInt(monster.value.speed) : 0;
    stats.value = JSON.parse(monster.value.stats);
    size.value = monster.value.size || "";
    alignment.value = monster.value.alignment || "";
    armorClassType.value = monster.value.armorClassType || "";
    hitPointsCalculation.value = monster.value.hitPointsCalculation || "";
    savingThrows.value = monster.value.savingThrows || "";
    skills.value = monster.value.skills || "";
    immunitiesResistances.value = monster.value.immunitiesResistances || "";
    senses.value = monster.value.senses || "";
    passivePerception.value = monster.value.passivePerception || "";
    languages.value = monster.value.languages || "";
    challengeRating.value = monster.value.challengeRating || "";
    experience.value = monster.value.experience || "";
    traits.value = monster.value.traits || "";
    actions.value = monster.value.actions || "";
    reactions.value = monster.value.reactions || "";
    legendaryActions.value = monster.value.legendaryActions || "";
  }
};

const updateMonsterData = async () => {
  if (monster.value) {
    updateMonster(
      monster.value,
      new Monster({
        id: monster.value.id,
        userEmail: user.value.email,
        name: name.value,
        type: type.value,
        hitPoints: hitPoints.value.toString(),
        armorClass: armorClass.value.toString(),
        speed: speed.value.toString(),
        size: size.value,
        alignment: alignment.value,
        armorClassType: armorClassType.value,
        hitPointsCalculation: hitPointsCalculation.value,
        stats: getStats(),
        savingThrows: savingThrows.value,
        skills: skills.value,
        immunitiesResistances: immunitiesResistances.value,
        senses: senses.value,
        passivePerception: passivePerception.value,
        languages: languages.value,
        challengeRating: challengeRating.value,
        experience: experience.value,
        traits: traits.value,
        actions: actions.value,
        reactions: reactions.value,
        legendaryActions: legendaryActions.value,
      })
    );

    router.replace({ path: "/monsters" });
  }
};

const remove = async (monster) => {
  removeMonster(monster);
  router.replace({ path: "/monsters" });
};

onMounted(() => {
  loadMonster();
});
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="grid items-center justify-center w-full h-full">
        <form
          class="rounded-xl flex flex-col items-center justify-center p-3 space-y-3 bg-gray-700 border-2 border-gray-500 shadow-lg"
          @submit.prevent="updateMonsterData"
        >
          <div class="flex items-center w-full space-x-3">
            <FormField fieldId="name" label="Monster Name">
              <input
                type="text"
                id="name"
                name="name"
                v-model="name"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="type" label="Type">
              <select
                v-model="type"
                id="type"
                class="placeholder:text-black placeholder:font-bold w-56 p-2 border-4 border-gray-800"
                placeholder="Select a type"
              >
                <option value="Aberration">Aberration</option>
                <option value="Beast">Beast</option>
                <option value="Celestial">Celestial</option>
                <option value="Construct">Construct</option>
                <option value="Dragon">Dragon</option>
                <option value="Elemental">Elemental</option>
                <option value="Fey">Fey</option>
                <option value="Fiend">Fiend</option>
                <option value="Giant">Giant</option>
                <option value="Humanoid">Humanoid</option>
                <option value="Monstrosity">Monstrosity</option>
                <option value="Ooze">Ooze</option>
                <option value="Plant">Plant</option>
                <option value="Undead">Undead</option>
              </select>
            </FormField>
          </div>
          <div class="flex items-center justify-between w-full">
            <FormField fieldId="hitPoints" label="HP">
              <input
                type="number"
                id="hitPoints"
                name="hitPoints"
                v-model="hitPoints"
                class="w-28 p-2 mr-3 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="armorClass" label="AC">
              <input
                type="number"
                id="armorClass"
                name="armorClass"
                v-model="armorClass"
                class="w-28 p-2 mr-3 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="speed" label="SPD">
              <input
                type="number"
                id="speed"
                name="speed"
                v-model="speed"
                class="w-28 p-2 mr-3 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="size" label="Size">
              <select
                id="size"
                name="size"
                v-model="size"
                class="w-28 p-2 mr-3"
              >
                <option value="Tiny">Tiny</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Huge">Huge</option>
                <option value="Gargantuan">Gargantuan</option>
              </select>
            </FormField>
          </div>
          <div class="flex items-center justify-between w-full">
            <FormField fieldId="hitPointsCalculation" label="HP Dice">
              <input
                type="text"
                id="hitPointsCalculation"
                name="hitPointsCalculation"
                v-model="hitPointsCalculation"
                class="w-32 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="armorClassType" label="AC Type">
              <input
                type="text"
                id="armorClassType"
                name="armorClassType"
                v-model="armorClassType"
                class="w-52 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="alignment" label="Alignment">
              <select
                id="alignment"
                name="alignment"
                v-model="alignment"
                class="w-52 p-2"
              >
                <option value="Lawful Good">Lawful Good</option>
                <option value="Neutral Good">Neutral Good</option>
                <option value="Chaotic Good">Chaotic Good</option>
                <option value="Lawful Neutral">Lawful Neutral</option>
                <option value="True Neutral">True Neutral</option>
                <option value="Chaotic Neutral">Chaotic Neutral</option>
                <option value="Lawful Evil">Lawful Evil</option>
                <option value="Neutral Evil">Neutral Evil</option>
                <option value="Chaotic Evil">Chaotic Evil</option>
              </select>
            </FormField>
          </div>
          <div class="flex justify-between w-full">
            <FormStatField fieldId="strength" label="STR">
              <input
                type="number"
                id="strength"
                name="strength"
                v-model="stats.strength"
                class="w-full h-full p-2 text-4xl border-4 border-gray-800"
              />
            </FormStatField>
            <FormStatField fieldId="dexterity" label="DEX">
              <input
                type="number"
                id="dexterity"
                name="dexterity"
                v-model="stats.dexterity"
                class="w-full h-full p-2 text-4xl border-4 border-gray-800"
              />
            </FormStatField>
            <FormStatField fieldId="constitution" label="CON">
              <input
                type="number"
                id="constitution"
                name="constitution"
                v-model="stats.constitution"
                class="w-full h-full p-2 text-4xl border-4 border-gray-800"
              />
            </FormStatField>
            <FormStatField fieldId="intelligence" label="INT">
              <input
                type="number"
                id="intelligence"
                name="intelligence"
                v-model="stats.intelligence"
                class="w-full h-full p-2 text-4xl border-4 border-gray-800"
              />
            </FormStatField>
            <FormStatField fieldId="wisdom" label="WIS">
              <input
                type="number"
                id="wisdom"
                name="wisdom"
                v-model="stats.wisdom"
                class="w-full h-full p-2 text-4xl border-4 border-gray-800"
              />
            </FormStatField>
            <FormStatField fieldId="charisma" label="CHA">
              <input
                type="number"
                id="charisma"
                name="charisma"
                v-model="stats.charisma"
                class="w-full h-full p-2 text-4xl border-4 border-gray-800"
              />
            </FormStatField>
          </div>
          <div class="flex justify-between w-full">
            <FormField fieldId="savingThrows" label="Saving Throws">
              <input
                type="text"
                id="savingThrows"
                name="savingThrows"
                v-model="savingThrows"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>

            <FormField fieldId="skills" label="Skills">
              <input
                type="text"
                id="skills"
                name="skills"
                v-model="skills"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
          </div>
          <div class="flex justify-between w-full">
            <FormField
              fieldId="immunitiesResistances"
              label="Immunities/Resistances"
            >
              <input
                type="text"
                id="immunitiesResistances"
                name="immunitiesResistances"
                v-model="immunitiesResistances"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="senses" label="Senses">
              <input
                type="text"
                id="senses"
                name="senses"
                v-model="senses"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
          </div>
          <div class="flex justify-between w-full">
            <FormField fieldId="passivePerception" label="Passive Perception">
              <input
                type="text"
                id="passivePerception"
                name="passivePerception"
                v-model="passivePerception"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="languages" label="Languages">
              <input
                type="text"
                id="languages"
                name="languages"
                v-model="languages"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
          </div>
          <div class="flex justify-between w-full">
            <FormField fieldId="challengeRating" label="Challenge Rating">
              <input
                type="text"
                id="challengeRating"
                name="challengeRating"
                v-model="challengeRating"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="experience" label="Experience">
              <input
                type="text"
                id="experience"
                name="experience"
                v-model="experience"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
          </div>
          <div class="flex justify-between w-full">
            <FormField fieldId="traits" label="Traits">
              <input
                type="text"
                id="traits"
                name="traits"
                v-model="traits"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="actions" label="Actions">
              <input
                type="text"
                id="actions"
                name="actions"
                v-model="actions"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
          </div>
          <div class="flex justify-between w-full">
            <FormField fieldId="reactions" label="Reactions">
              <input
                type="text"
                id="reactions"
                name="reactions"
                v-model="reactions"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="legendaryActions" label="Legendary Actions">
              <input
                type="text"
                id="legendaryActions"
                name="legendaryActions"
                v-model="legendaryActions"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
          </div>
          <div class="grid items-center justify-center w-full grid-cols-2">
            <button
              type="submit"
              class="w-96 p-2 text-2xl font-bold text-white bg-purple-500 border-4 border-purple-800 rounded-md"
            >
              Update Monster
            </button>

            <button
              @click="remove(monster)"
              class="w-96 p-2 text-2xl font-bold text-white bg-purple-500 border-4 border-purple-800 rounded-md"
            >
              Delete Monster
            </button>
          </div>
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
