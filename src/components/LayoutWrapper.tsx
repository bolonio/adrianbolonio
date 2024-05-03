import React, { PropsWithChildren } from "react"
import styles from "./LayoutWrapper.module.css"

export const LayoutWrapper = ({ children }: PropsWithChildren) => {
  return <div className={styles.layoutwrapper}>{children}</div>
}
