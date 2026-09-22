/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#003087',
          dark: '#001a52',
          deep: '#0B1F4A',
        },
        gold: {
          DEFAULT: '#FFD700',
          dark: '#E6B800',
        },
        offwhite: '#F4F6F9',
        ink: {
          DEFAULT: '#1A1A1A',
          muted: '#4B5563',
        },
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
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
