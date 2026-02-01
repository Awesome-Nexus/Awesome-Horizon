/**
 * Composable for accessing resource markdown files
 */

export interface ResourceFile {
  subject: string
  name: string
  filename: string
  url: string
  description: string
}

export const resourceFiles: ResourceFile[] = [
  {
    subject: 'physics',
    name: 'Physics Comprehensive',
    filename: 'learning-resources-comprehensive',
    url: '/api/resources/physics/learning-resources-comprehensive',
    description: 'Complete physics resources from 50+ countries'
  },
  {
    subject: 'chemistry',
    name: 'Chemistry Learning',
    filename: 'learning-resources',
    url: '/api/resources/chemistry/learning-resources',
    description: 'Chemistry learning materials from 40+ countries'
  },
  {
    subject: 'biology',
    name: 'Biology Master',
    filename: 'master-resources',
    url: '/api/resources/biology/master-resources',
    description: 'Comprehensive biology collection from 35+ countries'
  },
  {
    subject: 'psychology',
    name: 'Psychology Global Extended',
    filename: 'global-resources-extended',
    url: '/api/resources/psychology/global-resources-extended',
    description: 'Extended psychology resources from 150+ countries'
  },
  {
    subject: 'environmental',
    name: 'Environmental Global Extended',
    filename: 'global-resources-extended',
    url: '/api/resources/environmental/global-resources-extended',
    description: 'Environmental science from 170+ countries'
  },
  {
    subject: 'earth-astronomy',
    name: 'Earth & Space Extended',
    filename: 'global-resources-extended',
    url: '/api/resources/earth-astronomy/global-resources-extended',
    description: 'Earth and space resources from 160+ countries'
  }
]

export const useResourceFiles = () => {
  return {
    files: resourceFiles
  }
}

export const fetchResourceContent = async (url: string): Promise<string> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch resource')
  }
  return response.text()
}
