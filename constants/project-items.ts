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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    img: "https://media.istockphoto.com/id/183821822/photo/say.jpg?s=612x612&w=0&k=20&c=kRmCjTzA9cq4amgRgeHkZsZuvxezUtC8wdDYfKg-mho=",
    link: "https://b2b.bickleyandmitchell.com",
  },
  {
    title: "Map based Hiking App",
    subtitle: "Real time Tracking",
    description: "Just Short",
    img: "https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png",
    link: "https://github.com/Barabasbalazs/map-frontend",
  },
] as ProjectItem[];
