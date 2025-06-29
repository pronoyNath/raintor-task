/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ["Sporting Grotesque", "sans-serif"],
      },
      colors: {
        primary: "#CCFF02",
        secondary: "#C5FFEE",
        light: "#FFFFFF",
        dark: "#000000",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          // sm: "640px",
          // md: "768px",
          // lg: "1024px",
          xl: "1280px",
          "2xl": "1446px",
        },
      },
    },
  },
  plugins: [],
}

