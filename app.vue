<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
import ContentTileLink from "./components/content/ContentTileLink.vue";
export default {
  setup() {
    const { loggedIn, user } = useUserSession();
    const layout = ref("auth");

    const router = useRouter();
    useHead({
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    });

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
