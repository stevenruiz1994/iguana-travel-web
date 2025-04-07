/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['localhost', 'vercel.app'],
  },
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_URL,
  basePath: '',
};

export default nextConfig;
