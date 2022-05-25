import fs from "fs"
import matter from "gray-matter"

export const getTalkBySlug = async (slug: string) => {
  const fileName = fs.readFileSync(`talk/${slug}.md`, "utf-8")
  const { data: frontmatter, content } = matter(fileName)
  return {
    content,
    frontmatter,
  }
}
