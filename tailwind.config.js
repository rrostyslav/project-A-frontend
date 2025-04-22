/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Grey scale palette
        grey: {
          50: "#FFFFFF",
          100: "#EEFFFC",
          200: "#E0E1EC",
          300: "#D2D3E0",
          400: "#B0B5C0",
          500: "#858699",
          600: "#6B6F76",
          700: "#4D4F69",
          800: "#313248",
          900: "#1F2130",
        },

        // Primary / Purple hues
        primary: {
          50: "#6C79FF",
          100: "#6E79D6",
          200: "#666BE2",
          300: "#5C67C7",
          400: "#575BC7",
          500: "#7477F0",
          600: "#5E6AD2",
          700: "#37466C",
          800: "#2A2B51",
          900: "#222342",
        },

        // UI-specific overlays, backgrounds, borders
        ui: {
          divider: "rgba(82, 82, 111, 0.25)",
          "letter-bg": "rgba(149, 149, 189, 0.125)",
          "icon-default": "rgba(220, 216, 254, 0.565)",
          "icon-secondary": "rgba(220, 216, 254, 0.314)",
          background: "rgba(124, 124, 164, 0.125)",
          "app-bg": "#181921",
          caret: "#6E5ED2",
          "border-cmd": "rgba(82, 82, 111, 0.44)",
          "bg-cmd": "rgba(29, 30, 43, 0.498)",
          "tooltip-bg": "rgba(29, 30, 43, 0.498)",
          "button-bg": "rgba(133, 134, 152, 0.2)",
          "file-bg": "rgba(67, 69, 99, 0.173)",
          "sub-issue-bg": "rgba(19, 20, 32, 0.298)",
          "sub-issue-hover": "rgba(27, 28, 41, 0.4)",
          "bg-text-btn": "#595974",
        },

        // Accent / decoration colors
        deco: {
          teal: "#00B2BF",
          red: "#EB5757",
          "red-light": "#FA6563",
          mustard: "#978200",
          yellow: "#F2C94C",
          orange: "#F2994A",
          purple: "#BB87FC",
          blue: "#4EA7FC",
          grey: "#95A2B3",
          green: "#4CB782",
        },
      },
    },
  },
  plugins: [],
};
