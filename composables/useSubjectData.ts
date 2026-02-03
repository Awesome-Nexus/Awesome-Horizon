// Composable for subject data management
import { getSubjectBySlug, getSubjectsByCategory, getCategoryBySlug, categories } from '~/data/subjects'

export function useSubjectData() {
  const getSubject = (slug: string) => {
    return getSubjectBySlug(slug)
  }

  const getCategorySubjects = (categorySlug: string) => {
    return getSubjectsByCategory(categorySlug)
  }

  const getCategory = (slug: string) => {
    return getCategoryBySlug(slug)
  }

  const getAllCategories = () => {
    return categories
  }

  const getRelatedSubjects = (subjectSlug: string, limit: number = 3) => {
    const subject = getSubjectBySlug(subjectSlug)
    if (!subject) return []
    
    const category = categories.find(c => 
      c.subjects.some(s => s.slug === subjectSlug)
    )
    if (!category) return []
    
    return category.subjects
      .filter(s => s.slug !== subjectSlug)
      .slice(0, limit)
  }

  return {
    getSubject,
    getCategorySubjects,
    getCategory,
    getAllCategories,
    getRelatedSubjects
  }
}
