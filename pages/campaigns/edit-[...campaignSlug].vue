<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import FormRow from "~/layouts/form-row.vue";
import { ref, computed } from "vue";

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
      <div class="grid items-center justify-center w-full h-full">
        <form
          class="rounded-xl grid-rows-7 grid items-center justify-center gap-4 p-3 bg-gray-700 border-2 border-gray-500 shadow-lg"
          @submit.prevent="saveCampaign"
        >
          <FormRow label="Campaign Name" fieldId="name" class="row-span-1">
            <input
              type="text"
              id="name"
              name="name"
              v-model="name"
              class="w-96 p-2 border-4 border-gray-800"
            />
          </FormRow>

          <FormRow
            label="Description"
            fieldId="description"
            :labelCentered="false"
            class="row-span-3"
          >
            <textarea
              type="text"
              id="description"
              name="description"
              v-model="description"
              class="h-52 w-full p-2 border-4 border-gray-800 resize-none"
            />
          </FormRow>

          <FormRow
            label="Notes"
            fieldId="notes"
            :labelCentered="false"
            class="row-span-3"
          >
            <textarea
              type="text"
              id="notes"
              name="notes"
              v-model="notes"
              class="h-52 w-full p-2 border-4 border-gray-800 resize-none"
            />
          </FormRow>

          <button
            type="submit"
            class="p-4 text-white border-4 border-purple-700"
          >
            Save Campaign
          </button>
        </form>
        <div class="flex justify-between mt-4">
          <button
            class="p-4 text-white border-4 border-red-700"
            @click="router.replace({ name: 'campaigns-list' })"
          >
            Cancel
          </button>
          <button
            class="p-4 text-white border-4 border-red-700"
            @click="deleteCampaign()"
          >
            Delete Campaign
          </button>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
