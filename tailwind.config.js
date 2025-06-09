/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'kaya-primary': '#7A6952',
        'kaya-accent': '#C76B4F',
        'kaya-light': '#F9F6F1',
        'kaya-dark': '#3A3226',
        'kaya-beige': '#D8C7B5'
      },
      fontFamily: {
        'bondoluo': ['Bondoluo Peek', 'sans-serif'],
        'futura': ['Futura Medium', 'sans-serif'],
        'work': ['Work Sans', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif']
      },
      screens: {
        'xs': '480px'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
    },
  },
  plugins: [],
};
