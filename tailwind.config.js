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
      },
      backgroundColor: {
        'default': '#f7f8fb',
        'footer': '#353741'
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

