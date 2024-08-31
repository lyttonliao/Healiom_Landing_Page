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
      textColor: {
        'default': '#1b1e29',
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
        }
      },
      backgroundColor: {
        'default': '#f7f8fb',
        'footer': '#353741',
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
        }
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

