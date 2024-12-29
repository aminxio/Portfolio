/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A192F', // Darkest navy
          800: '#112240', // Dark navy
          700: '#1A365D', // Navy
          600: '#234E82', // Medium navy
          500: '#2D6CB1', // Primary navy
          400: '#3B82C4', // Light navy
          300: '#60A5FA', // Lighter navy
          200: '#93C5FD', // Very light navy
          100: '#DBEAFE', // Lightest navy
          50: '#F0F7FF',  // Navy tint
        },
        primary: {
          light: '#2D6CB1', // navy-500
          dark: '#22d3ee',  // cyan-400
        },
        secondary: {
          light: '#3B82C4', // navy-400
          dark: '#a855f7',  // purple-400
        },
        accent: {
          light: '#234E82', // navy-600
          dark: '#4ade80',  // green-400
        },
        cloud: {
          light: '#1A365D', // navy-700
          dark: '#60a5fa',  // blue-400
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};