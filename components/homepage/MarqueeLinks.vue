<template>
  <div class="relative flex overflow-hidden marquee w-full">
    <div
      v-for="ind in 2"
      :key="ind"
      class="whitespace-nowrap flex gap-4"
      :class="[
        { 'absolute top-0': ind === 1 },
        `marquee__slider${ind === 1 ? '2' : '1'}`,
      ]"
    >
      <NuxtLink
        v-for="(item, index) in items"
        :id="`link-${index}`"
        :key="index"
        class="w-16 md:w-32 flex items-center justify-center hover:grayscale grayscale-0 grow p-2"
        :class="{ 'pr-4': index === items.length - 1 }"
        :to="item.link"
        target="_blank"
      >
        <img class="w-full" :src="item.logo" alt="`logo-${item.link}`" />
      </NuxtLink>
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
import type { LinkItem } from "~/types/link-item";

interface Props {
  right?: boolean;
  items: LinkItem[];
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

.left-gradient {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
}

.right-gradient {
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
}

.grow {
  transition: all 0.2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
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
