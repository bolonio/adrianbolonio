import { darkTheme, lightTheme } from "@theme/theme"
import React, { createContext, ReactNode, useEffect, useState } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    // TODO: Check user preference first
    const localTheme = window.localStorage.getItem("theme")
    localTheme && setTheme(localTheme)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
