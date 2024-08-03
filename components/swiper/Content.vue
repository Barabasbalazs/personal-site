<template>
  <div class="relative w-full">
    <div class="flex flex-col justify-between gap-6 h-full">
      <NuxtLink
        class="flex items-center justify-center w-full h-full"
        :to="project.link"
        target="_blank"
      >
        <img :src="project.img" :alt="project.title" loading="lazy" />
      </NuxtLink>
      <div class="flex flex-col gap-3 w-full bottom-0">
        <h3 class="uppercase text-lime">
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
    <!-- <OptionsButton v-if="project.options" /> !-->
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
