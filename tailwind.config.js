/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        redentor: {
          blue: '#003087',
          'blue-light': '#0052cc',
          'blue-dark': '#001a52',
          yellow: '#FFD700',
          gray: '#f4f6f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
