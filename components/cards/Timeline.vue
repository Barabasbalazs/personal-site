<template>
  <NuxtLayout name="card">
    <div class="relative h-full w-full flex justify-center">
      <div class="flex items-center justify-center h-full w-full">
        <!--Main line-->
        <span class="h-1 w-full bg-white relative">
          <!--upper container-->
          <div
            class="flex w-full justify-between absolute h-24 bottom-0 upper-container"
          >
            <div
              v-for="itemIndex in years.length - 1"
              class="w-full flex justify-between"
            >
              <div
                v-for="{ item, index } in sortedExperiences[itemIndex - 1]"
                class="flex flex-col w-full h-full items-center"
              >
                <div
                  class="bg-white text-dark p-2 border rounded-3xl text-xs font-semibold lg:whitespace-nowrap text-center"
                  :class="{ mt_34: index % 2 === 0 }"
                >
                  <p>{{ item }}</p>
                </div>
                <span class="h-full w-0.5 bg-white" />

                <span
                  class="bg-white bottom-0 absolute p-1 rounded-full border-2 border-dark mb_n_4"
                />
              </div>
            </div>
          </div>
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
const years = [2020, 2021, 2022, 2023, 2024, 2025];

const experienceItems = [
  {
    start: 2020,
    item: "BSc in Finances",
  },
  {
    start: 2021,
    item: "America"
  },
  {
    start: 2022,
    item: "B2B Platform",
  },
  {
    start: 2023,
    item: "Webgurus",
  },
  {
    start: 2024,
    item: "BSc in CS",
  },
];

const sortedExperiences = computed(() => {
  const indexedExperienceItems = experienceItems.map((item, index) => ({
    ...item,
    index,
  }));
  return years.map((year) =>
    indexedExperienceItems.filter((item) => item.start === year)
  );
});

const paddingPercentage = computed(
  () => `calc((100 / ${years.length}) / 2 * 1%)`
);
</script>

<style scoped>
@media (max-width: 400px) {
  .upper-container {
    padding-left: 0px;
    padding-right: v-bind(paddingPercentage);
  }
}
@media (min-width: 401px) {
  .upper-container {
    padding-left: v-bind(paddingPercentage);
    padding-right: v-bind(paddingPercentage);
  }
}
.mb_n_4 {
  margin-bottom: -4px;
}

.mt_34 {
  margin-top: 34px;
}
</style>
