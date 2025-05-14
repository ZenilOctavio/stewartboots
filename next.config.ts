import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      },
      {
        source: '/admin/:som',
        destination: '/home',
        permanent: true
      },
      {
        source: '/admin',
        destination: '/home',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
