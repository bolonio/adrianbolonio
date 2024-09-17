import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useTranslations } from "next-intl"
import pageStyles from "@/app/[locale]/pages.module.css"
import { getTranslations } from "next-intl/server"
import { MetaDataProp, getMetadata } from "@/lib/seo"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog"
import { getFormattedDate } from "@/lib/date"
import styles from "./blogpost.module.css"
import { BlogContainer } from "@/components/BlogContainer"
import Link from "next/link"
import { MarkdownContent } from "@/components/MarkdownContent"

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params: { locale, slug },
}: MetaDataProp) {
  const t = await getTranslations({ locale, namespace: "Blog" })
  const post = slug ? getPostBySlug(slug) : undefined
  return getMetadata(
    {
      title: post?.title,
      description: post?.description,
      slug: "blog",
    },
    locale
  )
}

export default function BlogPost({ params }: Params) {
  const t = useTranslations("Blog")
  const post = getPostBySlug(params.slug)
  const relatedPosts = getRelatedPosts(params.slug)
  return (
    <>
      <section className={pageStyles.section}>
        <LayoutWrapper isBlogPost>
          <h1 className={styles.blogposttitle}>{post.title}</h1>
        </LayoutWrapper>
        <LayoutWrapper isBlogPost>
          <div className={styles.blogpostdetails}>
            <span className={styles.date}>
              {getFormattedDate(post.date, post.locale)}
            </span>
            {post.tags?.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className={styles.tag}
                aria-label={t("tag_link", { tag })}
              >
                {tag}
              </Link>
            ))}
          </div>
          <p className={styles.description}>{post.description}</p>
          <MarkdownContent content={post.content} />
        </LayoutWrapper>
      </section>
      <div className={styles.relatedpostscontainer}>
        {relatedPosts.length > 0 && (
          <LayoutWrapper isBlogPost>
            <h2 className={pageStyles.pagetitle}>{t("related_posts")}</h2>
            <BlogContainer posts={relatedPosts} />
          </LayoutWrapper>
        )}
      </div>
    </>
  )
}
