import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useTranslations } from "next-intl"
import pageStyles from "@/app/[locale]/pages.module.css"
import { talks } from "@/data/talks"
import { TalksContainer } from "@/components/TalksContainer"
import Image from "next/image"
import { MetaDataProp, getMetadata } from "@/lib/seo"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: MetaDataProp) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Talks" })
  return getMetadata({ title: t("title"), slug: "talks" }, locale)
}

export default function Talks() {
  const t = useTranslations("Talks")
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <div className={pageStyles.introimagecontainer}>
          <Image
            className={pageStyles.introimage}
            fill={true}
            src="/images/talks.png"
            alt=""
          />
        </div>
        <div className={pageStyles.pagetitlecontainer}>
          <h1 className={pageStyles.pagetitle}>{t("title")}</h1>
        </div>
        <p>
          {t.rich("speaker_invitation", {
            email: (chunks) => (
              <a href="mailto:adrian.bolonio@gmail.com" rel="me">
                {chunks}
              </a>
            ),
          })}
        </p>
        {talks.map((year) => (
          <TalksContainer key={year.year} talks={year.talks} year={year.year} />
        ))}
      </LayoutWrapper>
    </section>
  )
}
