import { NextResponse } from 'next/server'

export async function GET() {
  const staticPages = [
    'https://serviceproiptv.com',
    'https://serviceproiptv.com/about',
    'https://serviceproiptv.com/blog',
    'https://serviceproiptv.com/pricing',
    'https://serviceproiptv.com/contact',
    'https://serviceproiptv.com/contacts',
    'https://serviceproiptv.com/en',
    'https://serviceproiptv.com/product/1-month',
    'https://serviceproiptv.com/product-category/iptv-subscription/page/3',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url === 'https://serviceproiptv.com' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === 'https://serviceproiptv.com' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    },
  })
}
