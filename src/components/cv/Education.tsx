"use client"

import React from "react"
import { useLocale } from "next-intl"
import Link from "next/link"
import styles from "./Education.module.css"
import { EducationItemType } from "@/data/cv/types"
import { getFormattedDateYYYY } from "@/lib/date"
import { getCountryName } from "@/lib/country"

type EducationProps = {
  education: EducationItemType
}

export const Education = ({ education }: EducationProps) => {
  const locale = useLocale()

  return (
    <div className={styles.educationcontainer}>
      <div className={styles.educationimagecontainer}>
        <div
          role="img"
          aria-hidden={true}
          className={styles.educationimage}
          style={{
            backgroundImage: `url(/images/cv/education/${education.schoolLogo})`,
          }}
        ></div>
      </div>
      <div className={styles.educationdetailscontainer}>
        <span className={styles.educationtitle}>{education.degree}</span>
        <div className={styles.educationschooldates}>
          <Link
            href={education.schoolUrl}
            target="_blank"
            className={styles.educationschool}
          >
            {education.school} ({education.location.city},{" "}
            {getCountryName(education.location.country.id, locale)})
          </Link>
          <span className={styles.educationdates}>
            {getFormattedDateYYYY(education.startDate)} -{" "}
            {getFormattedDateYYYY(education.endDate)}
          </span>
        </div>
      </div>
    </div>
  )
}
