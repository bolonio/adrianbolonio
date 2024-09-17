import React, { PropsWithChildren } from "react"
import styles from "./LayoutWrapper.module.css"

type LayoutWrapperProps = {
  isBlogPost?: boolean
} & PropsWithChildren

export const LayoutWrapper = ({ children, isBlogPost }: LayoutWrapperProps) => {
  return (
    <div
      className={`${styles.layoutwrapper} ${
        isBlogPost && styles.layoutwrapperblog
      }`}
    >
      {children}
    </div>
  )
}
