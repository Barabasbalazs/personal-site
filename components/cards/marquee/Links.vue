<template>
  <div class="relative flex overflow-hidden marquee">
    <div
      v-for="ind in 2"
      :key="ind"
      class="whitespace-nowrap flex gap-12"
      :class="[
        { 'absolute top-0': ind === 1 },
        `marquee__slider${ind === 1 ? '2' : '1'}`,
      ]"
    >
      <div
        v-for="(item, index) in items"
        :id="`link-${index}`"
        :key="index"
        class="md:w-24 w-16 flex items-center grow p-2 flex-col gap-2 hover:grayscale-0 grayscale"
        :class="{ 'mr-12': index === items.length - 1 }"
      >
        <p class="text-lime font-semibold text-sm">
          {{ item.level }}
        </p>
        <img
          class="w-full h-full"
          :src="item.logo"
          alt="`logo-${item.link}`"
          loading="lazy"
        />
      </div>
    </div>
    <div
      v-for="ind in 2"
      :key="ind"
      class="absolute inset-y-0 pointer-events-none w-1/12 z-10"
      :class="ind === 1 ? 'right-0 right-gradient' : 'left-0 left-gradient'"
    />
  </div>
</template>

<script setup lang="ts">
import type { TechItem } from "~/constants/tech-items";

interface Props {
  right?: boolean;
  items: TechItem[];
}

const props = withDefaults(defineProps<Props>(), { right: true });

const toPercentage = computed(() =>
  props.right ? "translateX(100%)" : "translateX(-100%)",
);

const fromPercentage = computed(() =>
  props.right ? "translateX(-100%)" : "translateX(100%)",
);
</script>

<style scoped>
.marquee__slider1 {
  animation: marquee1 linear 20s infinite;
}

.marquee__slider2 {
  animation: marquee2 linear 20s infinite;
}

.marquee:hover .marquee__slider1,
.marquee:hover .marquee__slider2 {
  animation-play-state: paused;
}

@keyframes marquee1 {
  from {
    transform: translateX(0%);
  }

  to {
    transform: v-bind(toPercentage);
  }
}

@keyframes marquee2 {
  from {
    transform: v-bind(fromPercentage);
  }

  to {
    transform: translateX(0%);
  }
}
</style>
