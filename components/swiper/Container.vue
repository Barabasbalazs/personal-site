<template>
  <div class="relative w-full wrapper-height">
    <div class="absolute z-10 bottom-0 right-0 flex gap-3">
      <button
        class="bg-black rounded-2xl"
        :class="[
          { 'brightness-75 grow': currentIndex > 0 },
          { 'brightness-50': currentIndex === 0 },
        ]"
        @click="slideToIndex(currentIndex - 1)"
      >
        <img
          src="assets/app/icons/chevron-left.svg"
          alt="chevron-left-icon"
          class="w-10 h-10 md:w-16 md:h-16"
        />
      </button>
      <button
        class="bg-black rounded-2xl"
        :class="[
          {
            'grow brightness-75': currentIndex < projectItems.length - 1,
          },
          { 'brightness-50': currentIndex === projectItems.length - 1 },
        ]"
        @click="slideToIndex(currentIndex + 1)"
      >
        <img
          src="assets/app/icons/chevron-right.svg"
          alt="chevron-right-icon"
          class="w-10 h-10 md:w-16 md:h-16"
        />
      </button>
    </div>
    <swiper
      class="w-full h-full"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <swiper-slide v-for="(project, index) in projectItems" :key="index">
        <SwiperContent :project="project" class="wrapper-height" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
//import type Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { projectItems } from "~/constants/project-items";

const swiperInstance = ref();
const currentIndex = ref(0);

function onSlideChange(slide: { activeIndex: number }) {
  currentIndex.value = slide.activeIndex;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onSwiper(swiper: any) {
  swiperInstance.value = swiper;
}

function slideToIndex(index: number) {
  if (index >= projectItems.length || index < 0) return;
  currentIndex.value = index;
  swiperInstance.value.slideTo(index);
}
</script>
<style scoped>
@media (max-width: 767px) {
  .wrapper-height {
    min-height: 480px;
  }
}
@media (min-width: 768px) {
  .wrapper-height {
    height: 100% !important;
  }
}
</style>
