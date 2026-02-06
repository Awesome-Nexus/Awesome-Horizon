import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string().optional(),
        subject: z.string().optional(),
        level: z.string().optional(),
        tags: z.array(z.string()).optional()
      })
    })
  }
})
