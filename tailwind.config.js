/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      gray: "hsla(0, 0%, 20%, 1)",
      black: "hsla(0, 0%, 0%, 1)",
      white: "hsla(0, 0%, 100%, 1)",
      primary: "#F9F9F9",
      darkGray: "#DFDFDF",
      lightGray: "hsla(0, 0%, 96%, 1)",
      midGray: "hsla(0, 0%, 93%, 1)",
      blue: "hsla(207, 100%, 24%, 1)",
      lightBlue: "hsla(192, 97%, 37%, 1)",
      midBlue: "hsla(198, 100%, 39%, 1)",
      orange: "hsla(16, 91%, 55%, 1)",
      stars: "hsla(30, 97%, 60%, 1)",
      pink: "hsla(270, 13%, 83%, 1)",
      transparent: "hsla(270, 13%, 83%, 0)",
      red: "hsla(5, 66%, 50%, 1)",
      green: "hsla(115, 82%, 43%, 1)",
      yellow: "hsla(30, 97%, 60%, 1)",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};