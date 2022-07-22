import { BlogPostContainer } from "@components/BlogPostContainer"
import { Anchorlink } from "@components/core/Anchorlink"
import Box from "@components/core/Box"
import { PageHeading } from "@components/core/Headings"
import Text from "@components/core/Text"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import { languages } from "@data/languages"
import { BlogPost, getBlogPostBySlug, getBlogPostsByTag } from "@lib/blog"
import {
  HightlightStylesDark,
  HightlightStylesLight,
} from "@lib/hightlightStyles"
import { ThemeContext } from "@providers/ThemeProvider"
import fs from "fs"
import type { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useContext } from "react"
import { useIntl } from "react-intl"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import { getFormattedDate } from "src/lib/date"
import styled, { createGlobalStyle } from "styled-components"

const BlogPostStyles = createGlobalStyle`
  .post-container {
    img {
      width: 100%;
    }

    h2 {
      font-size: 2.75rem;
      font-weight: 800;
      letter-spacing: -.03em;
      margin: 0;
      margin-bottom: 12px;
    }

    h3 {
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -.03em;
      margin: 0;
      margin-bottom: 12px;
    }

    h4 {
      font-size: 1.75rem;
      font-weight: 800;
      letter-spacing: -.03em;
      margin: 0;
      margin-bottom: 12px;
    }

    blockquote {
      margin: 0;
      margin-left: 16px;
      padding-left: 16px;
      border-left: 6px ${(props) => props.theme.secondary} solid;

    }
  } 
`

const StyledReactMarkdown = styled(ReactMarkdown)`
  font-size: 1.25rem;
  line-height: 1.25;
  font-weight: 300;
`

const HeroImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
`

const RelatedPostsContainer = styled(Box)`
  padding: 32px 0;
  background-color: ${(props) => props.theme.alternative};
`

const BlogPostPage = ({
  relatedPosts,
  slug,
  frontmatter,
  content,
}: {
  relatedPosts: BlogPost[]
  slug: string
  frontmatter: {
    [key: string]: any
  }
  content: string
}) => {
  const { locale } = useRouter()
  const { theme } = useContext(ThemeContext)
  const intl = useIntl()
  return (
    <>
      <BlogPostStyles />
      {theme === "light" ? <HightlightStylesDark /> : <HightlightStylesLight />}
      <SEO
        metadata={{
          title: frontmatter.title,
          description: frontmatter.description,
          slug: `${locale === "es" ? "es/" : ""}blog/${slug}`,
          image: {
            path: `images/blog/${slug}/${frontmatter.image}`,
            alt: intl.formatMessage(
              { id: "og_image_alt" },
              {
                title: frontmatter.title,
                date: getFormattedDate(frontmatter.publishedAt, locale),
              }
            ),
          },
          date: getFormattedDate(frontmatter.publishedAt, locale),
        }}
      />
      <section>
        <PageLayoutContent>
          <Box display="flex" flexDirection="column">
            <Text
              as="h1"
              fontSize={["2.75rem", "4rem", "5rem"]}
              fontWeight={800}
              letterSpacing="-.03em"
              lineHeight={["2.75rem", "4rem", "4.5rem"]}
              style={{ margin: 0, marginBottom: "12px" }}
            >
              {frontmatter.title}
            </Text>
            <Box
              display="flex"
              gridGap={["8px", "16px", "16px"]}
              flexDirection={["column", "row", "row"]}
            >
              <Text
                fontSize="1.5rem"
                fontWeight={700}
                letterSpacing="-.03em"
                lineHeight="1.5rem"
              >
                {getFormattedDate(frontmatter.publishedAt, locale)}
              </Text>
              {frontmatter.tags.map((tag: string) => (
                <Anchorlink key={tag} href={`/blog/tag/${tag}`} underlined>
                  <Text
                    fontSize="1.5rem"
                    fontWeight={700}
                    letterSpacing="-.03em"
                    lineHeight="1.5rem"
                  >
                    {tag}
                  </Text>
                </Anchorlink>
              ))}
            </Box>
            <Text
              as="p"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight={300}
            >
              {frontmatter.description}
            </Text>
          </Box>
          {/* <HeroImage
            src={`/images/blog/${slug}/${frontmatter.image}`}
            alt={intl.formatMessage(
              { id: "og_image_alt" },
              {
                title: frontmatter.title,
                date: getFormattedDate(frontmatter.publishedAt, locale),
              }
            )}
          /> */}
          <StyledReactMarkdown
            className="post-container"
            rehypePlugins={[rehypeHighlight]}
            components={{
              pre: ({ node, children, ...props }) => (
                <div className="highlight">
                  <pre {...props}>{children}</pre>
                </div>
              ),
            }}
          >
            {content}
          </StyledReactMarkdown>
        </PageLayoutContent>
        {relatedPosts.length > 0 && (
          <RelatedPostsContainer display="flex">
            <PageLayoutContent>
              <PageHeading fontSize={["3rem", "4rem", "5rem"]} level={2}>
                Related Posts
              </PageHeading>
              <BlogPostContainer posts={relatedPosts} />
            </PageLayoutContent>
          </RelatedPostsContainer>
        )}
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync("blog")
  const paths: {
    params: {
      slug: string
    }
    locale: any
  }[] = []
  files.forEach((fileName) => {
    const slug = fileName.replace(".md", "")
    languages.map((language) => {
      paths.push({
        params: { slug },
        locale: language.id,
      })
    })
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { content, frontmatter } = await getBlogPostBySlug(
    context?.params?.slug as string
  )

  let relatedPosts = await getBlogPostsByTag(
    frontmatter.tags[0],
    context.locale,
    3
  )
  // Remove the post itself from the relatedPosts
  relatedPosts = relatedPosts.filter(
    (post) => post.slug != context?.params?.slug
  )

  return {
    props: {
      relatedPosts,
      slug: context?.params?.slug,
      content,
      frontmatter,
      messages: (await import(`../../src/data/locales/${context?.locale}.json`))
        .default,
    },
  }
}

export default BlogPostPage
