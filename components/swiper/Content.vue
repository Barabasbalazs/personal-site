<template>
  <div class="relative w-full">
    <div class="flex flex-col justify-between gap-6 h-full">
      <div class="flex items-center justify-center w-full h-full">
        <NuxtLink class="w-3/5" :to="project.link" target="_blank">
          <img class="min-w-1/2" :src="project.img" :alt="project.title"
        /></NuxtLink>
      </div>
      <div class="bg-dark w-full">
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
