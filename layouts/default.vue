<template>
  <div class="font-medium relative">
    <button
      class="absolute top-6 w-5 left-4"
      @click="isMobileSidebarVisible = !isMobileSidebarVisible"
    >
      <img src="/app/icons/menu.svg" alt="sidemenu" />
    </button>
    <PageSidebar class="hidden md:flex" />
    <Transition name="fade" mode="out-in">
      <PageSidebar
        v-if="isMobileSidebarVisible"
        class="md:hidden flex"
        @hide-sidebar="isMobileSidebarVisible = false"
      />
    </Transition>

    <slot />
  </div>
</template>

<script setup lang="ts">
const isMobileSidebarVisible = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
