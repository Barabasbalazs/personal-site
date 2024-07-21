<template>
  <NuxtLayout name="cardwrapper">
    <CardsAbout />

    <CardsMarqueeWrapper />

    <NuxtLayout name="cardwrapper" cols>
      <CardsContact />
      <CardsTimeline />
    </NuxtLayout>
  </NuxtLayout>
</template>
