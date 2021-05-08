module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "sale-green": "#44BD32",
        "blue-gray": "#90ADC6"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
