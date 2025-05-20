/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.{js,ts,jsx,tsx}' // <--- Ceci est la modification clé !
  ],
  theme: {
    extend: {},
  },
  plugins: [],
