/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        90: "0.9",
      },
      colors: {
        primary: "#002029",
        secondary: "#D64923",
      },
      screens: {
        xs: "426px",
      },
    },
  },
  plugins: [],
};
