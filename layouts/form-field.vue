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
  <div class="flex items-center justify-start space-x-3 text-white">
    <label :for="fieldId">{{ label }}</label>
    <slot />
  </div>
</template>
