<template>
  <NuxtLayout name="card">
    <div class="grid lg:grid-cols-4 items-center justify-between gap-3">
      <div class="w-full">
        <p class="text-stone-400">{{ description }}</p>
      </div>

      <div
        v-for="(item, index) in contactItems"
        :key="index"
        class="flex items-center lg:justify-end"
      >
        <OptionsRedirect
          :option="item"
          additional-class="text-4xl font-bold !items-start w-full flex items-center"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { description, contactItems } from "~/constants/contact-items";
</script>
