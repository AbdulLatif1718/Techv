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
        tech: {
          dark: "#050505",
          deep: "#0a0a0a",
          accent: "#00f2ff", // Electric Cyan
          glow: "#0047ff",   // Deep Blue Glow
          muted: "#1a1a1a",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "futuristic-grid": "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #00f2ff, 0 0 10px #00f2ff" },
          "100%": { boxShadow: "0 0 20px #00f2ff, 0 0 40px #0047ff" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
