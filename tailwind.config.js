/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Georgia: "Georgia",
      },

      colors: {
        pallete: {
          primary: "#B11830",
        },
        buttons: {
          primary: {
            DEFAULT: "#B11830",
            hover: "#85272F",
            selected: "#5A1B21",
          },
          success: {
            DEFAULT: "#178515",
            hover: "#177515",
            selected: "#5A1B21",
          },
          warning: {
            DEFAULT: "#DCB903",
            hover: "#C1A71A",
            selected: "#5A1B21",
          },
          danger: {
            DEFAULT: "#FF0000",
            hover: "#B21616",
            selected: "#5A1B21",
          },
        },
      },
    },
  },
  plugins: [],
};
