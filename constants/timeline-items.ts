export const years = <const>[2020, 2021, 2022, 2023, 2024, 2025, 2026];

interface ExperienceItem {
  start: (typeof years)[number];
  item: string;
}

const checkMark = "&#10003;";

export const experienceItems: ExperienceItem[] = [
  {
    start: 2020,
    item: `${checkMark}BSc in Finances`,
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
    item: `${checkMark}BSc in CS`,
  },
  {
    start: 2025,
    item: `Dev @ efsta`,
  },
];
