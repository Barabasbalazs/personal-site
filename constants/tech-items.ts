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
import reactLogo from "~/assets/app/logos/React.svg";
import springLogo from "~/assets/app/logos/Spring.svg";

export interface TechItem {
  link: string;
  logo: string;
  level: string;
}

export const techItems: TechItem[] = [
  {
    link: "https://vuejs.org/",
    logo: vueLogo,
    level: "Advanced",
  },
  {
    link: "https://fastify.dev/",
    logo: fastifyLogo,
    level: "Proficient",
  },
  {
    link: "https://nodejs.org/en",
    logo: nodeLogo,
    level: "Advanced",
  },
  {
    link: "https://deno.com/",
    logo: denoLogo,
    level: "Competent",
  },
  {
    link: "https://jestjs.io/",
    logo: jestLogo,
    level: "Competent",
  },
  {
    link: "https://www.cypress.io/",
    logo: cypressLogo,
    level: "Competent",
  },
  {
    link: "https://nuxt.com/",
    logo: nuxtLogo,
    level: "Proficient",
  },
  {
    link: "https://expressjs.com/",
    logo: expressLogo,
    level: "Advanced",
  },
  {
    link: "https://www.typescriptlang.org/",
    logo: typescriptLogo,
    level: "Advanced",
  },
  {
    link: "https://ionicframework.com/",
    logo: ionicLogo,
    level: "Competent",
  },
  {
    link: "https://firebase.google.com/",
    logo: firebaseLogo,
    level: "Proficient",
  },
  {
    link: "https://azure.microsoft.com/en-us",
    logo: azureLogo,
    level: "Competent",
  },
  {
    link: "https://www.postgresql.org/",
    logo: postgresLogo,
    level: "Proficient",
  },
  {
    link: "https://www.mongodb.com/",
    logo: mongoLogo,
    level: "Proficient",
  },
  {
    link: "https://tailwindcss.com/",
    logo: tailwindLogo,
    level: "Advanced",
  },
  {
    link: "https://socket.io/",
    logo: socketioLogo,
    level: "Competent",
  },
  {
    link: "https://sass-lang.com/",
    logo: sassLogo,
    level: "Proficient",
  },
  {
    link: "https://vitest.dev/",
    logo: vitestLogo,
    level: "Proficient",
  },
  {
    link: "https://www.python.org/",
    logo: pythonLogo,
    level: "Competent",
  },
  {
    link: "https://www.docker.com/",
    logo: dockerLogo,
    level: "Competent",
  },
  {
    link: "https://react.dev/",
    logo: reactLogo,
    level: "Competent",
  },
  {
    link: "https://spring.io/",
    logo: springLogo,
    level: "Competent",
  },
];
