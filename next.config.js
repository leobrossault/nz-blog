/** @type {import('next').NextConfig} */
const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')
const fullConfig = resolveConfig(tailwindConfig)

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost']
  },
  env: {
    tailwindConfig: {
      colors: {
        primary: fullConfig.theme.colors.primary
      }
    }
  }
}

module.exports = nextConfig
