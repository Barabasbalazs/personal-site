<template>
  <div>
    <div class="grid grid-cols-2 items-start p-5 font-medium whitespace-nowrap">
      <slot name="title" />
    </div>
    <div class="flex items-center justify-center w-screen h-screen flex-col">
      <slot name="content" />
    </div>
  </div>
</template>
