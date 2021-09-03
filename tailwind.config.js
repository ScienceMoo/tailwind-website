const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      almendra: ["Almendra", ...defaultTheme.fontFamily.sans],
      raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
      karma: ["Karma", ...defaultTheme.fontFamily.sans],
      roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      monsterrat: ["Monsterrat", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
