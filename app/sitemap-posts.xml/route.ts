import { NextResponse } from 'next/server'

// Function to fetch WordPress posts for sitemap
async function getWordPressPosts() {
  try {
    const response = await fetch('https://blog.iptvonlineuk.com/wp-json/wp/v2/posts?per_page=100', {
      next: { revalidate: 86400 } // Revalidate daily
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching WordPress posts for sitemap:', error)
    return []
  }
}

export async function GET() {
  const posts = await getWordPressPosts()

  // Generate sitemap even if no posts (empty is valid)
  const postEntries = posts.length > 0 
    ? posts.map((post: any) => `
  <url>
    <loc>https://iptvonlineuk.com/blog/${post.slug}</loc>
    <lastmod>${new Date(post.modified).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')
    : `
  <!-- No blog posts available from WordPress API -->
  <url>
    <loc>https://iptvonlineuk.com/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${postEntries}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    },
  })
}
