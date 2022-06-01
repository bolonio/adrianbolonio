import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import { languages } from "@data/languages"
import { HightlightStyles } from "@lib/hightlightStyles"
import { getTalkBySlug } from "@lib/talks"
import fs from "fs"
import type { GetStaticProps } from "next"
import { useRouter } from "next/router"
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

const TalkPage = ({
  slug,
  frontmatter,
  content,
}: {
  slug: string
  frontmatter: {
    [key: string]: any
  }
  content: string
}) => {
  const { locale } = useRouter()
  return (
    <>
      <BlogPostStyles />
      <HightlightStyles />
      <SEO
        metadata={{
          title: frontmatter.title,
          description: frontmatter.description,
          slug: `${locale === "es" ? "es/" : ""}talk/${slug}`,
          image: {
            path: `/api/og-image?slug=${slug}`,
            alt: frontmatter.imageAlt,
          },
          date: frontmatter.publishedAt,
        }}
      />
      <section>
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
          <iframe
            width="100%"
            height="580px"
            frameBorder="0"
            src="https://speakerdeck.com/player/f56c72c6776e43df9f1a239a3a08b034"
            title="Testing Web Accessibility"
            allowFullScreen={true}
          ></iframe>
          <StyledReactMarkdown className="post-container">
            {content}
          </StyledReactMarkdown>
        </PageLayoutContent>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync("talk")
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
  const { content, frontmatter } = await getTalkBySlug(
    context?.params?.slug as string
  )
  return {
    props: {
      slug: context?.params?.slug,
      content,
      frontmatter,
      messages: (await import(`../../src/data/locales/${context?.locale}.json`))
        .default,
    },
  }
}

export default TalkPage
