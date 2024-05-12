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
      colors: {
        primary_normal: '#2A47F7',
        primary_400: '#5D73F9',
        primary_300: '#8E9DFB',
        primary_200: '#BFC8FD',
        primary_100: '#D8DDFE',
        secondary_normal: '#333982',
        secondary_400: '#3E459E',
        secondary_300: '#4850B7',
        secondary_200: '#6E74B9',
        secondary_100: '#8288CE',
        accent: '#F5F7FF',
        white: '#FEFEFE',
        light_normal: '#E8E8E8',
        light_400: '#D9D9D9',
        light_300: '#BFBFBF',
        light_200: '#A3A3A3',
        black: '#282B2D',
        dark_normal: '#35393B',
        dark_400: '#43484C',
        dark_300: '#52585C',
        dark_200: '#60676C',
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
      },
    },
  },
  plugins: [],
};
export default config;
