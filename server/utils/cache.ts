interface CacheEntry<T> {
  data: T
  timestamp: number
  maxAge: number
}

const memoryCache = new Map<string, CacheEntry<any>>()

const DEFAULT_TTL = 60 * 5
const MAX_CACHE_SIZE = 1000

export const cache = {
  get<T>(key: string): T | null {
    const entry = memoryCache.get(key)
    if (!entry) return null

    if (Date.now() - entry.timestamp > entry.maxAge) {
      memoryCache.delete(key)
      return null
    }

    return entry.data as T
  },

  set<T>(key: string, data: T, ttlSeconds: number = DEFAULT_TTL): void {
    if (memoryCache.size >= MAX_CACHE_SIZE) {
      const oldestKey = memoryCache.keys().next().value as string
      memoryCache.delete(oldestKey)
    }

    memoryCache.set(key, {
      data,
      timestamp: Date.now(),
      maxAge: ttlSeconds * 1000
    })
  },

  delete(key: string): boolean {
    return memoryCache.delete(key)
  },

  clear(): void {
    memoryCache.clear()
  },

  flushExpired(): number {
    const now = Date.now()
    let deleted = 0
    for (const [key, entry] of memoryCache.entries()) {
      if (now - entry.timestamp > entry.maxAge) {
        memoryCache.delete(key)
        deleted++
      }
    }
    return deleted
  },

  stats(): { size: number; oldestEntry: number | null } {
    let oldest = null as number | null
    for (const entry of memoryCache.values()) {
      if (oldest === null || entry.timestamp < oldest) {
        oldest = entry.timestamp
      }
    }
    return {
      size: memoryCache.size,
      oldestEntry: oldest
    }
  }
}

export const cachedContent = async <T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlSeconds: number = DEFAULT_TTL
): Promise<T> => {
  const cached = cache.get<T>(key)
  if (cached) return cached

  const data = await fetcher()
  cache.set(key, data, ttlSeconds)
  return data
}
