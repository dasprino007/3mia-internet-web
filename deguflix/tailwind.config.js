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
      },
      backgroundImage:{
        'hero-pattern': "url('/upsell_br_hero1_weblandscape_2560x1280_052224.png')",
        'halo-image': "url('/halo-season-1-3840x2160-22144.png')"
      }
    },
  },
  plugins: [],
}

