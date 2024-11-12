/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{scss,js,ts,jsx,tsx}",
    "node_modules/@frostui/tailwindcss/dist/*.js"
  ],
  darkMode: ['class', '[data-mode="dark"]'],

  theme: {

    container: {
      center: true,
    },

    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
    },

    extend: {
      colors: {
        'primary': '#3e60d5',
        'secondary': '#6c757d',
        'success': '#47ad77',
        'info': '#16a7e9',
        'warning': '#ffc35a',
        'danger': '#f15776',
        'light': '#f2f2f7',
        'dark': '#212529',

        'gray': {
          ...colors.gray,
          '800': '#313a46'
        }
      },

      keyframes: {
        load: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },

      minWidth: theme => ({
        ...theme('width'),
      }),

      maxWidth: theme => ({
        ...theme('width'),
      }),

      minHeight: theme => ({
        ...theme('height'),
      }),

      maxHeight: theme => ({
        ...theme('height'),
      }),
    },
  },
  plugins: [
    require('@frostui/tailwindcss/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

