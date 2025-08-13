/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // if using app directory
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
