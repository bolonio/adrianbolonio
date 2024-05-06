"use client"

import React from "react"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { useIsThemeDark } from "@/hooks/useIsThemeDark"
import styles from "./Job.module.css"
import { JobItemType } from "@/data/cv"
import { getFormattedDateMMMYYYY } from "@/lib/date"

type JobProps = {
  job: JobItemType
}

export const Job = ({ job }: JobProps) => {
  const locale = useLocale()
  const t = useTranslations("Contact")
  const isThemeDark = useIsThemeDark()

  return (
    <div className={styles.jobcontainer}>
      <div className={styles.jobimagecontainer}>
        <div
          role="img"
          aria-hidden={true}
          className={styles.jobimage}
          style={{
            backgroundImage: `url(/images/cv/jobs/${job.companyLogo})`,
          }}
        ></div>
      </div>
      <div className={styles.jobdetailscontainer}>
        <span className={styles.jobtitle}>{job.title}</span>
        <div className={styles.jobcompanydates}>
          <Link
            href={job.companyUrl}
            target="_blank"
            className={styles.jobcompany}
          >
            {job.company}
          </Link>
          <span className={styles.jobdates}>
            {getFormattedDateMMMYYYY(job.startDate, locale)} -{" "}
            {getFormattedDateMMMYYYY(job.endDate, locale)}
          </span>
        </div>
        <p className={styles.jobdescription}>{job.description}</p>
      </div>
    </div>
  )
}
