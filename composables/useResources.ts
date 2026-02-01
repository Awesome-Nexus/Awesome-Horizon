/**
 * Composable for managing resource data
 */

export interface UseResourcesOptions {
  category?: string
  level?: string
  limit?: number
}

export const useResources = (options: UseResourcesOptions = {}) => {
  const resources = ref<Resource[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchResources = async (opts: UseResourcesOptions = {}) => {
    const mergedOpts = { ...options, ...opts }
    loading.value = true
    error.value = null
    
    try {
      // In a real implementation, this would fetch from an API
      // For now, we'll return mock data
      const { data } = await useAsyncData('resources', () => 
        $fetch('/api/resources', {
          query: mergedOpts
        })
      )
      
      if (data.value) {
        resources.value = data.value as Resource[]
      }
    } catch (err) {
      error.value = err as Error
      console.error('Failed to fetch resources:', err)
    } finally {
      loading.value = false
    }
  }

  const filterByLevel = (level: ResourceLevel) => {
    return resources.value.filter(r => r.level === level)
  }

  const filterByType = (type: ResourceType) => {
    return resources.value.filter(r => r.type === type)
  }

  return {
    resources: readonly(resources),
    loading: readonly(loading),
    error: readonly(error),
    fetchResources,
    filterByLevel,
    filterByType
  }
}

/**
 * Composable for search functionality
 */
export const useResourceSearch = () => {
  const searchQuery = ref('')
  const searchResults = ref<Resource[]>([])
  const isSearching = ref(false)

  const search = async (query: string) => {
    if (!query.trim()) {
      searchResults.value = []
      return
    }

    isSearching.value = true
    
    try {
      // Search implementation would go here
      // This could use Fuse.js for fuzzy search or a backend API
      const { data } = await useAsyncData(`search-${query}`, () => 
        $fetch('/api/search', {
          query: { q: query }
        })
      )
      
      if (data.value) {
        searchResults.value = data.value as Resource[]
      }
    } finally {
      isSearching.value = false
    }
  }

  // Debounced search
  const debouncedSearch = useDebounceFn(search, 300)

  watch(searchQuery, (newQuery) => {
    debouncedSearch(newQuery)
  })

  return {
    searchQuery,
    searchResults: readonly(searchResults),
    isSearching: readonly(isSearching),
    search
  }
}
