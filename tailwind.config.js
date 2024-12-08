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
      animation: {
        'custom-ping': 'customPing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'custom-ping2': 'customPing2 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        customPing: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%': { transform: 'scale(2)', opacity: '0' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        customPing2: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%': { transform: 'scale(3)', opacity: '0' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        
      },
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

