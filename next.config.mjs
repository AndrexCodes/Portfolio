/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg'],
    unoptimized: true
  }
}

export default nextConfig
