<template>
  <NuxtLayout name="cardwrapper">
    <CardsAbout />

    <CardsMarqueeWrapper />

    <NuxtLayout name="cardwrapper" cols>
      <CardsContact />
      <NuxtLayout name="card">Left4 </NuxtLayout>
    </NuxtLayout>
  </NuxtLayout>
</template>
