<script setup>
import { useMonsters } from "~/composables/useMonsters";
import FormField from "~/layouts/form-field.vue";
import FormStatField from "~/layouts/form-stat-field.vue";

const router = useRouter();
const { addMonster } = useMonsters();
const { user } = useUserSession();

const monster = ref({
  name: "",
  type: "",
  hitPoints: 0,
  armorClass: 0,
  speed: 0,
  stats: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  size: "",
  alignment: "",
  armorClassType: "",
  hitPointsCalculation: "",
  savingThrows: "",
  skills: "",
  immunitiesResistances: "",
  senses: "",
  passivePerception: "",
  languages: "",
  challengeRating: "",
  experience: "",
  traits: "",
  actions: "",
  reactions: "",
  legendaryActions: "",
});

const createMonster = async () => {
  addMonster({
    userEmail: user.value.email,
    stats: getStats(),
    ...monster.value,
  }).then(() => {
    router.push("/monsters");
  });
};

const getStats = () => {
  return {
    strength: monster.value.stats.strength,
    dexterity: monster.value.stats.dexterity,
    constitution: monster.value.stats.constitution,
    intelligence: monster.value.stats.intelligence,
    wisdom: monster.value.stats.wisdom,
    charisma: monster.value.stats.charisma,
  };
};
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="grid items-center justify-center w-full h-full">
        <form
          class="rounded-xl flex flex-col items-center justify-center p-3 space-y-3 bg-gray-700 border-2 border-gray-500 shadow-lg"
          @submit.prevent="createMonster"
        >
          <div class="flex items-center w-full space-x-3">
            <FormField fieldId="name" label="Monster Name">
              <input
                type="text"
                id="name"
                name="name"
                v-model="monster.name"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="type" label="Type">
              <select
                v-model="monster.type"
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
                v-model="monster.hitPoints"
                class="w-28 p-2 mr-3 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="armorClass" label="AC">
              <input
                type="number"
                id="armorClass"
                name="armorClass"
                v-model="monster.armorClass"
                class="w-28 p-2 mr-3 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="speed" label="SPD">
              <input
                type="number"
                id="speed"
                name="speed"
                v-model="monster.speed"
                class="w-28 p-2 mr-3 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="size" label="Size">
              <select
                id="size"
                name="size"
                v-model="monster.size"
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
                v-model="monster.hitPointsCalculation"
                class="w-32 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="armourClassType" label="AC Type">
              <input
                type="text"
                id="armourClassType"
                name="armourClassType"
                v-model="monster.armourClassType"
                class="w-52 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="alignment" label="Alignment">
              <select
                id="alignment"
                name="alignment"
                v-model="monster.alignment"
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
                v-model="monster.stats.strength"
                class="w-full h-full p-2 text-4xl border-4 border-gray-800"
              />
            </FormStatField>
            <FormStatField fieldId="dexterity" label="DEX">
              <input
                type="number"
                id="dexterity"
                name="dexterity"
                v-model="monster.stats.dexterity"
                class="w-full h-full p-2 text-4xl border-4 border-gray-800"
              />
            </FormStatField>
            <FormStatField fieldId="constitution" label="CON">
              <input
                type="number"
                id="constitution"
                name="constitution"
                v-model="monster.stats.constitution"
                class="w-full h-full p-2 text-4xl border-4 border-gray-800"
              />
            </FormStatField>
            <FormStatField fieldId="intelligence" label="INT">
              <input
                type="number"
                id="intelligence"
                name="intelligence"
                v-model="monster.stats.intelligence"
                class="w-full h-full p-2 text-4xl border-4 border-gray-800"
              />
            </FormStatField>
            <FormStatField fieldId="wisdom" label="WIS">
              <input
                type="number"
                id="wisdom"
                name="wisdom"
                v-model="monster.stats.wisdom"
                class="w-full h-full p-2 text-4xl border-4 border-gray-800"
              />
            </FormStatField>
            <FormStatField fieldId="charisma" label="CHA">
              <input
                type="number"
                id="charisma"
                name="charisma"
                v-model="monster.stats.charisma"
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
                v-model="monster.savingThrows"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>

            <FormField fieldId="skills" label="Skills">
              <input
                type="text"
                id="skills"
                name="skills"
                v-model="monster.skills"
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
                v-model="monster.immunitiesResistances"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="senses" label="Senses">
              <input
                type="text"
                id="senses"
                name="senses"
                v-model="monster.senses"
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
                v-model="monster.passivePerception"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="languages" label="Languages">
              <input
                type="text"
                id="languages"
                name="languages"
                v-model="monster.languages"
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
                v-model="monster.challengeRating"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="experience" label="Experience">
              <input
                type="text"
                id="experience"
                name="experience"
                v-model="monster.experience"
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
                v-model="monster.traits"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="actions" label="Actions">
              <input
                type="text"
                id="actions"
                name="actions"
                v-model="monster.actions"
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
                v-model="monster.reactions"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
            <FormField fieldId="legendaryActions" label="Legendary Actions">
              <input
                type="text"
                id="legendaryActions"
                name="legendaryActions"
                v-model="monster.legendaryActions"
                class="w-96 p-2 border-4 border-gray-800"
              />
            </FormField>
          </div>
          <button
            type="submit"
            class="w-96 p-2 text-2xl font-bold text-white bg-purple-500 border-4 border-purple-800 rounded-md"
          >
            Add Monster
          </button>
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
