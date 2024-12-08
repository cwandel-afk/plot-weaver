<script setup lang="ts">
import TabsNavigation from "~/components/tabs-navigation.vue";

const selectedTab = ref("Monsters");
const selectTab = (tab: string) => {
  selectedTab.value = tab;
};
</script>

<template>
  <div>
    <NuxtLayout>
      <TabsNavigation
        :tabs="['Monsters', 'Custom Monsters', 'Community Monsters']"
        @tab-selected="(tab) => selectTab(tab)"
      >
        <div v-if="selectedTab === 'Monsters'">
          <MonstersProvided />
        </div>
        <div v-if="selectedTab === 'Custom Monsters'">
          <h1>Tab 2 Content</h1>
        </div>
        <div v-if="selectedTab === 'Community Monsters'">
          <h1>Tab 3 Content</h1>
        </div>
      </TabsNavigation>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
