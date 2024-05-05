import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useTranslations } from "next-intl"
import pageStyles from "../pages.module.css"

export default function About() {
  const t = useTranslations("About")
  const tTalks = useTranslations("Talks")
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <h1 className={pageStyles.pageTitle}>{t("title")}</h1>
        <p>{t("bio")}</p>
        <p>
          {t.rich("contact_me", {
            twitter: (chunks) => (
              <a href="https://twitter.com/bolonio" rel="noopener me">
                {chunks}
              </a>
            ),
            email: (chunks) => (
              <a href="mailto:adrian.bolonio@gmail.com" rel="me">
                {chunks}
              </a>
            ),
          })}
        </p>
        <p>
          {tTalks.rich("speaker_invitation", {
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
