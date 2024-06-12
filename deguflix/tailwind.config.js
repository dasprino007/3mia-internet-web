/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '320px',
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
      },
      aspectRatio:{
        '16/9':'16 / 9',
        '4/3': '4 / 3',
        'poster': '2 / 3'
      },
      colors: {
        'primary-color':'#000E1A',
        'secondary-color':'#012340',
        'third-color':'#0057A0',
        'GoodRate-color': '#00CE7A',
        'MediumRate-color': '#FFBD3F',
        'BadRate-color': '#FF0014',
      }
    },
  },
  plugins: [],
}

