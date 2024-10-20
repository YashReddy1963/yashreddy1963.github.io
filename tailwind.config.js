/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      keyframes:{
        expand75:{
          '0%': {width: '0%'},
          '100%': {width: '75%'},
        },
        expand85:{
          '0%': {width: '0%'},
          '100%': {width: '85%'},
        },
        expand80:{
          '0%': {width: '0%'},
          '100%': {width: '80%'},
        },
        expand75:{
          '0%': {width: '0%'},
          '100%': {width: '75%'},
        },
        expand70:{
          '0%': {width: '0%'},
          '100%': {width: '70%'},
        },
      },
    animation:{
      expandBar75: 'expand75 1.5s ease-out forwards',
      expandBar85: 'expand85 1.5s ease-out forwards',
      expandBar80: 'expand80 1.5s ease-out forwards',
      expandBar75: 'expand75 1.5s ease-out forwards',
      expandBar70: 'expand70 1.5s ease-out forwards',
    },
    },
  },
  plugins: [],
}

