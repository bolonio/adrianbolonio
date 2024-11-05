import { LayoutWrapper } from "@/components/LayoutWrapper"
import pageStyles from "@/app/[locale]/pages.module.css"
import Image from "next/image"
import { getTranslations, getLocale } from "next-intl/server"
import { MetaDataProp, getMetadata } from "@/lib/seo"
import { BlogContainer } from "@/components/BlogContainer"
import { getPostsByTag } from "@/lib/blog"
import { Link } from "@/i18n/routing"

type Params = {
  params: Promise<{ tag: string }>
}

export async function generateMetadata({ params }: MetaDataProp) {
  const { locale, tag } = await params
  const t = await getTranslations({ locale, namespace: "Blog" })
  return getMetadata(
    { title: `${t("tag")}: ${tag}`, slug: `tag/${tag}` },
    locale
  )
}

export default async function Tag({ params }: Params) {
  const { tag } = await params
  const t = await getTranslations("Blog")
  const locale = await getLocale()
  const allPosts = getPostsByTag(tag, locale)
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
          <h1 className={pageStyles.pagetitle}>
            {t("tag")}: {tag}
          </h1>
          <Link className={pageStyles.pagetitleall} href="/blog">
            {t("all_posts")}
          </Link>
        </div>

        <BlogContainer posts={allPosts} direction="vertical" />
      </LayoutWrapper>
    </section>
  )
}
