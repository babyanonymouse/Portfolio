/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        light: "var(--text-light)",
        bodydark: "var(--body-dark)",
        cardhover: "var(--card-hover)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderColor: {
        light: "var(--border-light)",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
