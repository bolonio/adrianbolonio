import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useTranslations } from "next-intl"
import pageStyles from "../pages.module.css"
import Image from "next/image"
import { MetaDataProp, getMetadata } from "@/lib/seo"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params: { locale } }: MetaDataProp) {
  const t = await getTranslations({ locale, namespace: "About" })
  return getMetadata({ title: t("title"), slug: "about" }, locale)
}

export default function About() {
  const t = useTranslations("About")
  const tTalks = useTranslations("Talks")
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <h1 className={pageStyles.pagetitle}>{t("title")}</h1>
        <div className={pageStyles.introimagecontainer}>
          <Image
            className={pageStyles.introimage}
            fill={true}
            src="/images/intro.jpg"
            alt=""
          />
        </div>
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
