import { NextResponse } from 'next/server'

export async function GET() {
  const staticPages = [
    'https://gammaiptv.online',
    'https://gammaiptv.online/about',
    'https://gammaiptv.online/blog',
    'https://gammaiptv.online/pricing',
    'https://gammaiptv.online/contact',
    'https://gammaiptv.online/contacts',
    'https://gammaiptv.online/en',
    'https://gammaiptv.online/product/1-month',
    'https://gammaiptv.online/product-category/iptv-subscription/page/3',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url === 'https://gammaiptv.online' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === 'https://gammaiptv.online' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    },
  })
}
