// JSON-LD Structured Data for better SEO
export function ServiceProIPTVStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Service Pro IPTV",
    "alternateName": ["Service Pro IPTV Service", "IPTV UK"],
    "url": "https://serviceproiptv.com",
    "logo": "https://serviceproiptv.com/images/LOGO.webp",
    "description": "Service Pro IPTV - Premium IPTV streaming service with 25,000+ live TV channels and 26,000+ movies. Professional IPTV subscription provider.",
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
    "name": "Service Pro IPTV Subscription Service",
    "description": "Premium Service Pro IPTV streaming service offering 25,000+ live TV channels, 26,000+ movies and TV shows with HD/4K quality streaming.",
    "provider": {
      "@type": "Organization",
      "name": "Service Pro IPTV"
    },
    "serviceType": "IPTV Streaming Service",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Service Pro IPTV Subscription Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Service Pro IPTV 1 Month Subscription"
          },
          "price": "10.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Service Pro IPTV 12 Month Subscription"
          },
          "price": "49.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Service Pro IPTV Premium Package"
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
    "name": "Service Pro IPTV",
    "alternateName": "Service Pro IPTV Official Website",
    "url": "https://serviceproiptv.com",
    "description": "Official Service Pro IPTV website offering premium IPTV subscriptions with 25,000+ channels and 26,000+ movies.",
    "publisher": {
      "@type": "Organization",
      "name": "Service Pro IPTV"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://serviceproiptv.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Service Pro IPTV Service"
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

export function ServiceProIPTVBreadcrumb({ items }: { items: Array<{ name: string; url?: string }> }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `https://serviceproiptv.com${item.url}` : undefined
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
