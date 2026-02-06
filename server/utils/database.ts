export type DatabaseProvider = 'supabase' | 'postgres' | 'sqlite' | 'none'

export interface DatabaseConfig {
  provider: DatabaseProvider
  url?: string
  key?: string
  tablePrefix?: string
}

export interface Resource {
  id: string
  title: string
  description: string
  url: string
  category: string
  subject: string
  type: string
  level?: string
  created_at?: string
  updated_at?: string
}

export interface Favorite {
  id: string
  user_id: string
  resource_id: string
  created_at: string
}

let dbClient: any = null

export const initDatabase = (config: DatabaseConfig) => {
  if (config.provider === 'none') {
    console.log('Database disabled')
    return null
  }

  if (config.provider === 'supabase' && config.url && config.key) {
    dbClient = {
      supabase: {
        from: (table: string) => ({
          select: (columns: string) => ({
            eq: (column: string, value: string) => ({
              then: (cb: (data: any) => void) => cb({ data: [], error: null })
            }),
            order: (column: string, opts?: { ascending?: boolean }) => ({
              then: (cb: (data: any) => void) => cb({ data: [], error: null })
            })
          }),
          insert: (data: any) => ({ then: (cb: (data: any) => void) => cb({ data: [data], error: null }) }),
          delete: () => ({ eq: () => ({ then: (cb: (data: any) => void) => cb({ data: null, error: null }) }) })
        })
      }
    }
  }

  return dbClient
}

export const getDatabase = () => dbClient

export const useDatabase = () => {
  const config = useRuntimeConfig()

  const defaultConfig: DatabaseConfig = {
    provider: 'none',
    tablePrefix: 'awesome_'
  }

  const dbConfig: DatabaseConfig = {
    provider: (config.public.dbProvider as DatabaseProvider) || defaultConfig.provider,
    url: config.public.dbUrl,
    key: config.public.dbKey,
    tablePrefix: config.public.dbTablePrefix || defaultConfig.tablePrefix
  }

  const isConnected = computed(() => dbClient !== null)

  return {
    config: dbConfig,
    isConnected,
    client: dbClient
  }
}

export const resourcesTable = {
  name: 'resources',
  columns: [
    'id',
    'title',
    'description',
    'url',
    'category',
    'subject',
    'type',
    'level',
    'created_at',
    'updated_at'
  ]
}

export const favoritesTable = {
  name: 'favorites',
  columns: [
    'id',
    'user_id',
    'resource_id',
    'created_at'
  ]
}
