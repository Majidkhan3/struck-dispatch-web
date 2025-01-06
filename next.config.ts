import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'truckdispatch360.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'trucking42.com',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;