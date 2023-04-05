/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: 'hsl(259, 100%, 65%)',
          lightRed: 'hsl(0, 100%, 67%)'
        },
        offWhite: 'hsl(0, 0%, 94%)',
        lightGrey: 'hsl(0, 0%, 86%)',
        smokeGrey: 'hsl(0, 1%, 44%)',
        offBlack: 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
