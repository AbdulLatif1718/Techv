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
          dark: "#121212",
          deep: "#0a0a0a",
          accent: "#1D64EC", // Brand Electric Blue
          blue: "#1D64EC",   // Logo Blue
          green: "#22C55E",  // Logo Green
          orange: "#FF6D00", // Logo Orange
          glow: "#0066FF",   // Electric Blue Glow
          muted: "#2a2a2a",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "futuristic-grid": "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-soft": "glow 4s ease-in-out infinite alternate",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "gradient-x": "gradientX 6s ease infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(20, 184, 198, 0.2)" },
          "100%": { boxShadow: "0 0 15px rgba(20, 184, 198, 0.4)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
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
