/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    theme: {
      extend: {
        colors: {
          customYellow: "#EFBD48",
        },
      },
    },
  },
  plugins: [],
};
