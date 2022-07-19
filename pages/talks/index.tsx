import { PageHeading } from "@components/core/Headings"
import Text from "@components/core/Text"
import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import { TalksContainer } from "@components/TalksContainer"
import { talks } from "@data/talks"
import introImage from "@images/talks.png"
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
      <Image
        src={introImage}
        alt={intl.formatMessage({ id: "talk_page_image_alt" })}
      />
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
        {talks.map((year) => (
          <TalksContainer key={year.year} talks={year.talks} year={year.year} />
        ))}
      </PageLayoutContent>
    </section>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../../src/data/locales/${locale}.json`)).default,
    },
  }
}

export default Home
