/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",      // Indigo
        secondary: "#a855f7",    // Purple
        accent: "#facc15"        // Yellow
      },
    },
  },
  plugins: [],
}
