/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        roboto: ["Roboto", "sans-serif"]
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

