import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { category, level, search, limit = '50' } = query

  // Mock resource data - in production, this would come from a database
  const allResources = [
    // Physics
    {
      id: 'physics-1',
      title: 'MIT OpenCourseWare Physics',
      description: 'Complete undergraduate physics curriculum from MIT',
      url: 'https://ocw.mit.edu/courses/physics/',
      category: 'physics',
      level: 'intermediate',
      type: 'course',
      provider: 'MIT',
      tags: ['physics', 'course', 'video']
    },
    {
      id: 'physics-2',
      title: 'Feynman Lectures',
      description: 'The legendary physics lectures by Richard Feynman',
      url: 'https://www.feynmanlectures.caltech.edu/',
      category: 'physics',
      level: 'intermediate',
      type: 'textbook',
      provider: 'Caltech',
      tags: ['physics', 'textbook', 'classic']
    },
    {
      id: 'physics-3',
      title: 'Khan Academy Physics',
      description: 'Comprehensive physics from basics to AP level',
      url: 'https://www.khanacademy.org/science/physics',
      category: 'physics',
      level: 'beginner',
      type: 'course',
      provider: 'Khan Academy',
      tags: ['physics', 'course', 'interactive']
    },
    // Chemistry
    {
      id: 'chemistry-1',
      title: 'LibreTexts Chemistry',
      description: 'Comprehensive free chemistry library',
      url: 'https://chem.libretexts.org/',
      category: 'chemistry',
      level: 'all',
      type: 'textbook',
      provider: 'UC Davis',
      tags: ['chemistry', 'textbook', 'comprehensive']
    },
    {
      id: 'chemistry-2',
      title: 'Organic Chemistry Portal',
      description: 'Organic chemistry reactions and mechanisms',
      url: 'https://www.organic-chemistry.org/',
      category: 'chemistry',
      level: 'advanced',
      type: 'reference',
      provider: 'Various',
      tags: ['chemistry', 'organic', 'reference']
    },
    // Mathematics
    {
      id: 'math-1',
      title: 'MIT OpenCourseWare Mathematics',
      description: 'Complete mathematics curriculum',
      url: 'https://ocw.mit.edu/courses/mathematics/',
      category: 'mathematics',
      level: 'intermediate',
      type: 'course',
      provider: 'MIT',
      tags: ['mathematics', 'course', 'comprehensive']
    },
    {
      id: 'math-2',
      title: 'Paul\'s Online Math Notes',
      description: 'Comprehensive math notes and tutorials',
      url: 'https://tutorial.math.lamar.edu/',
      category: 'mathematics',
      level: 'beginner',
      type: 'tutorial',
      provider: 'Lamar University',
      tags: ['mathematics', 'tutorial', 'calculus']
    },
    // Biology
    {
      id: 'biology-1',
      title: 'Khan Academy Biology',
      description: 'Comprehensive biology courses',
      url: 'https://www.khanacademy.org/science/biology',
      category: 'biology',
      level: 'beginner',
      type: 'course',
      provider: 'Khan Academy',
      tags: ['biology', 'course', 'comprehensive']
    },
    // Computer Science
    {
      id: 'cs-1',
      title: 'freeCodeCamp',
      description: 'Learn to code for free',
      url: 'https://www.freecodecamp.org/',
      category: 'computer-science',
      level: 'beginner',
      type: 'course',
      provider: 'freeCodeCamp',
      tags: ['programming', 'course', 'interactive']
    },
    {
      id: 'cs-2',
      title: 'CS50',
      description: 'Harvard\'s Introduction to Computer Science',
      url: 'https://cs50.harvard.edu/',
      category: 'computer-science',
      level: 'beginner',
      type: 'course',
      provider: 'Harvard',
      tags: ['programming', 'course', 'computer-science']
    }
  ]

  let resources = [...allResources]

  // Filter by category
  if (category && category !== 'all') {
    resources = resources.filter(r => 
      r.category.toLowerCase() === (category as string).toLowerCase()
    )
  }

  // Filter by level
  if (level && level !== 'all') {
    resources = resources.filter(r => 
      r.level === level || r.level === 'all'
    )
  }

  // Search
  if (search) {
    const searchLower = (search as string).toLowerCase()
    resources = resources.filter(r =>
      r.title.toLowerCase().includes(searchLower) ||
      r.description.toLowerCase().includes(searchLower) ||
      r.tags.some(tag => tag.toLowerCase().includes(searchLower))
    )
  }

  // Limit results
  const limitNum = parseInt(limit as string, 10)
  resources = resources.slice(0, limitNum)

  // Set cache headers
  event.node.res.setHeader('Cache-Control', 'public, max-age=3600')

  return {
    resources,
    total: resources.length,
    filters: {
      category,
      level,
      search
    }
  }
})
