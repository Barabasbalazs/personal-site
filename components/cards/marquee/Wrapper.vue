<template>
  <NuxtLayout name="card">
    <div class="h-full flex flex-col justify-center items-center marquee-width">
      <CardsMarqueeLinks
        v-for="(array, ind) in technologyItems"
        :key="ind"
        class="w-full"
        :items="array"
        :right="ind === 1"
      />
    </div>
  </NuxtLayout>
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

<style scoped>
.marquee-width {
  width: calc((100vw / 2) - 80px);
}
@media (max-width: 767px) {
  .marquee-width {
    width: calc(100vw - 80px);
  }
}
</style>
