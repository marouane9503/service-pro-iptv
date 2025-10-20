import { NextResponse } from 'next/server'

export async function GET() {
  const staticPages = [
    'https://iptvonlineuk.com',
    'https://iptvonlineuk.com/about',
    'https://iptvonlineuk.com/blog',
    'https://iptvonlineuk.com/pricing',
    'https://iptvonlineuk.com/contact',
    'https://iptvonlineuk.com/contacts',
    'https://iptvonlineuk.com/en',
    'https://iptvonlineuk.com/product/1-month',
    'https://iptvonlineuk.com/product-category/iptv-subscription/page/3',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url === 'https://iptvonlineuk.com' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === 'https://iptvonlineuk.com' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    },
  })
}
