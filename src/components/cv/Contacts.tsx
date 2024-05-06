"use client"

import React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/navigation"
import { useIsThemeDark } from "@/hooks/useIsThemeDark"
import { contacts } from "@/data/contact"
import styles from "./Contacts.module.css"

export const Contacts = () => {
  const t = useTranslations("Contact")
  const isThemeDark = useIsThemeDark()

  return (
    <div className={styles.contactscontainer}>
      {contacts.map((contactItem, i: number) => (
        <div key={i} className={styles.contactcontainer}>
          <Image
            src={isThemeDark ? contactItem.iconLight : contactItem.iconDark}
            width="30"
            height="30"
            alt={t("logo_alt", {
              contact: contactItem.name,
            })}
            aria-hidden
          />
          <Link
            className={styles.contactlink}
            target="_blank"
            href={contactItem.url}
            aria-label={t("contact_me", {
              contact: contactItem.name,
            })}
          >
            {contactItem.name}
          </Link>
        </div>
      ))}
    </div>
  )
}
