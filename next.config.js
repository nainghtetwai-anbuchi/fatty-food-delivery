/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, "src/icons"), // Adjust the path as needed
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
