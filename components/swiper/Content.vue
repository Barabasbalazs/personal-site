<template>
  <div class="relative w-full">
    <OptionsButton v-if="project.options" />

    <div class="flex flex-col justify-between gap-6 h-full">
      <NuxtLink
        class="flex items-center justify-center w-full h-full"
        :to="project.link"
        target="_blank"
      >
        <div class="w-1/2">
          <img
            class="min-w-1/2"
            :src="project.img"
            :alt="project.title"
            loading="lazy"
          />
        </div>
      </NuxtLink>
      <div class="bg-dark w-full">
        <div class="flex flex-col gap-3 w-full">
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
const props = defineProps<{
  project: ProjectItem;
}>();

provide("options", {
  optionsValues: props?.project?.options,
  key: props?.project?.key,
});
</script>
