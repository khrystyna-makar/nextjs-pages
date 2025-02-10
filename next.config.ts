import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: isProd ? '/nextjs-pages/' : '',
  basePath: isProd ? '/nextjs-pages' : '',
  output: "export",
};

export default nextConfig;
