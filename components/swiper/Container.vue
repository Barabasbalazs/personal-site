<template>
  <div ref="wrapper" class="w-full wrapper-height">
    <swiper
      class="w-full h-full"
      pagination
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
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
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import { projectItems } from "~/constants/project-items";

const modules = [Pagination, Autoplay];

const wrapper = ref();
const swiperInstance = ref();
const currentIndex = ref(0);

const bulletWidth = computed(
  () => `${wrapper.value?.offsetWidth / 2 / projectItems.length}px`,
);

function onSlideChange(slide: { activeIndex: number }) {
  currentIndex.value = slide.activeIndex;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onSwiper(swiper: any) {
  swiperInstance.value = swiper;
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

.swiper :deep(.swiper-pagination) {
  bottom: 0;
}

.swiper :deep(.swiper-pagination .swiper-pagination-bullet) {
  background: #e4e4e4;
  width: v-bind(bulletWidth);
  margin: 9px;
  border-radius: 20px;
  height: 6px;
}

.swiper :deep(.swiper-pagination .swiper-pagination-bullet-active) {
  background: #98ce00;
}
</style>
