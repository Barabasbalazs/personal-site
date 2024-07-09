<template>
  <div class="relative flex overflow-x-hidden marquee">
    <div
      v-for="ind in 2"
      :key="ind"
      class="whitespace-nowrap flex gap-4"
      :class="[
        { 'absolute top-0': ind === 1 },
        `marquee__slider${ind === 1 ? '2' : '1'}`,
      ]"
    >
      <a
        v-for="(item, index) in items"
        :id="`link-${index}`"
        :key="index"
        class="w-32 flex items-center justify-center hover:grayscale grayscale-0 grow p-2"
        :class="{ 'pr-4': index === items.length - 1 }"
        :href="item.link"
        target="_blank"
      >
        <img class="w-full" :src="item.logo" alt="`logo-${item.link}`" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LinkItem } from "~/types/link-item";

interface Props {
  right: boolean;
  items: LinkItem[];
}

const props = withDefaults(defineProps<Props>(), { right: true });

const transformPercentages = computed(() => {
  const values = ["translateX(100%)", "translateX(-100%)"];
  return props.right ? values : values.reverse();
});

const toPercentage = computed(
  () => transformPercentages.value?.[0] || "translateX(0%)",
);

const fromPercentage = computed(
  () => transformPercentages.value?.[1] || "translateX(0%)",
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
