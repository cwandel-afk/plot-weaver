<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import FormRow from "~/layouts/form-row.vue";
import { ref, computed } from "vue";
import { BackwardIcon, TrashIcon } from "@heroicons/vue/24/solid";

const router = useRouter();
const route = useRoute();

const { findCampaign, updateCampaign, removeCampaign } = useCampaigns();

// Use computed to track changes in route parameters
const campaignId = computed(() => route.params.campaignSlug?.toString() || "");

// Find the campaign reactively
const campaign = computed(() => findCampaign(campaignId.value));

// Reactive refs for form data
const name = ref(campaign.value?.name);
const description = ref(campaign.value?.description);
const notes = ref(campaign.value?.notes);

// Watch for campaign changes to update form data
watch(campaign, (newCampaign) => {
  name.value = newCampaign?.name || "";
  description.value = newCampaign?.description || "";
  notes.value = newCampaign?.notes || "";
});

// Save Campaign
const saveCampaign = () => {
  if (!campaign.value) return;

  updateCampaign({
    ...campaign.value,
    name: name.value || "",
    description: description.value || "",
    notes: notes.value || "",
  });

  router.replace({ name: "campaigns-list" });
};

// Delete Campaign
const deleteCampaign = () => {
  if (!campaign.value) return;

  removeCampaign(campaign.value);
  router.replace({ name: "campaigns-list" });
};
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="flex items-center justify-center h-full">
        <form class="block w-1/2 space-y-8" @submit.prevent="saveCampaign">
          <FormRow>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" v-model="name" class="" />
          </FormRow>

          <FormRow>
            <label for="description" class="self-start">Description</label>
            <textarea
              type="text"
              id="description"
              name="description"
              v-model="description"
            />
          </FormRow>

          <FormRow>
            <label for="notes" class="self-start">Notes</label>
            <textarea type="text" id="notes" name="notes" v-model="notes" />
          </FormRow>

          <div class="flex justify-between w-full">
            <button @click="router.replace({ name: 'campaigns-list' })">
              <BackwardIcon class="size-6"></BackwardIcon>
            </button>
            <button type="submit">Save Campaign</button>
            <button @click="deleteCampaign()">
              <TrashIcon class="size-6"></TrashIcon>
            </button>
          </div>
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
