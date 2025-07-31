/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
  extend: {
    colors: {
      primary: '#D7A000', // Golden Yellow
      secondary: '#5A2A28', // Deep Brown
      accent: '#F4E3B2', // Light Beige
      textDark: '#4B2E1E', // Dark Brown for text
      textLight: '#FAF6F2', // Light background
    },
    fontFamily: {
      heading: ['"Playfair Display"', 'serif'],
      body: ['Poppins', 'sans-serif'],
    },
  },
  },
  plugins: [],
}

