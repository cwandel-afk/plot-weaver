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
  labelCentered: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="grid w-full grid-cols-3">
    <div
      v-if="labelCentered"
      class="flex items-center justify-start w-full h-full"
    >
      <label :for="fieldId" class="text-white">{{ props.label }}</label>
    </div>
    <div v-else class="flex items-start justify-start w-full h-full">
      <label :for="fieldId" class="text-white">{{ props.label }}</label>
    </div>
    <div class="block w-full h-full col-span-2 text-center">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
