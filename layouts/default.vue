<template>
  <div class="bg-slate-300 flex flex-row w-screen min-h-screen">
    <RootNavigation />
    <div class="w-full p-6">
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
