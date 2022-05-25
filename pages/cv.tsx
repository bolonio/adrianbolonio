import Box from "@components/core/Box"
import { PageHeading } from "@components/core/Headings"
import Text from "@components/core/Text"
import { Contact } from "@components/cv/Contact"
import { EducationCard } from "@components/cv/EducationCard"
import { JobCard } from "@components/cv/JobCard"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import { cv, EducationItemType, JobItemType } from "@data/cv"
import { getBlogPosts } from "@lib/blog"
import { useRouter } from "next/router"
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
  const { locale } = useRouter()
  return (
    <section>
      <SEO
        metadata={{
          title: "CV",
          slug: `${locale === "es" ? "es/" : ""}cv`,
        }}
      />
      {/* <Image src={introImage} alt="" /> */}
      <PageLayoutContent>
        <Box
          display="flex"
          flexDirection={["column", "column", "row"]}
          gridGap="32px"
          marginBottom="16px"
        >
          <Box>
            <PageHeading level={1}>Adrián Bolonio</PageHeading>
            <Text
              as="p"
              fontSize="1.5rem"
              lineHeight="2rem"
              fontWeight={300}
              style={{ margin: 0 }}
            >
              <FormattedMessage id="bio" />
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gridRowGap="16px"
            marginRight="32px"
          >
            <Text
              fontSize="3.5rem"
              fontWeight={800}
              letterSpacing="-.03em"
              lineHeight="76px"
              style={{ margin: 0 }}
            >
              {intl.formatMessage({ id: "contact" })}
            </Text>
            <Contact />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gridGap="16px">
          <Text
            fontSize="3.5rem"
            fontWeight={800}
            letterSpacing="-.03em"
            lineHeight="76px"
            style={{ margin: 0 }}
          >
            {intl.formatMessage({ id: "job_experience" })}
          </Text>
          {cv.jobs.map((job: JobItemType, i: number) => (
            <JobCard key={i} job={job} />
          ))}
          <Text
            fontSize="4rem"
            fontWeight={800}
            letterSpacing="-.03em"
            lineHeight="76px"
            style={{ margin: 0 }}
          >
            {intl.formatMessage({ id: "education" })}
          </Text>
          {cv.education.map((education: EducationItemType, i: number) => (
            <EducationCard key={i} education={education} />
          ))}
        </Box>
      </PageLayoutContent>
    </section>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const posts = await getBlogPosts()
  return {
    props: {
      posts,
      messages: (await import(`../src/data/locales/${locale}.json`)).default,
    },
  }
}

export default Home
