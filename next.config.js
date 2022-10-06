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
        source: "/accessibility-github-actions",
        destination: "/blog/accessibility-github-actions",
        permanent: true,
      },
      {
        source: "/accesibilidad-con-storybook",
        destination: "/blog/accesibilidad-con-storybook",
        permanent: true,
      },
      {
        source: "/accessibility-with-storybook",
        destination: "/blog/accessibility-with-storybook",
        permanent: true,
      },
      {
        source: "/testing-web-accessibility-part-1",
        destination: "/blog/testing-web-accessibility-part-1",
        permanent: true,
      },
      {
        source: "/testing-web-accessibility-part-2",
        destination: "/blog/testing-web-accessibility-part-2",
        permanent: true,
      },
      {
        source: "/testing-web-accessibility-part-3",
        destination: "/blog/testing-web-accessibility-part-3",
        permanent: true,
      },
      {
        source: "/las-5-reglas-de-aria",
        destination: "/blog/las-5-reglas-de-aria",
        permanent: true,
      },
      {
        source: "/wcag-3-0",
        destination: "/blog/wcag-3-0",
        permanent: true,
      },
      {
        source: "/testeando-accesibilidad-web",
        destination: "/blog/testeando-accesibilidad-web",
        permanent: true,
      },
      {
        source: "/react-puxl-icons-es",
        destination: "/blog/react-puxl-iconos",
        permanent: true,
      },
      {
        source: "/react-puxl-icons",
        destination: "/blog/react-puxl-icons",
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: "raw-loader",
      },
      {
        test: /\.pdf/,
        type: "asset/resource",
        generator: {
          filename: "static/[hash][ext]",
        },
      }
    )
    return config
  },
}

module.exports = nextConfig
