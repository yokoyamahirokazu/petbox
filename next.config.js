module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["baseec-img-mng.akamaized.net"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
