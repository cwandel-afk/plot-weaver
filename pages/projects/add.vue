<script setup lang="ts">
import { useProjects, Project } from "~/composables/useProjects";
import FormRow from "~/layouts/form-row.vue";
import { useDrizzle } from "@/server/utils/drizzle";

const router = useRouter();
const { projects, addProject } = useProjects();

const name = ref("");
const description = ref("");
const notes = ref("");
const files = ref<File[]>([]);

const db = hubDatabase();

const createProject = async () => {
  const newID = crypto.randomUUID();
  await useDrizzle()
    .$client.prepare(
      `INSERT INTO projects (id, name, description, notes) VALUES (?1, ?2, ?3, ?4)`
    )
    .bind(newID, name.value, description.value, notes.value)
    .run()
    .then(() => {
      console.log("Project added");
      addProject(
        new Project({
          id: newID,
          name: name.value,
          description: description.value,
          notes: notes.value,
        })
      );
    })
    .catch((err: any) => {
      console.error(err);
    });

  // addProject(
  //   new Project({
  //     id: newID,
  //     name: name.value,
  //     description: description.value,
  //     notes: notes.value,
  //   })
  // );

  router.replace({ name: "projects-list" });
};
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="grid items-center justify-center w-full h-full">
        <form
          class="rounded-xl grid-rows-7 grid items-center justify-center gap-4 p-3 bg-gray-700 border-2 border-gray-500 shadow-lg"
          @submit.prevent="createProject"
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
            Add Project
          </button>
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
