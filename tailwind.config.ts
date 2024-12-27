import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-dblue": "#1B0C2F",
        "c-blue": "#3D2C6F",
        "c-unique": "#611FB9",
      },
      fontSize: {
        "h1-phone": "48px",
        "h1-tablet": "56px",
        "h1-desktop": "64px",
        "h2-phone": "24px",
        "h2-tablet": "32px",
        "h2-desktop": "40px",
        "h3-phone": "18px",
        "h3-tablet": "20px",
        "h3-desktop": "24px",
        "h4-phone": "16px",
        "h4-tablet": "18px",
        "h4-desktop": "20px",
        "h5-phone": "12px",
        "h5-tablet": "14px",
        "h5-desktop": "16px",
        "h6-phone": "8px",
        "h6-tablet": "10px",
        "h6-desktop": "12px",
        "label": "24px",
        "details": "20px",
        "buttons": "18px",
      },
      padding: {
        "section-phone": "20px 20px",
        "section-tablet": "40px 20px",
        "section-desktop": "40px 100px",
        "header-phone": "0 20px",
        "header-tablet": "0 40px",
        "header-desktop": "0 100px",
        "buttons": "10px 15px",
      },
      maxWidth: {
        "maximum": "1080px"
      },
      minHeight: {
        "card": "360px"
      }
    },
  },
  plugins: [],
};
export default config;
