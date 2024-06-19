/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    STOCK_BASE_URL: process.env.STOCK_BASE_URL,
  },
};

export default nextConfig;
