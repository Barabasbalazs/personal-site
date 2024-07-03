<template>
  <div class="flex items-center justify-center w-screen h-screen flex-col">
    <MarqueeLinksContainer
      v-for="(array, ind) in technologyItems"
      :key="ind"
      class="border-2 border-red-500 w-1/2"
      :items="array"
      :right="ind === 1"
    />
  </div>
</template>

<script setup lang="ts">
import type { LinkItem } from "~/types/link-item";

const technologyItems = computed(() => {
  const values = [
    {
      link: "https://vuejs.org/",
      logo: "https://icon.icepanel.io/Technology/svg/Vue.js.svg",
    },
    {
      link: "https://fastify.dev/",
      logo: "https://icon.icepanel.io/Technology/png-shadow-512/Fastify.png",
    },
    {
      link: "https://nodejs.org/en",
      logo: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
    },
    {
      link: "https://deno.com/",
      logo: "https://icon.icepanel.io/Technology/png-shadow-512/Deno.png",
    },
    {
      link: "https://jestjs.io/",
      logo: "https://icon.icepanel.io/Technology/svg/Jest.svg",
    },
    {
      link: "https://www.cypress.io/",
      logo: "https://icon.icepanel.io/Technology/png-shadow-512/Cypress.png",
    },
    {
      link: "https://nuxt.com/",
      logo: "https://icon.icepanel.io/Technology/svg/Nuxt-JS.svg",
    },
    {
      link: "https://expressjs.com/",
      logo: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png",
    },
    {
      link: "https://www.typescriptlang.org/",
      logo: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
    },
    {
      link: "https://ionicframework.com/",
      logo: "https://icon.icepanel.io/Technology/svg/Ionic.svg",
    },
    {
      link: "https://firebase.google.com/",
      logo: "https://icon.icepanel.io/Technology/svg/Firebase.svg",
    },
    {
      link: "https://azure.microsoft.com/en-us",
      logo: "https://icon.icepanel.io/Technology/svg/Azure.svg",
    },
    {
      link: "https://www.postgresql.org/",
      logo: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
    },
    {
      link: "https://www.mongodb.com/",
      logo: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
    },
    {
      link: "https://tailwindcss.com/",
      logo: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    },
    {
      link: "https://socket.io/",
      logo: "https://icon.icepanel.io/Technology/png-shadow-512/Socket.io.png",
    },
    {
      link: "https://sass-lang.com/",
      logo: "https://icon.icepanel.io/Technology/svg/Sass.svg",
    },
    {
      link: "https://vitest.dev/",
      logo: "/app/icons/vitest.svg",
    },
  ] as LinkItem[];
  const middle = Math.floor((values.length - 1) / 2);
  return [values.slice(0, middle), values.slice(middle + 1, values.length - 1)];
});
</script>
