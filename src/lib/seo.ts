import { getTranslations } from "next-intl/server"

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
  isBlogPost?: boolean
}

export type MetaDataProp = {
  params: Promise<{ locale: string; slug?: string; tag?: string }>
}

export async function getMetadata(metadata: SeoMetaData, locale: string) {
  // TODO: Translate metadata instead of using two different metadata objects
  const t = await getTranslations({ locale, namespace: "SEO" })
  /* const defaultMetadata =
    locale === "en" ? defaultMetadataEN : defaultMetadataES */
  const host =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.adrianbolonio.com"

  const seoMetaData = {
    title: metadata?.title ? `${metadata.title} | ${t("title")}` : t("title"),
    author: metadata?.author || t("author"),
    description: metadata?.description || t("description"),
    slug: metadata?.slug || "",
    image: metadata?.image || { path: t("image.path"), alt: t("image.alt") },
    date: metadata?.date || new Date().toISOString(),
  }

  return {
    title: seoMetaData.title,
    author: seoMetaData.author,
    description: seoMetaData.description,
    slug: seoMetaData.slug,
    image: seoMetaData.image,
    date: seoMetaData.date,
    metadataBase: new URL(host),
    applicationName: seoMetaData.title,
    alternates: {
      canonical: `${host}/${seoMetaData.slug}`,
      languages: {
        en: `/${seoMetaData.slug}`,
        es: `/es/${seoMetaData.slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      },
    },

    openGraph: {
      title: seoMetaData.title,
      description: seoMetaData.description,
      url: seoMetaData.slug,
      siteName: seoMetaData.title,
      images: [
        {
          url: `${host}/${seoMetaData.image?.path}`,
          alt: seoMetaData.image?.alt,
        },
      ],
      locale: "en_US",
      type: metadata.isBlogPost ? "article" : "website",
      publishedTime: metadata.isBlogPost ? seoMetaData.date : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seoMetaData.title,
      description: seoMetaData.description,
      site: "@bolonio",
      creator: "@bolonio",
      creatorId: "22399077",
      images: [
        {
          url: `${host}/${seoMetaData.image?.path}`,
          alt: seoMetaData.image?.alt,
        },
      ],
    },
  }
}
