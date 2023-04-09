/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        w: "#e5e4e7",
        gray: {
          "100": "#272833",
          "200": "#292929",
          "300": "#16183a",
          "400": "rgba(255, 255, 255, 0.1)",
        },
        white: "#fff",
        gainsboro: "rgba(229, 228, 231, 0.2)",
        "system-green": "#00b078",
        "system-red": "#f87171",
        lightgray: "#d0cbc8",
        darkslategray: "#3e3e3e",
      },
      fontFamily: {
        "mobile-wireframe-body-large": "Inter",
        body: "'Open Sans'",
        montserrat: "Montserrat",
        "row-secondary-text": "'Source Sans Pro'",
      },
      borderRadius: {
        "3xl": "22px",
        "21xl": "40px",
        "11xl": "30px",
        "23xl": "42px",
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.88rem",
      "5xl": "1.5rem",
      smi: "0.81rem",
      xs: "0.75rem",
      "3xl": "1.38rem",
    },
  },
  corePlugins: { preflight: false },
};
