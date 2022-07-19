import { TalksType, TalkType } from "@data/talks"

export const getUpcomingTalks = (talks: TalksType[]) => {
  const today = new Date()
  const upcomingTalks: TalkType[] = []
  talks.forEach((year) => {
    if (parseInt(year.year) >= today.getFullYear()) {
      year.talks.forEach((talk) => {
        console.debug(new Date(talk.date), today)
        if (new Date(talk.date) > today) {
          console.debug(talk.conference)
          upcomingTalks.push(talk)
        }
      })
    }
  })
  return upcomingTalks
}
