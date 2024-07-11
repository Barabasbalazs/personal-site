<template>
  <HomepageMarqueeLinks
    v-for="(array, ind) in technologyItems"
    :key="ind"
    class="md:w-3/5 w-full"
    :items="array"
    :right="ind === 1"
  />
</template>

<script setup lang="ts">
import { techItems } from "~/constants/tech-items.js";

const technologyItems = computed(() => {
  const middle = Math.floor((techItems.length - 1) / 2);
  return [
    techItems.slice(0, middle),
    techItems.slice(middle + 1, techItems.length - 1),
  ];
});
</script>
