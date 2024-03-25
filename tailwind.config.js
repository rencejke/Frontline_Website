module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:
      {
          sectionBanner: "url(../dist/img/Home/what-we-offer-bg-scaled.jpg)",
        },

        fontFamily:
        {
          montserrat: [ "Montserrat", "sans-serif"],
        },

        listStyleType:
        {
          circle: 'circle',
        },
      colors: {
       
        frntlne_clr: '#ac3971',
        frntlne_clr_darker: '#6a103f',
        gray_banner: '#f5f5f5',
        dark: '#2b2b2b',
        light: '#ffffff',
        berde: '#006341',
        lberde: "#d4e9e2",
      },
      screens:
      {
        'xs': '414px',
      },

    },
  },
  plugins: [],
}