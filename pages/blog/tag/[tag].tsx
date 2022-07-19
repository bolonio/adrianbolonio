import { BlogPostContainer } from "@components/BlogPostContainer"
import Box from "@components/core/Box"
import { PageHeading } from "@components/core/Headings"
import Text from "@components/core/Text"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import { languages } from "@data/languages"
import introImage from "@images/blog.jpg"
import { BlogPost, getBlogPostsByTag, getTags } from "@lib/blog"
import type { GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { FormattedMessage, useIntl } from "react-intl"

const Tag = ({ posts, tag }: { posts: BlogPost[]; tag: string }) => {
  const { locale } = useRouter()
  const intl = useIntl()
  return (
    <section>
      <SEO
        metadata={{
          title: `${intl.formatMessage({ id: "title_tag" })}: ${tag}`,
          slug: `${locale === "es" ? "es/" : ""}blog/tag/${tag}`,
        }}
      />
      <Image
        src={introImage}
        alt={intl.formatMessage({ id: "blog_page_image_alt" })}
      />
      <PageLayoutContent>
        <Box
          display="flex"
          alignItems="baseline"
          flexDirection={["column", "row", "row"]}
          justifyContent="space-between"
          marginBottom={["16px", 0, 0]}
        >
          <PageHeading level={2}>
            {`${intl.formatMessage({ id: "title_tag" })}: ${tag}`}
          </PageHeading>
          <Link href="/blog" passHref>
            <a>
              <Text fontSize="1.5rem" fontWeight={700}>
                <FormattedMessage id="all_posts" />
              </Text>
            </a>
          </Link>
        </Box>
        <BlogPostContainer posts={posts} />
      </PageLayoutContent>
    </section>
  )
}

export async function getStaticPaths() {
  const tags = await getTags("blog")
  const paths: {
    params: {
      tag: string
    }
    locale: any
  }[] = []
  tags.forEach((tag: string) => {
    languages.map((language) => {
      paths.push({
        params: { tag },
        locale: language.id,
      })
    })
  })
  /* tags.map((tag: string) => {
    languages.map((language) => {
      paths.push({
        params: { slug },
        locale: language.id,
      })
    })
    return {
      params: {
        tag,
      },
    }
  }) */
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getBlogPostsByTag(
    context?.params?.tag as string,
    context.locale
  )
  return {
    props: {
      posts,
      tag: context?.params?.tag,
      messages: (
        await import(`../../../src/data/locales/${context?.locale}.json`)
      ).default,
    },
  }
}

export default Tag
