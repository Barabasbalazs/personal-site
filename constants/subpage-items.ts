import { CardsMarqueeWrapper } from "#components";
import type { ComponentOptionsMixin, DefineComponent, PublicProps } from "vue";

interface SubPage {
  title: string;
  id: string;
  content:
    | DefineComponent<
        {},
        {},
        {},
        {},
        {},
        ComponentOptionsMixin,
        ComponentOptionsMixin,
        {},
        string,
        PublicProps,
        Readonly<globalThis.ExtractPropTypes<{}>>,
        {},
        {}
      >
    | string;
}

export const subPages: SubPage[] = [
  {
    title: "About",
    content: CardsMarqueeWrapper,
    id: "about",
  },
  {
    title: "Projects",
    content: "Projects content",
    id: "projects",
  },
  {
    title: "Experience",
    content: "ExperienceWrapper",
    id: "experience",
  },
];
