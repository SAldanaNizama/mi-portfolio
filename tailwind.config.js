/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "blue-mate": "0 4px 6px rgba(30, 58, 138, 0.5)",
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
