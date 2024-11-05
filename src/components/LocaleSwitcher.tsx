"use client"

import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { useTransition } from "react"
import { useRouter, usePathname } from "@/navigation"
import styles from "./LocaleSwitcher.module.css"
import { getLanguageFlag, getNextLanguage } from "@/lib/langs"

export default function LocaleSwitcher() {
  const t = useTranslations("Languages")
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()
  const newLanguage = getNextLanguage(locale)

  const changeLanguage = () => {
    startTransition(() => {
      router.push(pathname, { locale: newLanguage.id })
    })
  }

  return (
    <button
      className={styles.localewitcherbutton}
      aria-label={t("change_language", { languageName: newLanguage.name })}
      onClick={changeLanguage}
      aria-disabled={isPending}
    >
      <Image
        src={getLanguageFlag(newLanguage.id)}
        width="30"
        height="30"
        alt={t("flag_alt", { languageFlag: newLanguage.flag })}
        aria-hidden="true"
      />
    </button>
  )
}
