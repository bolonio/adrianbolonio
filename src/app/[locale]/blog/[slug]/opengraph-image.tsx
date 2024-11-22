import { OGImageTemplate } from "@/components/OGImageTemplate"
import { getPostBySlug } from "@/lib/blog"
import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = getPostBySlug(slug)

  async function loadGoogleFont(font: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}:wght@800`
    const css = await (await fetch(url)).text()
    const resource = css.match(
      /src: url\((.+)\) format\('(opentype|truetype)'\)/
    )

    if (resource) {
      const response = await fetch(resource[1])
      if (response.status == 200) {
        return await response.arrayBuffer()
      }
    }

    throw new Error("failed to load font data")
  }

  return new ImageResponse(
    (
      <OGImageTemplate
        title={post.title}
        date={post.date}
        slug={slug}
        locale={post.locale}
      />
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter Tight",
          data: await loadGoogleFont("Inter+Tight"),
          style: "normal",
          weight: 800,
        },
      ],
    }
  )
}
