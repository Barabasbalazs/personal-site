<template>
  <div
    class="grid gap-5"
    :class="`grid-${cols ? 'cols' : 'rows'}-1 md:grid-${cols ? 'cols' : 'rows'}-2`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  cols?: boolean;
}>();
</script>
