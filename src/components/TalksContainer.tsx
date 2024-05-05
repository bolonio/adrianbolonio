"use client"

import { TalkType } from "@/data/talks"
import styles from "./TalksContainer.module.css"
import { Talk } from "@/components/Talk"

type TalksContainerProps = {
  talks: TalkType[]
  year?: string
}

export const TalksContainer = ({ talks, year }: TalksContainerProps) => {
  return (
    <div className={styles.talkscontainer}>
      <h2 className={styles.talksyear}>{year}</h2>
      {talks.map((talk, i) => (
        <Talk key={i} talk={talk} />
      ))}
    </div>
  )
}
