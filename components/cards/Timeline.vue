<template>
  <NuxtLayout name="card">
    <div class="relative h-full w-full flex justify-center">
      <div class="flex items-center justify-center h-full w-full">
        <!--Main line-->
        <span class="h-1 w-full bg-white relative">
          <!--the lower part in years-->
          <div class="flex w-full justify-between absolute h-24">
            <div
              v-for="year in years"
              :key="year"
              class="h-full w-full flex flex-col items-center justify-between"
            >
              <span class="bg-white w-1 h-1/2 z-40" />
              <p>{{ year }}</p>
            </div>
          </div>
        </span>
      </div>
      <div
        v-for="ind in 2"
        :key="ind"
        class="absolute inset-y-0 pointer-events-none w-1/12 z-10"
        :class="ind === 1 ? 'right-0 right-gradient' : 'left-0 left-gradient'"
      />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const years = [2020, 2021, 2022, 2023, 2024];

const experienceItems = [
  {
    start: 2020,
    item: "BSc in Finances",
  },
  {
    start: 2022,
    item: "Freelance developer",
  },
  {
    start: 2023,
    item: "Implemented B2B ecommerce system",
  },
  {
    start: 2023,
    item: "Full Stack Developer @ Webgurus",
  },
  {
    start: 2024,
    item: "BSc in CS",
  },
];

const sortedExperiences = computed(() =>
  years
    .map((year) => experienceItems.filter((item) => item.start === year))
    .filter((item) => item)
);

console.log(sortedExperiences.value);
</script>
