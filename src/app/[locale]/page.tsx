import { useTranslations } from "next-intl"
import pageStyles from "./pages.module.css"
import { LayoutWrapper } from "@/components/LayoutWrapper"

export default function Index() {
  const t = useTranslations("Index")
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <h1 className={pageStyles.pageTitle}>{t("title")}</h1>
      </LayoutWrapper>
    </section>
  )
}
