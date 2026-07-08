import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // DevInception Logo Palette (solid colors, no gradients)
        "deep-blue": "#0A1628",      // dark navy - main BG
        "dark-surface": "#0F1E33",   // slightly lighter surface
        "dark-card": "#162A47",      // card BG on dark sections
        "neon-blue": "#1E88E5",      // primary brand blue (logo mid-tone)
        "neon-purple": "#4FC3F7",    // accent - light cyan (logo top)
        "frosted-blue": "#90CAF9",   // medium light blue
        "light-accent": "#E3F2FD",   // light section BG (icy blue)

        // Variant blues
        "brand-1": "#1E88E5",
        "brand-2": "#0277BD",
        "brand-3": "#01579B",
        "brand-4": "#0288D1",
        "brand-5": "#039BE5",
        "brand-6": "#00ACC1",
        "brand-7": "#0097A7",
        "brand-8": "#006064",
        "brand-9": "#1565C0",
      },

      fontFamily: {
        sans: [
          "var(--font-poppins)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },

      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",

        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },

      keyframes: {
        marquee: {
          "0%": {
            transform: "translate3d(0,0,0)",
          },
          "100%": {
            transform: "translate3d(-50%,0,0)",
          },
        },

        "marquee-reverse": {
          "0%": {
            transform: "translate3d(-50%,0,0)",
          },
          "100%": {
            transform: "translate3d(0,0,0)",
          },
        },
      }
    },
  },

  plugins: [],
};

export default config;