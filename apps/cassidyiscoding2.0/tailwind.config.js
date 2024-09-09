/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows: {
        14: 'repeat(14, minmax(0, 1fr))'
      },
      fontFamily: {
        June: ["'june-expt-variable', sans-serif", { fontVariationSettings: '"STYL" 40' }],
        Hatch: ['hatch-sans', 'sans-serif']
      },
      boxShadow: {
        'light-icon': [
          '-0.1px 0.3px 0.3px hsl(20deg 45% 51%) / 0.45)',
          '-0.5px 1px 1.2px -0.9px hsl(20deg 45% 51%) / 0.42)',
          '-1.2px 2.7px 3.2px -1.9px hsl(20deg 45% 51%) / 0.4)',
          '-3px 6.6px 7.8px -2.8px hsl(20deg 45% 51%) / 0.37);'
        ]
      },

      colors: {
        transparent: 'transparent',
        primary: {
          900: '#B33C00',
          700: '#F55200',
          500: '#FF9966',
          300: '#FFCFB8',
          DEFAULT: '#FF9966',
          light: '#FFCFB8',
          contrast: '#210124'
        },
        secondary: {
          700: '#8D175F',
          500: '#DE369D',
          300: '#EA7CBF',
          DEFAULT: '#DE369D',
          light: '#EA7CBF',
          contrast: '#FFF2F1'
        },
        tertiary: {
          700: '#005A61',
          500: '#00C3D1',
          300: '#4CF3FF',
          100: '#8CF7FF',
          DEFAULT: '#EB130F',
          light: '#8CF7FF',
          contrast: '#210124'
        },
        quaternary: {
          700: '#750D37',
          500: '#BE155A',
          300: '#ED6199',
          100: '#F391B8',
          DEFAULT: '#750D37',
          light: '#ED6199'
        },
        myBlack: '#210124',
        myWhite: '#FFF2F1'
      }
    }
  },
  plugins: []
}
