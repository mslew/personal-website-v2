/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      screens: {
        '-2xl': {max: '1536px'},
        '-xl': {max: '1280px'},
        '-lg': {max: '1024px'},
        '-md': {max: '768px'},
        '-sm': {max: '640px'},
      }
    },
  },
  plugins: [],
};

module.exports = config;
