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
        "primary-dark": "#000000",
        "primary-light": "#FFFFFF",
        "secondary-light": "#2B7FFF",
        "secondary-dark": "#011C44",
      },
    },
  },
  plugins: [],
};
export default config;
