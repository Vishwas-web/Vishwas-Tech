module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
      },
      colors: {
        "light-content": "Black", // Changes the Header Color
        "dark-heading": "Black",
        "dark-content": "Black", // Changes the Text
        "light-heading": "Black",
        "dark-mode": "white",
        "dark-card": "White",
        "green-text": "White",
        "greenbg": "Black",
      },
    },
  },
  plugins: [],
};
