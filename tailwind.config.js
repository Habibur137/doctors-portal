module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('./src/assets/images/bg.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        doctorsTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
      "night",
    ],
  },
  plugins: [require("daisyui")],
};
