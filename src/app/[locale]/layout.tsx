import "./global.css"
import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"
import Layout from "@/components/Layout"
import { setRequestLocale } from "next-intl/server"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return <Layout locale={locale}>{children}</Layout>
}
