import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  /* config options here */



  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      }
      // {
      //   source: '/admin/:som',
      //   destination: '/home',
      //   permanent: true
      // },
      // {
      //   source: '/admin',
      //   destination: '/home',
      //   permanent: true
      // }
    ];
  },
});

export default nextConfig;
