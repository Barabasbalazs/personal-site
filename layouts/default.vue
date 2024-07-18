<template>
  <div class="font-medium relative">
    <SharedSidebar ref="sidebar" />

    <div class="w-full right-width ml-40 h-screen flex flex-col">
      <div class="py-5 flex justify-center items-center">
        <h1>
          <slot name="title" />
        </h1>
      </div>
      <div class="flex items-center justify-center w-full flex-col p-5 h-full">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.right-width {
  width: calc(100vw - 160px);
}
.content-wrapper {
  height: calc(100vh - 60px);
}
</style>
