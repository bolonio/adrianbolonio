import { useTheme } from "next-themes"
import { useIsClient } from "@/hooks/useIsClient"

export function useIsThemeDark() {
  const { resolvedTheme } = useTheme()
  const isClient = useIsClient()

  return resolvedTheme === "dark" || !isClient
}
