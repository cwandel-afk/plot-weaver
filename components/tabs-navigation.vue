<script lang="ts">
export default defineNuxtComponent({
  name: "TabsNavigation",
  components: {},
  props: {
    tabs: {
      type: Array as () => string[],
      required: true,
    },
  },
  emits: {
    tabSelected: (tab: string) => true,
  },
  setup(props, { emit }) {
    const tabsRef = ref(props.tabs);
    const selectedTab = ref(tabsRef.value[0]);

    const selectTab = (tab: string) => {
      selectedTab.value = tab;
      emit("tabSelected", tab);
    };

    return {
      tabs: tabsRef,
      selectedTab,
      selectTab,
    };
  },
});
</script>

<template>
  <div>
    <div class="block space-x-6 border-b-4 border-gray-500">
      <button
        v-for="tab in tabs"
        :key="tab"
        :aria-selected="tab === selectedTab"
        class="aria-selected:bg-gray-300 border-x-2 p-3 ml-2 border-t-2 border-gray-500 rounded-t-sm"
        @click="selectTab(tab)"
      >
        {{ tab }}
      </button>
    </div>
    <!-- <div class="tab-content">Selected Tab: {{ selectedTab }}</div> -->
    <slot></slot>
  </div>
</template>

<style scoped></style>
