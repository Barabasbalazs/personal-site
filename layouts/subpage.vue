<template>
  <div class="right-width md:ml-40 h-screen flex flex-col">
    <div class="py-5 flex justify-center items-center">
      <h1>
        <slot name="title" />
      </h1>
    </div>
    <div class="flex items-center justify-center w-full flex-col p-5 h-full">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
.right-width {
  width: calc(100vw - 160px) !important;
}

@media (max-width: 767px) {
  .right-width {
    width: 100%;
  }
}
</style>
