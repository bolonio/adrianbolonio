import { BlogPostContainer } from "@components/BlogPostContainer"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import introImage from "@images/blog.jpg"
import { getBlogPosts } from "@lib/blog"
import { PageHeading } from "@components/core/Headings"
import Image from "next/image"
import { useRouter } from "next/router"

const Blog = ({
  posts,
}: {
  posts: {
    slug: string
    frontmatter: {
      [key: string]: any
    }
  }[]
}) => {
  const { locale } = useRouter()
  return (
    <section>
      <SEO
        metadata={{
          title: "Blog",
          slug: `${locale === "es" ? "es/" : ""}blog`,
        }}
      />
      <Image src={introImage} alt="" hidden />
      <PageLayoutContent>
        <PageHeading text="Blog" />
        <BlogPostContainer posts={posts} />
      </PageLayoutContent>
    </section>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const posts = await getBlogPosts()
  return {
    props: {
      posts,
      messages: (await import(`../../src/data/locales/${locale}.json`)).default,
    },
  }
}

export default Blog
