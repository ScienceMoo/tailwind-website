const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        familyHugo: "url('/family_hugo.png')",
        familyHugo2: "url('/family_hugo2.jpg')",
      }),
      transitionProperty: {
        width: "width",
      },
    },
    fontFamily: {
      almendra: ["Almendra", ...defaultTheme.fontFamily.sans],
      raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
      karma: ["Karma", ...defaultTheme.fontFamily.sans],
      roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      monsterrat: ["Monsterrat", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
      width: {
        half: `40%`,
      },
    },
  },
  plugins: [],
};
