<script setup lang="ts">
import { useProjects, Project } from "~/composables/useProjects";

const router = useRouter();
const { projects, addProject } = useProjects();

const name = ref("");
const description = ref("");
const notes = ref("");
const files = ref<File[]>([]);

const createProject = () => {
  addProject(
    new Project({
      id: crypto.randomUUID(),
      name: name.value,
      description: description.value,
      notes: notes.value,
    })
  );

  router.replace({ name: "projects-list" });
};
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="grid items-center justify-center w-full h-full">
        <form class="p-6 bg-gray-900" @submit.prevent="createProject">
          <div class="flex flex-col items-center justify-center">
            <label for="name" class="text-white">Project Name</label>

            <input
              type="text"
              id="name"
              name="name"
              v-model="name"
              class="w-96 p-2 m-2 border-4 border-gray-800"
            />
            <label for="description" class="text-white">description</label>

            <input
              type="text"
              id="description"
              name="description"
              v-model="description"
              class="w-96 p-2 m-2 border-4 border-gray-800"
            />
            <label for="notes" class="text-white">notes</label>

            <input
              type="text"
              id="notes"
              name="notes"
              v-model="notes"
              class="w-96 p-2 m-2 border-4 border-gray-800"
            />

            <button
              type="submit"
              class="p-4 text-white border-4 border-purple-700"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
