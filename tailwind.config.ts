import type { Config } from "tailwindcss";

const defaultThemes = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        ...defaultThemes.screens,
      },
      colors: {
        // Define your custom colors here
        "primary-dark": "#AE4568",
        "primary-main": "#A31F61",
        "primary-light": "#D61C5B",
        grey: "#D7D7D7",
        "grey-dark": "#7B7B7B",
        bgdark: "#1a1a1a",
        // You can add more custom colors as needed
      },
    },
  },
  plugins: [],
};
export default config;
