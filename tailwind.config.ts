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
        "darker-gray": "#DADED7",
        "text-gray": "#595959",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to bottom, #eaefe8, #e5e7e5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
