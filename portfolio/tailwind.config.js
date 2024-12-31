/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-barlow)'],
        },
      },
      container: {
        center: true, // Always center the container
        padding: {
          DEFAULT: '0.5rem', // Padding for small screens (default)
          sm: '1rem',        // Padding for medium screens
          
          lg: '10rem',       // Padding for large screens and above
        },      },
    },
    plugins: [],
  }
  