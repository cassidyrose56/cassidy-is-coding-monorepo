/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows: {
        14: 'repeat(14, minmax(0, 1fr))'
      },
      fontFamily: {
        title: ["'Ojuju', sans-serif"],
        body: ['Urbanist', 'sans-serif']
      },
      fontSize: {
        'h1Clamp': 'clamp(40px, 8vw, 96px)',
        'h2Clamp': 'clamp(32px, 8vw, 64px)',
        'lgPClamp': 'clamp(1rem, 5vw, 1.5rem)',
        'smPClamp': 'clamp(1rem, 3vw, 1.25rem)',
        'xsPClamp': 'clamp(0.875rem, 2vw, 1rem)'
      },
      colors: {
        transparent: 'transparent',
        primary: {
          900: '#36593F',
          700: '#4A7856',
          500: '#67A277',
          300: '#9AC1A4',
          200: '#CCE0D1',
          DEFAULT: '#4A7856',
          light: '#CCE0D1',
          contrast: '#FFF2F1'
        },
        secondary: {
          900: '#980B5D',
          700: '#C60F7B',
          500: '#EF2E9F',
          300: '#F57AC2',
          DEFAULT: '#C60F7B',
          light: '#F57AC2',
          contrast: '#FFF2F1'
        },
        black: '#232528',
        white: '#FFF2F1'
      }
    }
  },
  plugins: []
}

