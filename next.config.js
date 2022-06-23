/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  env: {
    customKey: process.env.customKey,
    HOST: process.env.HOST,
    BASEURL: process.env.BASEURL,
    TomTomKey: process.env.TomTomKey,
    googleMapsKey: process.env.googleMapsKey,
  },
};
