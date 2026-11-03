module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
      },
      colors: {
        "light-content": "#e5e7eb", // Changes the Header Color
        "dark-heading": "Black",
        "dark-content": "Black", // Changes the Text
        "light-heading": "#ffffff",
        "dark-mode": "#0f0f14",
        "dark-card": "#1c1c26",
        "green-text": "White",
        "greenbg": "Black",
      },
    },
  },
  plugins: [],
};
