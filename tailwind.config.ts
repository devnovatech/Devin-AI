import type { Config } from "tailwindcss";

const config: Config = {
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
        // Previous palette (Deep Twilight):
        "deep-blue": "#03045E",
        "neon-blue": "#0077B6",
        "neon-purple": "#00B4D8",
        "dark-card": "#0A0C7A",
        "dark-surface": "#05066B",
        "light-accent": "#CAF0F8",
        "frosted-blue": "#90E0EF",
        // Previous palette (Ocean Depths — dark-only):
        // "deep-blue": "#012A4A",
        // "dark-surface": "#013A63",
        // "dark-card": "#01497C",
        // "neon-purple": "#014F86",
        // "neon-blue": "#2A6F97",
        // "light-accent": "#2A6F97",
        // "frosted-blue": "#014F86",
        // Previous palette (Coastal Combined):
        // "deep-blue": "#012A4A",
        // "dark-surface": "#013A63",
        // "dark-card": "#166088",
        // "neon-purple": "#4A6FA5",
        // "neon-blue": "#4F6D7A",
        // "frosted-blue": "#C0D6DF",
        // "light-accent": "#DBE9EE",
        // "deep-blue": "#1B262C",
        // "dark-surface": "#0F4C75",
        // "dark-card": "#0F4C75",
        // "neon-purple": "#0F4C75",
        // "neon-blue": "#3282B8",
        // "frosted-blue": "#BBE1FA",
        // "light-accent": "#BBE1FA",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
