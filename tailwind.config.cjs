// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sb_bg: "#191A1F",
        line: "#2A2A2F",
        main: "#1B1C22",
        green: "#24BC58",
      },
    },
  },
  plugins: [],
};
