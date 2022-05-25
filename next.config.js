/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/accesibilidad-github-actions",
        destination: "/blog/accesibilidad-github-actions",
        permanent: true,
      },
      {
        source: "/accesibilidad-con-storybook",
        destination: "/blog/accesibilidad-con-storybook",
        permanent: true,
      },
      {
        source: "/las-5-reglas-de-aria",
        destination: "/blog/las-5-reglas-de-aria",
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })
    return config
  },
  images: {
    domains: ["localhost"],
  },
}

module.exports = nextConfig
