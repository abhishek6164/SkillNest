/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "black", // white base background
        primary: {
          DEFAULT: "#4f46e5", // indigo-600
          light: "#6366f1", // indigo-500
          dark: "#3730a3", // indigo-800
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          300: "#d1d5db",
          500: "#6b7280",
          700: "#374151",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
        heading: ["Space Grotesk", "Poppins", "sans-serif"],
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
      backdropBlur: {
        sm: "6px",
      },
    },
  },
  plugins: [],
};