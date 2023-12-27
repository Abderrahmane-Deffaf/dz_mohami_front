/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: "hsla(0, 0%, 20%, 1)",
      black: "hsla(0, 0%, 0%, 1)", 
      white: "hsla(0, 0%, 100%, 1)",
      primary: "#F9F9F9",
      blue: "hsla(207, 100%, 24%, 1)",
      lightBlue: "hsla(192, 97%, 37%, 1)",
      midBlue:"hsla(198, 100%, 39%, 1)", 
      orange: "hsla(16, 91%, 55%, 1)",
      stars: "hsla(30, 97%, 60%, 1)",
    },
    extend: {},
  },
  plugins: [],
};

