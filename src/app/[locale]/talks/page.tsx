import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useTranslations } from "next-intl"
import pageStyles from "../pages.module.css"

export default function About() {
  const t = useTranslations("Talks")
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <h1 className={pageStyles.pageTitle}>{t("title")}</h1>
        <p>
          {t.rich("speaker_invitation", {
            email: (chunks) => (
              <a href="mailto:adrian.bolonio@gmail.com" rel="me">
                {chunks}
              </a>
            ),
          })}
        </p>
      </LayoutWrapper>
    </section>
  )
}
