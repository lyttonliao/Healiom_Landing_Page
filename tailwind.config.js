/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': {
          '50': 'C1F5EF',
          '100': '#AFF2EB',
          '200': '#8CECE2',
          '300': '#69E6D9',
          '400': '#46E0D0',
          '500': '#24dac6',
          '600': '#1CAA9A',
          '700': '#147A6F',
          '800': '#0C4A43',
          '900': '#041917',
          '950': '#000101',
        },
        'secondary': {
          '50': '#CDD1D4',
          '100': '#C2C6CA',
          '200': '#ACB2B7',
          '300': '#969EA4',
          '400': '#46E0D0',
          '500': '#6C757D',
          '600': '#52595F',
          '700': '#383D41',
          '800': '#1E2023',
          '900': '#040405',
          '950': '#000000',
        },
        'success': {
          '50': '#9FE8AF',
          '100': '#8EE4A2',
          '200': '#6DDC87',
          '300': '#4CD46B',
          '400': '#30C853',
          '500': '#28A745',
          '600': '#1D7A32',
          '700': '#124C20',
          '800': '#071F0D',
          '900': '#000000',
          '950': '#000000',
        }
      },
      textColor: {
        'default': '#1b1e29',

      },
      backgroundColor: {
        'default': '#f7f8fb',
        'footer': '#353741',
      },
      zIndex: {
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'auto': 'auto',
      },
      minWidth: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      maxWidth: {
        '8xl': '1536px'
      },
      keyframes: {
        'smooth-slide': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
      },
      animation: {
        "refine-slide": "smooth-slide 15s linear infinite",
        "none": "none"
      },
      gridAutoColumns: {
        '1/5': '20%',
        '1/4': '25%',
        '1/3': '33.33%',
        '1/2': '50%'
      }
    }
  },
  plugins: []
};

