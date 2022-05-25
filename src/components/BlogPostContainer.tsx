import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"
import { BlogPostCard } from "./BlogPostCard"

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

export const BlogPostContainer = ({
  direction = "horizontal",
  limit,
  posts,
}: BlogPostContainerProps) => {
  const { locale } = useRouter()
  const filteredPosts = posts
    .filter(({ frontmatter }) => frontmatter.locale === locale)
    .slice(0, limit)
  const PostsContainer = styled.div`
    display: flex;
    flex-direction: ${direction === "vertical" ? "row" : "column"};
    flex-wrap: ${direction === "vertical" ? "wrap" : ""};
    justify-content: center;
    gap: 24px;

    @media screen and (max-width: 700px) {
      flex-direction: "row";
      flex-wrap: "wrap";
    }
  `

  return (
    <PostsContainer>
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
