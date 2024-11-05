import React from "react"
import styles from "./SkipToContent.module.css"
import { useTranslations } from "next-intl"

export const SkipToContent = () => {
  const t = useTranslations("Navigation")
  return (
    <a className={styles.skiptocontent} href="#content">
      {t("skip_to_content")}
    </a>
  )
}
