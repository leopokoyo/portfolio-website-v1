/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        't-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        palette_1: '#421006',
        palette_2: '#d11802',
        palette_3: '#f3824b',
        palette_4: '#f9dac5',
      },
      fontFamily: {
        Rosmatika: ['Rosmatika', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

