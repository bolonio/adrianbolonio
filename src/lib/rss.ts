import { BlogPost } from "@lib/blog"
import { Feed } from "feed"
import fs from "fs"
import { getFormattedDate } from "src/lib/date"
import { defaultMetadataEN } from "../data/defaultMetadata"

export const generateRSSFeed = (articles: BlogPost[], locale: string) => {
  const baseUrl = "https://adrianbolonio.com"
  const author = {
    name: defaultMetadataEN.author,
    email: "bolonio85@gmail.com",
    link: "https://twitter.com/bolonio",
  }

  const feed = new Feed({
    title: "Articles by Adrián Bolonio",
    description: defaultMetadataEN.description,
    id: baseUrl,
    link: baseUrl,
    language: locale,
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
    copyright: "",
  })

  articles.forEach((post) => {
    const {
      content,
      slug,
      frontmatter: { publishedAt, description, title },
    } = post
    const link = `${baseUrl}/${locale}/blog/${slug}`

    feed.addItem({
      title,
      id: link,
      link,
      description,
      content,
      author: [author],
      date: new Date(getFormattedDate(publishedAt, locale)),
    })
  })

  fs.writeFileSync("public/rss.xml", feed.rss2())
}
