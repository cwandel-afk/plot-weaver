<script setup>
const { user } = useUserSession();
const { getCampaigns, campaigns } = useCampaigns();

onMounted(() => {
  getCampaigns(user.value.email);
});
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-4xl font-bold">Campaigns</h1>
        <NuxtLink to="add">
          <button
            class="hover:border-purple-700 p-3 font-medium tracking-wider text-white bg-gray-600 border-4 border-purple-400 rounded-md"
          >
            Add Campaign
          </button>
        </NuxtLink>
      </div>
      <div class="block w-full h-full p-5">
        <RouterLink
          :to="`/campaigns/edit-${campaign.id}`"
          v-for="campaign in campaigns"
          :key="campaign.id"
          class="hover:ring-purple-700 hover:ring-4 ring-offset-2 h-80 inline-flex flex-col w-64 p-3 m-6 space-y-3 bg-gray-700 cursor-pointer"
        >
          <h2 class="text-2xl font-bold text-gray-100">{{ campaign.name }}</h2>
          <div class="flex-1 block p-2 overflow-y-auto border-2">
            <p class="text-gray-300">{{ campaign.description }}</p>
          </div>
        </RouterLink>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
