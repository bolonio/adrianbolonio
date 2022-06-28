import Head from "next/head"
import { useRouter } from "next/router"
import { defaultMetadataEN, defaultMetadataES } from "../data/defaultMetadata"

export type SeoMetaData = {
  title?: string
  description?: string
  author?: string
  slug?: string
  image?: {
    path: string
    alt: string
  }
  date?: string
}

type SEOProps = {
  metadata?: SeoMetaData
}

export const SEO = ({ metadata }: SEOProps) => {
  const { locale } = useRouter()
  const defaultMetadata =
    locale === "en" ? defaultMetadataEN : defaultMetadataES
  const host =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.adrianbolonio.com"

  const seoMetaData: SeoMetaData = {
    title: metadata?.title
      ? `${metadata.title} | ${defaultMetadata.title}`
      : defaultMetadata.title,
    author: metadata?.author || defaultMetadata.author,
    description: metadata?.description || defaultMetadata.description,
    slug: metadata?.slug || "",
    image: metadata?.image || defaultMetadata.image,
    date: metadata?.date || new Date().toISOString(),
  }

  return (
    <Head>
      <title>{seoMetaData.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="googlebot" content="follow, index" />
      <meta name="description" content={seoMetaData.description} />
      <meta name="author" content={seoMetaData.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta
        name="apple-mobile-web-app-title"
        content={`${host}/${seoMetaData.slug}`}
      />
      <meta name="application-name" content={seoMetaData.title} />
      <meta name="theme-color" content="#24292f" />

      <link rel="canonical" href={`${host}/${seoMetaData.slug}`} />
      <link rel="og:url" href={`${host}/${seoMetaData.slug}`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seoMetaData.title} />
      <meta property="og:description" content={seoMetaData.description} />
      <meta property="og:title" content={seoMetaData.title} />
      <meta
        property="og:image"
        content={`${host}/${seoMetaData.image?.path}`}
      />
      <meta property="og:image:alt" content={seoMetaData.image?.alt} />
      <meta property="DC.title" content={seoMetaData.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bolonio" />
      <meta name="twitter:creator" content="@bolonio" />
      <meta name="twitter:title" content={seoMetaData.title} />
      <meta name="twitter:description" content={seoMetaData.description} />
      <meta name="twitter:image" content={seoMetaData.image?.path} />

      <meta property="article:published_time" content={seoMetaData.date} />
    </Head>
  )
}
