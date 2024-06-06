/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Montserrat", 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      display: ["Cinzel", 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      rem: ["REM", 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
    },
    extend: {
      colors: {
        offwhite: "#f4f1de",
        orangefade: "#e07a5f",
        night: "#3d405b",
        sage: "#81b29a",
        shell: "#f2cc8f",

        moss: "#99d98c",
        pool: "#76c893",
        aqua: "#52b69a",
        deep: "#34a0a4",
      },
      keyframes: {
        translateX: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "80%": { transform: "translateX(-5%)" }, 
          "100%": { transform: "translateX(0)", opacity: "1" }
        }
      },
      animation: {
        translateX: "translateX 300ms ease-in-out forwards"
      }
    },
  },
  plugins: [],
};
