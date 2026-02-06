export type AuthProvider = 'credentials' | 'github' | 'google' | 'none'

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'user' | 'admin' | 'moderator'
  createdAt: string
  lastLogin?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export const useAuth = () => {
  const user = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  const config = useRuntimeConfig()
  const router = useRouter()

  const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    isLoading.value = true
    error.value = null

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (email && password) {
        user.value = {
          id: Math.random().toString(36).substring(2, 9),
          email,
          name: email.split('@')[0],
          role: 'user',
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString()
        }
        
        const authCookie = useCookie('auth_token', {
          maxAge: 60 * 60 * 24 * 7,
          path: '/'
        })
        authCookie.value = btoa(JSON.stringify(user.value))
        
        return { success: true, message: 'Login successful!' }
      }
      
      error.value = 'Invalid credentials'
      return { success: false, message: 'Invalid credentials' }
    } catch (err) {
      error.value = 'Login failed'
      return { success: false, message: String(err) }
    } finally {
      isLoading.value = false
    }
  }

  const register = async (name: string, email: string, password: string): Promise<{ success: boolean; message: string }> => {
    isLoading.value = true
    error.value = null

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (name && email && password) {
        user.value = {
          id: Math.random().toString(36).substring(2, 9),
          email,
          name,
          role: 'user',
          createdAt: new Date().toISOString()
        }
        
        const authCookie = useCookie('auth_token', {
          maxAge: 60 * 60 * 24 * 7,
          path: '/'
        })
        authCookie.value = btoa(JSON.stringify(user.value))
        
        return { success: true, message: 'Registration successful!' }
      }
      
      error.value = 'Invalid input'
      return { success: false, message: 'Invalid input' }
    } catch (err) {
      error.value = 'Registration failed'
      return { success: false, message: String(err) }
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    user.value = null
    const authCookie = useCookie('auth_token')
    authCookie.value = null
    router.push('/')
  }

  const checkAuth = async () => {
    isLoading.value = true
    try {
      const authCookie = useCookie('auth_token')
      if (authCookie.value) {
        try {
          user.value = JSON.parse(atob(authCookie.value))
        } catch {
          authCookie.value = null
        }
      }
    } finally {
      isLoading.value = false
    }
  }

  const resetPassword = async (email: string): Promise<{ success: boolean; message: string }> => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { success: true, message: 'Password reset email sent!' }
  }

  const updateProfile = async (updates: Partial<User>): Promise<{ success: boolean; message: string }> => {
    if (!user.value) {
      return { success: false, message: 'Not authenticated' }
    }
    
    user.value = { ...user.value, ...updates }
    return { success: true, message: 'Profile updated!' }
  }

  onMounted(() => {
    checkAuth()
  })

  return {
    user: readonly(user),
    isAuthenticated,
    isLoading: readonly(isLoading),
    error: readonly(error),
    login,
    register,
    logout,
    checkAuth,
    resetPassword,
    updateProfile
  }
}
