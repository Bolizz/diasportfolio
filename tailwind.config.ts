import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
      },
      keyframes: {
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "30%": { transform: "translateY(-6px) scale(1.03)" },
        },
      },
      animation: {
        "bounce-soft": "bounce-soft .5s ease-out",
      },
    },
  },
};
