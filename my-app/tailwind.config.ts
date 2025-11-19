import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // <-- string form, not array
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0ea5e9", dark: "#0284c7" },
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
