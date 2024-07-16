<template>
  <div class="font-medium">
    <div class="py-5 flex justify-center w-full items-center">
      <slot name="title" />
    </div>
    <div class="flex">
      <div
        class="flex flex-col justify-between pb-5 px-3 md:px-5 whitespace-nowrap w-48"
      >
        <SharedSidebar />
      </div>
      <div class="flex items-center justify-center w-full h-screen flex-col">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
