<template>
  <NuxtLayout name="classic">
    <NuxtLayout
      v-for="({ title, content, id }, index) in subPages"
      :id="id"
      :key="index"
      name="subpage"
    >
      <template #title>{{ title }}</template>
      <template #content>
        <template v-if="typeof content === 'string'">{{ content }}</template>
        <component v-else :is="content" />
      </template>
    </NuxtLayout>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { subPages } from "~/constants/subpage-items";

onMounted(() =>
  document.getElementById("about")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  })
);
</script>
