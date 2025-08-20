import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    // Custom webpack configuration can go here
    return config;
  },
  env: {
    // Define your environment variables here
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;