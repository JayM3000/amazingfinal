import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        persimmon: "#E05206",
        dentaWhite: "#FFFFFF",
        dentalGreen: "#0DB02B",
        lapisBlue: "#2F6B9A",
      },
    },
  },
  plugins: [],
};
export default config;
