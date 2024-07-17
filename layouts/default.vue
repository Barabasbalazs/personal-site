<template>
  <div class="font-medium flex">
    <div
      class="flex flex-col justify-between py-5 px-3 md:px-5 whitespace-nowrap w-48 h-screen"
    >
      <SharedSidebar />
    </div>
    <div class="w-full">
      <div class="my-5 flex justify-center items-center">
        <slot name="title" />
      </div>
      <div
        class="flex items-center justify-center w-full h-screen flex-col p-5"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
