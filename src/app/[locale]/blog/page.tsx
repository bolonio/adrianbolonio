import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useTranslations } from "next-intl"
import pageStyles from "../pages.module.css"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { MetaDataProp, getMetadata } from "@/lib/seo"

export async function generateMetadata({ params: { locale } }: MetaDataProp) {
  const t = await getTranslations({ locale, namespace: "Blog" })
  return getMetadata({ title: t("title"), slug: "blog" }, locale)
}

export default function About() {
  const t = useTranslations("Blog")
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <h1 className={pageStyles.pagetitle}>{t("title")}</h1>
        <div className={pageStyles.introimagecontainer}>
          <Image
            className={pageStyles.introimage}
            fill={true}
            src="/images/blog.jpg"
            alt=""
          />
        </div>
      </LayoutWrapper>
    </section>
  )
}
