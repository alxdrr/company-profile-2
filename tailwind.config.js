/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      primary: "#002029",
      secondary: "#D64923",
    },
    extend: {
      scale: {
        90: "0.9",
      },
    },
  },
  plugins: [],
};
