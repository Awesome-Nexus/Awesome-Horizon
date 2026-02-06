export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { page = 1, limit = 20, category, subject } = query as { page?: number; limit?: number; category?: string; subject?: string }

  const resources = [
    { id: '1', title: 'MIT OpenCourseWare', description: 'Free online courses from MIT', url: 'https://ocw.mit.edu', category: 'technology', subject: 'computer-science', type: 'course', level: 'All Levels' },
    { id: '2', title: 'Khan Academy', description: 'Free personalized learning', url: 'https://www.khanacademy.org', category: 'science', subject: 'physics', type: 'platform', level: 'Beginner' },
    { id: '3', title: 'freeCodeCamp', description: 'Learn to code for free', url: 'https://www.freecodecamp.org', category: 'technology', subject: 'web-development', type: 'platform', level: 'Beginner' },
    { id: '4', title: '3Blue1Brown', description: 'Math visualization videos', url: 'https://www.3blue1brown.com', category: 'mathematics', subject: 'calculus', type: 'video', level: 'Intermediate' },
    { id: '5', title: 'Coursera', description: 'Online courses from top universities', url: 'https://www.coursera.org', category: 'technology', subject: 'data-science', type: 'course', level: 'All Levels' }
  ]

  let filtered = resources
  if (category) {
    filtered = filtered.filter(r => r.category === category)
  }
  if (subject) {
    filtered = filtered.filter(r => r.subject === subject)
  }

  const start = (page - 1) * limit
  const paginated = filtered.slice(start, start + limit)

  return {
    data: paginated,
    meta: {
      total: filtered.length,
      page,
      limit,
      totalPages: Math.ceil(filtered.length / limit)
    }
  }
})
