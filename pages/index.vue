<template>
  <NuxtLayout name="default">
    <NuxtLayout
      v-for="({ title, content, id }, index) in subPages"
      :id="id"
      :key="index"
      name="subpage"
    >
      <template #title>{{ title }}</template>
      <template #content>
        <component :is="content" />
      </template>
    </NuxtLayout>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { subPages } from "~/constants/subpage-items";

useHead({
  title: "Homepage - Barabás Balázs ",
});

onMounted(() =>
  document.getElementById("about")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  }),
);
</script>
