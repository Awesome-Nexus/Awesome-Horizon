export type Theme = 'dark' | 'light'

export const useTheme = () => {
  const themeCookie = useCookie<Theme>('theme', {
    default: () => 'dark',
    maxAge: 60 * 60 * 24 * 365
  })

  const theme = useState<Theme>('theme', () => themeCookie.value || 'dark')

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    themeCookie.value = newTheme
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('theme-dark', 'theme-light')
      document.documentElement.classList.add(`theme-${newTheme}`)
    }
  }

  const toggleTheme = () => {
    const newTheme = theme.value === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  const initTheme = () => {
    if (typeof window !== 'undefined') {
      const saved = themeCookie.value
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initialTheme = saved || (prefersDark ? 'dark' : 'light')
      setTheme(initialTheme)
    }
  }

  onMounted(() => {
    initTheme()
  })

  return {
    theme: readonly(theme),
    setTheme,
    toggleTheme,
    initTheme
  }
}
