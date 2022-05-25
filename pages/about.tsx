import { PageLayoutContent } from "@components/layouts/Layout"
import { SEO } from "@components/Seo"
import introImage from "@images/about.jpg"
import { PageHeading } from "@components/core/Headings"
import Text from "@components/core/Text"
import Image from "next/image"
import { useRouter } from "next/router"
import { FormattedMessage, useIntl } from "react-intl"

const About = () => {
  const intl = useIntl()
  const { locale } = useRouter()
  return (
    <section>
      <SEO
        metadata={{
          title: intl.formatMessage({ id: "title_about" }),
          slug: `${locale === "es" ? "es/" : ""}about`,
        }}
      />
      <Image src={introImage} alt="" />
      <PageLayoutContent>
        <PageHeading text={intl.formatMessage({ id: "title_about" })} />
        <Text as="p" fontSize="1.5rem" lineHeight="2rem" fontWeight={300}>
          <FormattedMessage id="bio" />
        </Text>
        <Text as="p" fontSize="1.5rem" lineHeight="2rem" fontWeight={300}>
          <FormattedMessage
            id={"contact_me"}
            values={{
              twitterLink: (
                <a href="https://twitter.com/bolonio" rel="noopener me">
                  Twitter
                </a>
              ),
              emailLink: (
                <a href="mailto:adrian.bolonio@gmail.com" rel="me">
                  email
                </a>
              ),
            }}
          />
        </Text>
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

export default About
