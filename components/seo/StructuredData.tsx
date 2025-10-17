// JSON-LD Structured Data for better SEO
export function IPTVPUTStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPTVPUT",
    "alternateName": ["IPTVPUT Service", "IPTVPUT"],
    "url": "https://iptvput.com",
    "logo": "https://iptvput.com/images/LOGO.webp",
    "description": "IPTVPUT - Premium IPTV streaming service with 25,000+ live TV channels and 26,000+ movies. Professional IPTV subscription provider.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-7956-154482",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish", "French", "Arabic"],
      "serviceArea": "Worldwide"
    },
    "sameAs": [
      "https://wa.me/447956154482"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Digital Services",
      "addressCountry": "Global"
    },
    "foundingDate": "2019",
    "numberOfEmployees": "10-50",
    "industry": "IPTV Streaming Services"
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IPTVPUT Subscription Service",
    "description": "Premium IPTVPUT streaming service offering 25,000+ live TV channels, 26,000+ movies and TV shows with HD/4K quality streaming.",
    "provider": {
      "@type": "Organization",
      "name": "IPTVPUT"
    },
    "serviceType": "IPTV Streaming Service",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IPTVPUT Subscription Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTVPUT 1 Month Subscription"
          },
          "price": "10.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "IPTVPUT 12 Month Subscription"
          },
          "price": "49.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "IPTVPUT Premium Package"
          },
          "price": "289",
          "priceCurrency": "USD"
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "10.99",
      "highPrice": "797",
      "priceCurrency": "USD",
      "offerCount": "6"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IPTVPUT",
    "alternateName": "IPTVPUT Official Website",
    "url": "https://iptvput.com",
    "description": "Official IPTVPUT website offering premium IPTV subscriptions with 25,000+ channels and 26,000+ movies.",
    "publisher": {
      "@type": "Organization",
      "name": "IPTVPUT"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://iptvput.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "IPTVPUT Service"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
    </>
  )
}

export function GammaIPTVBreadcrumb({ items }: { items: Array<{ name: string; url?: string }> }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `https://iptvput.com${item.url}` : undefined
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData)
      }}
    />
  )
}
