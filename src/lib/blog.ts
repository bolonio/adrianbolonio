import fs from "fs"
import matter from "gray-matter"

export type BlogPost = {
  slug: string
  frontmatter: {
    [key: string]: any
  }
  content: string
}

const getAllBlogPosts = async (locale: string = "en") => {
  const files = fs.readdirSync("blog")
  let blogPosts = files.map((fileName) => {
    const slug = fileName.replace(".md", "")
    const readFile = fs.readFileSync(`blog/${fileName}`, "utf-8")
    const { data: frontmatter, content } = matter(readFile)
    return {
      slug,
      frontmatter,
      content,
    }
  })
  // Sort the blog posts by date
  blogPosts.sort((prev, post) =>
    new Date(prev.frontmatter.publishedAt) <
    new Date(post.frontmatter.publishedAt)
      ? 1
      : -1
  )
  // Filter by locale
  blogPosts = blogPosts.filter(
    ({ frontmatter }) => frontmatter.locale === locale
  )
  return blogPosts
}

export const getBlogPosts = async (locale: string = "en", limit?: number) => {
  let blogPosts = await getAllBlogPosts(locale)
  // Filter by limit
  blogPosts = limit ? blogPosts.slice(0, limit) : blogPosts
  return blogPosts
}

export const getBlogPostsByTag = async (
  tag: string,
  locale: string = "en",
  limit?: number
) => {
  let blogPosts = await getAllBlogPosts(locale)
  // Filter by tag
  blogPosts = blogPosts.filter(({ frontmatter }) =>
    frontmatter.tags.includes(tag)
  )
  // Filter by limit
  blogPosts = limit ? blogPosts.slice(0, limit) : blogPosts
  return blogPosts
}

export const getBlogPostBySlug = async (slug: string) => {
  const fileName = fs.readFileSync(`blog/${slug}.md`, "utf-8")
  const { data: frontmatter, content } = matter(fileName)
  return {
    content,
    frontmatter,
  }
}

export type TagOptions = {
  [key: string]: string[]
}

async function collateTags() {
  const files = fs.readdirSync("blog")
  let allTags = new Set<string>() // to ensure only unique tags are added
  files.map((fileName) => {
    const readFile = fs.readFileSync(`blog/${fileName}`, "utf-8")
    const { data: frontmatter } = matter(readFile)
    frontmatter.tags.forEach((tag: string) => allTags.add(tag))
  })
  return Array.from(allTags)
}

export async function getTags(dataType: string) {
  const tags: TagOptions = {
    blog: await collateTags(),
  }
  return tags[dataType]
}
