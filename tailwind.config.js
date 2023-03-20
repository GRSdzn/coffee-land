/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  center: true,
  theme: {
    fontFamily: {
      Main: [
        "Jost, Lora, sans-serif",
      ],
      HandWriteTitle: [
        "Caveat, GreatVibes",
      ],
    },
    colors: {
      pageBackground: '#272727',
      main: '#E7C5C4',
      mainLight: '#EF4444',
      brown: '#734442',
      brownLight: '#93615F',
      secondary: '#707070',
      transparent: 'transparent',
      white: 'white',
      black: '#272727',
      beige: '#e0e0e0',
      gray: {
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
      },
    },

    screens: {

      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      '1xl': { max: '1415px' },
      // => @media (max-width: 1420px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1025px' },
      // => @media (max-width: 1025px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      lp: { max: '375px' },
    },
    extend: {
      colors: {
        'nav': '#8C8C8C',
        'navHover': '#bdab75',
        'regal-blue': '#243c5a',
      },
      backgroundImage: {
        backgroundHeader: "url('/src/assets/img/bcg.jpg')",
        backgroundSecond: "url('/src/assets/img/under.jpg')",
        backgroundBlock: "url('/src/assets/img/bg4.jpg')",
        backgroundCatalog: "url('/src/assets/img/bg3.jpg')",
        backgroundPng: "url('/src/assets/img/dopbcg.svg')",
        backgrundFooter: "url('/src/assets/img/bcg8.jpg')",
      },
    },
  },
  plugins: [],
};
