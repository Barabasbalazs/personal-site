import vueLogo from "~/assets/app/logos/Vue.js.svg";
import fastifyLogo from "~/assets/app/logos/Fastify.svg";
import nodeLogo from "~/assets/app/logos/Node.js.svg";
import denoLogo from "~/assets/app/logos/deno.svg";
import jestLogo from "~/assets/app/logos/Jest.svg";
import cypressLogo from "~/assets/app/logos/Cypress.svg";
import nuxtLogo from "~/assets/app/logos/Nuxt.js.svg";
import expressLogo from "~/assets/app/logos/Express.svg";
import typescriptLogo from "~/assets/app/logos/TypeScript.svg";
import ionicLogo from "~/assets/app/logos/Ionic.svg";
import firebaseLogo from "~/assets/app/logos/Firebase.svg";
import azureLogo from "~/assets/app/logos/Azure.svg";
import postgresLogo from "~/assets/app/logos/PostgresSQL.svg";
import mongoLogo from "~/assets/app/logos/MongoDB.svg";
import tailwindLogo from "~/assets/app/logos/TailwindCSS.svg";
import socketioLogo from "~/assets/app/logos/Socket.io.svg";
import sassLogo from "~/assets/app/logos/Sass.svg";
import vitestLogo from "~/assets/app/logos/vitest.svg";
import pythonLogo from "~/assets/app/logos/Python.svg";
import dockerLogo from "~/assets/app/logos/Docker.svg";

export interface LinkItem {
  link: string;
  logo: string;
}

export const techItems: LinkItem[] = [
  {
    link: "https://vuejs.org/",
    logo: vueLogo,
  },
  {
    link: "https://fastify.dev/",
    logo: fastifyLogo,
  },
  {
    link: "https://nodejs.org/en",
    logo: nodeLogo,
  },
  {
    link: "https://deno.com/",
    logo: denoLogo,
  },
  {
    link: "https://jestjs.io/",
    logo: jestLogo,
  },
  {
    link: "https://www.cypress.io/",
    logo: cypressLogo,
  },
  {
    link: "https://nuxt.com/",
    logo: nuxtLogo,
  },
  {
    link: "https://expressjs.com/",
    logo: expressLogo,
  },
  {
    link: "https://www.typescriptlang.org/",
    logo: typescriptLogo,
  },
  {
    link: "https://ionicframework.com/",
    logo: ionicLogo,
  },
  {
    link: "https://firebase.google.com/",
    logo: firebaseLogo,
  },
  {
    link: "https://azure.microsoft.com/en-us",
    logo: azureLogo,
  },
  {
    link: "https://www.postgresql.org/",
    logo: postgresLogo,
  },
  {
    link: "https://www.mongodb.com/",
    logo: mongoLogo,
  },
  {
    link: "https://tailwindcss.com/",
    logo: tailwindLogo,
  },
  {
    link: "https://socket.io/",
    logo: socketioLogo,
  },
  {
    link: "https://sass-lang.com/",
    logo: sassLogo,
  },
  {
    link: "https://vitest.dev/",
    logo: vitestLogo,
  },
  {
    link: "https://www.python.org/",
    logo: pythonLogo,
  },
  {
    link: "https://www.docker.com/",
    logo: dockerLogo,
  },
];
