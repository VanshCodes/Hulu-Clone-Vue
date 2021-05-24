module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      animation: ["group-hover"],
      textColor: ["active"]
    }
  },
  plugins: [require("tailwind-scrollbar-hide")]
};
