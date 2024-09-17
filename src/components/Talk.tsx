"use client"

import { TalkType } from "@/data/talks"
import styles from "./Talk.module.css"
import { getFormattedDateMMMYYYY } from "@/lib/date"
import { useLocale, useTranslations } from "next-intl"
import { getCountryName } from "@/lib/country"

type TalkCardProps = {
  talk: TalkType
}

export const Talk = ({ talk }: TalkCardProps) => {
  const locale = useLocale()
  const t = useTranslations("Talks")

  return (
    <div className={styles.talkcontainer}>
      <div className={styles.talkimagecontainer}>
        <div
          role="img"
          aria-hidden={true}
          className={styles.talkimage}
          style={{
            backgroundImage: `url(/images/talks/${
              talk.image || "placeholder.jpg"
            })`,
          }}
        ></div>
      </div>
      <div className={styles.talkdetails}>
        <a href={talk.link} target="_blank" className={styles.talktitle}>
          {talk.conference}
        </a>
        <span className={styles.talkdate}>
          {getFormattedDateMMMYYYY(talk.date, locale)}
        </span>
        <span className={styles.talklocation}>
          {talk.location.city},&nbsp;
          {getCountryName(talk.location.countryCode, locale)}
        </span>
        {talk.video && (
          <a href={talk.video} className={styles.talkvideo}>
            {t("watch_video")}
          </a>
        )}
      </div>
    </div>
  )
}
