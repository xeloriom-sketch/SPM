import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        surface: "#f5f5f5",
        surface2: "#ebebeb",
        borderc: "#e0e0e0",
        foreground: "#080808",
        mutedc: "#888888",
        dark: "#080808",
        "dark-2": "#141414",
        lime: "#e8ff3d",
        "lime-dark": "#c8df00",
      },
      fontFamily: {
        sans: [
          "var(--font-geist)",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "sans-serif",
        ],
        display: [
          "var(--font-geist)",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "SF Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        spin_slow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 3s ease-in-out infinite",
        spin_slow: "spin_slow 8s linear infinite",
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
