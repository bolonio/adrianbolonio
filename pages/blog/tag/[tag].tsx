import { BlogPostContainer } from "@components/BlogPostContainer"
import { PageHeading } from "@components/core/Headings"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import { languages } from "@data/languages"
import introImage from "@images/blog.jpg"
import { BlogPost, getBlogPostsByTag, getTags } from "@lib/blog"
import type { GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useIntl } from "react-intl"

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
        <PageHeading level={1}>
          {`${intl.formatMessage({ id: "title_tag" })}: ${tag}`}
        </PageHeading>
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
