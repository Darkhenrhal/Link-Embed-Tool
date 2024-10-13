/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        black1:"#000000",
        black2:"#111111",
        black3:"#525252",
        black4:"#b7b7b7",
        black5:"#e8e8e8",
  

      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        'xsm': '300px', 
        'galaxysm': '412px',  // Custom screen size for Galaxy A51
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        '2xl': '1536px',
        'ipadsm': '1640px',
      },
    },
  },
  plugins: [
  ],
};