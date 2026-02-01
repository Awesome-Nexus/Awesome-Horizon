/**
 * Type definitions for Awesome Horizon
 * 
 * These types are auto-imported by Nuxt
 */

// Resource types
export interface Resource {
  id: string
  title: string
  url: string
  description: string
  provider?: string
  category: ResourceCategory
  level: ResourceLevel
  type: ResourceType
}

export type ResourceCategory = 
  | 'physics' 
  | 'chemistry' 
  | 'biology' 
  | 'mathematics'
  | 'computer-science'
  | 'engineering'
  | 'arts'
  | 'earth-science'
  | 'astronomy'
  | 'psychology'
  | 'environmental'
  | 'general'

export type ResourceLevel = 'beginner' | 'intermediate' | 'advanced' | 'research'

export type ResourceType = 
  | 'course' 
  | 'textbook' 
  | 'video' 
  | 'simulation' 
  | 'tool'
  | 'article'
  | 'dataset'
  | 'software'

// Subject types
export interface Subject {
  id: string
  name: string
  slug: string
  icon: string
  color: string
  description: string
  resourceCount: number
  url: string
}

// Category card props
export interface CategoryCardProps {
  title: string
  description: string
  to: string
  icon: any // Vue component
  colorClass: string
  textColorClass: string
  borderColorClass: string
}

// Navigation types
export interface NavLink {
  name: string
  path: string
  icon?: string
  children?: NavLink[]
}

// Content metadata
export interface ContentMeta {
  title: string
  description: string
  category?: string
  tags?: string[]
  date?: string
  updated?: string
}
