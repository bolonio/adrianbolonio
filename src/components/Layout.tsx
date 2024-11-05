import { Header } from "@/components/Header"
import { Inter_Tight } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { SkipToContent } from "@/components/SkipToContent"
import { Footer } from "@/components/Footer"
import styles from "./Layout.module.css"

const interLight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
})

export default async function Layout({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: string
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

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
