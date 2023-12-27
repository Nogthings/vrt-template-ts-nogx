/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    colors: {
      white: "#ffffff",
      black: "#111111",
      gray: {
        100: "#f5f5f5",
        200: "#e0e0e0",
        300: "#bdbdbd",
        400: "#9e9e9e",
        500: "#757575",
        600: "#616161",
        700: "#424242",
        800: "#303030",
        900: "#212121",
      },
      purple: {
        50: "#fcf5fe",
        100: "#f6e9fe",
        200: "#efd2fc",
        300: "#e4aff8",
        400: "#d580f2",
        500: "#c14fe6",
        600: "#a62fca",
        700: "#8e24aa",
        800: "#741f89",
        900: "#621f70",
        950: "#3f084a",
      },
    },
    fontFamily: {
      body: ["Nunito"],
    },
  },
};
export const plugins = [];
