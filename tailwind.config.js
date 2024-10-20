/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm':'320px',
      },
      colors: {
        "custom-clr": "#F6DFDF",
        "custom-cl-btn": "#D9D9D9",
        "login-background": "#1A2E46",
        "button-color": "#6645E1",
        "exit-border": "#F82428",
        "yellow-btn": "#FFA500",
        "timer-bg": "#A36F6F",
        score: "#74B9FF",
        "score-text": "#1505F8",
      },
      dropShadow: {
        "custom-shadow": "0 4px 4px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
