/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F1",
        pastelBlue: "#CFE8FF",
        pastelPeach: "#FFD8C8",
        pastelPink: "#FFD4E7",
        pastelCyan: "#C8FFF5",
        brandIndigo: "#7C7CF0",
        brandViolet: "#C09BFF",
        brandCyan: "#9EE7F5"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        "2xl": "1rem"
      }
    },
  },
  plugins: [],
}
