/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        slab: ['Roboto Slab', 'sans-serif']
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.border-image-gradient': {
          borderImage: 'linear-gradient(317deg, #0d298d, white) 5',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

