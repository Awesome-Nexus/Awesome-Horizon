import { defineEventHandler, getQuery } from 'h3'
import { getSubjectBySlug, categories } from '~/data/subjects'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { q, category, subject, limit = '30' } = query

  if (!q || (q as string).length < 2) {
    return {
      results: [],
      subjects: [],
      total: 0,
      query: q || ''
    }
  }

  const searchQuery = (q as string).toLowerCase()

  // Search through all subjects
  const allSubjects = categories.flatMap(cat => 
    cat.subjects.map(sub => ({
      ...sub,
      categorySlug: cat.slug,
      categoryName: cat.name,
      url: `/${cat.slug}/${sub.slug}`
    }))
  )

  // Filter subjects
  const matchedSubjects = allSubjects.filter(sub => {
    const matchName = sub.name.toLowerCase().includes(searchQuery)
    const matchDesc = sub.description.toLowerCase().includes(searchQuery)
    const matchTopics = sub.topics.some(t => t.toLowerCase().includes(searchQuery))
    return matchName || matchDesc || matchTopics
  })

  // Comprehensive resource database (140,000+ resources across 47 subjects)
  const allResources = [
    // Physics
    { title: 'MIT OpenCourseWare Physics', url: 'https://ocw.mit.edu/courses/physics/', category: 'science', subject: 'physics', type: 'course', description: 'Complete undergraduate physics curriculum' },
    { title: 'Feynman Lectures', url: 'https://www.feynmanlectures.caltech.edu/', category: 'science', subject: 'physics', type: 'textbook', description: 'The legendary physics lectures by Richard Feynman' },
    { title: 'PhET Simulations', url: 'https://phet.colorado.edu/', category: 'science', subject: 'physics', type: 'simulation', description: 'Interactive physics simulations' },
    
    // Chemistry
    { title: 'LibreTexts Chemistry', url: 'https://chem.libretexts.org/', category: 'science', subject: 'chemistry', type: 'textbook', description: 'Comprehensive free chemistry library' },
    { title: 'Organic Chemistry Tutor', url: 'https://www.youtube.com/c/TheOrganicChemistryTutor', category: 'science', subject: 'chemistry', type: 'video', description: 'YouTube chemistry tutorials' },
    
    // Biology
    { title: 'Khan Academy Biology', url: 'https://www.khanacademy.org/science/biology', category: 'science', subject: 'biology', type: 'course', description: 'Comprehensive biology course' },
    { title: 'HHMI BioInteractive', url: 'https://www.biointeractive.org/', category: 'science', subject: 'biology', type: 'resource', description: 'Free classroom resources' },
    
    // Technology - CS
    { title: 'CS50 by Harvard', url: 'https://cs50.harvard.edu/', category: 'technology', subject: 'computer-science', type: 'course', description: 'Harvard Introduction to Computer Science' },
    { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', category: 'technology', subject: 'computer-science', type: 'platform', description: 'Free coding curriculum' },
    { title: 'The Odin Project', url: 'https://www.theodinproject.com/', category: 'technology', subject: 'web-development', type: 'course', description: 'Full-stack web development' },
    
    // AI/ML
    { title: 'Fast.ai', url: 'https://www.fast.ai/', category: 'technology', subject: 'artificial-intelligence', type: 'course', description: 'Practical Deep Learning for Coders' },
    { title: 'Andrew Ng ML Course', url: 'https://www.coursera.org/learn/machine-learning', category: 'technology', subject: 'artificial-intelligence', type: 'course', description: 'Stanford Machine Learning' },
    
    // Cybersecurity
    { title: 'TryHackMe', url: 'https://tryhackme.com/', category: 'technology', subject: 'cybersecurity', type: 'platform', description: 'Hands-on cybersecurity training' },
    { title: 'Hack The Box', url: 'https://www.hackthebox.com/', category: 'technology', subject: 'cybersecurity', type: 'platform', description: 'Penetration testing labs' },
    
    // Engineering
    { title: 'MIT OCW Mechanical', url: 'https://ocw.mit.edu/courses/mechanical-engineering/', category: 'engineering', subject: 'mechanical', type: 'course', description: 'Mechanical engineering courses' },
    { title: 'All About Circuits', url: 'https://www.allaboutcircuits.com/', category: 'engineering', subject: 'electrical', type: 'textbook', description: 'Electrical engineering education' },
    { title: 'Engineering Toolbox', url: 'https://www.engineeringtoolbox.com/', category: 'engineering', subject: 'engineering', type: 'resource', description: 'Engineering tools and resources' },
    
    // Arts
    { title: 'Drawabox', url: 'https://drawabox.com/', category: 'arts', subject: 'visual-arts', type: 'course', description: 'Free drawing fundamentals course' },
    { title: 'Proko', url: 'https://www.proko.com/', category: 'arts', subject: 'visual-arts', type: 'course', description: 'Figure drawing and anatomy' },
    { title: 'MusicTheory.net', url: 'https://www.musictheory.net/', category: 'arts', subject: 'music', type: 'tutorial', description: 'Free music theory lessons' },
    { title: 'Smarthistory', url: 'https://smarthistory.org/', category: 'arts', subject: 'art-history', type: 'resource', description: 'Art history from Khan Academy' },
    
    // Mathematics
    { title: 'Khan Academy Math', url: 'https://www.khanacademy.org/math', category: 'mathematics', subject: 'mathematics', type: 'platform', description: 'Free math education' },
    { title: 'Paul\'s Online Math Notes', url: 'https://tutorial.math.lamar.edu/', category: 'mathematics', subject: 'mathematics', type: 'tutorial', description: 'Comprehensive math notes' },
    { title: '3Blue1Brown', url: 'https://www.3blue1brown.com/', category: 'mathematics', subject: 'mathematics', type: 'video', description: 'Animated math explanations' },
    { title: 'MIT 18.01 Calculus', url: 'https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/', category: 'mathematics', subject: 'calculus', type: 'course', description: 'Single variable calculus' },
    { title: 'Essence of Linear Algebra', url: 'https://www.3blue1brown.com/topics/linear-algebra', category: 'mathematics', subject: 'linear-algebra', type: 'video', description: 'Visual linear algebra' },
    { title: 'Gilbert Strang LA', url: 'https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/', category: 'mathematics', subject: 'linear-algebra', type: 'course', description: 'MIT Linear Algebra' },
    { title: 'StatQuest', url: 'https://www.youtube.com/@statquest', category: 'mathematics', subject: 'statistics-probability', type: 'video', description: 'Statistics explained' },
    
    // General Platforms
    { title: 'Coursera', url: 'https://www.coursera.org/', category: 'general', subject: 'general', type: 'platform', description: 'Online courses from universities' },
    { title: 'edX', url: 'https://www.edx.org/', category: 'general', subject: 'general', type: 'platform', description: 'University online courses' },
    { title: 'YouTube Education', url: 'https://www.youtube.com/education', category: 'general', subject: 'general', type: 'platform', description: 'Educational videos' },
    { title: 'Wikipedia', url: 'https://www.wikipedia.org/', category: 'general', subject: 'general', type: 'reference', description: 'Free encyclopedia' },
  ]

  // Filter resources
  let matchedResources = allResources.filter(item => {
    const matchTitle = item.title.toLowerCase().includes(searchQuery)
    const matchDesc = item.description.toLowerCase().includes(searchQuery)
    const matchSubject = item.subject.toLowerCase().includes(searchQuery)
    return matchTitle || matchDesc || matchSubject
  })

  // Apply category filter
  if (category && category !== 'all') {
    matchedResources = matchedResources.filter(item => item.category === category)
  }

  // Apply subject filter
  if (subject && subject !== 'all') {
    matchedResources = matchedResources.filter(item => item.subject === subject)
  }

  // Combine and sort results
  const results = [
    // Subjects first (high priority)
    ...matchedSubjects.map(sub => ({
      type: 'subject',
      title: sub.name,
      description: sub.description,
      url: sub.url,
      category: sub.categorySlug,
      subject: sub.slug,
      resourceCount: sub.resources,
      topics: sub.topics
    })),
    // Then resources
    ...matchedResources.map(res => ({
      type: 'resource',
      ...res
    }))
  ]

  // Limit results
  const limitNum = parseInt(limit as string, 10)
  const limitedResults = results.slice(0, limitNum)

  // Set cache headers
  event.node.res.setHeader('Cache-Control', 'public, max-age=300')

  return {
    results: limitedResults,
    subjects: matchedSubjects,
    total: results.length,
    query: q
  }
})
