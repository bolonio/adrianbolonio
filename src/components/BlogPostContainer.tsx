import { BlogPostCard } from "@components/BlogPostCard"
import { BlogPost } from "@lib/blog"
import styled from "styled-components"

type BlogPostContainerProps = {
  direction?: "horizontal" | "vertical"
  posts: BlogPost[]
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
  posts,
}: BlogPostContainerProps) => {
  return (
    <PostsContainer direction={direction}>
      {posts.map(({ slug, frontmatter }) => (
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
