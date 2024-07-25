/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          "2xl": "1186px",
        },
      },
      colors: {
        gray: {
          DEFAULT: "#6F6F6F", // Gray 1
          25: "#78788029",
          50: "#383838B2",
          51: "#383838",
          100: "#F7F8FA", // Gray 6
          200: "#F2F3F5", // Gray 5
          300: "#EAEBED", // Gray 4
          350: "#D9D9D9",
          400: "#CDCDD0", // Gray 3
          500: "#9E9EA5", // Gray 2,
        },
        red: {
          DEFAULT: "#F62559",
          10: "#F625591A",
          50: "#FFF6F9",
          100: "#FEEBF0",
          200: "#FFD4DF",
          500: "#FA0738",
        },
        white: {
          DEFAULT: "#FFFFFF",
          12: "#FFFFFF1F",
          24: "#FFFFFF3D",
        },
        black: {
          DEFAULT: "#383838",
          30: "#3838384D",
          400: "#000000",
        },
        blue: {
          DEFAULT: "#2684FC",
          50: "#2684FC14",
        },
        yellow: {
          DEFAULT: "#F8AF02",
          50: "#F8AF021A",
          100: "#F8CD66",
          200: "#FFCD55",
        },
        green: {
          DEFAULT: "#26D176",
          50: "#26D1761A",
        },
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(180deg, #37BBFE 0%, #007DBB 100%)",
        "black-gradient": "linear-gradient(85deg, #383838 0%, #6F6F6F 131.39%)",
        "red-gradient":
          "linear-gradient(193deg, #EB2859 -6.24%, #792036 92.34%)",
        "side-gradient":
          "linear-gradient(90deg, #F7F8FA -28.78%, rgba(247, 248, 250, 0.00) 100%)",
        "white-gradient":
          "linear-gradient(180deg, rgba(247, 248, 250, 0.00) 0%, rgba(247, 248, 250, 0.72) 100%)",
        "slider-gradient":
          "linear-gradient(180deg, rgba(2, 5, 20, 0.00) 0%, rgba(2, 5, 20, 0.70) 51.34%, #020514 100%)",
        "brand-gradient":
          "linear-gradient(180deg, rgba(26, 26, 26, 0.00) 0%, rgba(26, 26, 26, 0.80) 73.96%, #1A1A1A 100%)",
      },
      boxShadow: {
        dark: "0px 1px 12px 0px rgba(5, 5, 5, 0.30)",
        card: "0px 8px 40px 0px rgba(40, 40, 40, 0.12)",
        green: "0px 0px 32px rgba(38, 209, 118, 0.30)",
        red: "0px 2px 12px 0px rgba(246, 37, 89, 0.30), 0px 2px 12px 0px rgba(246, 37, 89, 0.54)",
        badge: "0px 2px 12px 0px rgba(246, 37, 89, 0.30)",
        "red-card": "0px 8px 24px rgba(246, 37, 89, 0.10)",
        "red-btn": "0px 3px 20px 0px rgba(255, 13, 73, 0.20)",
        toast: "0px 4px 10px 0px rgba(0, 0, 0, 0.13)",
        black: "0px 4px 44px 0px rgba(56, 56, 56, 0.16)",
        "black-shadow": "0px 4px 13px 0px rgba(56, 56, 56, 0.08)",
        "black-sm":
          "0px 3px 1px rgba(0, 0, 0, 0.06), 0px 3px 8px rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        "proxima-nova": ["proxima-nova"],
        inter: ["inter"],
        rubik: ["rubik"],
        sfpro: ["sf-pro-text"],
      },
      borderRadius: {
        10: "10px",
      },
      padding: {
        5.5: "22px",
      },
      margin: {
        8.5: "34px",
      },
      width: {
        4.5: "18px",
        8.5: "34px",
        76.5: "307px",
        84: "336px",
      },
      height: {
        4.5: "18px",
        5.5: "22px",
        8.5: "34px",
        13: "52px",
        50: "200px",
      },
      lineHeight: {
        4.5: "18.2px",
        5.8: "20.8px",
        6.5: "26px",
        125: "125%",
        130: "130%",
      },
      translate: {
        4.5: "18px",
        5.5: "22px",
        6.5: "26px",
        7.5: "30px",
      },
      fontSize: {
        14: "14px",
        22: "22px",
        28: "28px",
        32: "32px",
      },
    },
  },
  plugins: [],
};
