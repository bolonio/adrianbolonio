"use client"

import React, { useState } from "react"
import { LayoutWrapper } from "@/components/LayoutWrapper"
import Image from "next/image"
import styles from "./Footer.module.css"
import { footerMenu } from "@/data/navigation"
import { useTranslations } from "next-intl"
import { Link } from "@/navigation"
import { useIsThemeDark } from "@/hooks/useIsThemeDark"
import { contacts } from "@/data/contact"

export const Footer = () => {
  const t = useTranslations("Navigation")
  const tcontact = useTranslations("Contact")
  const isThemeDark = useIsThemeDark()

  return (
    <footer className={styles.navcontainer}>
      <LayoutWrapper>
        <nav className={styles.footercontainer}>
          <div className={styles.footercontaineritem}>
            <Image
              src={!isThemeDark ? "/images/logo_white.svg" : "/images/logo.svg"}
              width="100"
              height="50"
              alt="Adrián Bolonio Logo"
              className={styles.footerlogo}
            />
            <div className={styles.footermenu}>
              <div className={styles.footermainmenu}>
                {footerMenu.map((menuItem) => (
                  <Link
                    className={styles.footermenulink}
                    key={menuItem.slug}
                    href={`${menuItem.slug}`}
                  >
                    {t(menuItem.id)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div
            className={[
              styles.footercontaineritem,
              styles.footercontaineritemcontact,
            ].join(" ")}
          >
            <div className={styles.footermenu}>
              <div className={styles.footermainmenu}>
                {contacts.map((contactItem) =>
                  contactItem.inFooter ? (
                    <Link
                      className={styles.footermenulink}
                      target="_blank"
                      key={contactItem.url}
                      href={contactItem.url}
                      aria-label={tcontact("go_to_profile", {
                        contact: contactItem.name,
                      })}
                    >
                      <Image
                        src={
                          !isThemeDark
                            ? contactItem.iconLight
                            : contactItem.iconDark
                        }
                        width="30"
                        height="30"
                        alt={tcontact("logo_alt", {
                          contact: contactItem.name,
                        })}
                        aria-hidden
                      />
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </nav>
      </LayoutWrapper>
    </footer>
  )
}
