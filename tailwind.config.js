/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Indigo
        secondary: '#D4AF37', // Gold
      },
    },
  },
  plugins: [],
}
