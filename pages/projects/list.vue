<script setup lang="ts">
import { useProjects } from "~/composables/useProjects";

const { projects } = useProjects();
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-2xl font-bold">Projects</h1>
        <NuxtLink :to="'/projects/add'">
          <button class="p-4 border-4 border-purple-700">Add Project</button>
        </NuxtLink>
      </div>
      <div
        class="rounded-xl shadow-gray-600 block w-full min-h-[75vh] p-6 bg-gray-800 shadow-inner"
      >
        <div class="block w-full h-full p-5">
          <RouterLink
            :to="`/projects/edit-${project.id}`"
            v-for="project in projects"
            :key="project.id"
            class="w-96 hover:border-purple-700 inline-block h-20 p-3 m-6 border-4 cursor-pointer"
          >
            <h2 class="text-2xl font-bold text-white">{{ project.name }}</h2>
          </RouterLink>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
