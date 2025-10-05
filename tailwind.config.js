/** @type {import(tailwindcss).Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chili: "#dc2626",
        ember: "#f97316",
        charcoal: "#0b0b0b",
        ash: "#1f2937"
      },
      backgroundImage: {
        "fiery-radial": "radial-gradient(1200px 600px at 20% 10%, rgba(220,38,38,0.35), transparent), radial-gradient(800px 400px at 80% 50%, rgba(249,115,22,0.25), transparent)",
        "fiery-conic": "conic-gradient(from 180deg at 50% 50%, rgba(220,38,38,0.35), rgba(249,115,22,0.25), rgba(220,38,38,0.35))",
      },
      keyframes: {
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.65" }
        },
        heat: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
          "100%": { transform: "translateY(0)" }
        }
      },
      animation: {
        flicker: "flicker 2.5s infinite",
        heat: "heat 4s ease-in-out infinite"
      },
      boxShadow: {
        ember: "0 10px 25px -5px rgba(220,38,38,0.3), 0 8px 10px -6px rgba(249,115,22,0.25)"
      }
    },
  },
  plugins: [],
}
