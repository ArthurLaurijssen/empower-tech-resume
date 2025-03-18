import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "darker-gray": "rgba(218, 222, 215, 1)",
        "text-gray": "rgba(89, 89, 89, 1)",
        "text-light-gray": "rgba(208, 204, 204, 1)",
        "text-mission-gray": "rgba(150, 150, 150, 1)",
        "mission-background": "rgba(243, 243, 243, 1)",
        "footer-gray": "rgba(175, 175, 175, 1)",
        "dot-gray": "rgba(217, 217, 217, 1)",
        "background-gray": "rgba(36, 37, 36, 1)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to bottom, #eaefe8, #e5e7e5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
