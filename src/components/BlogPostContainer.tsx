import { BlogPostCard } from "@components/BlogPostCard"
import { useRouter } from "next/router"
import styled from "styled-components"

type BlogPostContainerProps = {
  direction?: "horizontal" | "vertical"
  limit?: number
  posts: {
    slug: string
    frontmatter: {
      [key: string]: any
    }
  }[]
}

type PropsWithDirection = {
  direction: string
}

const PostsContainer = styled.div<PropsWithDirection>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "row" : "column"};
  flex-wrap: ${(props) => (props.direction === "vertical" ? "wrap" : "")};
  justify-content: center;
  gap: 24px;

  @media screen and (max-width: 700px) {
    flex-direction: "row";
    flex-wrap: "wrap";
  }
`

export const BlogPostContainer = ({
  direction = "horizontal",
  limit,
  posts,
}: BlogPostContainerProps) => {
  const { locale } = useRouter()
  const filteredPosts = posts
    .filter(({ frontmatter }) => frontmatter.locale === locale)
    .slice(0, limit)

  return (
    <PostsContainer direction={direction}>
      {filteredPosts.map(({ slug, frontmatter }) => (
        <BlogPostCard
          key={slug}
          slug={slug}
          frontmatter={frontmatter}
          direction={direction}
        />
      ))}
    </PostsContainer>
  )
}
