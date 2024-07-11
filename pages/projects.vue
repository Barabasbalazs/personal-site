<template>
  <NuxtLayout name="default">
    <template #title>Projects page</template>
    <template #content>
      <ProjectspageCardsWrapper />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "Projects - Barabás Balázs",
});
</script>
