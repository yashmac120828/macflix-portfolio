/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        macflix: {
          primary: '#E91E63',   // Vibrant Fuchsia
          purple: '#6A1B9A',    // Deep Purple
          secondary: '#FF5722', // Bright Orange
          neutral: '#F5F5F5',   // Light Gray
          offwhite: '#FAFAFA',  // Off White
          textdark: '#212121',  // Dark Gray
          accent: '#03A9F4',    // Light Blue
        },
      },
      backgroundImage: {
        'macflix-gradient': 'linear-gradient(to right, #E91E63, #6A1B9A, #FF5722)',
        'macflix-fuchsia-purple': 'linear-gradient(135deg, #E91E63, #6A1B9A)',
        'macflix-purple-orange': 'linear-gradient(135deg, #6A1B9A, #FF5722)',
      },
    },
  },
  plugins: [],
}
