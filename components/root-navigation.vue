<template>
  <div
    class="bg-slate-100 sticky top-0 left-0 grid justify-center w-16 h-screen grid-rows-2"
  >
    <ul class="grid-rows-7 grid items-center justify-center w-16">
      <li>
        <NuxtLink to="/" class="group">
          <HomeIcon class="size-8 group-[.router-link-active]:text-amber-700" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/players" class="group">
          <UsersIcon
            class="size-8 group-[.router-link-active]:text-amber-700"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/entities" class="group">
          <IdentificationIcon
            class="size-8 group-[.router-link-active]:text-amber-700"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/map-builder" class="group">
          <GlobeAmericasIcon
            class="size-8 group-[.router-link-active]:text-amber-700"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/initiative" class="group">
          <NumberedListIcon
            class="size-8 group-[.router-link-active]:text-amber-700"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/spellbook" class="group">
          <FireIcon class="size-8 group-[.router-link-active]:text-amber-700" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects/list" class="group">
          <FolderOpenIcon
            class="size-8 group-[.router-link-active]:text-amber-700"
          />
        </NuxtLink>
      </li>
    </ul>
    <ul class="grid items-center justify-center w-16 grid-rows-6">
      <li class="order-last">
        <Cog6ToothIcon class="size-8" />
      </li>
      <li class="order-5">
        <CreditCardIcon class="size-8" />
      </li>
      <li class="order-4">
        <ArrowRightStartOnRectangleIcon class="size-8" @click="clear" />
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <!-- Your component template goes here -->
  </div>
</template>

<script lang="ts">
import {
  UserIcon,
  UsersIcon,
  IdentificationIcon,
  GlobeAmericasIcon,
  NumberedListIcon,
  FireIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  ArrowRightStartOnRectangleIcon,
  HomeIcon,
  FolderOpenIcon,
} from "@heroicons/vue/24/outline";
export default defineNuxtComponent({
  name: "RootNavigation",
  components: {
    UserIcon,
    UsersIcon,
    IdentificationIcon,
    GlobeAmericasIcon,
    NumberedListIcon,
    FireIcon,
    Cog6ToothIcon,
    CreditCardIcon,
    ArrowRightStartOnRectangleIcon,
    HomeIcon,
    FolderOpenIcon,
  },
  setup() {
    const { user, clear } = useUserSession();

    return {
      user,
      clear,
    };
  },
});
</script>

<style scoped>
@import url(../assets/css/root-navigation.css);
</style>
