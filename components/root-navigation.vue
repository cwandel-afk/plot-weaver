<template>
  <div class="w-16 h-screen bg-slate-100 grid grid-rows-2 justify-center">
    <ul class="grid grid-rows-6 w-16 justify-center items-center">
      <li>
        <NuxtLink to="/" class="group">
          <UserIcon class="size-8 group-[.router-link-active]:text-amber-700" />
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
    </ul>
    <ul class="grid grid-rows-6 w-16 justify-center items-center">
      <li class="order-last">
        <Cog6ToothIcon class="size-8" />
      </li>
      <li class="order-5">
        <CreditCardIcon class="size-8" />
      </li>
      <li></li>
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
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
@import url(../assets/css/root-navigation.css);
</style>
