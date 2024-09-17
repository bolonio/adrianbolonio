import { TalkType } from "@/data/talks"
import { talks } from "@/data/talks"
import fs from "fs"
import matter from "gray-matter"
import { join } from "path"

export type Talk = {
  slug: string
  title: string
  subtitle: string
  locale: string
  date: string
  image: string
  imageAlt: string
  alternate: string
  content: string
  preview?: boolean
}

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

const talksDirectory = join(process.cwd(), "talks")

export function getTalkBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(talksDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return { ...data, slug: realSlug, content } as Talk
}
