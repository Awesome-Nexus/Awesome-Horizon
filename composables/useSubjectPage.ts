/**
 * Composable for subject pages with common structure
 */

export interface SubjectLevel {
  id: 'beginner' | 'intermediate' | 'advanced'
  icon: string
  title: string
  subtitle: string
  description: string
  color: string
  resources: number
}

export interface QuickLink {
  name: string
  url: string
  count: number
}

export interface ResourceItem {
  title: string
  url: string
  provider?: string
  author?: string
  type?: string
  desc?: string
  description?: string
  level?: string
}

export interface SubjectPageData {
  title: string
  description: string
  resourceCount: string
  gradient: 'purple' | 'blue' | 'emerald' | 'mixed'
  levels: SubjectLevel[]
  quickLinks: QuickLink[]
  featuredResources: ResourceItem[]
  k12Resources: ResourceItem[]
  sections?: SubjectSection[]
}

export interface SubjectSection {
  id: string
  title: string
  subtitle?: string
  icon: string
  iconColor: string
  resources: ResourceItem[]
  columns?: 2 | 3 | 4 | 5
}

/**
 * Default subject page configuration
 */
export const defaultSubjectConfig: Partial<SubjectPageData> = {
  gradient: 'purple',
  levels: [
    {
      id: 'beginner',
      icon: 'seedling',
      title: 'Beginner',
      subtitle: 'K-12 to High School',
      description: 'School level, conceptual understanding',
      color: 'emerald',
      resources: 500
    },
    {
      id: 'intermediate',
      icon: 'target',
      title: 'Intermediate',
      subtitle: 'Undergraduate University',
      description: 'University level courses',
      color: 'purple',
      resources: 800
    },
    {
      id: 'advanced',
      icon: 'rocket',
      title: 'Advanced',
      subtitle: 'Graduate & Research',
      description: 'Graduate courses and research',
      color: 'rose',
      resources: 700
    }
  ]
}

/**
 * Merge custom config with defaults
 */
export const createSubjectPage = (config: Partial<SubjectPageData>): SubjectPageData => {
  return {
    ...defaultSubjectConfig,
    ...config,
    levels: config.levels || defaultSubjectConfig.levels!
  } as SubjectPageData
}

/**
 * Pre-configured subject pages
 */
export const subjectConfigs: Record<string, Partial<SubjectPageData>> = {
  physics: {
    gradient: 'purple',
    resourceCount: '3000+',
    levels: [
      { ...defaultSubjectConfig.levels![0], resources: 800 },
      { ...defaultSubjectConfig.levels![1], resources: 1200 },
      { ...defaultSubjectConfig.levels![2], resources: 1000 }
    ]
  },
  chemistry: {
    gradient: 'emerald',
    resourceCount: '2500+',
    levels: [
      { ...defaultSubjectConfig.levels![0], color: 'emerald', resources: 600 },
      { ...defaultSubjectConfig.levels![1], color: 'blue', resources: 1000 },
      { ...defaultSubjectConfig.levels![2], color: 'purple', resources: 900 }
    ]
  },
  biology: {
    gradient: 'blue',
    resourceCount: '2500+',
    levels: [
      { ...defaultSubjectConfig.levels![0], color: 'green', resources: 700 },
      { ...defaultSubjectConfig.levels![1], color: 'emerald', resources: 900 },
      { ...defaultSubjectConfig.levels![2], color: 'teal', resources: 900 }
    ]
  }
}
