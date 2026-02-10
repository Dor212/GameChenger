/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Heebo", "ui-sans-serif", "system-ui"],
        heading: ["Bitcount Single", "Heebo", "ui-sans-serif", "system-ui"],
      },
      colors: {
        gc: {
          bg: "#061639",
          panel: "#071A3A",
          line: "#A3B6C4",
          glow: "#6FE7FF",
          text: "#EAF2FF",
          muted: "#B7C6D3",
          dark: "#020816",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(111,231,255,0.25), 0 0 22px rgba(111,231,255,0.14)",
      },
    },
  },
  plugins: [],
};
