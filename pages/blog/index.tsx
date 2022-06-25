import { BlogPostContainer } from "@components/BlogPostContainer"
import { PageHeading } from "@components/core/Headings"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import introImage from "@images/blog.jpg"
import { BlogPost, getBlogPosts } from "@lib/blog"
import Image from "next/image"
import { useRouter } from "next/router"
import { useIntl } from "react-intl"

const Blog = ({ posts }: { posts: BlogPost[] }) => {
  const { locale } = useRouter()
  const intl = useIntl()
  return (
    <section>
      <SEO
        metadata={{
          title: "Blog",
          slug: `${locale === "es" ? "es/" : ""}blog`,
        }}
      />
      <Image
        src={introImage}
        alt={intl.formatMessage({ id: "blog_page_image_alt" })}
      />
      <PageLayoutContent>
        <PageHeading level={1}>Blog</PageHeading>
        <BlogPostContainer posts={posts} />
      </PageLayoutContent>
    </section>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const posts = await getBlogPosts(locale)
  return {
    props: {
      posts,
      messages: (await import(`../../src/data/locales/${locale}.json`)).default,
    },
  }
}

export default Blog
