import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useLocale, useTranslations } from "next-intl"
import pageStyles from "@/app/[locale]/pages.module.css"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { MetaDataProp, getMetadata } from "@/lib/seo"
import { BlogContainer } from "@/components/BlogContainer"
import { getPosts } from "@/lib/blog"

export async function generateMetadata({ params }: MetaDataProp) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Blog" })
  return getMetadata({ title: t("title"), slug: "blog" }, locale)
}

export default function Blog() {
  const t = useTranslations("Blog")
  const locale = useLocale()
  const allPosts = getPosts(locale)
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <div className={pageStyles.introimagecontainer}>
          <Image
            className={pageStyles.introimage}
            fill={true}
            src="/images/blog.jpg"
            alt=""
          />
        </div>
        <div className={pageStyles.pagetitlecontainer}>
          <h1 className={pageStyles.pagetitle}>{t("title")}</h1>
        </div>
        <BlogContainer posts={allPosts} direction="vertical" />
      </LayoutWrapper>
    </section>
  )
}
