/**
 * Constants for Awesome Horizon
 */

// Site metadata
export const SITE_NAME = 'Awesome Horizon'
export const SITE_DESCRIPTION = 'Curated educational resources for Science, Technology, Engineering, Arts, and Mathematics'
export const SITE_URL = 'https://awesome-horizon.vercel.app'
export const REPO_URL = 'https://github.com/Awesome-Nexus/Awesome-Horizon'

// Version info
export const VERSION = '1.0.0'
export const LAST_UPDATED = 'January 31, 2026'

// Resource statistics
export const RESOURCE_STATS = {
  total: 15000,
  physics: 3000,
  chemistry: 2500,
  biology: 2500,
  mathematics: 2000,
  computerScience: 2000,
  engineering: 2000,
  arts: 1000,
  earthAstronomy: 1500,
  k12: 2000,
  countries: 160
} as const

// Navigation links
export const NAV_LINKS = [
  { name: 'Science', path: '/science', icon: 'flask' },
  { name: 'Technology', path: '/technology', icon: 'cpu' },
  { name: 'Engineering', path: '/engineering', icon: 'wrench' },
  { name: 'Arts', path: '/arts', icon: 'palette' },
  { name: 'Mathematics', path: '/mathematics', icon: 'sigma' },
  { name: 'About', path: '/about', icon: 'info' }
] as const

// Category configurations
export const CATEGORIES = [
  {
    id: 'science',
    name: 'Science',
    description: 'Explore the fundamental laws of nature, from biology to physics.',
    icon: 'FlaskConical',
    color: 'purple',
    subjects: ['physics', 'chemistry', 'biology', 'earth-science', 'astronomy', 'psychology', 'environmental']
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Innovations shaping our digital future: AI, Web Dev, and more.',
    icon: 'Cpu',
    color: 'emerald',
    subjects: ['computer-science', 'programming', 'ai', 'web-development']
  },
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Building the world around us. Civil, Mechanical, and Electrical.',
    icon: 'Wrench',
    color: 'amber',
    subjects: ['civil', 'mechanical', 'electrical', 'aerospace']
  },
  {
    id: 'arts',
    name: 'Arts',
    description: 'Creativity meets technique. Design, Music, and Visual Arts.',
    icon: 'Palette',
    color: 'rose',
    subjects: ['design', 'music', 'visual-arts', 'creative-writing']
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'The language of the universe. Algebra, Calculus, and Logic.',
    icon: 'Sigma',
    color: 'sky',
    subjects: ['algebra', 'calculus', 'statistics', 'geometry']
  }
] as const

// External resource links
export const EXTERNAL_LINKS = {
  github: 'https://github.com/Awesome-Nexus/Awesome-Horizon',
  issues: 'https://github.com/Awesome-Nexus/Awesome-Horizon/issues',
  discussions: 'https://github.com/Awesome-Nexus/Awesome-Horizon/discussions',
  contributing: 'https://github.com/Awesome-Nexus/Awesome-Horizon/blob/main/docs/CONTRIBUTING.md',
  license: 'https://github.com/Awesome-Nexus/Awesome-Horizon/blob/main/LICENSE'
} as const
