// SEO Configuration for IPTV ONLINE UK
export const siteConfig = {
  name: "IPTV ONLINE UK",
  title: "IPTV ONLINE UK - Premium IPTV Streaming Service",
  description: "IPTV ONLINE UK offers premium IPTV streaming with 25,000+ live TV channels and 26,000+ movies. Get your IPTV ONLINE UK subscription today.",
  url: "https://iptvonlineuk.com",
  ogImage: "https://iptvonlineuk.com/images/LOGO.webp",
  keywords: [
    "iptv online uk",
    "iptv online uk subscription", 
    "premium iptv",
    "iptv streaming",
    "live tv channels",
    "iptv service",
    "iptv online uk website",
    "uk iptv provider",
    "iptv uk",
    "streaming service"
  ],
  author: "IPTV ONLINE UK Team",
  creator: "IPTV ONLINE UK",
  publisher: "IPTV ONLINE UK",
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
      creator: "@iptvonlineuk"
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
