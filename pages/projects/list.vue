<script setup lang="ts">
import { Project } from "~/composables/useProjects";

const { getProjects } = useProjects();

const projects = ref<Project[]>([]);

onMounted(async () => {
  await getProjects().then((data) => {
    projects.value = data;
  });
});
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-4xl font-bold">Projects</h1>
        <NuxtLink :to="'/projects/add'">
          <button
            class="hover:border-purple-700 p-3 font-medium tracking-wider text-white bg-gray-600 border-4 border-purple-400 rounded-md"
          >
            Add Project
          </button>
        </NuxtLink>
      </div>
      <div class="block w-full h-full p-5">
        <RouterLink
          :to="`/projects/edit-${project.id}`"
          v-for="project in projects"
          :key="project.id"
          class="hover:ring-purple-700 hover:ring-4 ring-offset-2 h-80 inline-block w-64 p-3 m-6 bg-gray-700 cursor-pointer"
        >
          <h2 class="text-2xl font-bold text-gray-100">{{ project.name }}</h2>
          <p class="text-gray-200">{{ project.description }}</p>
        </RouterLink>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
