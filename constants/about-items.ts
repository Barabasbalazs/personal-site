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
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
