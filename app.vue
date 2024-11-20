<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
export default {
  setup() {
    const { loggedIn, user } = useUserSession();
    const layout = ref("auth");

    const router = useRouter();

    onMounted(() => {
      console.log("mounted", user.value);
      if (!loggedIn.value) {
        router.push({ name: "login" });
        layout.value = "auth";
      } else {
        layout.value = "default";
      }
    });

    watch(loggedIn, (newValue) => {
      if (!newValue) {
        router.push({ name: "login" });
        layout.value = "auth";
      } else {
        layout.value = "default";
      }
    });

    return { layout };
  },
};
</script>
