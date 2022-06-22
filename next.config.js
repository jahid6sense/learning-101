/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  // output: {
  //   globalObject: "this",
  // },
  env: {
    customKey: process.env.customKey,
    HOST: process.env.HOST,
    BASEURL: process.env.BASEURL,
    TomTomKey: process.env.TomTomKey,
  },
};
