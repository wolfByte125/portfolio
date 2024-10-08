import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-bg-primary": "#001122",
        "custom-bg-secondary": "#2E6E89",
        "custom-bg-white": "#FFFDF1",
        "custom-bg-red": "#FF1801",
        "custom-bg-yellow": "#FFB81C",
      },
    },
  },
  plugins: [],
};
export default config;
