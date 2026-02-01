/**
 * Composable for navigation state management
 */

export const useNavigation = () => {
  const isMobileMenuOpen = ref(false)
  const currentSection = ref('')

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  const openMobileMenu = () => {
    isMobileMenuOpen.value = true
  }

  // Close mobile menu when route changes
  const route = useRoute()
  watch(() => route.path, () => {
    closeMobileMenu()
  })

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      currentSection.value = sectionId
    }
  }

  return {
    isMobileMenuOpen: readonly(isMobileMenuOpen),
    currentSection: readonly(currentSection),
    toggleMobileMenu,
    closeMobileMenu,
    openMobileMenu,
    scrollToSection
  }
}

/**
 * Composable for breadcrumbs
 */
export const useBreadcrumbs = () => {
  const route = useRoute()
  
  const breadcrumbs = computed(() => {
    const paths = route.path.split('/').filter(Boolean)
    const items = []
    
    let currentPath = ''
    for (const segment of paths) {
      currentPath += `/${segment}`
      items.push({
        name: toTitleCase(segment.replace(/-/g, ' ')),
        path: currentPath
      })
    }
    
    return items
  })

  return {
    breadcrumbs
  }
}
