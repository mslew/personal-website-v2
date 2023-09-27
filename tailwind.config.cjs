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
        'tall': {'raw': `only screen and (max-height: 960px) and (max-width: 480px)`},
        'wide': {'raw': `only screen and (max-height: 480px) and (max-width: 960px)`},
        'portrait': {'raw': '(orientation: portrait)'},
        'landscape': {'raw': '(orientation: landscape)'},
      }
    },
    listStyleType: {
      none: 'none',
      square: 'square'
    }
  },
  plugins: [],
};

module.exports = config;
