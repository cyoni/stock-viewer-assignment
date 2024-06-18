/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STOCK_BASE_URL: process.env.STOCK_BASE_URL,
  },
};

export default nextConfig;
