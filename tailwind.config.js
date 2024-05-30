/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#f4f1de",
        orangefade: "#e07a5f",
        night: "#3d405b",
        sage: "#81b29a",
        shell: "#f2cc8f",
      },
    },
  },
  plugins: [],
};
