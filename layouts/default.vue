<template>
  <div class="bg-stone-400 flex flex-row w-screen h-screen">
    <RootNavigation />
    <div class="w-full h-screen p-6 overflow-y-auto">
      <slot />
    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  name: "DefaultLayout",
  setup() {
    return {};
  },
});
</script>
