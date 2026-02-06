/**
 * SEO composable for managing page metadata and structured data
 */

export interface SEOMeta {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedAt?: string
  modifiedAt?: string
  author?: string
  tags?: string[]
  noindex?: boolean
}

export interface JSONLDBreadcrumb {
  name: string
  url: string
}

export interface JSONLDResource {
  '@context': 'https://schema.org'
  '@type': 'LearningResource'
  name: string
  description: string
  url: string
  provider?: {
    '@type': 'Organization'
    name: string
  }
  educationalLevel?: string
  subject?: string
}

/**
 * Set page SEO metadata
 */
export const useSEO = (meta: SEOMeta) => {
  const route = useRoute()
  const config = useRuntimeConfig()
  
  const siteUrl = config.public.siteUrl || 'https://awesome-horizon.vercel.app'
  const pageUrl = `${siteUrl}${route.path}`
  
  // Default image
  const ogImage = meta.image || `${siteUrl}/logo.png`
  
  useHead({
    title: meta.title,
    titleTemplate: (title) => title ? `${title} | Awesome Horizon` : 'Awesome Horizon',
    meta: [
      { name: 'description', content: meta.description },
      { name: 'robots', content: meta.noindex ? 'noindex, nofollow' : 'index, follow' },
      
      // Open Graph
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:type', content: meta.type || 'website' },
      { property: 'og:url', content: meta.url || pageUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'Awesome Horizon' },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:site', content: '@AwesomeHorizon' },
      
      // Article specific
      ...(meta.type === 'article' ? [
        { property: 'article:published_time', content: meta.publishedAt },
        { property: 'article:modified_time', content: meta.modifiedAt },
        { property: 'article:author', content: meta.author },
        ...(meta.tags?.map(tag => ({ property: 'article:tag', content: tag })) || [])
      ] : [])
    ],
    link: [
      { rel: 'canonical', href: meta.url || pageUrl }
    ]
  })
}

/**
 * Generate JSON-LD structured data for organization
 */
export const useOrganizationSchema = () => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://awesome-horizon.vercel.app'
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Awesome Horizon',
    description: 'Curated educational resources for STEAM education',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      'https://github.com/Awesome-Nexus/Awesome-Horizon'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'General',
      availableLanguage: ['English']
    }
  }
  
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema)
      }
    ]
  })
  
  return schema
}

/**
 * Generate JSON-LD breadcrumbs
 */
export const useBreadcrumbSchema = (items: JSONLDBreadcrumb[]) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://awesome-horizon.vercel.app'
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`
    }))
  }
  
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema)
      }
    ]
  })
  
  return schema
}

/**
 * Generate JSON-LD for learning resources
 */
export const useLearningResourceSchema = (resource: Omit<JSONLDResource, '@context' | '@type'>) => {
  const schema: JSONLDResource = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    ...resource
  }
  
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema)
      }
    ]
  })
  
  return schema
}

/**
 * Generate JSON-LD for educational webpage
 */
export const useEducationalPageSchema = (data: {
  title: string
  description: string
  subject: string
  educationalLevel?: string
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: data.title,
    description: data.description,
    about: {
      '@type': 'Thing',
      name: data.subject
    },
    ...(data.educationalLevel && {
      educationalLevel: data.educationalLevel
    })
  }
  
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema)
      }
    ]
  })
  
  return schema
}

/**
 * Pre-configured SEO for subject pages
 */
export const useSubjectSEO = (subject: string, resourceCount: string) => {
  const title = `${subject} - Complete Learning Path | Awesome Horizon`
  const description = `Master ${subject.toLowerCase()} with ${resourceCount} curated resources. Free textbooks, courses, simulations, and research tools from top universities worldwide.`
  
  useSEO({
    title,
    description,
    type: 'article'
  })
  
  useEducationalPageSchema({
    title,
    description,
    subject
  })
}
