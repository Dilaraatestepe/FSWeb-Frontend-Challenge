export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        max: { max: "500px" },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
