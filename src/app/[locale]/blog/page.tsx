import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useTranslations } from "next-intl"
import pageStyles from "../pages.module.css"

export default function About() {
  const t = useTranslations("Blog")
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <h1 className={pageStyles.pageTitle}>{t("title")}</h1>
      </LayoutWrapper>
    </section>
  )
}
