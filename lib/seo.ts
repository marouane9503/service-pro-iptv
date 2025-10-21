// SEO Configuration for Service Pro IPTV
export const siteConfig = {
  name: "Service Pro IPTV",
  title: "Service Pro IPTV - Premium IPTV Streaming Service",
  description: "Service Pro IPTV offers premium IPTV streaming with 25,000+ live TV channels and 26,000+ movies. Get your Service Pro IPTV subscription today.",
  url: "https://serviceproiptv.com",
  ogImage: "https://serviceproiptv.com/images/LOGO.webp",
  keywords: [
    "service pro iptv",
    "service pro iptv subscription", 
    "premium iptv",
    "iptv streaming",
    "live tv channels",
    "iptv service",
    "service pro iptv website",
    "uk iptv provider",
    "iptv uk",
    "streaming service"
  ],
  author: "Service Pro IPTV Team",
  creator: "Service Pro IPTV",
  publisher: "Service Pro IPTV",
  category: "technology",
  locale: "en_US",
  type: "website"
}

export const generateMetadata = (
  title?: string,
  description?: string,
  path?: string,
  ogImage?: string
) => {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
    description: description || siteConfig.description,
    keywords: siteConfig.keywords.join(", "),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    category: siteConfig.category,
    openGraph: {
      type: siteConfig.type,
      locale: siteConfig.locale,
      url: path ? `${siteConfig.url}${path}` : siteConfig.url,
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 300,
          height: 300,
          alt: `${siteConfig.name} Logo`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
      description: description || siteConfig.description,
      images: [ogImage || siteConfig.ogImage],
      creator: "@serviceproiptv"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    alternates: {
      canonical: path ? `${siteConfig.url}${path}` : siteConfig.url
    }
  }
}
