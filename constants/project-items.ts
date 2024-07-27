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
      "E-commerce platform featuring a custom admin panel and ERP integration, designed for the B2B clients of the Amsterdam-based clothing brand Bickley + Mitchell.",
    img: cartOutline,
    link: "https://b2b.bickleyandmitchell.com",
  },
  {
    title: "Map App",
    subtitle: "Hiking App with real time Tracking",
    description:
      "A web application with real-time tracking functionalities, designed to help tourists and their guides explore various areas more effectively, whether in natural settings or urban environments.",
    img: mapLegend,
    link: "https://balazsmap.live",
  },
  {
    title: "esm-import-modifier",
    subtitle: "Deno utility script",
    description:
      "Utility script that helps rewrite ES imports with just a config file. Written in Deno with the help of an ES syntax module lexer and Worker modules.",
    img: denoWhite,
    link: "https://github.com/Barabasbalazs/esm-import-modifier",
  },
] as ProjectItem[];
