import preline from "preline/plugin.js";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.astro",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005eff",
        secondary: "#f000b8",
        accent: "#1dcdbc",
        neutral: "#2b3440",
        body: "#252525",
        info: "#3abff8",
        warning: "#fbbd23",
        success: "#36d399",
        error: "#f87272",
      },
    },
  },
  darkMode: "class",
  plugins: [
    preline,
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#005eff",
  //         secondary: "#f000b8",
  //         accent: "#1dcdbc",
  //         neutral: "#2b3440",
  //         "base-100": "#ffffff",
  //         dark: "#101119",
  //         "body-content": "#252525",
  //         info: "#3abff8",
  //         success: "#36d399",
  //         warning: "#fbbd23",
  //         error: "#f87272",
  //       },
  //     },
  //   ],
  //   //false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
  //   base: true, // applies background color and foreground color for root element by default
  //   styled: true, // include daisyUI colors and design decisions for all components
  //   utils: true, // adds responsive and modifier utility classes
  //   logs: false,
  // },
};
