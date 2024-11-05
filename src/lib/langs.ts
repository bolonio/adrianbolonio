import { LanguageId, languages } from "@/data/langs"

export const getNextLanguage = (currentLanguage: string) => {
  const currentIndex = languages.findIndex(
    (language) => language.id === currentLanguage
  )
  const nextIndex = currentIndex + 1
  const nextLanguage = languages[nextIndex] || languages[0]
  return nextLanguage
}

export const getLanguageFlag = (languageId: LanguageId): string => {
  return `/images/flags/${languageId}.svg`
}
