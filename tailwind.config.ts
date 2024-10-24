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
        "pokemon-green" : "#002e33",
        "primary-yellow" : "#ffc453",
        "pokemon-green-2" : "#a3dc2f",
        "pokemon-gray" : "#d9d9d9",
        "pokemon-yellow-2": "#ffa41c",
        "pokemon-green-3" : "#153b0a",
        "pokemon-blue" : "#3a7ca6"
      },
      fontFamily: {
        primary: "var(--primary), sans-serif",
        secondary: "var(--secondary), sans-serif"
      }
    },
  },
  plugins: [],
};
export default config;
