import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
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
