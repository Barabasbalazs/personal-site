<template>
  <div
    class="h-screen fixed top-0 left-0 z-20 flex-col justify-between py-5 px-3 md:px-5 whitespace-nowrap bg-black text-white w-40"
  >
    <button
      class="w-fit absolute left-32 md:hidden z-30"
      @click="emit('hideSidebar')"
    >
      X
    </button>
    <div
      class="flex flex-col cursor-default mt-7 md:mt-0"
      @click="scrollToSubPage('about')"
    >
      <span class="underline-link">Barabás Balázs</span>
      <span>Full Stack</span>
      <span>Developer</span>
    </div>
    <div class="underline-link" @click="scrollToSubPage('projects')">Projects</div>
    <div class="underline-link" @click="scrollToSubPage('experience')">Experience</div>
    <div class="flex flex-col cursor-default">
      <span>46° 46′ N</span>
      <span> 23° 35′ E</span>
      <span>Cluj, Romania</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "hideSidebar"): void;
}>();

function scrollToSubPage(id: string) {
  const subPage = document.getElementById(id);
  subPage?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
</script>
