/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        "xl": '16px'
      },
      backgroundImage: {
        'homepage-background': "url('src/assets/office.jpg')",
      },
      height: {
        '1/2-screen': '50vh',
        '192': '28rem'
      },
      width: {
        'overflow': '500%',
      },
      animation: {
        motion: "motion 80s infinite",
        motion2: "motionTwo 80s infinite",
        motion3: "motionThree 80s infinite",
        motion4: "motionFour 80s infinite",
      },
      keyframes: {
        motion: {
          "0%": {
            transform: "translate(0px, 0px) rotate(0deg)"
          },
          "25%": {
            transform: "translate(300px, 100px) rotate(-45deg)"
          },
          "50%": {
            transform: "translate(0px, 0px) rotate(0deg)"
          },
          "75%": {
            transform: "translate(200px, 200px) rotate(-12deg)"
          },
          "100%": {
            transform: "translate(0px, 0px) rotate(0deg)"
          }
        },
        motionTwo: {
          "0%": {
            transform: "translate(0px, 0px) rotate(0deg)"
          },
          "25%": {
            transform: "translate(-200px, 50px) rotate(90deg)"
          },
          "50%": {
            transform: "translate(0px, 0px) rotate(0deg)"
          },
          "75%": {
            transform: "translate(50px, -200px) rotate(-12deg)" 
          },
          "100%": {
            transform: "translate(0px, 0px) rotate(0deg)"
          }
        },
        motionThree: {
          "0%": {
            transform: "translate(0px, 0px) rotate(0deg)"
          },
          "25%": {
            transform: "translate(-200px, 200px) rotate(90deg)"
          },
          "50%": {
            transform: "translate(250px, 250px) rotate(0deg)"
          },
          "75%": {
            transform: "translate(50px, -200px) rotate(-12deg)" 
          },
          "100%": {
            transform: "translate(0px, 0px) rotate(0deg)"
          }
        },
        motionFour: {
          "0%": {
            transform: "translate(0px, 0px) rotate(0deg)"
          },
          "25%": {
            transform: "translate(10px, 300px) rotate(90deg)"
          },
          "50%": {
            transform: "translate(150px, 350px) rotate(0deg)"
          },
          "75%": {
            transform: "translate(50px, -50px) rotate(-12deg)" 
          },
          "100%": {
            transform: "translate(0px, 0px) rotate(0deg)"
          }
        }
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

