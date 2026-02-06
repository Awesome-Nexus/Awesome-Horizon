export const API_VERSIONS = ['v1', 'v2'] as const
export type ApiVersion = typeof API_VERSIONS[number]

export const CURRENT_VERSION: ApiVersion = 'v1'

interface VersionedRoute {
  v1: string
  v2: string
}

export const versionedRoutes: Record<string, VersionedRoute> = {
  resources: {
    v1: '/api/v1/resources',
    v2: '/api/v2/resources'
  },
  sitemap: {
    v1: '/api/v1/sitemap',
    v2: '/api/v2/sitemap'
  },
  health: {
    v1: '/api/v1/health',
    v2: '/api/v2/health'
  }
}

export const getVersionedRoute = (route: string, version: ApiVersion): string => {
  const routeConfig = versionedRoutes[route]
  if (routeConfig) {
    return routeConfig[version]
  }
  return `/api/${version}/${route}`
}

export const parseApiVersion = (path: string): { version: ApiVersion; endpoint: string } | null => {
  const match = path.match(/^\/api\/(v\d+)\/(.+)$/)
  if (match) {
    const version = match[1] as ApiVersion
    if (API_VERSIONS.includes(version)) {
      return { version, endpoint: match[2] }
    }
  }
  return null
}

export const isLatestVersion = (version: ApiVersion): boolean => {
  return version === CURRENT_VERSION
}

export const getDeprecationInfo = (version: ApiVersion): { deprecated: boolean; sunsetDate: string | null } => {
  if (version === 'v1') {
    return {
      deprecated: false,
      sunsetDate: '2025-12-31'
    }
  }
  return {
    deprecated: false,
    sunsetDate: null
  }
}
