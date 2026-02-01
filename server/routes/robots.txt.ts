export default defineEventHandler((event) => {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://awesome-horizon.vercel.app/sitemap.xml

# Disallow patterns
Disallow: /_nuxt/
Disallow: /*?*

# Crawl rate
Crawl-delay: 1
`
  
  event.node.res.setHeader('Content-Type', 'text/plain')
  event.node.res.setHeader('Cache-Control', 'public, max-age=86400')
  
  return robotsTxt
})
