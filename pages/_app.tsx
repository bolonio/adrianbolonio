import { Layout } from "@components/layouts/Layout"
import ThemeProvider from "@providers/ThemeProvider"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { IntlProvider } from "react-intl"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    color: ${(props) => props.theme.secondary};

    :focus {
      outline: none;
      outline: 3px dashed ${(props) => props.theme.secondary};
      outline-offset: 0.25rem;
      text-decoration: none !important;
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.secondary};
    background-color: ${(props) => props.theme.primary};
    transition: 0.3s ease;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Open Sans, sans-serif;
  }
  
`

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  return (
    <ThemeProvider>
      <GlobalStyle />
      <IntlProvider
        locale={locale ? locale : "en"}
        messages={pageProps.messages}
      >
        <Layout alternate={pageProps?.frontmatter?.alternate}>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </ThemeProvider>
  )
}

export default MyApp
