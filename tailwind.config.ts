import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(102%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        logoScroll: {
          to: { transform: "translateX(90%)" },
          from: { transform: "translateX(-90%)" },
        },
        antilogoScroll: {
          to: { transform: "translateX(-90%)" },
          from: { transform: "translateX(90%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
        logoScroll:"logoScroll 60s linear infinite",
        antilogoScroll:"antilogoScroll 60s linear infinite",
      },
      colors:{
        customBlue:"#3A75DD",
        customPurple:"#301B54"
      },
    },
  },
  plugins: [],
};
export default config;

// #4143DE