<script setup>
import FormRow from "~/layouts/form-row.vue";
import { Campaign } from "~/models/campaign.model";

const router = useRouter();
const { addCampaign } = useCampaigns();
const { user } = useUserSession();

const name = ref("");
const description = ref("");
const notes = ref("");

const createCampaign = async () => {
  await addCampaign(
    new Campaign({
      userEmail: user.value.email,
      name: name.value,
      description: description.value,
      notes: notes.value,
    })
  );

  router.replace({ name: "campaigns-list" });
};
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="flex items-center justify-center h-full">
        <form class="block w-1/2 space-y-8" @submit.prevent="createCampaign">
          <FormRow>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" v-model="name" />
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

          <button type="submit">Add Campaign</button>
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
