"use client"

import React, { useState } from "react"
import LocaleSwitcher from "@/components/LocaleSwitcher"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { LayoutWrapper } from "@/components/LayoutWrapper"
import Image from "next/image"
import styles from "./Header.module.css"
import { headerMenu } from "@/data/navigation"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { useIsThemeDark } from "@/hooks/useIsThemeDark"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations("Navigation")
  const isThemeDark = useIsThemeDark()

  return (
    <header className={styles.header}>
      <LayoutWrapper>
        <nav className={styles.navcontainer}>
          <Image
            src={isThemeDark ? "/images/logo_white.svg" : "/images/logo.svg"}
            width="100"
            height="50"
            alt="Adrián Bolonio Logo"
          />
          <div className={styles.headermenu}>
            <div className={`${styles.headermainmenu} ${styles.headermenu}`}>
              {headerMenu.map((menuItem) => (
                <Link
                  className={styles.headermenulink}
                  key={menuItem.slug}
                  href={`${menuItem.slug}`}
                >
                  {t(menuItem.id)}
                </Link>
              ))}
            </div>
            <ThemeSwitcher />
            <LocaleSwitcher />
            <button
              className={styles.burgermenubutton}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg
                  height="28"
                  viewBox="0 0 512 512"
                  width="28"
                  fill={isThemeDark ? "#ffffff" : "#24292f"}
                >
                  <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
                </svg>
              ) : (
                <svg
                  height="28"
                  viewBox="0 0 512 512"
                  width="28"
                  fill={isThemeDark ? "#ffffff" : "#24292f"}
                >
                  <g>
                    <path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32   C448,238.3,434.3,224,417.4,224z" />
                    <path d="M417.4,96H94.6C77.7,96,64,110.3,64,128c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32   C448,110.3,434.3,96,417.4,96z" />
                    <path d="M417.4,352H94.6C77.7,352,64,366.3,64,384c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32   C448,366.3,434.3,352,417.4,352z" />
                  </g>
                </svg>
              )}
            </button>
            {menuOpen && (
              <div className={styles.burgermenucontainer}>
                {headerMenu.map((menuItem) => (
                  <Link
                    className={styles.headermenulink}
                    key={menuItem.slug}
                    href={`${menuItem.slug}`}
                    onClick={() => {
                      setMenuOpen(false)
                    }}
                  >
                    {t(menuItem.id)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </LayoutWrapper>
    </header>
  )
}
