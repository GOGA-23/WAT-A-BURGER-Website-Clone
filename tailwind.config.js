/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: "#318080",
        secondaryColor: "#3E9391",
        skinColor: "#F4E4D4",
        orangeColor: "#E55A23",
        yellowColor: "#F1C31D",
        darkBlack: "#050301",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingY: "move 3s linear infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      lora: ["Lora", "serif"],
    },
  },
  plugins: [],
};
