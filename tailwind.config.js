/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    colors: {
      white: '#ffffff',
      black: '#222222',
      gray: {
        100: '#f5f5f5',
        200: '#e0e0e0',
        300: '#bdbdbd',
        400: '#9e9e9e',
        500: '#757575',
        600: '#616161',
        700: '#424242',
        800: '#303030',
        900: '#212121',
      },
      purple: {
        100: '#f3e5f5',
        200: '#e1bee7',
        300: '#ce93d8',
        400: '#ba68c8',
        500: '#ab47bc',
        600: '#9c27b0',
        700: '#8e24aa',
        800: '#7b1fa2',
        900: '#4a148c',
      },
    },
    fontFamily: {
      'body': ['Nunito']
    }
  },
};
export const plugins = [];