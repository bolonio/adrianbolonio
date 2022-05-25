import Box from "@components/core/Box"
import { PageHeading } from "@components/core/Headings"
import Text from "@components/core/Text"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import { TalkCard } from "@components/TalkCard"
import { talks } from "@data/talks"
import introImage from "@images/talks.jpg"
import type { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { FormattedMessage, useIntl } from "react-intl"

const Home: NextPage = () => {
  const intl = useIntl()
  const { locale } = useRouter()

  return (
    <section>
      <SEO
        metadata={{
          title: intl.formatMessage({ id: "title_talks" }),
          slug: `${locale === "es" ? "es/" : ""}talks`,
        }}
      />
      <Image src={introImage} alt="" />
      <PageLayoutContent>
        <PageHeading level={1}>
          {intl.formatMessage({ id: "title_talks" })}
        </PageHeading>
        <Text as="p" fontSize="1.5rem" lineHeight="2rem" fontWeight={300}>
          <FormattedMessage
            id={"speaker_invitation"}
            values={{
              emailLink: (
                <a
                  href="mailto:adrian.bolonio@gmail.com?subject=We would like you to speak at our conference"
                  rel="me"
                >
                  email
                </a>
              ),
            }}
          />
        </Text>
        {/* <Box display="grid" gridGap="32px" gridTemplateColumns="repeat(3, 1fr)"> */}
        <Box
          display="flex"
          flexWrap="wrap"
          gridGap="32px"
          flexDirection="column"
        >
          {talks.map((year) => (
            <>
              <Text
                as="h2"
                fontSize="4rem"
                fontWeight={800}
                letterSpacing="-.03em"
                lineHeight="76px"
                style={{ margin: 0 }}
              >
                {year.year}
              </Text>
              {year.talks.map((talk, i: number) => (
                <TalkCard key={i} talk={talk} />
              ))}
            </>
          ))}
        </Box>
      </PageLayoutContent>
    </section>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../src/data/locales/${locale}.json`)).default,
    },
  }
}

export default Home
