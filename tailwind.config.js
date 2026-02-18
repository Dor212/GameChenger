/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gc-bg": "rgb(var(--gc-bg) / <alpha-value>)",
        "gc-dark": "rgb(var(--gc-dark) / <alpha-value>)",
        "gc-panel": "rgb(var(--gc-panel) / <alpha-value>)",
        "gc-line": "rgb(var(--gc-line) / <alpha-value>)",
        "gc-glow": "rgb(var(--gc-glow) / <alpha-value>)",
        "gc-text": "rgb(var(--gc-text) / <alpha-value>)",
        "gc-muted": "rgb(var(--gc-muted) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Heebo", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        heading: ["var(--gc-heading)", "Heebo", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(111,231,255,.10), 0 18px 70px rgba(0,0,0,.55)",
      },
    },
  },
  plugins: [],
};
