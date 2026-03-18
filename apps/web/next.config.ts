import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Enable WASM support for prism-core
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    return config;
  },
};

export default nextConfig;
