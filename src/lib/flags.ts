import FlagAT from "@images/flags/at.svg"
import FlagDE from "@images/flags/de.svg"
import FlagDK from "@images/flags/dk.svg"
import FlagEN from "@images/flags/en.svg"
import FlagES from "@images/flags/es.svg"
import FlagIT from "@images/flags/it.svg"
import FlagSE from "@images/flags/se.svg"

export const getFlag = (country: string) => {
  switch (country) {
    default:
    case "es":
      return FlagES
    case "at":
      return FlagAT
    case "dk":
      return FlagDK
    case "se":
      return FlagSE
    case "en":
      return FlagEN
    case "it":
      return FlagIT
    case "de":
      return FlagDE
  }
}
