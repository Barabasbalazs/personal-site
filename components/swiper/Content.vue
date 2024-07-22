<template>
  <div class="relative w-full">
    <div class="flex items-center justify-center absolute z-10 w-full">
      <NuxtLink class="w-full" :to="project.link" target="_blank">
        <img class="min-w-1/2" :src="project.img" :alt="project.title"
      /></NuxtLink>
    </div>
    <div class="absolute bottom-0 z-20 bg-dark w-full pt-6">
      <div class="flex flex-col gap-3 w-4/5">
        <h3 class="uppercase">
          {{ project.subtitle }}
        </h3>
        <NuxtLink :to="project.link" target="_blank"
          ><h2
            class="font-semibold text-4xl uppercase underline-link white-underline"
          >
            {{ project.title }}
          </h2></NuxtLink
        >
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectItem } from "~/constants/project-items";

defineProps<{
  project: ProjectItem;
}>();
</script>

<style scoped>
.white-underline::before {
  background-color: #fff !important;
}
</style>
