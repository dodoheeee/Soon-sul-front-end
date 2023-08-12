/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1AC6A9",
        secondary: "#2D68C4",
        neutral: "#666666",
        cheongju: "#3EB1C8",
        white: "#FEFEFE",
        grey: {
          100: "#FAFAFA",
          200: "#F7F7F7",
          300: "#F0F0F0",
          400: "#BEBEBE",
          500: "#8A8A8A",
          600: "#666666",
        },
      },
      boxShadow: {
        bottom: "0px 0px 8px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
