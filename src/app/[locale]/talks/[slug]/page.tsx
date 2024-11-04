import { LayoutWrapper } from "@/components/LayoutWrapper"
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

export async function generateMetadata({ params }: MetaDataProp) {
  const { locale, slug } = await params
  return getMetadata(
    {
      title: "test",
      slug: `talk/${slug}`,
    },
    locale
  )
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params
  const talk = getTalkBySlug(slug)
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
