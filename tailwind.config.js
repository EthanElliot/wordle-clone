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
        wobble: "wobble 0.3s ease-in-out forwards",
        error: "fadeout 1s ease-in-out forwards ",
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
        wobble: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "20%, 80%": {
            transform: "translateX(4px)",
          },

          "40%, 60%": {
            transform: "translateX(-4px)",
          },
        },
        fadeout: {
          "0%, 90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
