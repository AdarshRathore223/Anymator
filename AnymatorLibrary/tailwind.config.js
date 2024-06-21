import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%. 100%': {opacity: 1},
          '50%': {opacity: 0},
        },

        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        fadeIn: {
          '0%': {opacity: 0},
          '50%': {opacity: 1},
          '75%': {opacity: 0},
          '100%': {opacity: 1}
        },

        wiggle: {
          '0%, 100%': {transform: 'rotate(-3deg)'},
          '50%': {transform: 'rotate(3deg)'}
        }

      },

      animation: {
        blink: 'blink 1s infinite',
        rotate: 'rotate 1s linear infinite',
        fadeIn: 'fadeIn 2s ease-in-out',
        // pulse: 'pulse 2s infinite',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        
      },

    },
  },
  plugins: [],
}