/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        '2xl': '1600px',
      },
      colors: {
        brand: {
          light: '#3ABFF8',
          DEFAULT: '#0284C7',
          dark: '#0369A1',
        },
      },
      fontFamily: {
        main: ['Grandstander', 'sans-serif'],
        text: ['Nunito Sans', 'monospace'],
      },
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      fontWidth: {
        condensed: '75',
        medium: '85',
        normal: '95',
        expanded: '105',
        wide: '115'
      },
      boxShadow: {
        custom: "4px 4px 6.3px 0",
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const widths = theme('fontWidth');
      const newUtilities = Object.entries(widths).map(([key, value]) => {
        return {
          [`.font-w-${key}`]: { 'font-variation-settings': `"wdth" ${value}` },
        };
      });
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
