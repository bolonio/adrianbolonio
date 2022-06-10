import { BlogPostContainer } from "@components/BlogPostContainer"
import Box from "@components/core/Box"
import { PageHeading } from "@components/core/Headings"
import Text from "@components/core/Text"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import introImage from "@images/intro.jpg"
import { getBlogPosts } from "@lib/blog"
import Image from "next/image"
import Link from "next/link"
import { FormattedMessage, useIntl } from "react-intl"

const Home = ({
  posts,
}: {
  posts: {
    slug: string
    frontmatter: {
      [key: string]: any
    }
  }[]
}) => {
  const intl = useIntl()
  return (
    <section>
      <SEO />
      <Image src={introImage} alt="" />
      <PageLayoutContent>
        <Box marginBottom="48px">
          <PageHeading level={1}>
            {intl.formatMessage({ id: "title_home" })}
          </PageHeading>
          <Text as="p" fontSize="1.5rem" lineHeight="2rem" fontWeight={300}>
            <FormattedMessage id="bio" />
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="baseline"
          flexDirection={["column", "row", "row"]}
          justifyContent="space-between"
          marginBottom={["16px", 0, 0]}
        >
          <PageHeading level={2}>
            {intl.formatMessage({ id: "latest_post" })}
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

export async function getStaticProps({ locale }: { locale: string }) {
  console.log("locale", locale)
  const posts = await getBlogPosts(locale, 3)
  return {
    props: {
      posts,
      messages: (await import(`../src/data/locales/${locale}.json`)).default,
    },
  }
}

export default Home
