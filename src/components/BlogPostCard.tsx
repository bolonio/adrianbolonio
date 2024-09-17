import { Post } from "@/lib/blog"
import styles from "./BlogPostCard.module.css"
import { getFormattedDate } from "@/lib/date"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

type BlogPostCardProps = {
  direction?: "horizontal" | "vertical"
  post: Post
}

export const BlogPostCard = ({
  direction = "vertical",
  post,
}: BlogPostCardProps) => {
  const t = useTranslations("Blog")
  const locale = useLocale()
  const directionClass =
    direction === "horizontal" ? styles.horizontal : styles.vertical
  return (
    <div className={`${styles.postcardcontainer} ${directionClass}`}>
      <div className={styles.postcard}>
        <div className={styles.posttitle}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </div>
        <div className={styles.postcarddetails}>
          <span className={styles.postdate}>
            {getFormattedDate(post.date, locale)}
          </span>
          {post.tags?.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className={styles.posttag}
              aria-label={t("tag_link", { tag })}
            >
              {tag}
            </Link>
          ))}
        </div>
        <span className={styles.postdescription}>{post.description}</span>
      </div>
    </div>
  )
}
