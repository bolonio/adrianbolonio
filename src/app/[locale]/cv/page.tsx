import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useTranslations } from "next-intl"
import pageStyles from "../pages.module.css"

export default function About() {
  const t = useTranslations("CV")
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <h1 className={pageStyles.pageTitle}>TITLE</h1>
      </LayoutWrapper>
    </section>
  )
}
