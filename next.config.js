/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://kiro-youtube-app.vercel.app/api/:path*', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
