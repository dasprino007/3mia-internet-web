/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio:{
        '16/9':'16 / 9',
        '4/3': '4 / 3'
      },
      colors: {
        'primary-jose':'#034562',
      }
    },
  },
  plugins: [],
}

