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
        background: "var(--background)",
        foreground: "var(--foreground)",
        maingray: "#333333",
        secondgray: "#2C2C2C",
        thirdgray: "#FBFBFB",
        fourthGray: "#BDBDBD",
        secondWhite: "#F3F3F3",
        thirdWhite: "#C8C8C8",
      },
      fontFamily: {
        roboto: "Roboto, sans-serif",
      },
    },
  },
  plugins: [],
};
export default config;
