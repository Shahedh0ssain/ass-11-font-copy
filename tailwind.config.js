/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: false,
  },
  // themes: [
  //   {
  //     light: {
  //       primary: "#a991f7",
  //       secondary: "#ff216e",
  //       accent: "#37cdbe",
  //       neutral: "#3d4451",
  //       "base-100": "#ffffff",
  //     },
  //   },
  //   "dark",
  // ],


  theme: {
    container: {
      padding: {
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',

      },

      // extend: {
      //   fontFamily: {
      //     font: ['Plus Jakarta Sans', "sans-serif"],
      //     fontPo: ['Poppins', "sans-serif"],

      //     //font-family: 'Poppins', sans-serif;
      //   },
      // },

    },

    // fontFamily: {
    //   'poppins': ['Poppins', 'sans-serif']

    // }


  },
  plugins: [require("daisyui")],

}