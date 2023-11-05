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
        "primary-main": "#FF6501",
        "primary-light": "#FFE8D9",
        // You can add more custom colors as needed
      },
    },
  },
  plugins: [],
};
export default config;
