module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#007AFF",
          primary: "#005eff",
          secondary: "#f000b8",
          accent: "#1dcdbc",
          neutral: "#2b3440",
          "base-100": "#ffffff",
          dark: "#101119",
          "body-content": "#252525",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
    //false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    logs: false,
  },
};
