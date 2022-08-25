/** @type {import('next').NextConfig} */
const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')
const fullConfig = resolveConfig(tailwindConfig)

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
    domains: [
      'localhost',
      'agile-anchorage-24857.herokuapp.com',
      'res.cloudinary.com'
    ]
  },
  env: {
    API: process.env.API,
    tailwindConfig: {
      colors: {
        primary: fullConfig.theme.colors.primary
      }
    }
  }
}

module.exports = nextConfig
