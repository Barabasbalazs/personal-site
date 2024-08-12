<template>
  <NuxtLink
    class="flex text-white underline-link white-underline whitespace-nowrap items-center"
    :class="additionalClass"
    :to="option.link"
    :download="option.download"
    target="_blank"
  >
    <p class="uppercase">{{ option.text }}</p>
    <img
      src="assets/app/icons/arrow-up-right.svg"
      alt="arrow-up-right"
      class="w-6 h-6"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { OptionsItem } from "~/constants/project-items";

defineProps<{
  option: OptionsItem;
  additionalClass?: string;
}>();
</script>
