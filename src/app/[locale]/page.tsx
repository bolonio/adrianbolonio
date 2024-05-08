import { useTranslations } from "next-intl"
import pageStyles from "./pages.module.css"
import { LayoutWrapper } from "@/components/LayoutWrapper"
import { getTranslations } from "next-intl/server"
import { MetaDataProp, getMetadata } from "@/lib/seo"
import Image from "next/image"
import { Link } from "@/navigation"
import { getUpcomingTalks } from "@/lib/talks"
import { TalksContainer } from "@/components/TalksContainer"

export async function generateMetadata({ params: { locale } }: MetaDataProp) {
  const t = await getTranslations({ locale, namespace: "Index" })
  return getMetadata({ slug: "/" }, locale)
}

export default function Index() {
  const t = useTranslations("Index")
  const tabout = useTranslations("About")
  const tblog = useTranslations("Blog")
  const ttalks = useTranslations("Talks")
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
        <h1 className={pageStyles.pagetitle}>{t("title")}</h1>
        <p>{tabout("bio")}</p>
        <div className={pageStyles.pagetitlecontainer}>
          <h2 className={pageStyles.pagetitle}>{tblog("latest_posts")}</h2>
          <Link className={pageStyles.pagetitleall} href="/blog">
            {tblog("all_posts")}
          </Link>
        </div>
        <div>BLOG POSTS</div>
        <div className={pageStyles.pagetitlecontainer}>
          <h2 className={pageStyles.pagetitle}>{ttalks("upcoming_talks")}</h2>
          <Link className={pageStyles.pagetitleall} href="/blog">
            {ttalks("all_talks")}
          </Link>
        </div>
        <TalksContainer talks={upcomingTalks} />
      </LayoutWrapper>
    </section>
  )
}
