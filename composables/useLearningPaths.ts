// Composable for generating learning paths

export interface LearningPath {
  name: string
  description: string
  steps: PathStep[]
}

export interface PathStep {
  level: number
  title: string
  description: string
  skills: string[]
  resources: ResourceRef[]
  duration: string
}

export interface ResourceRef {
  name: string
  type: 'course' | 'book' | 'video' | 'project' | 'tool'
  url?: string
}

export function useLearningPaths() {
  const getLearningPath = (subjectSlug: string): LearningPath | null => {
    const paths: Record<string, LearningPath> = {
      'computer-science': {
        name: 'Computer Science Fundamentals',
        description: 'From first code to software engineer',
        steps: [
          {
            level: 1,
            title: 'Programming Basics',
            description: 'Learn your first programming language and basic concepts',
            skills: ['Variables', 'Loops', 'Functions', 'Conditionals'],
            resources: [
              { name: 'Python for Everybody', type: 'course' },
              { name: 'freeCodeCamp', type: 'course' },
              { name: 'Automate the Boring Stuff', type: 'book' }
            ],
            duration: '2-3 months'
          },
          {
            level: 2,
            title: 'Data Structures',
            description: 'Master arrays, lists, trees, and hash tables',
            skills: ['Arrays', 'Linked Lists', 'Trees', 'Hash Tables', 'Stacks', 'Queues'],
            resources: [
              { name: 'Data Structures (UC San Diego)', type: 'course' },
              { name: 'Grokking Algorithms', type: 'book' }
            ],
            duration: '2-3 months'
          },
          {
            level: 3,
            title: 'Algorithms',
            description: 'Learn sorting, searching, and problem-solving patterns',
            skills: ['Sorting', 'Searching', 'Graph Algorithms', 'Dynamic Programming'],
            resources: [
              { name: 'Algorithmic Toolbox', type: 'course' },
              { name: 'Cracking the Coding Interview', type: 'book' },
              { name: 'LeetCode', type: 'tool' }
            ],
            duration: '3-4 months'
          },
          {
            level: 4,
            title: 'Software Engineering',
            description: 'Build complete applications and learn best practices',
            skills: ['OOP', 'Design Patterns', 'Testing', 'Version Control', 'Databases'],
            resources: [
              { name: 'Clean Code', type: 'book' },
              { name: 'Missing Semester', type: 'course' }
            ],
            duration: '4-6 months'
          }
        ]
      },
      'artificial-intelligence': {
        name: 'AI & Machine Learning',
        description: 'From ML basics to deep learning expert',
        steps: [
          {
            level: 1,
            title: 'Math Foundations',
            description: 'Linear algebra, calculus, and statistics for ML',
            skills: ['Linear Algebra', 'Calculus', 'Statistics', 'Probability'],
            resources: [
              { name: 'Mathematics for ML (Imperial)', type: 'course' },
              { name: '3Blue1Brown Essence of Linear Algebra', type: 'video' }
            ],
            duration: '1-2 months'
          },
          {
            level: 2,
            title: 'Machine Learning Basics',
            description: 'Supervised and unsupervised learning algorithms',
            skills: ['Regression', 'Classification', 'Clustering', 'scikit-learn'],
            resources: [
              { name: 'Machine Learning (Andrew Ng)', type: 'course' },
              { name: 'Hands-On ML with Scikit-Learn', type: 'book' }
            ],
            duration: '2-3 months'
          },
          {
            level: 3,
            title: 'Deep Learning',
            description: 'Neural networks, CNNs, RNNs, and transformers',
            skills: ['Neural Networks', 'CNN', 'RNN', 'PyTorch/TensorFlow', 'Backpropagation'],
            resources: [
              { name: 'Deep Learning Specialization', type: 'course' },
              { name: 'fast.ai Practical Deep Learning', type: 'course' },
              { name: 'Deep Learning Book (Goodfellow)', type: 'book' }
            ],
            duration: '3-4 months'
          },
          {
            level: 4,
            title: 'Specialization',
            description: 'Focus on NLP, Computer Vision, or RL',
            skills: ['NLP', 'Computer Vision', 'Transformers', 'Reinforcement Learning'],
            resources: [
              { name: 'CS224n NLP with Deep Learning', type: 'course' },
              { name: 'CS231n Computer Vision', type: 'course' },
              { name: 'Hugging Face Course', type: 'course' }
            ],
            duration: '4-6 months'
          }
        ]
      }
    }

    return paths[subjectSlug] || null
  }

  const getAllPaths = (): string[] => {
    return [
      'computer-science',
      'artificial-intelligence',
      'web-development',
      'data-science',
      'cybersecurity'
    ]
  }

  return {
    getLearningPath,
    getAllPaths
  }
}
