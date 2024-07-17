<template>
  <div class="font-medium flex">
    <SharedSidebar />

    <div class="w-full right-width">
      <div class="my-5 flex justify-center items-center">
        <h1>
          <slot name="title" />
        </h1>
      </div>
      <div
        class="flex items-center justify-center w-full content-wrapper flex-col p-5"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.right-width {
  /*somehow marquee component messes up the flex sizes*/
  width: calc(100vw - 145.867px);
}
.content-wrapper {
  height: calc(100vh - 60px);
}
</style>
