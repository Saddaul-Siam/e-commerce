/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["tailwindui.com" ,"i.ibb.co"],
  },
};

module.exports = nextConfig;
