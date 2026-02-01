/**
 * Content-related composables for Nuxt Content
 */

/**
 * Fetch all subjects from content
 */
export const useSubjects = async () => {
  const { data: subjects } = await useAsyncData('subjects', () =>
    queryCollection('content')
      .where('category', 'eq', 'subject')
      .order('title', 'ASC')
      .all()
  )
  
  return {
    subjects: computed(() => subjects.value || [])
  }
}

/**
 * Fetch resources by category
 */
export const useResourcesByCategory = (category: string) => {
  const { data: resources } = useLazyAsyncData(
    `resources-${category}`,
    () => queryCollection('content')
      .where('category', 'eq', category)
      .order('title', 'ASC')
      .all(),
    { server: false }
  )
  
  return {
    resources: computed(() => resources.value || []),
    loading: computed(() => resources.pending)
  }
}

/**
 * Search content
 */
export const useContentSearch = (query: Ref<string>) => {
  const debouncedQuery = ref(query.value)
  
  // Debounce the search query
  watch(query, (newValue) => {
    const timeout = setTimeout(() => {
      debouncedQuery.value = newValue
    }, 300)
    return () => clearTimeout(timeout)
  })
  
  const { data: results } = useLazyAsyncData(
    () => `search-${debouncedQuery.value}`,
    () => {
      if (!debouncedQuery.value || debouncedQuery.value.length < 2) {
        return Promise.resolve([])
      }
      
      return queryCollection('content')
        .where('title', 'LIKE', `%${debouncedQuery.value}%`)
        .orWhere('description', 'LIKE', `%${debouncedQuery.value}%`)
        .limit(10)
        .all()
    },
    { watch: [debouncedQuery] }
  )
  
  return {
    results: computed(() => results.value || []),
    loading: computed(() => results.pending)
  }
}

/**
 * Get related content
 */
export const useRelatedContent = (currentPath: string, category: string, limit = 3) => {
  const { data: related } = useAsyncData(
    `related-${currentPath}`,
    () => queryCollection('content')
      .where('category', 'eq', category)
      .where('path', 'ne', currentPath)
      .limit(limit)
      .all()
  )
  
  return {
    related: computed(() => related.value || [])
  }
}
