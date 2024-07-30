<template>
  <div
    ref="toolTip"
    class="absolute top-9 right-0 bg-black rounded-3xl py-2 px-3 whitespace-nowrap flex flex-col items-start"
    @click.stop
  >
    <NuxtLink
      v-for="({ text, link, download }, index) in optionsValues"
      :key="index"
      class="underline-link white-underline"
      :href="link"
      target="_blank"
      :download="download"
    >
      <p>{{ text }}</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { OptionsItem } from "~/constants/project-items";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const optionsValues = inject("optionsValues") as OptionsItem[];

const toolTip = ref(null);

function clickOutsideEvent(event: MouseEvent) {
  const buttonImg = document.getElementById("three-dots-img");
  if (event.target !== toolTip.value && event.target !== buttonImg)
    emit("close");
}

onBeforeMount(() => document.addEventListener("click", clickOutsideEvent));

onUnmounted(() => document.removeEventListener("click", clickOutsideEvent));
</script>
