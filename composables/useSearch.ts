export type SearchProvider = 'algolia' | 'meilisearch' | 'local' | 'none'

export interface SearchConfig {
  provider: SearchProvider
  apiKey?: string
  indexName?: string
  url?: string
}

export interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  category: string
  subject: string
  type: string
  level?: string
  score?: number
  highlights?: {
    title?: string
    description?: string
  }
}

export interface SearchOptions {
  query: string
  filters?: {
    category?: string
    subject?: string
    type?: string
    level?: string
  }
  page?: number
  limit?: number
}

export const searchConfig: SearchConfig = {
  provider: 'local'
}

export const initSearch = (config: SearchConfig) => {
  Object.assign(searchConfig, config)
}

const localSearch = async (options: SearchOptions): Promise<{ results: SearchResult[]; total: number; page: number; totalPages: number }> => {
  const resources = [
    { id: '1', title: 'MIT OpenCourseWare', description: 'Free online courses from MIT', url: 'https://ocw.mit.edu', category: 'technology', subject: 'computer-science', type: 'course', level: 'All Levels' },
    { id: '2', title: 'Khan Academy', description: 'Free personalized learning', url: 'https://www.khanacademy.org', category: 'science', subject: 'physics', type: 'platform', level: 'Beginner' },
    { id: '3', title: 'freeCodeCamp', description: 'Learn to code for free', url: 'https://www.freecodecamp.org', category: 'technology', subject: 'web-development', type: 'platform', level: 'Beginner' },
    { id: '4', title: '3Blue1Brown', description: 'Math visualization videos', url: 'https://www.3blue1brown.com', category: 'mathematics', subject: 'calculus', type: 'video', level: 'Intermediate' },
    { id: '5', title: 'Coursera', description: 'Online courses from top universities', url: 'https://www.coursera.org', category: 'technology', subject: 'data-science', type: 'course', level: 'All Levels' },
    { id: '6', title: 'edX', description: 'Free online courses from Harvard, MIT', url: 'https://www.edx.org', category: 'technology', subject: 'computer-science', type: 'course', level: 'All Levels' },
    { id: '7', title: 'PhET Simulations', description: 'Interactive science simulations', url: 'https://phet.colorado.edu', category: 'science', subject: 'physics', type: 'simulation', level: 'All Levels' },
    { id: '8', title: 'Feynman Lectures', description: 'The legendary physics lectures', url: 'https://www.feynmanlectures.caltech.edu', category: 'science', subject: 'physics', type: 'textbook', level: 'Advanced' },
    { id: '9', title: 'LibreTexts', description: 'Free textbook library', url: 'https://libretexts.org', category: 'science', subject: 'chemistry', type: 'textbook', level: 'All Levels' },
    { id: '10', title: 'The Odin Project', description: 'Full-stack web development', url: 'https://www.theodinproject.com', category: 'technology', subject: 'web-development', type: 'course', level: 'Beginner' }
  ]

  let results = resources.filter(r => {
    const query = options.query.toLowerCase()
    return r.title.toLowerCase().includes(query) ||
           r.description.toLowerCase().includes(query) ||
           r.subject.toLowerCase().includes(query) ||
           r.category.toLowerCase().includes(query)
  })

  if (options.filters?.category) {
    results = results.filter(r => r.category === options.filters!.category)
  }
  if (options.filters?.subject) {
    results = results.filter(r => r.subject === options.filters!.subject)
  }
  if (options.filters?.type) {
    results = results.filter(r => r.type === options.filters!.type)
  }

  const page = options.page || 1
  const limit = options.limit || 10
  const start = (page - 1) * limit
  const paginated = results.slice(start, start + limit)

  return {
    results: paginated.map(r => ({ ...r, score: 1 })),
    total: results.length,
    page,
    totalPages: Math.ceil(results.length / limit)
  }
}

export const useSearch = () => {
  const config = useRuntimeConfig()

  const searchSettings = computed(() => ({
    provider: (config.public.searchProvider as SearchProvider) || 'local',
    apiKey: config.public.searchApiKey as string,
    indexName: config.public.searchIndexName as string,
    url: config.public.searchUrl as string
  }))

  const search = async (options: SearchOptions): Promise<{ results: SearchResult[]; total: number; page: number; totalPages: number }> => {
    const settings = searchSettings.value

    if (settings.provider === 'local' || settings.provider === 'none') {
      return localSearch(options)
    }

    if (settings.provider === 'meilisearch' && settings.url) {
      try {
        const response = await fetch(`${settings.url}/indexes/${settings.indexName}/search`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${settings.apiKey}`
          },
          body: JSON.stringify({
            q: options.query,
            filter: Object.entries(options.filters || {}).map(([k, v]) => `${k}=${v}`).join(' AND '),
            limit: options.limit || 10,
            offset: ((options.page || 1) - 1) * (options.limit || 10)
          })
        })
        const data = await response.json()
        return {
          results: data.hits.map((hit: any) => ({
            id: hit.id,
            title: hit.title,
            description: hit.description,
            url: hit.url,
            category: hit.category,
            subject: hit.subject,
            type: hit.type,
            level: hit.level,
            score: hit._rankingScore,
            highlights: {
              title: hit._formatted?.title,
              description: hit._formatted?.description
            }
          })),
          total: data.estimatedTotalHits,
          page: options.page || 1,
          totalPages: Math.ceil(data.estimatedTotalHits / (options.limit || 10))
        }
      } catch (error) {
        console.error('Meilisearch error:', error)
        return localSearch(options)
      }
    }

    return localSearch(options)
  }

  const debouncedSearch = useDebounceFn(search, 300)

  return {
    settings: searchSettings,
    search,
    debouncedSearch
  }
}
