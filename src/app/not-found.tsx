import { useLocale, useTranslations } from "next-intl"
import pageStyles from "@/app/[locale]/pages.module.css"
import { LayoutWrapper } from "@/components/LayoutWrapper"
import { MetaDataProp, getMetadata } from "@/lib/seo"
import { Link } from "@/navigation"
import { getPosts } from "@/lib/blog"
import { BlogContainer } from "@/components/BlogContainer"

export async function generateMetadata({ params: { locale } }: MetaDataProp) {
  return getMetadata({ slug: "" }, locale)
}

export default function Index() {
  const t = useTranslations("Error")
  const tblog = useTranslations("Blog")
  const locale = useLocale()
  const allPosts = getPosts(locale, 3)
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <div className={pageStyles.pagetitlecontainer}>
          <h1 className={pageStyles.pagetitle}>{t("title")}</h1>
        </div>
        <p>{t("message")}</p>
        <div className={pageStyles.pagetitlecontainer}>
          <h2 className={pageStyles.pagetitle}>{tblog("latest_posts")}</h2>
          <Link className={pageStyles.pagetitleall} href="/blog">
            {tblog("all_posts")}
          </Link>
        </div>
        <BlogContainer posts={allPosts} direction="vertical" />
      </LayoutWrapper>
    </section>
  )
}
