<script setup>
import { PlusIcon } from "@heroicons/vue/24/solid";
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
          <button>
            <label>Add Campaign</label>
            <PlusIcon class="size-6"></PlusIcon>
          </button>
        </NuxtLink>
      </div>
      <div class="grid w-full grid-flow-row grid-cols-4 gap-5 p-5">
        <CampaignTile v-for="campaign in campaigns" :campaign="campaign" />
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
