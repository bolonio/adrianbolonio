import { BlogPostContainer } from "@components/BlogPostContainer"
import { Anchorlink } from "@components/core/Anchorlink"
import Box from "@components/core/Box"
import { PageHeading } from "@components/core/Headings"
import Text from "@components/core/Text"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import { languages } from "@data/languages"
import { getBlogPostBySlug, getBlogPostsByTag } from "@lib/blog"
import { PrismjsStyles } from "@lib/prismjs"
import fs from "fs"
import type { GetStaticProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import Prism from "prismjs"
import { useEffect } from "react"
import ReactMarkdown from "react-markdown"
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
`

const RelatedPostsContainer = styled(Box)`
  background-color: ${(props) => props.theme.alternative};
`

const BlogPost = ({
  relatedPosts,
  slug,
  frontmatter,
  content,
}: {
  relatedPosts: {
    slug: string
    frontmatter: {
      [key: string]: any
    }
  }[]
  slug: string
  frontmatter: {
    [key: string]: any
  }
  content: string
}) => {
  const { locale } = useRouter()
  useEffect(() => {
    Prism.highlightAll()
  }, [locale])
  return (
    <>
      <BlogPostStyles />
      <PrismjsStyles />
      <SEO
        metadata={{
          title: frontmatter.title,
          description: frontmatter.description,
          slug: `${locale === "es" ? "es/" : ""}blog/${slug}`,
          image: {
            path: `/api/og-image?title=${frontmatter.title}`,
            alt: frontmatter.imageAlt,
          },
          date: frontmatter.publishedAt,
        }}
      />
      <section>
        {/* <OGImageTemplate
          title={frontmatter.title}
          publishedAt={frontmatter.publishedAt}
          slug={slug}
        /> */}
        <PageLayoutContent>
          <Box display="flex" flexDirection="column">
            <Text
              as="h1"
              fontSize={["3rem", "3rem", "5rem"]}
              fontWeight={800}
              letterSpacing="-.03em"
              lineHeight={["3rem", "3rem", "4.5rem"]}
              style={{ margin: 0, marginBottom: "12px" }}
            >
              {frontmatter.title}
            </Text>
            <Box display="flex" gridGap="16px">
              <Text
                fontSize="1.5rem"
                fontWeight={700}
                letterSpacing="-.03em"
                lineHeight="1.5rem"
              >
                {getFormattedDate(frontmatter.publishedAt, locale)}
              </Text>
              {frontmatter.tags.map((tag: string) => (
                <Link key={tag} href={`/blog/tag/${tag}`} passHref>
                  <Anchorlink underlined>
                    <Text
                      fontSize="1.5rem"
                      fontWeight={700}
                      letterSpacing="-.03em"
                      lineHeight="1.5rem"
                    >
                      {tag}
                    </Text>
                  </Anchorlink>
                </Link>
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
          {/* <HeroImage src={`/images/blog/${slug}/${frontmatter.image}`} /> */}
          <HeroImage
            src={`/api/og-image/?title=${frontmatter.title}&publishedAt=${frontmatter.publishedAt}&slug=${slug}&locale=${locale}`}
          />
          <StyledReactMarkdown
            className="post-container"
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
              <PageHeading level={2}>Related Posts</PageHeading>
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

  const relatedPosts = await getBlogPostsByTag(frontmatter.tags[0], 2)

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

export default BlogPost
