import {
  CardsMarqueeWrapper,
  //ProjectsCardsWrapper,
  //ExperienceWrapper,
} from "#components";
import type { ComponentOptionsMixin, DefineComponent, PublicProps } from "vue";

interface SubPage {
  title: string;
  id: string;
  content: DefineComponent<
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
  >;
}

export const subPages = [
  {
    title: "About",
    content: CardsMarqueeWrapper,
    id: "about",
  },
  // {
  //   title: "Projects",
  //   content: ProjectsCardsWrapper,
  //   id: "projects",
  // },
  // {
  //   title: "Experience",
  //   content: ExperienceWrapper,
  //   id: "experience",
  // },
] as SubPage[];
