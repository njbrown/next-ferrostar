import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: { esmExternals: true },
  webpack: function (config, { isServer, dev }) {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      syncWebAssembly: true,
    };

    // TODO: improve this function -> track https://github.com/vercel/next.js/issues/25852
    config.output.webassemblyModuleFilename =
      isServer && !dev
        ? "../static/wasm/[modulehash].wasm"
        : "static/wasm/[modulehash].wasm";

    return config;
  },
};

export default nextConfig;
