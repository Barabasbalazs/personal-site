<template>
  <div class="grid gap-5" :class="{ 'grid-cols-1 md:grid-cols-2': cols }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  cols?: boolean;
}>();
</script>
