import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "portfolio";

const nextConfig: NextConfig = {
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
