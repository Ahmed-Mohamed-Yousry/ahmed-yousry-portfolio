/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightHover : "#fcf4ff",
        darkHover : "#2a004a",
        darkTheme : "#11001f",
      },
      fontFamily:{
        Outfit : [ 'Outfit', 'sans-serif' ],
        Ovo : [ 'Ovo', 'serif' ]
      },
    boxShadow: {
        "black" : "4px 4px 0px #000",
        "white" : "4px 4px 0px #fff",
    },
    gridTemplateColumns:{
      "auto" : "repeat(auto-fit, minmax(200px, 1fr))"
    },
keyframes: {
  'slow-bounce': {
    '0%, 100%': { transform: 'translateY(-5%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)' },
    '50%': { transform: 'translateY(0)', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' },
  },
},
animation: {
  'slow-bounce': 'slow-bounce 0.5s infinite', // أسرع من قبل
},
keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-5%)' },
    },
  },
  animation: {
    float: 'float 2s ease-in-out infinite',
  },

    },
  },
darkMode: "class",
  plugins: [],
};
