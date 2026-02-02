/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        automase: {
          blue: "#00D4FF",
          purple: "#7B2FFF",
          green: "#39FF14",
          black: "#0A0A0A",
          gray: "#1A1A1A",
          white: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      backgroundImage: {
        "automase-gradient": "linear-gradient(to right, #00D4FF, #7B2FFF)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};