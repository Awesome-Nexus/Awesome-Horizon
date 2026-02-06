/**
 * Composable for managing resource data
 */

export type ResourceLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
export type ResourceType = 'course' | 'textbook' | 'video' | 'tutorial' | 'platform' | 'simulation' | 'resource'

export interface Resource {
  title: string
  description: string
  url: string
  category: string
  subject: string
  type: ResourceType
  level?: ResourceLevel
}

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
      const { data } = await useAsyncData('resources', async () => {
        const all = await queryCollection('content').all()
        return all.map((item: any) => ({
          title: item.title || '',
          description: item.description || '',
          url: item.url || item.path || '#',
          category: item.category || '',
          subject: item.subject || '',
          type: (item.type as ResourceType) || 'resource',
          level: item.level as ResourceLevel
        }))
      })

      if (data.value) {
        resources.value = data.value
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
