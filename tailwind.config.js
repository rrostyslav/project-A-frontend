const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-kb-theme="dark"]'],
  content: [
    "src/routes/**/*.{ts,tsx,mdx}",
    "src/components/**/*.{ts,tsx}",
    "src/registry/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: { "2xl": "1400px" },
      },

      // Custom radii
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Custom fonts
      fontFamily: {
        sans: ["Inter Variable", ...fontFamily.sans],
      },

      // Keyframes & animations
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--kb-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--kb-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--kb-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--kb-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
      },

      // Color palette
      colors: {
        // Semantic tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Grey scale palette
        gray: {
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

        // Branded purple scale
        purple: {
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

        // UI-specific overlays & backgrounds
        ui: {
          divider: "rgba(82,82,111,0.25)",
          "letter-bg": "rgba(149,149,189,0.125)",
          "icon-default": "rgba(220,216,254,0.565)",
          "icon-secondary": "rgba(220,216,254,0.314)",
          "bg-light": "rgba(124,124,164,0.125)",
          "app-bg": "#181921",
          caret: "#6E5ED2",
          "border-cmd": "rgba(82,82,111,0.44)",
          "bg-cmd": "rgba(29,30,43,0.498)",
          "tooltip-bg": "rgba(29,30,43,0.498)",
          "button-bg": "rgba(133,134,152,0.2)",
          "file-bg": "rgba(67,69,99,0.173)",
          "sub-issue-bg": "rgba(19,20,32,0.298)",
          "sub-issue-hover": "rgba(27,28,41,0.4)",
          "text-btn-bg": "#595974",
        },

        // Decoration / accent colors
        deco: {
          teal: "#00B2BF",
          red: "#EB5757",
          "red-light": "#FA6563",
          mustard: "#978200",
          yellow: "#F2C94C",
          orange: "#F2994A",
          lavender: "#BB87FC",
          sky: "#4EA7FC",
          "neutral-grey": "#95A2B3",
          green: "#4CB782",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
