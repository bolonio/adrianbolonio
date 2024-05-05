export const getCountryName = (
  countryCode: string,
  locale: string | undefined = "en"
) => {
  try {
    let regionNames = new Intl.DisplayNames([locale], { type: "region" })
    return regionNames.of(countryCode)
  } catch (e) {
    return countryCode
  }
}
