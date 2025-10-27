/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neonDarkPurple: "#27005D",
        neonPurple: "#9400FF",
        neonBlue: "#AED2FF",
        neonSky: "#E4F1FF"
      }
    },
  },
  plugins: [],
}