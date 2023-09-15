/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "app", "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
