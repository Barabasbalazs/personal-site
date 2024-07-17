<template>
  <NuxtLayout name="default">
    <template #title> Home </template>
    <template #content>
      <HomepageMarqueeWrapper />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "Homepage - Barabás Balázs ",
});
</script>
