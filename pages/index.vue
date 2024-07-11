<template>
  <NuxtLayout name="default">
    <template #title>
      <div class="flex flex-col">
        <span>Barabás Balázs</span>
        <span>Full Stack Developer</span>
      </div>
      <div class="flex flex-col">
        <span>46.7712° N</span>
        <span>23.6236° E</span>
        <span>Cluj, Romania</span>
      </div>
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
