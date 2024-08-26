/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "280px", max: "639px" },
        xxs: { min: "100px", max: "320px" },
      }
    },
  },
  plugins: [],
}

