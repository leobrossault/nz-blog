/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#356174'
      },
      spacing: {
        xs: '4px',
        s: '8px',
        sm: '12px',
        m: '16px',
        l: '24px',
        xl: '32px',
        xxl: '48px',
        '3xl': '64px',
        '4xl': '128px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
