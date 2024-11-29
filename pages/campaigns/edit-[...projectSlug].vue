<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { Project } from "~/composables/useCampaigns";
import FormRow from "~/layouts/form-row.vue";
import { ref, computed } from "vue";

const router = useRouter();
const route = useRoute();

const { findProject, updateProject, removeProject } = useProjects();

// Use computed to track changes in route parameters
const projectId = computed(() => route.params.projectSlug?.toString() || "");

// Find the project reactively
const project = computed(() => findProject(projectId.value));

// Reactive refs for form data
const name = ref(project.value?.name);
const description = ref(project.value?.description);
const notes = ref(project.value?.notes);

// Watch for project changes to update form data
watch(project, (newProject) => {
  name.value = newProject?.name || "";
  description.value = newProject?.description || "";
  notes.value = newProject?.notes || "";
});

// Save Project
const saveProject = () => {
  if (!project.value) return;

  updateProject(
    project.value,
    new Project({
      id: project.value.id,
      name: name.value,
      description: description.value,
      notes: notes.value,
    })
  );

  router.replace({ name: "projects-list" });
};

// Delete Project
const deleteProject = () => {
  if (!project.value) return;

  removeProject(project.value);
  router.replace({ name: "projects-list" });
};
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="grid items-center justify-center w-full h-full">
        <form
          class="rounded-xl grid-rows-7 grid items-center justify-center gap-4 p-3 bg-gray-700 border-2 border-gray-500 shadow-lg"
          @submit.prevent="saveProject"
        >
          <FormRow label="Project Name" fieldId="name" class="row-span-1">
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
            Save Project
          </button>
        </form>
        <div class="flex justify-between mt-4">
          <button
            class="p-4 text-white border-4 border-red-700"
            @click="router.replace({ name: 'projects-list' })"
          >
            Cancel
          </button>
          <button
            class="p-4 text-white border-4 border-red-700"
            @click="deleteProject()"
          >
            Delete Project
          </button>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
