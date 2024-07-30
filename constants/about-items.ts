import type { OptionsItem } from "~/constants/project-items";

interface CoordinateItem {
  displayValue: string;
  numericalValue: {
    lat: number;
    lng: number;
  };
}

interface AboutItem {
  coordinates: CoordinateItem;
  description: string;
  options: OptionsItem[];
}

export const aboutItem = {
  description:
    "Accomplished Full Stack Developer with extensive experience in designing and implementing scalable, multi-layered, and user-friendly web applications. Passionate advocate for automation throughout the development lifecycle, from testing to deployment, ensuring efficiency and reliability. Proficient in four languages, with a keen interest in hiking and a deep appreciation for history.",
  coordinates: {
    displayValue: `46°46'51.4"N 23°36'15.3"E`,
    numericalValue: { lat: 46.770439, lng: 23.591423 },
  } as CoordinateItem,
  options: [
    {
      text: "Download Resume as PDF",
      link: "/Resume-Balazs-Barabas.pdf",
      download: "Resume-Balazs-Barabas.pdf",
    },
    {
      text: "View Github profile",
      link: "https://github.com/Barabasbalazs",
    },
  ] as OptionsItem[],
} as AboutItem;
