/**@type {import('next').NextConfig}*/
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["links.papareact.com"],
  },
};

module.exports = nextConfig
