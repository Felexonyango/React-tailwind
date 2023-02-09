/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode:'class',
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
  extend: {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: '#1fb6ff',
        secondary: '#13ce66',

      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '1': '8px',
          '2': '12px',
          '3':'16px',
          '4':'24'


          },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },
},
plugins: [
  
],
}
