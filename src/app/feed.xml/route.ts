import RSS from "rss"
import { getPosts } from "@/lib/blog"
import { Post } from "@/lib/blog"
import { getLocale, getTranslations } from "next-intl/server"

export async function GET() {
  const locale = await getLocale()
  const allPosts = getPosts(locale)
  const t = await getTranslations({ locale, namespace: "SEO" })

  const siteUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.adrianbolonio.com"

  const feedOptions = {
    title: `RSS Feed of ${t("title")}`,
    description: t("description"),
    site_url: siteUrl,
    feed_url: `${siteUrl}/feed.xml`,
    image_url: `${siteUrl}/${t("image.path")}`,
    pubDate: new Date().toUTCString(),
    copyright: `All rights reserved - ${new Date().getFullYear()}`,
  }

  const feed = new RSS(feedOptions)

  allPosts.map((post: Post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      date: post.date,
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  })
}
