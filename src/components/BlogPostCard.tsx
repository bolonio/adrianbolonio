import { Anchorlink } from "@components/core/Anchorlink"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { getFormattedDate } from "@lib/date"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useIntl } from "react-intl"
import styled from "styled-components"

type BlogPostCardProps = {
  direction?: "horizontal" | "vertical"
  slug: string
  frontmatter: {
    [key: string]: any
  }
}

const PostTitle = styled.h2`
  margin-top: 0px;
  margin-bottom: 10px;
`

export const BlogPostCard = ({
  direction = "vertical",
  slug,
  frontmatter,
}: BlogPostCardProps) => {
  const { locale } = useRouter()
  const intl = useIntl()

  const PostContainer = styled.div`
    display: flex;
    flex-direction: ${direction === "horizontal" ? "row" : "column"};
    align-items: flex-start;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }

    ${direction === "horizontal" ? `` : `max-width: 350px`};
  `

  const PostImage = styled.img`
    margin-bottom: 0px;
    border-radius: 8px;

    ${direction === "horizontal"
      ? `
        max-width: 350px;
        @media screen and (max-width: 1000px) {
          max-width: 300px;
        }
        @media screen and (max-width: 700px) {
          max-width: 100%;
        }`
      : `max-width: 350px;`};
  `

  return (
    <PostContainer>
      <Box
        position="relative"
        display="flex"
        marginRight={[0, 3, 3]}
        marginBottom={[3, 0, 0]}
      >
        <PostImage
          alt={frontmatter.imageAlt}
          src={`/api/og-image/?title=${frontmatter.title}&publishedAt=${frontmatter.publishedAt}&slug=${slug}`}
          // src={`/images/blog/${slug}/${frontmatter.image}`}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <PostTitle>
          <Link href={`/blog/${slug}`} passHref>
            <Anchorlink underlined>
              <Text
                fontSize="2rem"
                fontWeight={800}
                letterSpacing="-.03em"
                lineHeight="2rem"
                style={{ margin: 0 }}
              >
                {frontmatter.title}
              </Text>
            </Anchorlink>
          </Link>
        </PostTitle>
        <Box display="flex" gridGap="16px" marginBottom={2}>
          <Text
            fontSize="1.25rem"
            fontWeight={600}
            letterSpacing="-.03em"
            lineHeight="1.5rem"
            style={{ margin: 0 }}
          >
            {getFormattedDate(frontmatter.publishedAt, locale)}
          </Text>
          {frontmatter.tags.map((tag: string) => (
            <Link key={tag} href={`/blog/tag/${tag}`} passHref>
              <Anchorlink
                underlined
                aria-label={intl.formatMessage(
                  { id: "see_posts_with_tag" },
                  { tag }
                )}
              >
                <Text
                  fontSize="1.25rem"
                  fontWeight={600}
                  letterSpacing="-.03em"
                  lineHeight="1.5rem"
                >
                  {tag}
                </Text>
              </Anchorlink>
            </Link>
          ))}
        </Box>
        <Text fontWeight="300" fontSize="1.25rem" lineHeight="1.25">
          {frontmatter.description}
        </Text>
      </Box>
    </PostContainer>
  )
}
