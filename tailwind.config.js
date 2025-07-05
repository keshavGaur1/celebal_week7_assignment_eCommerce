/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16a34a", // green-600
          light: "#22c55e", // green-500
          dark: "#166534", // green-800
        },
        secondary: {
          DEFAULT: "#f3f4f6", // gray-100 (light background sections)
          light: "#e5e7eb", // gray-200
        },
        background: {
          DEFAULT: "#ffffff", // white
          dark: "#f3f4f6", // light gray
        },
        accent: {
          DEFAULT: "#4ade80", // green-400
        },
        text: {
          DEFAULT: "#1f2937", // gray-800 (dark text)
          light: "#374151", // gray-700
        },
      },
    },
  },
  plugins: [],
};
