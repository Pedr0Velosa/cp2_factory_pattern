/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hub.dummyapis.com']
  }
};

module.exports = nextConfig;
