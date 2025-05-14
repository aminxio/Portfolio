/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red: {
          900: '#7f1d1d', // Darkest red
          800: '#991b1b', // Dark red
          700: '#b91c1c', // Red
          600: '#dc2626', // Medium red
          500: '#ef4444', // Primary red
          400: '#f87171', // Light red
          300: '#fca5a5', // Lighter red
          200: '#fecaca', // Very light red
          100: '#fee2e2', // Lightest red
          50: '#fef2f2',  // Red tint
        },
        black: {
          900: '#000000', // Pure black
          800: '#0a0a0a', // Near black
          700: '#171717', // Very dark
          600: '#262626', // Dark gray
          500: '#404040', // Medium dark gray
          400: '#525252', // Gray
          300: '#737373', // Medium gray
          200: '#a3a3a3', // Light gray
          100: '#d4d4d4', // Very light gray
          50: '#f5f5f5',  // Off-white
        },
        gold: {
          600: '#ca8a04', // Deep gold
          500: '#eab308', // Gold
          400: '#facc15', // Bright gold
          300: '#fde047', // Light gold
        },
        silver: {
          500: '#a1a1aa', // Silver
          400: '#d4d4d8', // Light silver
          300: '#e4e4e7', // Very light silver
        },
        accent: {
          purple: '#9333ea', // Royal purple
          blue: '#2563eb',   // Royal blue
          emerald: '#10b981', // Emerald green
          amber: '#f59e0b',   // Amber
        },
        primary: {
          light: '#ef4444', // red-500
          dark: '#ef4444',  // red-500
        },
        secondary: {
          light: '#f87171', // red-400
          dark: '#f87171',  // red-400
        },
        cloud: {
          light: '#000000', // black
          dark: '#000000',  // black
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
        'gradient-x': 'gradient-x 10s ease infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
      keyframes: {
        blink: {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};