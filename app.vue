<template>
  <div class="overflow-hidden">
    <NuxtPage />
  </div>
</template>

<script>
export default {
  setup() {
    const { loggedIn, user, session } = useUserSession();

    const router = useRouter();
    useHead({
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    });

    onMounted(() => {
      console.group("Login Mounted");
      console.log("User:", user.value);
      console.log("Session:", session.value);
      console.log("Session User", session.value?.user);
      console.log("Session User Email:", session.value?.user?.email);
      console.groupEnd();
      if (!loggedIn.value) router.push({ name: "login" });
    });

    return {};
  },
};
</script>
