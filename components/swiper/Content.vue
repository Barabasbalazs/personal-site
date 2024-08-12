<template>
  <div class="relative w-full">
    <div class="flex flex-col justify-between gap-6 h-full pb-12">
      <NuxtLink
        class="flex items-center justify-center w-full h-full"
        :to="project.link"
        target="_blank"
      >
        <img :src="project.img" :alt="project.title" loading="eager" />
      </NuxtLink>
      <div class="flex flex-col gap-3 w-full bottom-0">
        <h3 class="uppercase text-lime">
          {{ project.subtitle }}
        </h3>

        <h2 class="font-semibold text-4xl uppercase">
          {{ project.title }}
        </h2>
        <p>{{ project.description }}</p>
        <div v-if="project.options" class="flex gap-2 flex-wrap">
          <OptionsRedirect
            v-for="(option, index) in project.options"
            :key="index"
            :option="option"
          />
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
