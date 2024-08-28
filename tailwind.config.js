/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellows: "bg-yellow-600",
      },
      animation: {
        flip: "flip 0.5s ease forwards",
        jump: "jump 0.2s ease-in-out forwards",
      },
      keyframes: {
        flip: {
          "0%": {
            transform: "rotateX(0deg) ",
            "background-color": "#0f172a",
          },
          "45%": {
            transform: "rotateX(0deg) ",
            "background-color": "#0f172a",
          },

          "55%": {
            transform: "rotateX(90deg)",
            "background-color": "var(--bg-color);",
          },
          "100%": {
            transform: "rotateX(0deg)",
            "background-color": "var(--bg-color);",
          },
        },
        jump: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
