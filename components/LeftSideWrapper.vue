<template>
  <NuxtLayout name="cardwrapper">
    <CardsAbout />

    <CardsMarqueeWrapper />

    <NuxtLayout name="cardwrapper" cols>
      <NuxtLayout name="card">Left3 </NuxtLayout>
      <NuxtLayout name="card">Left4 </NuxtLayout>
    </NuxtLayout>

  </NuxtLayout>
</template>
