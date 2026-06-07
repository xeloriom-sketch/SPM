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
        /* Dark green-tinted base — gives life vs pure black */
        background: "#080c0a",
        surface: "#0f1610",
        surface2: "#172019",
        borderc: "#1e2a22",
        foreground: "#f0f5f2",
        mutedc: "#7a9080",
        /* Vivid lime — the hero accent */
        lime: "#b6f000",
        /* Warm amber for highlights */
        amber: "#f5a623",
        /* Sky for trust signals */
        sky: "#38bdf8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-sora)", "sans-serif"],
      },
      backgroundImage: {
        "lime-radial": "radial-gradient(circle at 30% 50%, rgba(182,240,0,0.08) 0%, transparent 60%)",
        "lime-top": "radial-gradient(ellipse at 50% 0%, rgba(182,240,0,0.06) 0%, transparent 50%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulse_lime: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        floaty: "floaty 3s ease-in-out infinite",
        pulse_lime: "pulse_lime 2s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
