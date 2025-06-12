/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFFDF7',
          100: '#FFF9E6',
          200: '#FFF0C7',
          300: '#FFE085',
          400: '#FFCE42',
          500: '#D4AF37',
          600: '#B8941F',
          700: '#9A7A1A',
          800: '#7D6316',
          900: '#654F12',
        },
        crimson: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#DC143C',
          600: '#C41E3A',
          700: '#A91B37',
          800: '#8F1834',
          900: '#751531',
        },
        elegant: {
          50: '#F8F8F8',
          100: '#F0F0F0',
          200: '#E0E0E0',
          300: '#C0C0C0',
          400: '#808080',
          500: '#404040',
          600: '#2D2D2D',
          700: '#1F1F1F',
          800: '#1A1A1A',
          900: '#0F0F0F',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};