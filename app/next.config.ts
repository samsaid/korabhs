import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "driftbehavioral.com",
      },
    ],
  },
};

export default nextConfig;
