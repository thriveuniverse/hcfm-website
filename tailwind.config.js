/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0c",
        ink2: "#131316",
        paper: "#ece7dd",
        paperdim: "#9c988c",
        bronze: "#c9a15a",
        bronzelight: "#e0b567",
        bronzedim: "#8a733f",
        blueprint: "#0f1c30",
        blueprint2: "#0b1526",
        bplineLight: "#d8e7f3",
        bplineDim: "#5c7996",
        sand: "#cbb98f",
        rust: "#b06a48",
        hline: "#232327",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
