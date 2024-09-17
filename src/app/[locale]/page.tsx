import { useLocale, useTranslations } from "next-intl"
import pageStyles from "@/app/[locale]/pages.module.css"
import { LayoutWrapper } from "@/components/LayoutWrapper"
import { getTranslations } from "next-intl/server"
import { MetaDataProp, getMetadata } from "@/lib/seo"
import Image from "next/image"
import { Link } from "@/navigation"
import { getUpcomingTalks } from "@/lib/talks"
import { TalksContainer } from "@/components/TalksContainer"
import { getPosts } from "@/lib/blog"
import { BlogContainer } from "@/components/BlogContainer"

export async function generateMetadata({ params: { locale } }: MetaDataProp) {
  const t = await getTranslations({ locale, namespace: "Index" })
  return getMetadata({ slug: "/" }, locale)
}

export default function Index() {
  const t = useTranslations("Index")
  const tabout = useTranslations("About")
  const tblog = useTranslations("Blog")
  const ttalks = useTranslations("Talks")
  const locale = useLocale()
  const allPosts = getPosts(locale, 3)
  const upcomingTalks = getUpcomingTalks()
  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <div className={pageStyles.introimagecontainer}>
          <Image
            className={pageStyles.introimage}
            fill={true}
            src="/images/intro.jpg"
            alt=""
          />
        </div>
        <div className={pageStyles.pagetitlecontainer}>
          <h1 className={pageStyles.pagetitle}>{t("title")}</h1>
        </div>
        <p>{tabout("bio")}</p>
        <div className={pageStyles.pagetitlecontainer}>
          <h2 className={pageStyles.pagetitle}>{tblog("latest_posts")}</h2>
          <Link className={pageStyles.pagetitleall} href="/blog">
            {tblog("all_posts")}
          </Link>
        </div>
        <BlogContainer posts={allPosts} direction="vertical" />
        {upcomingTalks.length > 0 && (
          <>
            <div className={pageStyles.pagetitlecontainer}>
              <h2 className={pageStyles.pagetitle}>
                {ttalks("upcoming_talks")}
              </h2>
              <Link className={pageStyles.pagetitleall} href="/talks">
                {ttalks("all_talks")}
              </Link>
            </div>
            <TalksContainer talks={upcomingTalks} />
          </>
        )}
      </LayoutWrapper>
    </section>
  )
}
