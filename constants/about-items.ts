interface CoordinateItem {
  displayValue: string;
  numericalValue: {
    lat: number;
    lng: number;
  };
}

export const coordinates = {
  displayValue: `46°46'51.4"N 23°36'15.3"E`,
  numericalValue: { lat: 46.770439, lng: 23.591423 },
} as CoordinateItem;

export const description =
  "Accomplished Full Stack Developer with extensive experience in designing and implementing scalable, multi-layered, and user-friendly web applications. Passionate advocate for automation throughout the development lifecycle, from testing to deployment, ensuring efficiency and reliability. Proficient in four languages, with a keen interest in hiking and a deep appreciation for history.";
