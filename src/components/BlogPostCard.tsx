import { Anchorlink } from "@components/core/Anchorlink"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { getFormattedDate } from "@lib/date"
import { useRouter } from "next/router"
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

type PropsWithDirection = {
  direction: string
}

const PostContainer = styled.div<PropsWithDirection>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "horizontal" ? "row" : "column"};
  align-items: flex-start;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }

  ${(props) => (props.direction === "horizontal" ? `` : `max-width: 350px`)};
`

const PostImage = styled.img<PropsWithDirection>`
  margin-bottom: 0px;
  border-radius: 8px;

  ${(props) =>
    props.direction === "horizontal"
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

export const BlogPostCard = ({
  direction = "vertical",
  slug,
  frontmatter,
}: BlogPostCardProps) => {
  const { locale } = useRouter()
  const intl = useIntl()
  return (
    <PostContainer direction={direction}>
      {/* <Box
        position="relative"
        display="flex"
        marginRight={[0, 3, 3]}
        marginBottom={[3, 3, 0]}
      >
        <PostImage
          alt={intl.formatMessage(
            { id: "og_image_alt" },
            {
              title: frontmatter.title,
              date: getFormattedDate(frontmatter.publishedAt, locale),
            }
          )}
          src={`/images/blog/${slug}/${frontmatter.image}`}
          direction={direction}
        />
      </Box> */}
      <Box display="flex" flexDirection="column">
        <PostTitle>
          <Anchorlink href={`/blog/${slug}`} underlined>
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
        </PostTitle>
        <Box
          display="flex"
          gridGap={["8px", "16px", "16px"]}
          flexDirection={["column", "row", "row"]}
          marginBottom={2}
        >
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
            <Anchorlink
              key={tag}
              href={`/blog/tag/${tag}`}
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
          ))}
        </Box>
        <Text fontWeight="300" fontSize="1.25rem" lineHeight="1.25">
          {frontmatter.description}
        </Text>
      </Box>
    </PostContainer>
  )
}
