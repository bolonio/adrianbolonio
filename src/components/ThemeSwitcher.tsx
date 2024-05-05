"use client"

import { useTranslations } from "next-intl"
import styles from "./ThemeSwitcher.module.css"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useIsThemeDark } from "@/hooks/useIsThemeDark"

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme()
  const t = useTranslations("Themes")
  const isThemeDark = useIsThemeDark()
  const ariaLabel = t("change_theme", {
    theme: isThemeDark ? "light" : "dark",
  })

  return (
    <button
      className={styles.themeswitcherbutton}
      aria-label={ariaLabel}
      onClick={() => setTheme(isThemeDark ? "light" : "dark")}
    >
      <Image
        src={isThemeDark ? "/images/theme_light.svg" : "/images/theme_dark.svg"}
        width="30"
        height="30"
        alt="Adrián Bolonio Logo"
      />
    </button>
  )
}
