import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#2196F3",
          200: "#666",
        },
        typo: {
          100: "#000",
          200: "#1F1F1F",
          300: "#B0B0B0",
        },
        danger: {
          100: "#FF3D00",
        },
      },
    },
  },
  plugins: [],
};
export default config;
