import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useTranslations } from "next-intl"
import pageStyles from "@/app/[locale]/pages.module.css"
import { MetaDataProp, getMetadata } from "@/lib/seo"
import styles from "./talkpage.module.css"
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
  return getMetadata(
    {
      title: "test",
      slug: `talk/${slug}`,
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
        {talk.video && (
          <iframe
            width="100%"
            height="500"
            src={talk.video}
            title={talk.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        <MarkdownContent content={talk.content} />
      </LayoutWrapper>
    </section>
  )
}
