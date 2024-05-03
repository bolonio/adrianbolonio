import { Header } from "@/components/Header"
import "./global.css"
import { LayoutWrapper } from "@/components/LayoutWrapper"
import { Inter_Tight } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { SkipToContent } from "@/components/SkipToContent"

const interLight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
})

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html
      lang={locale}
      className={interLight.className}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <SkipToContent />
            <Header />
            <main>
              <LayoutWrapper>{children}</LayoutWrapper>
            </main>
            {/* <Footer /> */}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
