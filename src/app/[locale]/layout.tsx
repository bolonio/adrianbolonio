import { Header } from "@/components/Header"
import "./global.css"
import { Inter_Tight } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { SkipToContent } from "@/components/SkipToContent"
import { Footer } from "@/components/Footer"
import styles from "./layout.module.css"

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
      <body className={styles.body}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <SkipToContent />
            <Header />
            <main id="content" className={styles.main}>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
