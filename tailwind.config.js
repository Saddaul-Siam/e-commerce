/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          // maxWidth: "100%",
          // "@screen sm": {
          //   maxWidth: "640px",
          // },
          // "@screen md": {
          //   maxWidth: "768px",
          // },
          // "@screen lg": {
          //   maxWidth: "1024px",
          // },
          "@screen xl": {
            maxWidth: "1280px",
          },
          // "@screen 2xl": {
          //   maxWidth: "1280px",
          // },
        },
      });
    },
  ],
};
