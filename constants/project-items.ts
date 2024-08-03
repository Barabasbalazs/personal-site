import b2bMockup from "~/assets/app/images/b2b-mockup.png";
import esmImport from "~/assets/app/images/esm-import.png";
import mapAppMockup from "~/assets/app/images/map-app-mockup.png";
import ocrMockUp from "~/assets/app/images/ocr-mockup.png";

export interface OptionsItem {
  text: string;
  link: string;
  download?: string;
}

export interface ProjectItem {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  img: string;
  link: string;
  options?: OptionsItem[];
}

export const projectItems = [
  {
    key: "bickleyandmitchell",
    title: "Bickley and Mitchell",
    subtitle: "B2B ecommerce platform",
    description:
      "A modern e-commerce platform featuring a custom admin panel and integrated ERP system, designed to enhance the B2B experience for the Amsterdam-based fashion brand, Bickley + Mitchell.",
    img: b2bMockup,
    link: "https://b2b.bickleyandmitchell.com",
  },
  {
    key: "ocr",
    title: "Optical Character Recognition",
    subtitle: "Handwritten digit classification model",
    description:
      "Optical Character Recognition (OCR) model for converting images of handwritten digits into machine-readable data using k-nearest neighbors (k-NN) and centroid-based classification methods. ",
    img: ocrMockUp,
    link: "https://github.com/Barabasbalazs/OCR",
    options: [
      {
        text: "View source code",
        link: "https://github.com/Barabasbalazs/OCR",
      },
    ] as OptionsItem[],
  },
  {
    key: "mapapp",
    title: "Map based hiking Application",
    subtitle: "Full Stack app with real time Tracking",
    description:
      "An intuitive web app with real-time tracking, helping tourists and guides explore and navigate both natural landscapes and urban areas with ease and efficiency.",
    img: mapAppMockup,
    link: "https://balazsmap.live",
    options: [
      {
        text: "Download Thesis as PDF",
        download: "Thesis.pdf",
        link: "/thesis.pdf",
      },
      {
        text: "View FE source code",
        link: "https://github.com/Barabasbalazs/map-frontend",
      },
      {
        text: "View BE source code",
        link: "https://github.com/Barabasbalazs/map-app-api",
      },
    ] as OptionsItem[],
  },
  {
    key: "esm-import-modifier",
    title: "esm-import-modifier",
    subtitle: "Deno utility script",
    description:
      "A powerful utility script that simplifies rewriting ES imports using just a config file. Built in Deno, leveraging an ES syntax module lexer and Worker modules for efficiency.",
    img: esmImport,
    link: "https://github.com/Barabasbalazs/esm-import-modifier",
    options: [
      {
        text: "View source code",
        link: "https://github.com/Barabasbalazs/esm-import-modifier",
      },
    ] as OptionsItem[],
  },
] as ProjectItem[];
