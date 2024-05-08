import { useTranslations } from "next-intl"
import pageStyles from "./pages.module.css"
import { LayoutWrapper } from "@/components/LayoutWrapper"
import { getTranslations } from "next-intl/server"
import { MetaDataProp, getMetadata } from "@/lib/seo"
import Image from "next/image"

export async function generateMetadata({ params: { locale } }: MetaDataProp) {
  const t = await getTranslations({ locale, namespace: "Index" })
  return getMetadata({ slug: "/" }, locale)
}

export default function Index() {
  const t = useTranslations("Index")
  const tabout = useTranslations("About")
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <h1 className={pageStyles.pageTitle}>{t("title")}</h1>
        <div className={pageStyles.introimagecontainer}>
          <Image
            className={pageStyles.introimage}
            fill={true}
            src="/images/intro.jpg"
            alt=""
          />
        </div>
        <p>{tabout("bio")}</p>
      </LayoutWrapper>
    </section>
  )
}
