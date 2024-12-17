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
    <div class="grid grid-flow-row grid-cols-6 pb-1 border-b-4 border-gray-500">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="aria-selected:text-orange-500"
        :aria-selected="tab === selectedTab"
        @click="selectTab(tab)"
      >
        {{ tab }}
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped></style>
