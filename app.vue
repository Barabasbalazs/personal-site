<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      name: "description",
      content: "Barabás Balázs Full Stack Developer",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon2.png",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
    },
  ],
});
</script>
