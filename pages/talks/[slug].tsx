import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import { languages } from "@data/languages"
import {
  HightlightStylesDark,
  HightlightStylesLight,
} from "@lib/hightlightStyles"
import { getTalkBySlug } from "@lib/talks"
import { ThemeContext } from "@providers/ThemeProvider"
import fs from "fs"
import type { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useContext } from "react"
import { useIntl } from "react-intl"
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
          slug: `${locale === "es" ? "es/" : ""}talk/${slug}`,
          image: {
            path: `/images/blog/${slug}/${frontmatter.image}`,
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
                {frontmatter.subtitle}
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
            src={frontmatter.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
