module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    display: ["Open Sans", "sans-serif"],
    body: ["Open Sans", "sans-serif"],
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#f8f9fa",
        "main-dark-bg": "#121212",
        "main-card-bg":'linear-gradient(to right top, #0b2744, #1c1c32, #1c1320, #150a11, #000000)',
        "secondary-dark-bg": "#33373E",
        "light-gray": "#f7f7f7",
        "half-transparent": "rgba(0,0,0,0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0,0,0,0.1)",
      },
      width: {
        100:"100px",
        500:"500px",
        300:"300px",
        400: "400px",
        600:"600px",
        700:"700px",
        760: "760px",
        780: "780px",
        800: "800px",
        1170:"1170px",
        1000: "1200px",
        1400: "1400px",
      },
       
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
