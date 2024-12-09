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
    class="items-center justify-center block p-1 text-center border-2 border-purple-300 rounded-md"
  >
    <label :for="fieldId" class="text-2xl font-bold text-white">{{
      label
    }}</label>
    <div class="size-24 m-2 border-4 border-purple-500 rounded-md">
      <slot />
    </div>
  </div>
</template>
