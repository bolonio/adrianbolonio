import { BlogPostContainer } from "@components/BlogPostContainer"
import Box from "@components/core/Box"
import { PageHeading } from "@components/core/Headings"
import Text from "@components/core/Text"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import introImage from "@images/about.jpg"
import { BlogPost, getBlogPosts } from "@lib/blog"
import Image from "next/image"
import Link from "next/link"
import { FormattedMessage, useIntl } from "react-intl"
import styled from "styled-components"

const RelatedPostsContainer = styled(Box)`
  padding: 32px 0;
  background-color: ${(props) => props.theme.alternative};
`

const Home = ({ posts }: { posts: BlogPost[] }) => {
  const intl = useIntl()
  return (
    <section>
      <SEO />
      {/* <Image
        src={introImage}
        alt={intl.formatMessage({ id: "404_page_image_alt" })}
      /> */}
      <PageLayoutContent>
        <PageHeading level={1}>
          {intl.formatMessage({ id: "404_title" })}
        </PageHeading>
        <Text as="p" fontSize="1.5rem" lineHeight="2rem" fontWeight={300}>
          <FormattedMessage id="404_message" />
        </Text>
      </PageLayoutContent>
      <RelatedPostsContainer display="flex">
        <PageLayoutContent>
          <Box
            display="flex"
            alignItems="baseline"
            justifyContent="space-between"
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
      </RelatedPostsContainer>
    </section>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const posts = await getBlogPosts(locale, 3)
  return {
    props: {
      posts,
      messages: (await import(`../src/data/locales/${locale}.json`)).default,
    },
  }
}

export default Home
