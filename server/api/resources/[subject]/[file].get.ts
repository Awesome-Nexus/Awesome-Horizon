import { readFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  const { subject, file } = event.context.params || {}
  
  if (!subject || !file) {
    throw createError({ statusCode: 400, statusMessage: 'Missing parameters' })
  }
  
  // Security: prevent directory traversal
  if (subject.includes('..') || file.includes('..')) {
    throw createError({ statusCode: 403, statusMessage: 'Invalid path' })
  }
  
  const filePath = resolve(`resources/${subject}/${file}.md`)
  
  try {
    const content = await readFile(filePath, 'utf-8')
    
    event.node.res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
    event.node.res.setHeader('Cache-Control', 'public, max-age=3600')
    
    return content
  } catch (error) {
    throw createError({ statusCode: 404, statusMessage: 'Resource not found' })
  }
})
