import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        midnightblue: `rgb(var(--clr-midnightblue-rgb))`,
        regblue: `rgb(var(--clr-regblue-rgb))`, 
        chilli: `rgb(var(--clr-chilli-rgb))`,
        lightchilli: `rgb(var(--clr-lightchilli-rgb))`,
        coolgray: `rgb(var(--clr-coolgray-rgb))`,
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: '95%',
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
