/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['localhost', 'vercel.app'],
  },
  reactStrictMode: true,
};

export default nextConfig;
