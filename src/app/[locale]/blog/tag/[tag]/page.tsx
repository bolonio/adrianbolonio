import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useLocale, useTranslations } from "next-intl"
import pageStyles from "@/app/[locale]/pages.module.css"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { MetaDataProp, getMetadata } from "@/lib/seo"
import { BlogContainer } from "@/components/BlogContainer"
import { getPostsByTag } from "@/lib/blog"
import Link from "next/link"

type Params = {
  params: {
    tag: string
  }
}

export async function generateMetadata({
  params: { locale, tag },
}: MetaDataProp) {
  const t = await getTranslations({ locale, namespace: "Blog" })
  return getMetadata(
    { title: `${t("tag")}: ${tag}`, slug: `tag/${tag}` },
    locale
  )
}

export default function Tag({ params }: Params) {
  const t = useTranslations("Blog")
  const locale = useLocale()
  const allPosts = getPostsByTag(params.tag, locale)
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
            {t("tag")}: {params.tag}
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
