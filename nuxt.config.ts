// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/personal-site/",
  },
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/test-utils/module"],
  typescript: {
    typeCheck: false,
    strict: true,
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    "/": { ssr: false },
  },
});
