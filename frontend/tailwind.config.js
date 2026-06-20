/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#141218',
          light: '#faf7f4',
          elevated: '#1c1a22',
          card: '#222028',
          'card-light': '#ffffff',
        },
        accent: {
          rose: '#c9956c',
          wine: '#9f4a6b',
          sage: '#6b9080',
          gold: '#d4a574',
          coral: '#e07a5f',
        },
        muted: {
          DEFAULT: '#8a8494',
          light: '#6b6560',
        },
        cream: '#f4f0eb',
        obsidian: '#0e0d0c',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-dark': 'radial-gradient(at 40% 20%, rgba(159, 74, 107, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(201, 149, 108, 0.12) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(107, 144, 128, 0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(159, 74, 107, 0.08) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(201, 149, 108, 0.1) 0px, transparent 50%)',
        'mesh-light': 'radial-gradient(at 40% 20%, rgba(159, 74, 107, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(201, 149, 108, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(107, 144, 128, 0.06) 0px, transparent 50%)',
        'gradient-text': 'linear-gradient(135deg, #c9956c 0%, #e07a5f 50%, #9f4a6b 100%)',
        'gradient-accent': 'linear-gradient(135deg, #9f4a6b 0%, #c9956c 100%)',
        'gradient-sage': 'linear-gradient(135deg, #6b9080 0%, #a4c3b2 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.18)',
        'glow-rose': '0 0 40px rgba(201, 149, 108, 0.15)',
        'glow-wine': '0 0 40px rgba(159, 74, 107, 0.2)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
