/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["images.nightcafe.studio", "cdna.artstation.com"]
  }
}

module.exports = nextConfig
