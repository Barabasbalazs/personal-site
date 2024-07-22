export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  link: string;
}

export const projectItems = [
  {
    title: "Bickley and Mitchell",
    subtitle: "B2B ecommerce platform",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    img: "/app/icons/cart-outline.svg",
    link: "https://b2b.bickleyandmitchell.com",
  },
  {
    title: "Map App",
    subtitle: "Hiking App with real time Tracking",
    description: "Just Short",
    img: "/app/icons/map-legend.svg",
    link: "https://balazsmap.live",
  },
  {
    title: "esm-import-modifier",
    subtitle: "Deno utility script",
    description:
      "A small script that helps rewrite ES imports with just a config file. Written in Deno with the help of an ES syntax module lexer and Worker modules.",
    img: "/app/logos/deno-white.svg", //denoWhiteLogo,
    link: "https://github.com/Barabasbalazs/esm-import-modifier",
  },
] as ProjectItem[];
