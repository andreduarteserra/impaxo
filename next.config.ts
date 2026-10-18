import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contacto", destination: "/contato", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: false },
      { source: "/blog", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
