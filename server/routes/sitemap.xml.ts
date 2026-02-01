interface SitemapUrl {
  loc: string
  lastmod?: string
  changefreq?: string
  priority?: string
}

export default defineEventHandler(async (event) => {
  const baseUrl = 'https://awesome-horizon.vercel.app'
  
  // Define all routes with their metadata
  const routes: SitemapUrl[] = [
    { loc: '/', changefreq: 'daily', priority: '1.0' },
    { loc: '/science', changefreq: 'weekly', priority: '0.9' },
    { loc: '/physics', changefreq: 'weekly', priority: '0.9' },
    { loc: '/chemistry', changefreq: 'weekly', priority: '0.9' },
    { loc: '/biology', changefreq: 'weekly', priority: '0.9' },
    { loc: '/mathematics', changefreq: 'weekly', priority: '0.9' },
    { loc: '/technology', changefreq: 'weekly', priority: '0.9' },
    { loc: '/engineering', changefreq: 'weekly', priority: '0.9' },
    { loc: '/arts', changefreq: 'weekly', priority: '0.9' },
    { loc: '/earth-science', changefreq: 'weekly', priority: '0.8' },
    { loc: '/astronomy', changefreq: 'weekly', priority: '0.8' },
    { loc: '/psychology', changefreq: 'weekly', priority: '0.8' },
    { loc: '/environmental', changefreq: 'weekly', priority: '0.8' },
    { loc: '/about', changefreq: 'monthly', priority: '0.6' }
  ]
  
  // Current date for lastmod
  const today = new Date().toISOString().split('T')[0]
  
  // Generate XML
  const urls = routes.map(route => `
  <url>
    <loc>${baseUrl}${route.loc}</loc>
    <lastmod>${today}</lastmod>
    ${route.changefreq ? `<changefreq>${route.changefreq}</changefreq>` : ''}
    ${route.priority ? `<priority>${route.priority}</priority>` : ''}
  </url>`).join('')
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
  
  // Set response headers
  event.node.res.setHeader('Content-Type', 'application/xml')
  event.node.res.setHeader('Cache-Control', 'public, max-age=3600')
  
  return sitemap
})
