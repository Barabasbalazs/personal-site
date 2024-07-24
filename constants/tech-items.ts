export interface LinkItem {
  link: string;
  logo: string;
}

export const techItems = [
  {
    link: "https://vuejs.org/",
    logo: new URL("assets/app/logos/Vue.js.svg", import.meta.url).href,
  },
  {
    link: "https://fastify.dev/",
    logo: new URL("assets/app/logos/Fastify.svg", import.meta.url).href,
  },
  {
    link: "https://nodejs.org/en",
    logo: new URL("assets/app/logos/Node.js.svg", import.meta.url).href,
  },
  {
    link: "https://deno.com/",
    logo: new URL("assets/app/logos/deno.svg", import.meta.url).href,
  },
  {
    link: "https://jestjs.io/",
    logo: new URL("assets/app/logos/Jest.svg", import.meta.url).href,
  },
  {
    link: "https://www.cypress.io/",
    logo: new URL("assets/app/logos/Cypress.svg", import.meta.url).href,
  },
  {
    link: "https://nuxt.com/",
    logo: new URL("assets/app/logos/Nuxt.js.svg", import.meta.url).href,
  },
  {
    link: "https://expressjs.com/",
    logo: new URL("assets/app/logos/Express.svg", import.meta.url).href,
  },
  {
    link: "https://www.typescriptlang.org/",
    logo: new URL("assets/app/logos/TypeScript.svg", import.meta.url).href,
  },
  {
    link: "https://ionicframework.com/",
    logo: new URL("assets/app/logos/Ionic.svg", import.meta.url).href,
  },
  {
    link: "https://firebase.google.com/",
    logo: new URL("assets/app/logos/Firebase.svg", import.meta.url).href,
  },
  {
    link: "https://azure.microsoft.com/en-us",
    logo: new URL("assets/app/logos/Azure.svg", import.meta.url).href,
  },
  {
    link: "https://www.postgresql.org/",
    logo: new URL("assets/app/logos/PostgresSQL.svg", import.meta.url).href,
  },
  {
    link: "https://www.mongodb.com/",
    logo: new URL("assets/app/logos/MongoDB.svg", import.meta.url).href,
  },
  {
    link: "https://tailwindcss.com/",
    logo: new URL("assets/app/logos/TailwindCSS.svg", import.meta.url).href,
  },
  {
    link: "https://socket.io/",
    logo: new URL("assets/app/logos/Socket.io.svg", import.meta.url).href,
  },
  {
    link: "https://sass-lang.com/",
    logo: new URL("assets/app/logos/Sass.svg", import.meta.url).href,
  },
  {
    link: "https://vitest.dev/",
    logo: new URL("assets/app/logos/vitest.svg", import.meta.url).href,
  },
  {
    link: "https://www.python.org/",
    logo: new URL("assets/app/logos/Python.svg", import.meta.url).href,
  },
  {
    link: "https://www.docker.com/",
    logo: new URL("assets/app/logos/Docker.svg", import.meta.url).href,
  },
] as LinkItem[];
