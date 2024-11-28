<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
export default {
  setup() {
    const { loggedIn, user } = useUserSession();

    const router = useRouter();
    useHead({
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    });

    onMounted(() => {
      console.log("mounted", user.value);
      if (!loggedIn.value) router.push({ name: "login" });
    });

    return {};
  },
};
</script>
