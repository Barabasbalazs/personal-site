<template>
  <div class="p-5 text-white h-full flex flex-col gap-2.5">
    <NuxtLayout name="cardwrapper" class="w-full h-full" cols>
      <slot
    /></NuxtLayout>
    <PersonalSection />
    <ContactFooter />
  </div>
</template>
