/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation:{
        bounceSlow:"bounce 2s infinite",
        bounceDelay1:"bounce 2s infinite 0.2s",
        bounceDelay2:"bounce 2s infinite 0.4s",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.word-spacing-4': {
          wordSpacing: '1rem',
        },
      });
    },
  ],
};


