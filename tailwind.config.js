/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage-background': "url('src/assets/office.jpg')",
      },
      height: {
        '1/2-screen': '50vh'
      }
    },
    fontFamily: {
      sans: ['Eloquia', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

