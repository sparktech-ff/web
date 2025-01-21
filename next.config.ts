import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_PATH ?? "/ff",
  publicRuntimeConfig: {
    api: {
      server: process.env.NEXT_PUBLIC_SERVER ?? '',
      context: process.env.NEXT_PUBLIC_CONTEXT ?? '/ff/api'
    }
  }
};

export default nextConfig;
