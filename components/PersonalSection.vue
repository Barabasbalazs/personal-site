<template>
  <div class="grid md:grid-cols-2 p-3 gap-5">
    <div class="grid md:grid-cols-2 w-full gap-5">
      <div class="w-full flex items-center justify-center">
        <h3 class="text-3xl text-left">A few things about me</h3>
      </div>
      <img
        class="w-full"
        src="assets/app/images/me.png"
        alt="personalPicture"
      />
    </div>

    <div class="w-full flex gap-5">
      <div
        v-for="({ title, text }, index) in personalItems"
        :key="index"
        class="flex flex-col gap-4"
      >
        <h4 class="text-2xl font-bold">{{ title }}</h4>
        <p class="text-stone-400">{{ text }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { personalItems } from "~/constants/personal-items";
</script>
