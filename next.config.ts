import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  serverExternalPackages: ['pino', 'pino-pretty'],
  images: {
    remotePatterns: [{ hostname: 'static.vecteezy.com' }],
  },
}

export default nextConfig
