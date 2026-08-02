import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        bgalt: "rgb(var(--bg-alt) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        panel2: "rgb(var(--panel-2) / <alpha-value>)",
        edge: "rgb(var(--border) / <alpha-value>)",
        edgesoft: "rgb(var(--border-soft) / <alpha-value>)",
        ink: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--text-muted) / <alpha-value>)",
        dim: "rgb(var(--text-dim) / <alpha-value>)",
        blue: "rgb(var(--blue) / <alpha-value>)",
        teal: "rgb(var(--teal) / <alpha-value>)",
        violet: "rgb(var(--violet) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      maxWidth: {
        content: "1140px",
      },
      boxShadow: {
        panel: "0 20px 60px -20px rgba(0,0,0,0.55)",
        glow: "0 10px 30px -10px rgba(76,141,255,0.45)",
      },
      keyframes: {
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(47,224,196,.55)" },
          "70%": { boxShadow: "0 0 0 8px rgba(47,224,196,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(47,224,196,0)" },
        },
        scrollDot: {
          "0%": { opacity: "1", top: "6px" },
          "70%": { opacity: "0", top: "16px" },
          "100%": { opacity: "0", top: "6px" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2s infinite",
        scrollDot: "scrollDot 1.8s infinite",
        fadeUp: "fadeUp .7s cubic-bezier(.22,.61,.36,1) forwards",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [],
};

export default config;
