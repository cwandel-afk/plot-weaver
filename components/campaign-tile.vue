<script setup>
defineProps({
  campaign: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    :to="`/campaigns/edit-${campaign.id}`"
    :key="campaign.id"
    class="bg-stone-700 h-80 block w-full p-4 rounded-md"
  >
    <h2 class="text-2xl font-bold text-gray-100">{{ campaign.name }}</h2>
    <div
      class="flex-1 block p-2 m-2 overflow-y-auto border-t-2 border-orange-400"
    >
      <p class="text-gray-300">{{ campaign.description }}</p>
    </div>
  </RouterLink>
</template>

<style scoped></style>
