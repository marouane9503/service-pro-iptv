import { MetadataRoute } from 'next'

// Function to fetch WordPress posts for sitemap
async function getWordPressPosts() {
  try {
    const response = await fetch('https://blog.iptvonlineuk.com/wp-json/wp/v2/posts?per_page=100', {
      next: { revalidate: 86400 } // Revalidate daily
    })
    
    if (!response.ok) {
      console.warn('WordPress API unavailable for sitemap')
      return []
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching WordPress posts for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getWordPressPosts()
  const currentDate = new Date()
  
  // Static pages with optimized priorities
  const staticPages = [
    {
      url: 'https://iptvonlineuk.com',
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0, // Homepage - highest priority
    },
    {
      url: 'https://iptvonlineuk.com/pricing',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95, // Pricing is very important for conversions
    },
    {
      url: 'https://iptvonlineuk.com/about',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://iptvonlineuk.com/contact',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85, // Contact page is important
    },
    {
      url: 'https://iptvonlineuk.com/blog',
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9, // Blog listing page
    },
  ]

  // Dynamic blog post pages
  const blogPages = posts.map((post: any) => ({
    url: `https://iptvonlineuk.com/blog/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: 'weekly' as const,
    priority: 0.7, // Individual blog posts
  }))

  return [...staticPages, ...blogPages]
}
