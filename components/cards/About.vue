<template>
  <div class="h-full p-6">
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-3">
        <h3 class="uppercase">Full Stack Developer</h3>
        <div class="flex text-4xl gap-3">
          <h1 class="font-black">Barabás</h1>
          <h1 class="font-semibold">Balázs</h1>
        </div>
      </div>
      <div class="flex flex-col gap-8 text-stone-400">
        <p>
          {{ description }}
        </p>
        <NuxtLink
          :to="gmapQuerry"
          class="text-stone-400 underline-link"
          target="_blank"
          >{{ coordinates.displayValue }}</NuxtLink
        >
        <div class="flex text-lg gap-6">
          <p v-for="(language, index) in languages" :key="index">
            {{ language }}
          </p>
        </div>
        <div class="flex gap-8 text-sm">
          <OptionsRedirect
            v-for="(option, index) in options"
            :key="index"
            :option="option"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { aboutItem } from "~/constants/about-items";

const { coordinates, description, options, languages } = aboutItem;

provide("options", {
  optionsValues: options,
  key: "about",
});

const gmapQuerry = computed(
  () =>
    `https://www.google.com/maps/search/?api=1&query=${coordinates?.numericalValue?.lat}%2C+${coordinates?.numericalValue?.lng}`
);
</script>
