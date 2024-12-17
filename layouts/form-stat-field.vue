<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  fieldId: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="border-stone-300 items-center justify-center block p-1 text-center border-2 rounded-md"
  >
    <label :for="fieldId" class="text-2xl font-bold text-white">{{
      label
    }}</label>
    <div class="size-24 border-stone-500 m-2 border-4 rounded-md">
      <slot />
    </div>
  </div>
</template>
