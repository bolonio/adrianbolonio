import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useTranslations } from "next-intl"
import pageStyles from "@/app/[locale]/pages.module.css"
import { getTranslations } from "next-intl/server"
import { MetaDataProp, getMetadata } from "@/lib/seo"

export async function generateMetadata({ params: { locale } }: MetaDataProp) {
  const t = await getTranslations({ locale, namespace: "Blog" })
  return getMetadata({ title: t("title"), slug: "blog" }, locale)
}

export default function Error() {
  const t = useTranslations("Blog")
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <div className={pageStyles.pagetitlecontainer}>
          <h1 className={pageStyles.pagetitle}>ERROR: {t("title")}</h1>
        </div>
      </LayoutWrapper>
    </section>
  )
}
