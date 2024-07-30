<template>
  <div class="absolute right-0">
    <button class="relative" @click="isOpen = !isOpen">
      <img
        :id="`three-dots-img-${key}`"
        class="w-10 h-10"
        src="assets/app/icons/dots-horizontal.svg"
        alt="extra-options-button"
        loading="eager"
      />
      <OptionsTooltip v-if="isOpen" @close="isOpen = false" />
    </button>
  </div>
</template>

<script setup lang="ts">
const { key } = inject("options") as { key: string };

const isOpen = ref(false);
</script>
