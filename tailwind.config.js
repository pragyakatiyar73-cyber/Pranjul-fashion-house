/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        luxury: {
          emerald: '#064e3b',
          emerald_dark: '#022c22',
          gold: '#d4af37',
          gold_light: '#f3e5ab',
          gold_hover: '#b89628',
          burgundy: '#4a0e17',
          cream: '#faf9f6',
          obsidian: '#0f172a',
          sand: '#f5f5f0'
        },
        amazon: {
          navy: '#0f172a',
          light_navy: '#1e293b',
          yellow: '#fbbf24',
          orange: '#f97316',
          accent: '#d97706',
          bg: '#faf9f6',
        }
      }
    },
  },
  plugins: [],
}
