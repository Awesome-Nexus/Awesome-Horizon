<script setup lang="ts">
import { Search, AlertTriangle, Home, RefreshCw, ArrowLeft } from 'lucide-vue-next'

interface Props {
  error: {
    statusCode: number
    statusMessage?: string
    message?: string
    data?: unknown
  }
}

const props = defineProps<Props>()

const handleError = () => clearError({ redirect: '/' })
const reloadPage = () => window.location.reload()

useHead({
  title: `${props.error.statusCode} - Error | Awesome Horizon`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const errorMessages: Record<number, { icon: string; title: string; description: string; action: string }> = {
  400: {
    icon: 'AlertTriangle',
    title: 'Bad Request',
    description: 'The server could not understand your request. Please check the URL and try again.',
    action: 'Go Home'
  },
  401: {
    icon: 'AlertTriangle',
    title: 'Authentication Required',
    description: 'You need to be logged in to access this page.',
    action: 'Go Home'
  },
  403: {
    icon: 'AlertTriangle',
    title: 'Access Denied',
    description: "You don't have permission to access this resource.",
    action: 'Go Home'
  },
  404: {
    icon: 'Search',
    title: 'Page Not Found',
    description: "The page you're looking for doesn't exist or has been moved to a new location.",
    action: 'Go Home'
  },
  408: {
    icon: 'AlertTriangle',
    title: 'Request Timeout',
    description: 'The server took too long to respond. Please try again.',
    action: 'Try Again'
  },
  429: {
    icon: 'AlertTriangle',
    title: 'Too Many Requests',
    description: 'You\'ve made too many requests. Please wait a moment and try again.',
    action: 'Go Home'
  },
  500: {
    icon: 'AlertTriangle',
    title: 'Server Error',
    description: 'Something went wrong on our end. Our team has been notified and is working on it.',
    action: 'Try Again'
  },
  502: {
    icon: 'AlertTriangle',
    title: 'Service Unavailable',
    description: 'The server is temporarily unavailable. Please try again in a few moments.',
    action: 'Try Again'
  },
  503: {
    icon: 'AlertTriangle',
    title: 'Maintenance',
    description: 'The site is currently undergoing maintenance. Please check back soon.',
    action: 'Go Home'
  },
  504: {
    icon: 'AlertTriangle',
    title: 'Gateway Timeout',
    description: 'The server took too long to respond. Please try again.',
    action: 'Try Again'
  }
}

const errorInfo = computed(() => {
  return errorMessages[props.error.statusCode] || {
    icon: 'AlertTriangle',
    title: 'Unexpected Error',
    description: props.error.statusMessage || 'An unexpected error occurred. Please try again.',
    action: 'Go Home'
  }
})

const iconComponent = computed(() => {
  const icons: Record<string, object> = {
    Search,
    AlertTriangle,
    Home,
    RefreshCw
  }
  return icons[errorInfo.value.icon] || AlertTriangle
})

const isClientError = computed(() => props.error.statusCode >= 400 && props.error.statusCode < 500)
</script>

<template>
  <div class="min-h-screen bg-space-950 text-space-100 flex items-center justify-center px-4">
    <div class="text-center space-y-8 max-w-2xl w-full">
      <!-- Animated Error Icon -->
      <div class="flex justify-center">
        <div 
          class="relative w-40 h-40 rounded-full flex items-center justify-center"
          :class="isClientError ? 'bg-amber-500/10' : 'bg-red-500/10'"
        >
          <div 
            class="absolute inset-0 rounded-full animate-ping opacity-20"
            :class="isClientError ? 'bg-amber-500' : 'bg-red-500'"
          />
          <component 
            :is="iconComponent" 
            class="w-20 h-20 relative z-10"
            :class="isClientError ? 'text-amber-500' : 'text-red-500'"
          />
        </div>
      </div>

      <!-- Error Code -->
      <div class="space-y-2">
        <h1 class="text-7xl md:text-9xl font-bold text-white tracking-tight">
          {{ error.statusCode }}
        </h1>
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-200">
          {{ errorInfo.title }}
        </h2>
      </div>

      <!-- Error Message -->
      <p class="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
        {{ errorInfo.description }}
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <NuxtLink
          to="/"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all hover:scale-105 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-space-950"
        >
          <Home class="w-5 h-5" />
          Go Home
        </NuxtLink>

        <button
          @click="handleError"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-space-800 hover:bg-space-700 text-gray-200 font-semibold rounded-lg border border-space-700 transition-all hover:scale-105 focus:ring-2 focus:ring-space-500 focus:ring-offset-2 focus:ring-offset-space-950"
        >
          <ArrowLeft class="w-5 h-5" />
          Back to Safety
        </button>
      </div>

      <!-- Quick Links -->
      <div class="pt-12 border-t border-space-800">
        <p class="text-gray-500 text-sm mb-6">
          Explore our categories:
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink 
            v-for="category in ['Science', 'Technology', 'Engineering', 'Arts', 'Mathematics']" 
            :key="category"
            :to="`/${category.toLowerCase()}`"
            class="px-4 py-2 bg-space-800/50 hover:bg-space-800 text-gray-300 hover:text-white rounded-full text-sm transition-colors"
          >
            {{ category }}
          </NuxtLink>
        </div>
      </div>

      <!-- Help Section -->
      <div class="pt-8">
        <p class="text-gray-500 text-sm">
          Still having issues? 
          <a 
            href="https://github.com/Awesome-Nexus/Awesome-Horizon/issues" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-primary-400 hover:text-primary-300 underline"
          >
            Report an issue
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
