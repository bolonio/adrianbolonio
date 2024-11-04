import { LayoutWrapper } from "@/components/LayoutWrapper"
import { useLocale, useTranslations } from "next-intl"
import pageStyles from "@/app/[locale]/pages.module.css"
import { getTranslations } from "next-intl/server"
import styles from "./cv.module.css"
import { EducationItemType, JobItemType } from "@/data/cv/types"
import { cv_en } from "@/data/cv/cv_en"
import { cv_es } from "@/data/cv/cv_es"
import { Contacts } from "@/components/cv/Contacts"
import { Job } from "@/components/cv/Job"
import { Education } from "@/components/cv/Education"
import { MetaDataProp, getMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: MetaDataProp) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "CV" })
  return getMetadata({ title: t("title"), slug: "cv" }, locale)
}

export default function CV() {
  const t = useTranslations("CV")
  const tContact = useTranslations("Contact")
  const tAbout = useTranslations("About")

  const locale = useLocale()
  const cv = locale === "en" ? cv_en : cv_es

  return (
    <section className={pageStyles.section}>
      <LayoutWrapper>
        <div className={styles.cvsection}>
          <div className={pageStyles.pagetitlecontainer}>
            <h1 className={pageStyles.pagetitle}>Adrián Bolonio</h1>
          </div>
          <p className={styles.bio}>{tAbout("bio")}</p>
        </div>
        <div className={styles.cvsection}>
          <p className={styles.cvtitle}>{tContact("title")}</p>
          <Contacts />
        </div>
        <div className={styles.cvsection}>
          <p className={styles.cvtitle}>{t("job_experience")}</p>
          <div>
            {cv.jobs.map((job: JobItemType, i: number) => (
              <Job key={i} job={job} />
            ))}
          </div>
        </div>
        <div className={styles.cvsection}>
          <p className={styles.cvtitle}>{t("education")}</p>
          <div>
            {cv.education.map((education: EducationItemType, i: number) => (
              <Education key={i} education={education} />
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  )
}
