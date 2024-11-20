<template>
  <NuxtLayout name="auth">
    <div>
      <form class="bg-slate-100 border-slate-500 w-96 grid grid-rows-3 p-4">
        <h1 class="text-2xl font-bold">Welcome to Plot Weaver</h1>
        <p class="text-pretty text-lg">
          Please sign in or continue annonymously. Signing in simpy allows us to
          save your progress, we do not collect and sell data
        </p>
        <ul class="grid items-center justify-center p-2 space-y-3">
          <li>
            <a
              class="p-3 font-bold tracking-wider text-white bg-red-400 rounded-sm shadow-md"
              href="auth/google"
              >Sign in with Google</a
            >
          </li>
        </ul>
      </form>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: "LoginPage",
  layout: "auth",
  setup() {
    useHead({
      title: "Plot Weaver Login",
    });
    return {};
  },
});
</script>

<style scoped></style>
