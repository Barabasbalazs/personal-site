export const years = <const>[2020, 2021, 2022, 2023, 2024, 2025];

interface ExperienceItem {
  start: (typeof years)[number];
  item: string;
}

export const experienceItems = [
  {
    start: 2020,
    item: "BSc in Finances",
  },
  {
    start: 2021,
    item: "Studies abroad",
  },
  {
    start: 2022,
    item: "B2B Platform",
  },
  {
    start: 2023,
    item: "Dev @ Webgurus",
  },
  {
    start: 2024,
    item: "BSc in CS",
  },
] as ExperienceItem[];