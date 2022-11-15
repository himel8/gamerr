/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "'Poppins', sans-serif",
      header: "'Baloo Tamma 2', cursive",
      text: "'Open Sans', sans-serif",
    },
    colors: {
      primary: "#FE3C0A",
      header: "#EE380A",
      white: "#FFFFFF",
    },

    extend: {
      backgroundImage: {
        borderBg: "url('assets/borderBg.png')",
        gamerBg: "url('assets/gamersbg.png')",
        detailBox: "url('assets/textBg.png')",
        mainBg: "url('assets/mainBg.png')",
      },
      backgroundSize: {
        full: "100% 100%",
      },
    },
  },
  plugins: [],
};
