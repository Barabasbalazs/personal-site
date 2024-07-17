import type { MetaObject } from "nuxt/schema";

const linkItems = [
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
];

export const defaultHeadItems = {
  meta: [
    {
      name: "description",
      content: "Barabás Balázs Full Stack Developer",
    },
  ],
  link: linkItems,
} as MetaObject;
