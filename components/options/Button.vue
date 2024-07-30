<template>
  <div class="absolute right-0">
    <button class="relative" @click="isOpen = !isOpen">
      <img
        id="three-dots-img"
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
const isOpen = ref(false);
</script>
