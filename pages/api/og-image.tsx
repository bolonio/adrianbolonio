import { OGImageTemplate } from "@components/OGImageTemplate"
import { getBlogPostBySlug } from "@lib/blog"
import { NextApiRequest, NextApiResponse } from "next"
import * as playwright from "playwright-aws-lambda"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { ServerStyleSheet } from "styled-components"

const serverStyleSheet = new ServerStyleSheet()
let baseCSS = `
  * {
    box-sizing: border-box;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    transition: 0.3s ease;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Open Sans, sans-serif;
  }
`

const getHtmlData = ({ body, baseCSS }: { body: string; baseCSS: string }) => {
  const html = `<!DOCTYPE html>
    <head>
    <meta charset="utf-8"><style>${baseCSS}</style>
    </head>
    <body style="display:inline-block">
    ${body}`
  return html
}

const og = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { slug },
  } = req

  const { frontmatter } = await getBlogPostBySlug(slug as string)

  const el = createElement(OGImageTemplate, {
    title: frontmatter.title as string,
    publishedAt: frontmatter.publishedAt as string,
    slug: slug as string,
    locale: frontmatter.locale as string,
  })
  const elementWithCollectedStyles = serverStyleSheet.collectStyles(el)
  const body = renderToStaticMarkup(elementWithCollectedStyles)
  baseCSS = `${baseCSS} ${serverStyleSheet.instance.toString()}`

  const html = getHtmlData({
    body,
    baseCSS,
  })

  const width = 1200
  const height = 630

  const browser = await playwright.launchChromium({ headless: true })
  const page = await browser.newPage({
    viewport: {
      width,
      height,
    },
    deviceScaleFactor: 1,
  })
  await page.setContent(html)

  const data = await page.screenshot({
    type: "png",
    clip: {
      x: 0,
      y: 0,
      width,
      height,
    },
    omitBackground: true,
    path: `./public/images/blog/${slug}/intro.png`,
  })

  await browser.close()

  // Set the s-maxage property which caches the images then on the Vercel edge
  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate")
  res.setHeader("Content-Type", "image/jpeg")

  // write the image to the response with the specified Content-Type
  res.end(data)
}

export default og
