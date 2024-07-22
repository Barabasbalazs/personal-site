<template>
  <div class="relative w-full">
    <div class="flex items-center justify-center absolute z-10 w-full h-full">
      <img class="" :src="project.img" :alt="project.title" />
    </div>
    <div class="absolute bottom-0 z-20 bg-dark w-full pt-6">
      <div class="flex flex-col gap-3 w-4/5">
        <h3 class="uppercase">
          {{ project.subtitle }}
        </h3>
        <h2 class="font-semibold text-4xl uppercase">
          {{ project.title }}
        </h2>
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
