import { BlogPostContainer } from "@components/BlogPostContainer"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import { languages } from "@data/languages"
import introImage from "@images/blog.jpg"
import { getBlogPostsByTag, getTags } from "@lib/blog"
import { PageHeading } from "@components/core/Headings"
import type { GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useIntl } from "react-intl"

const Tag = ({
  posts,
  tag,
}: {
  posts: {
    slug: string
    frontmatter: {
      [key: string]: any
    }
  }[]
  tag: string
}) => {
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
      <Image src={introImage} alt="" hidden />
      <PageLayoutContent>
        <PageHeading
          text={`${intl.formatMessage({ id: "title_tag" })}: ${tag}`}
        />
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
  const posts = await getBlogPostsByTag(context?.params?.tag as string)
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
