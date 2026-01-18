module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberPurple: "#8A2BE2",
        neonCyan: "#00F5FF",
        deepSpace: "#050814",
        crotechOrange: "#F37009",
        crotechCharcoal: "#313943",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
