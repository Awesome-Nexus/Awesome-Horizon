/**
 * Formatting utilities for Awesome Horizon
 */

/**
 * Format a number of resources for display
 * @param count - The number to format
 * @returns Formatted string (e.g., "1.5k+", "500+")
 */
export const formatResourceCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M+`
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k+`
  }
  return `${count}+`
}

/**
 * Create a URL-friendly slug from a string
 * @param text - The text to slugify
 * @returns URL-friendly slug
 */
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
}

/**
 * Capitalize the first letter of each word
 * @param str - The string to capitalize
 * @returns Title case string
 */
export const toTitleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Format a date for display
 * @param date - Date string or Date object
 * @returns Formatted date string
 */
export const formatDate = (date: string | Date): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Truncate text with ellipsis
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Get color class for a subject category
 * @param category - The category name
 * @returns Tailwind color class
 */
export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    physics: 'purple',
    chemistry: 'emerald',
    biology: 'green',
    mathematics: 'blue',
    'computer-science': 'cyan',
    technology: 'emerald',
    engineering: 'amber',
    arts: 'rose',
    'earth-science': 'amber',
    astronomy: 'indigo',
    psychology: 'pink',
    environmental: 'teal',
    science: 'purple',
    general: 'gray'
  }
  return colors[category.toLowerCase()] || 'gray'
}
