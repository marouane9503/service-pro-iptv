// SEO Configuration for IPTVPUT
export const siteConfig = {
  name: "IPTVPUT",
  title: "IPTVPUT - Premium IPTV Streaming Service",
  description: "IPTVPUT offers premium IPTV streaming with 25,000+ live TV channels and 26,000+ movies. Get your IPTVPUT subscription today.",
  url: "https://iptvput.com",
  ogImage: "https://iptvput.com/images/LOGO.webp",
  keywords: [
    "iptvput",
    "iptvput subscription", 
    "premium iptv",
    "iptv streaming",
    "live tv channels",
    "iptv service",
    "iptvput online",
    "iptvput website",
    "iptv provider",
    "streaming service"
  ],
  author: "IPTVPUT Team",
  creator: "IPTVPUT",
  publisher: "IPTVPUT",
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
      creator: "@iptvput"
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
