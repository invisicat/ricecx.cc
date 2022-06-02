const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: { max: '475px' },
      sm: { min: '640px', max: '767px' },
      ...defaultTheme.screens
    },
    fontFamily: {
      sans: ['Jost'],
      primary: ['Jost']
    },
    extend: {
      colors: {
        eggshell: {
          DEFAULT: '#F0EAD6'
        },
        xiketic: {
          DEFAULT: '#07020D',
          darker: '#0b0710'
        },
        grek: {
          DEFAULT: '#1B1B1B',
          tasty: '#29292c'
        },
        crack: {
          DEFAULT: '#f3f3f3',
          sus: '#F3FFE4',
          quad2: '#fdf2f8',
          quad3: '#fdf5f2',
          quad4: '#f2fdfc',
          ee: '#e2e9ec'
        },
        emerald: colors.emerald,
        amber: colors.amber
      },
      animation: {
        text: 'text 5s ease infinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    }
  },
  plugins: []
};
