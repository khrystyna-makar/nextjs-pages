import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  assetPrefix: isProd ? '/nextjs-pages/' : '',
  basePath: isProd ? '/nextjs-pages' : '',
  output: "export",
};

export default nextConfig;
