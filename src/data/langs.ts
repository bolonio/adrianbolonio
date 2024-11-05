export type LanguageId = "en" | "es" | undefined

export type Lang = {
  id: LanguageId
  name: string
  flag: string
}

export const languages: Lang[] = [
  {
    id: "en",
    name: "Inglés",
    flag: "Reino Unido",
  },
  {
    id: "es",
    name: "Spanish",
    flag: "Spain",
  },
]
