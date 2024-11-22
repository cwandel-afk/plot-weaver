<script lang="ts">
import {
  HomeIcon,
  BookOpenIcon,
  PlusIcon,
  FolderOpenIcon,
} from "@heroicons/vue/24/outline";
export default defineNuxtComponent({
  name: "ContentTileLink",
  components: {
    HomeIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // component logic here

    const iconComponent = computed(() => {
      switch (props.icon) {
        case "Home":
          return HomeIcon;
        case "Docs":
          return BookOpenIcon;
        case "Add":
          return PlusIcon;
        case "Projects":
          return FolderOpenIcon;
        default:
          return null;
      }
    });

    return {
      iconComponent,
    };
  },
});
</script>

<template>
  <div class="min-w-96 block">
    <NuxtLink :to="to">
      <div
        class="bg-zinc-700 rounded-xl grid items-center justify-center grid-cols-2 p-8 text-white border-4 border-purple-400"
      >
        <div class="grid items-center justify-start w-full">
          <h2 class="my-auto text-2xl font-semibold tracking-widest text-white">
            {{ title }}
          </h2>
        </div>
        <div class="grid items-center justify-end w-full">
          <component :is="iconComponent" class="size-12" />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
