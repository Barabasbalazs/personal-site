<template>
  <NuxtLayout name="card">
    <div
      class="flex flex-col h-full gap-3 uppercase justify-between items-center"
    >
      <h3 class="uppercase">Contact</h3>
      <div class="flex gap-3 h-full justify-between items-center w-full">
        <div class="w-1/2 flex justify-center">
          <img class="w-32" src="assets/app/icons/account-box-outline.svg" />
        </div>
        <div class="w-1/2 flex justify-center">
          <div
            class="flex flex-col items-center h-full gap-3 text-xl font-bold text-stone-400"
          >
            <NuxtLink
              v-for="({ link, title }, index) in contactItems"
              :key="index"
              :to="link"
              target="_blank"
              class="underline-link"
            >
              {{ title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { contactItems } from "~/constants/contact-items";
</script>
