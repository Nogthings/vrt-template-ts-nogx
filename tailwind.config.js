/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    colors: {
      white: "#ffffff",
      dark: {
        50: "#f5f7fa",
        100: "#eaedf4",
        200: "#d0d9e7",
        300: "#a7b8d2",
        400: "#7793b9",
        500: "#5676a1",
        600: "#435d86",
        700: "#344767",
        800: "#30405c",
        900: "#2c384e",
        950: "#1d2534",
      },
      gray: {
        50: "#f0f2f5",
        100: "#e9ecf0",
        200: "#d8dee5",
        300: "#bdc6d3",
        400: "#9eaabc",
        500: "#8693ab",
        600: "#747f9c",
        700: "#68718d",
        800: "#585e75",
        900: "#494e5f",
        950: "#2f323c",
      },
      primary: {
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
      secondary: {
        50: "#f5f6f8",
        100: "#ecf0f3",
        200: "#dce2e9",
        300: "#c7ceda",
        400: "#afb7ca",
        500: "#9aa2ba",
        600: "#838aa8",
        700: "#7b809a",
        800: "#5c6077",
        900: "#4e5161",
        950: "#2d2f39",
      },
      info: {
        50: "#eef9ff",
        100: "#daf0ff",
        200: "#bde6ff",
        300: "#8fd8ff",
        400: "#5bc0ff",
        500: "#34a2fd",
        600: "#1e84f2",
        700: "#1a73e8",
        800: "#1957b4",
        900: "#1a4c8e",
        950: "#152f56",
      },
      warning: {
        50: "#fffbec",
        100: "#fff6d3",
        200: "#ffeaa5",
        300: "#ffd96d",
        400: "#ffbd32",
        500: "#ffa60a",
        600: "#fb8c00",
        700: "#cc6902",
        800: "#a1500b",
        900: "#82430c",
        950: "#462004",
      },
      error: {
        50: "#fef3f2",
        100: "#ffe3e1",
        200: "#ffccc8",
        300: "#ffa9a2",
        400: "#fc776d",
        500: "#f44335",
        600: "#e22e20",
        700: "#be2317",
        800: "#9d2117",
        900: "#82221a",
        950: "#470d08",
      },
      success: {
        50: "#f3faf3",
        100: "#e3f5e3",
        200: "#c8eac9",
        300: "#9dd89f",
        400: "#6bbd6e",
        500: "#4caf50",
        600: "#358438",
        700: "#2d6830",
        800: "#275429",
        900: "#224525",
        950: "#0e2510",
      },
    },
    fontFamily: {
      body: ["Nunito"],
    },
  },
};
export const plugins = [];
