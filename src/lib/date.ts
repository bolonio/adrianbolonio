const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

/**
 * Returns a date formatted with the format DD mm YYYY
 * @param date
 */
export const getFormattedDate = (date: string, locale: string): string => {
  const formattedDate = new Date(date)
  return formattedDate.getTime()
    ? `${formattedDate.getDate()} ${getMonthName(
        formattedDate.getMonth(),
        locale
      )} ${formattedDate.getFullYear()}`
    : date
}

export const getFormattedDateMMMYYYY = (
  date: string,
  locale: string
): string => {
  const formattedDate = new Date(date)
  return formattedDate.getTime()
    ? `${getMonthName(
        formattedDate.getMonth(),
        locale
      )} ${formattedDate.getFullYear()}`
    : date
}

export const getFormattedDateYYYY = (date: string): string => {
  const formattedDate = new Date(date)
  return formattedDate.getTime() ? formattedDate.getFullYear().toString() : date
}

const getMonthName = (idx: number, locale: string) => {
  var objDate = new Date()
  objDate.setDate(1)
  objDate.setMonth(idx)
  return objDate.toLocaleString(locale, { month: "short" })
}
