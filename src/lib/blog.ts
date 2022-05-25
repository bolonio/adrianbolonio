import fs from "fs"
import matter from "gray-matter"

export const getBlogPosts = async (limit?: number) => {
  let files = fs.readdirSync("blog")
  if (limit) {
    files = files.slice(0, limit)
  }
  return files.map((fileName) => {
    const slug = fileName.replace(".md", "")
    const readFile = fs.readFileSync(`blog/${fileName}`, "utf-8")
    const { data: frontmatter } = matter(readFile)
    return {
      slug,
      frontmatter,
    }
  })
}

export const getBlogPostsByTag = async (tag: string, limit?: number) => {
  let files = fs.readdirSync("blog")
  if (limit) {
    files = files.slice(0, limit)
  }
  const blogPostsWithTag: {
    slug: string
    frontmatter: {
      [key: string]: any
    }
  }[] = []
  files.forEach((fileName) => {
    const slug = fileName.replace(".md", "")
    const readFile = fs.readFileSync(`blog/${fileName}`, "utf-8")
    const { data: frontmatter } = matter(readFile)
    if (frontmatter.tags.includes(tag)) {
      blogPostsWithTag.push({
        slug,
        frontmatter,
      })
    }
  })
  return blogPostsWithTag
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
