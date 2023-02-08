/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: 'var(--black)',
      danger: 'var(--red-light)',
      red: 'var(--red-dark)',
      primary: {
        50: 'var(--primary-50)',
        100: 'var(--primary-100)',
        200: 'var(--primary-200)',
        300: 'var(--primary-300)',
        400: 'var(--primary-400)',
        500: 'var(--primary-500)',
        600: 'var(--primary-600)',
        700: 'var(--primary-700)',
        800: 'var(--primary-800)',
        900: 'var(--primary-900)',
      },
      grey: {
        50: 'var(--grey-50)',
        100: 'var(--grey-100)',
        200: 'var(--grey-200)',
        300: 'var(--grey-300)',
        400: 'var(--grey-400)',
        500: 'var(--grey-500)',
        600: 'var(--grey-600)',
        700: 'var(--grey-700)',
        800: 'var(--grey-800)',
        900: 'var(--grey-900)',
      },
    },
    extend: {
      transitionProperty: {
        type: 'var(--transition)',
      },

      height: {
        navHeight: 'var(--nav-height)',
      },
      fontSize: {
        sm: 'var(--extra-small-text)',
        base: 'var(--small-text)',
        letterSpacing: 'var(--letterSpacing)',
      },
      maxWidth: {
        md: 'var(--fixed-width)',
        xl: 'var(--max-width)',
      },
      width: {
        fixedWidth: 'var(--fixed-width)',
        fluidWidth: 'var(--fluid-width)',
      },
      borderRadius: {
        sm: 'var(--borderRadius)',
      },
      boxShadow: {
        shadow1: 'var(--shadow-1)',
        shadow2: 'var(--shadow-2)',
        shadow3: 'var(--shadow-3)',
        shadow4: 'var(--shadow-4)',
      },
    },
  },
  plugins: [],
};
