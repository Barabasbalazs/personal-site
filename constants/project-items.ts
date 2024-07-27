import cartOutline from "~/assets/app/icons/cart-outline.svg";
import mapLegend from "~/assets/app/icons/map-legend.svg";
import denoWhite from "~/assets/app/logos/deno-white.svg";

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
      "A modern e-commerce platform featuring a custom admin panel and integrated ERP system, designed to enhance the B2B experience for the Amsterdam-based fashion brand, Bickley + Mitchell.",
    img: cartOutline,
    link: "https://b2b.bickleyandmitchell.com",
  },
  {
    title: "Map App",
    subtitle: "Hiking App with real time Tracking",
    description:
      "An intuitive web app with real-time tracking, helping tourists and guides explore and navigate both natural landscapes and urban areas with ease and efficiency.",
    img: mapLegend,
    link: "https://balazsmap.live",
  },
  {
    title: "esm-import-modifier",
    subtitle: "Deno utility script",
    description:
      "A powerful utility script that simplifies rewriting ES imports using just a config file. Built in Deno, leveraging an ES syntax module lexer and Worker modules for efficiency.",
    img: denoWhite,
    link: "https://github.com/Barabasbalazs/esm-import-modifier",
  },
] as ProjectItem[];
