/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          '2xl': '1280px'
        }
      },
      fontFamily: {
        head: 'Mermaid',
        secondHead: 'Rakesly',
        sans: 'Lato'
      },
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
    },
    typography: {
      DEFAULT: {
        css: {
          h1: {
            fontFamily: 'Mermaid',
            fontSize: '45px',
            lineHeight: '50px'
          },
          h2: {
            fontFamily: 'Rakesly',
            fontSize: '30px',
            fontWeight: '200',
            lineHeight: '36px'
          },
          h3: {
            fontFamily: 'Rakesly',
            fontSize: '24px',
            fontWeight: '200',
            lineHeight: '34px'
          },
          h4: {
            fontFamily: 'Rakesly',
            fontSize: '18px',
            fontWeight: '200',
            lineHeight: '32px'
          },
          h5: {
            fontFamily: 'Rakesly',
            fontSize: '16px',
            fontWeight: '200',
            lineHeight: '26px'
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
