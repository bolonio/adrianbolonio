import fs from "fs"
import matter from "gray-matter"
import { join } from "path"

export type Post = {
  slug: string
  title: string
  description: string
  locale: string
  date: string
  image: string
  imageAlt: string
  alternate: string
  ogImage: {
    url: string
  }
  tags: string[]
  content: string
  preview?: boolean
}

const postsDirectory = join(process.cwd(), "posts")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return { ...data, slug: realSlug, content } as Post
}

export function getPosts(locale: string = "en", limit?: number): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.locale === locale)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return limit ? posts.slice(0, limit) : posts
}

export function getPostsByTag(tag: string, locale: string, limit?: number) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.tags?.includes(tag) && post.locale === locale)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return limit ? posts.slice(0, limit) : posts
}

export function getRelatedPosts(slug: string) {
  const post = getPostBySlug(slug)
  const relatedPosts = getPostsByTag(post.tags[0], post.locale, 3)
  // Remove the post itself from the relatedPosts
  return relatedPosts.filter((relatedPost) => relatedPost.slug !== post.slug)
}
