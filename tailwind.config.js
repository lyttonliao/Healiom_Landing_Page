/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'sans': ['Lato', 'sans-serif']
    },
    extend: {
      textColor: {
        'default': '#1b1e29',
        'primary': {
          50: 'C1F5EF',
          100: '#AFF2EB',
          200: '#8CECE2',
          300: '#69E6D9',
          400: '#46E0D0',
          500: '#24dac6',
          600: '#1CAA9A',
          700: '#147A6F',
          800: '#0C4A43',
          900: '#041917',
          950: '#000101'
        }
      },
      backgroundColor: {
        'default': '#f7f8fb',
        'footer': '#353741',
        'primary': {
          50: 'C1F5EF',
          100: '#AFF2EB',
          200: '#8CECE2',
          300: '#69E6D9',
          400: '#46E0D0',
          500: '#24dac6',
          600: '#1CAA9A',
          700: '#147A6F',
          800: '#0C4A43',
          900: '#041917',
          950: '#000101'
        }
      },
      zIndex: {
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'auto': 'auto'
      }
    }
  },
  plugins: [],
}

