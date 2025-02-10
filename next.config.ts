import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
 
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: '/nextjs-pages'
  }
};

export default nextConfig;
