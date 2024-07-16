<template>
  <NuxtLayout name="default">
    <template #title> <h1>Projects page</h1></template>
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
