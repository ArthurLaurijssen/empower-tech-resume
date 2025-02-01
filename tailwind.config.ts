import type { Config } from "tailwindcss";

export default {
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
        "border-gray": "rgba(230, 230, 230, 1)",
      },
      backgroundImage: {
        "gradient-gray": "linear-gradient(180deg, #D7DFD4 0%, #CBCECA 100%)",
        "gradient-gray-green":
          "linear-gradient(180deg, rgba(215, 223, 212, 0.5) 0%, rgba(203, 206, 202, 0.5) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
//background: linear-gradient(180deg, rgba(215, 223, 212, 0.5) 0%, rgba(203, 206, 202, 0.5) 100%);
