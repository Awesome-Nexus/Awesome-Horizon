interface SitemapUrl {
  loc: string
  changefreq?: string
  priority?: number
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.siteUrl || 'https://awesome-horizon.vercel.app'

  const routes: SitemapUrl[] = [
    { loc: '/', changefreq: 'daily', priority: 1.0 },
    { loc: '/about', changefreq: 'monthly', priority: 0.8 },

    { loc: '/science', changefreq: 'weekly', priority: 0.9 },
    { loc: '/science/physics', changefreq: 'weekly', priority: 0.8 },
    { loc: '/science/chemistry', changefreq: 'weekly', priority: 0.8 },
    { loc: '/science/biology', changefreq: 'weekly', priority: 0.8 },
    { loc: '/science/earth-science', changefreq: 'weekly', priority: 0.7 },
    { loc: '/science/astronomy', changefreq: 'weekly', priority: 0.7 },
    { loc: '/science/psychology', changefreq: 'weekly', priority: 0.7 },
    { loc: '/science/environmental', changefreq: 'weekly', priority: 0.7 },

    { loc: '/technology', changefreq: 'weekly', priority: 0.9 },
    { loc: '/technology/computer-science', changefreq: 'weekly', priority: 0.8 },
    { loc: '/technology/artificial-intelligence', changefreq: 'weekly', priority: 0.8 },
    { loc: '/technology/cybersecurity', changefreq: 'weekly', priority: 0.7 },
    { loc: '/technology/data-science', changefreq: 'weekly', priority: 0.7 },
    { loc: '/technology/web-development', changefreq: 'weekly', priority: 0.7 },
    { loc: '/technology/mobile-development', changefreq: 'weekly', priority: 0.7 },
    { loc: '/technology/cloud-computing', changefreq: 'weekly', priority: 0.7 },
    { loc: '/technology/devops', changefreq: 'weekly', priority: 0.7 },
    { loc: '/technology/game-development', changefreq: 'weekly', priority: 0.7 },
    { loc: '/technology/blockchain', changefreq: 'weekly', priority: 0.6 },

    { loc: '/engineering', changefreq: 'weekly', priority: 0.9 },
    { loc: '/engineering/mechanical', changefreq: 'weekly', priority: 0.8 },
    { loc: '/engineering/electrical', changefreq: 'weekly', priority: 0.8 },
    { loc: '/engineering/civil', changefreq: 'weekly', priority: 0.7 },
    { loc: '/engineering/chemical', changefreq: 'weekly', priority: 0.7 },
    { loc: '/engineering/aerospace', changefreq: 'weekly', priority: 0.7 },
    { loc: '/engineering/software', changefreq: 'weekly', priority: 0.7 },
    { loc: '/engineering/biomedical', changefreq: 'weekly', priority: 0.7 },
    { loc: '/engineering/industrial', changefreq: 'weekly', priority: 0.6 },
    { loc: '/engineering/environmental', changefreq: 'weekly', priority: 0.6 },
    { loc: '/engineering/materials', changefreq: 'weekly', priority: 0.6 },

    { loc: '/arts', changefreq: 'weekly', priority: 0.9 },
    { loc: '/arts/visual-arts', changefreq: 'weekly', priority: 0.8 },
    { loc: '/arts/digital-art', changefreq: 'weekly', priority: 0.8 },
    { loc: '/arts/art-history', changefreq: 'weekly', priority: 0.7 },
    { loc: '/arts/music', changefreq: 'weekly', priority: 0.7 },
    { loc: '/arts/performing-arts', changefreq: 'weekly', priority: 0.7 },
    { loc: '/arts/film-media', changefreq: 'weekly', priority: 0.7 },
    { loc: '/arts/photography', changefreq: 'weekly', priority: 0.7 },
    { loc: '/arts/graphic-design', changefreq: 'weekly', priority: 0.7 },
    { loc: '/arts/architecture', changefreq: 'weekly', priority: 0.6 },
    { loc: '/arts/fashion-design', changefreq: 'weekly', priority: 0.6 },

    { loc: '/mathematics', changefreq: 'weekly', priority: 0.9 },
    { loc: '/mathematics/algebra', changefreq: 'weekly', priority: 0.8 },
    { loc: '/mathematics/calculus', changefreq: 'weekly', priority: 0.8 },
    { loc: '/mathematics/linear-algebra', changefreq: 'weekly', priority: 0.8 },
    { loc: '/mathematics/statistics-probability', changefreq: 'weekly', priority: 0.7 },
    { loc: '/mathematics/discrete-mathematics', changefreq: 'weekly', priority: 0.7 },
    { loc: '/mathematics/number-theory', changefreq: 'weekly', priority: 0.7 },
    { loc: '/mathematics/geometry-topology', changefreq: 'weekly', priority: 0.7 },
    { loc: '/mathematics/differential-equations', changefreq: 'weekly', priority: 0.7 },
    { loc: '/mathematics/mathematical-logic', changefreq: 'weekly', priority: 0.6 },
    { loc: '/mathematics/applied-mathematics', changefreq: 'weekly', priority: 0.6 }
  ]

  const today = new Date().toISOString().split('T')[0]

  const urls = routes.map(route => `
  <url>
    <loc>${baseUrl}${route.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${(route.priority ?? 0.5).toFixed(1)}</priority>
  </url>`).join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`

  event.node.res.setHeader('Content-Type', 'application/xml')
  event.node.res.setHeader('Cache-Control', 'public, max-age=3600')

  return sitemap
})
