import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_PATH ?? "/ff",
  publicRuntimeConfig: {
    api: {
      server: process.env.NEXT_PUBLIC_SERVER ?? 'http://localhost:8080',
      context: process.env.NEXT_PUBLIC_CONTEXT ?? '/api/v1'
    }
  }
};

export default nextConfig;
