/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        'xl': '16px'
      },
      backgroundImage: {
        'homepage-background': 'url(\'src/assets/office.jpg\')',
      },
      height: {
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '192': '28rem'
      },
      width: {
        'overflow': '500%',
      },
      screens: {
        'sm': '410px',
        'md': '640px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        '2xl': '1400px',
        '3xl': '1980px',
        // => @media (min-width: 1280px) { ... }
      },
      animation: {
        motion: 'motion 80s infinite',
      },
      transform: {

      },
      keyframes: {
        motion: {
          '0%': {
            transform: 'translate(0px, 0px) rotate(0deg)'
          },
          '25%': {
            transform: 'translate(300px, 100px) rotate(-45deg)'
          },
          '50%': {
            transform: 'translate(0px, 0px) rotate(0deg)'
          },
          '75%': {
            transform: 'translate(200px, 200px) rotate(-12deg)'
          },
          '100%': {
            transform: 'translate(0px, 0px) rotate(0deg)'
          }
        },
      }
    },
    fontFamily: {
      sans: ['Eloquia', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      'default': 'Montserrat',
      'entry': 'Raleway'
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

