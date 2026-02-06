export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { query, variables } = body

  const typeDefs = `
    type Resource {
      id: ID!
      title: String!
      description: String!
      url: String!
      category: String!
      subject: String!
      type: String!
      level: String
    }

    type Category {
      slug: String!
      name: String!
      icon: String!
      subjects: [Resource!]!
      count: Int!
    }

    type Stats {
      totalResources: Int!
      totalSubjects: Int!
      categories: Int!
    }

    type Query {
      resources(category: String, subject: String, limit: Int): [Resource!]!
      resource(id: ID!): Resource
      categories: [Category!]!
      category(slug: String!): Category
      stats: Stats!
      search(query: String!): [Resource!]!
    }
  `

  const resources = [
    { id: '1', title: 'MIT OpenCourseWare', description: 'Free online courses from MIT', url: 'https://ocw.mit.edu', category: 'technology', subject: 'computer-science', type: 'course', level: 'All Levels' },
    { id: '2', title: 'Khan Academy', description: 'Free personalized learning', url: 'https://www.khanacademy.org', category: 'science', subject: 'physics', type: 'platform', level: 'Beginner' },
    { id: '3', title: 'freeCodeCamp', description: 'Learn to code for free', url: 'https://www.freecodecamp.org', category: 'technology', subject: 'web-development', type: 'platform', level: 'Beginner' },
    { id: '4', title: '3Blue1Brown', description: 'Math visualization videos', url: 'https://www.3blue1brown.com', category: 'mathematics', subject: 'calculus', type: 'video', level: 'Intermediate' },
    { id: '5', title: 'Coursera', description: 'Online courses from top universities', url: 'https://www.coursera.org', category: 'technology', subject: 'data-science', type: 'course', level: 'All Levels' }
  ]

  const categories = [
    { slug: 'science', name: 'Science', icon: 'flask', subjects: resources.filter(r => r.category === 'science') },
    { slug: 'technology', name: 'Technology', icon: 'cpu', subjects: resources.filter(r => r.category === 'technology') },
    { slug: 'engineering', name: 'Engineering', icon: 'cog', subjects: resources.filter(r => r.category === 'engineering') },
    { slug: 'arts', name: 'Arts', icon: 'palette', subjects: resources.filter(r => r.category === 'arts') },
    { slug: 'mathematics', name: 'Mathematics', icon: 'sigma', subjects: resources.filter(r => r.category === 'mathematics') }
  ]

  const resolvers = {
    Query: {
      resources: (_: any, args: { category?: string; subject?: string; limit?: number }) => {
        let result = resources
        if (args.category) result = result.filter(r => r.category === args.category)
        if (args.subject) result = result.filter(r => r.subject === args.subject)
        if (args.limit) result = result.slice(0, args.limit)
        return result
      },
      resource: (_: any, args: { id: string }) => resources.find(r => r.id === args.id),
      categories: () => categories.map(c => ({ ...c, count: c.subjects.length })),
      category: (_: any, args: { slug: string }) => categories.find(c => c.slug === args.slug),
      stats: () => ({
        totalResources: resources.length,
        totalSubjects: 47,
        categories: categories.length
      }),
      search: (_: any, args: { query: string }) => {
        const q = args.query.toLowerCase()
        return resources.filter(r =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
        )
      }
    }
  }

  const executeQuery = (query: string, vars: Record<string, any>): { data: any; errors: string[] } => {
    const errors: string[] = []
    
    const selectionSet = query.match(/\{([^}]+)\}/)?.[1] || ''
    const fields = selectionSet.split(/\s+/).filter(Boolean)
    
    let data: any = {}

    if (fields.includes('resources')) {
      data.resources = resolvers.Query.resources({}, vars)
    }
    if (fields.includes('categories')) {
      data.categories = resolvers.Query.categories({}, {})
    }
    if (fields.includes('stats')) {
      data.stats = resolvers.Query.stats({}, {})
    }
    if (fields.includes('search')) {
      data.search = resolvers.Query.search({}, vars)
    }

    return { data, errors }
  }

  if (!query) {
    return { errors: ['Query is required'] }
  }

  try {
    const result = executeQuery(query, variables || {})
    
    setHeader(event, 'Content-Type', 'application/json')
    return {
      data: result.data,
      errors: result.errors.length > 0 ? result.errors : undefined
    }
  } catch (error: any) {
    return { errors: [error.message] }
  }
})
