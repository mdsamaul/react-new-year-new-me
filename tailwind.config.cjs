/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {

            "primary": "#39ba1f",

            "secondary": "#90ef47",

            "accent": "#0e1ba3",

            "neutral": "#2E2438",

            "base-100": "#E9E3ED",

            "info": "#3BA8E3",

            "success": "#32C87D",

            "warning": "#E9C525",

            "error": "#E95F58",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}
