<script setup lang="ts">
import { useRoute } from "vue-router";
import { Project } from "~/composables/useProjects";

const router = useRouter();
const route = useRoute();
const projectId = route.params.projectSlug.toString();

const { findProject, updateProject, removeProject } = useProjects();
const project = findProject(projectId);

const name = ref(project?.name);
const description = ref(project?.description);
const notes = ref(project?.notes);

const saveProject = () => {
  if (!project) return;
  updateProject(
    project,
    new Project({
      name: name.value,
      description: description.value,
      notes: notes.value,
    })
  );

  router.replace({ name: "projects-list" });
};

const deleteProject = () => {
  if (!project) return;
  removeProject(project);
  router.replace({ name: "projects-list" });
};
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="grid grid-rows-4">
        <h1 class="text-2xl font-bold">Edit Project: {{ project?.name }}</h1>
        <form
          class="grid w-full h-full grid-cols-2 grid-rows-3"
          @submit.prevent="saveProject"
        >
          <div class="w-full h-full text-center border-4">
            <label for="name" class="text-white">Project Name</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="name"
              class="w-96 p-2 m-2 border-4 border-gray-800"
            />
          </div>

          <div>
            <label for="description" class="text-white">description</label>
            <input
              type="text"
              id="description"
              name="description"
              v-model="description"
              class="w-96 p-2 m-2 border-4 border-gray-800"
            />
          </div>

          <div class="col-span-2">
            <label for="notes" class="text-white">notes</label>
            <textarea
              type="text"
              id="notes"
              name="notes"
              v-model="notes"
              class="w-full p-2 m-2 border-4 border-gray-800"
            />
          </div>
          <button type="submit" class="p-4 border-4 border-purple-700">
            Save Project
          </button>
        </form>
        <div>
          <button
            class="p-4 border-4 border-red-700"
            @click="router.replace({ name: 'projects-list' })"
          >
            Cancel
          </button>
          <button class="p-4 border-4 border-red-700" @click="deleteProject()">
            Delete Project
          </button>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
