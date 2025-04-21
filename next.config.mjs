/** @type {import('next').NextConfig} */

const withBundleAnalyzer = process.env.ANALYZE === 'true'
  ? require('@next/bundle-analyzer')({})
  : (config) => config;

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  // Add headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  // Add redirects for common paths
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/khyai',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/khyai',
        permanent: true,
      },
    ];
  },
}

export default withBundleAnalyzer(nextConfig)
