/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./src/**/*.{css,html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
      screens: {
        'lg': '1366px',
      },
    },
    extend: {
      fontFamily:{
        roboto: ["Roboto", "sans-serif"]
      },
      screens:{
        sm:"320px",
        md:"768px",
        lg:"1200px",
      },
      // #ffffffcc
      colors:{
        primary:"#589167",
        text:"#000000cc",
        whiteText:"#ffffffcc",
        heading:"#000000b3",
        secendary:"#2d68f8",
      },
    },
  },
  plugins: [],
}

