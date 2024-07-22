<template>
  <NuxtLayout name="card">
    <div class="flex flex-col justify-between h-full gap-3">
      <div class="flex flex-col gap-3">
        <h3 class="uppercase">Full Stack Developer</h3>
        <div class="flex text-4xl gap-3">
          <h1 class="font-black">Barabás</h1>
          <h1 class="font-semibold">Balázs</h1>
        </div>
        <p>
          {{ description }}
        </p>
      </div>
      <NuxtLink
        :to="gmapQuerry"
        class="text-stone-400 underline-link"
        target="_blank"
        >{{ coordinates.displayValue }}</NuxtLink
      >
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { coordinates, description } from "~/constants/about-items";

const gmapQuerry = computed(
  () =>
    `https://www.google.com/maps/search/?api=1&query=${coordinates?.numericalValue?.lat}%2C+${coordinates?.numericalValue?.lng}`,
);
</script>
