/**
 * Content-related composables for Nuxt Content v3
 */

export const useSubjects = async () => {
  const { data: subjects } = await useAsyncData('subjects', async () => {
    const all = await queryCollection('content').all()
    return all.filter(item => item.category === 'subject')
  })

  return {
    subjects: computed(() => subjects.value || [])
  }
}

export const useResourcesByCategory = (category: string) => {
  const { data: resources, status } = useLazyAsyncData(
    `resources-${category}`,
    async () => {
      const all = await queryCollection('content').all()
      return all.filter(item => item.category === category)
    },
    { server: false }
  )

  return {
    resources: computed(() => resources.value || []),
    loading: computed(() => status.value === 'pending')
  }
}

export const useContentSearch = (query: Ref<string>) => {
  const debouncedQuery = ref(query.value)

  watch(query, (newValue) => {
    const timeout = setTimeout(() => {
      debouncedQuery.value = newValue
    }, 300)
    return () => clearTimeout(timeout)
  })

  const { data: results, status } = useLazyAsyncData(
    () => `search-${debouncedQuery.value}`,
    async () => {
      if (!debouncedQuery.value || debouncedQuery.value.length < 2) {
        return []
      }

      const searchLower = debouncedQuery.value.toLowerCase()
      const all = await queryCollection('content').all()
      return all.filter(item =>
        item.title?.toLowerCase().includes(searchLower) ||
        item.description?.toLowerCase().includes(searchLower)
      ).slice(0, 10)
    },
    { watch: [debouncedQuery] }
  )

  return {
    results: computed(() => results.value || []),
    loading: computed(() => status.value === 'pending')
  }
}

export const useRelatedContent = (currentPath: string, category: string, limit = 3) => {
  const { data: related } = useAsyncData(
    `related-${currentPath}`,
    async () => {
      const all = await queryCollection('content').all()
      return all
        .filter(item => item.category === category && item.path !== currentPath)
        .slice(0, limit)
    }
  )

  return {
    related: computed(() => related.value || [])
  }
}
