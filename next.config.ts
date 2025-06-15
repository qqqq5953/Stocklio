import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/overview",
        permanent: false, // 302 redirect。若是想讓搜尋引擎永久記住可設成 true。
      },
    ];
  },
};

export default nextConfig;
