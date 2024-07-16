<template>
  <NuxtLayout name="default">
    <template #title>
      <h1 class="h-full">Home</h1>
    </template>
    <template #content>
      <HomepageMarqueeWrapper />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "Barabás Balázs",
});
</script>
