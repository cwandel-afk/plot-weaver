<template>
  <div>
    <NuxtLayout>
      <div class="max-w-full mx-auto overflow-y-auto prose">
        <ContentDoc is="index" />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>
