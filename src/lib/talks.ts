import { TalkType } from "@/data/talks"
import { talks } from "@/data/talks"

export const getUpcomingTalks = () => {
  const today = new Date()
  const upcomingTalks: TalkType[] = []
  talks.forEach((year) => {
    if (parseInt(year.year) >= today.getFullYear()) {
      year.talks.forEach((talk) => {
        if (new Date(talk.date) > today) {
          upcomingTalks.push(talk)
        }
      })
    }
  })
  return upcomingTalks.reverse()
}
