import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useTranslations } from "next-intl"
import pageStyles from "@/app/[locale]/pages.module.css"
import { getTranslations } from "next-intl/server"
import { MetaDataProp, getMetadata } from "@/lib/seo"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog"
import { getFormattedDate } from "@/lib/date"
import styles from "./talkpage.module.css"
import Link from "next/link"
import { MarkdownContent } from "@/components/MarkdownContent"
import { getTalkBySlug } from "@/lib/talks"

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params: { locale, slug },
}: MetaDataProp) {
  const t = await getTranslations({ locale, namespace: "Blog" })
  return getMetadata(
    {
      title: "test",
      slug: "blog",
    },
    locale
  )
}

export default function BlogPost({ params }: Params) {
  const t = useTranslations("Blog")
  const talk = getTalkBySlug(params.slug)
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <h1 className={pageStyles.pagetitle}>{talk.title}</h1>
        <span className={styles.talksubtitle}>{talk.subtitle}</span>
        {/* VIDEO */}
        <MarkdownContent content={talk.content} />
      </LayoutWrapper>
    </section>
  )
}
