import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/korabhs",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "driftbehavioral.com",
      },
    ],
  },
};

export default nextConfig;
