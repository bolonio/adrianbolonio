import { BlogPostCard } from "@/components/BlogPostCard"
import { Post } from "@/lib/blog"
import styles from "./BlogContainer.module.css"

type BlogContainerProps = {
  direction?: "horizontal" | "vertical"
  posts: Post[]
}

export const BlogContainer = ({
  direction = "vertical",
  posts,
}: BlogContainerProps) => {
  const directionClass =
    direction === "horizontal" ? styles.horizontal : styles.vertical
  return (
    <div className={`${styles.blogcontainer} ${directionClass}`}>
      {posts.map((post, i) => (
        <BlogPostCard key={i} direction={direction} post={post} />
      ))}
    </div>
  )
}
