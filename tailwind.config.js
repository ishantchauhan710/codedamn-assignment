/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          50: "#E8E7FC",
          100: "#D7D5F9",
          200: "#B5B1F4",
          300: "#938EEF",
          400: "#716AEA",
          500: "#4F46E5",
          600: "#281ED5",
          700: "#1F17A4",
          800: "#161073",
          900: "#0C0941",
          950: "#080629",
        },
      },
    },
  },
  plugins: [],
};
