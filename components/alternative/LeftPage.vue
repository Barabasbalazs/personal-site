<template>
  <NuxtLayout name="cardwrapper">
    <AlternativeCardsAbout />

    <NuxtLayout name="cardwrapper" cols>
      <NuxtLayout name="card">Left3 </NuxtLayout>
      <NuxtLayout name="card">Left4 </NuxtLayout>
    </NuxtLayout>

    <AboutMarqueeWrapper />
  </NuxtLayout>
</template>
