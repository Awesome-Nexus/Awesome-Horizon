<script setup lang="ts">
import { Search, AlertTriangle } from 'lucide-vue-next'

interface Props {
  error: {
    statusCode: number
    statusMessage?: string
    message?: string
  }
}

const props = defineProps<Props>()

const handleError = () => clearError({ redirect: '/' })

// SEO
useHead({
  title: `Error ${props.error.statusCode} - Awesome Horizon`
})

// Error messages
const errorMessages: Record<number, { title: string; description: string }> = {
  404: {
    title: 'Page Not Found',
    description: "The page you're looking for doesn't exist or has been moved."
  },
  500: {
    title: 'Server Error',
    description: 'Something went wrong on our end. Please try again later.'
  },
  403: {
    title: 'Access Denied',
    description: "You don't have permission to access this page."
  },
  401: {
    title: 'Unauthorized',
    description: 'Please log in to access this page.'
  }
}

const errorInfo = computed(() => {
  return errorMessages[props.error.statusCode] || {
    title: 'Something Went Wrong',
    description: props.error.statusMessage || 'An unexpected error occurred.'
  }
})
</script>

<template>
  <div class="min-h-screen bg-space-950 text-space-100 flex items-center justify-center px-4">
    <div class="text-center space-y-8 max-w-lg">
      <!-- Error Icon -->
      <div class="flex justify-center">
        <div 
          class="w-32 h-32 rounded-full flex items-center justify-center"
          :class="error.statusCode === 404 ? 'bg-amber-500/20' : 'bg-red-500/20'"
        >
          <component 
            :is="error.statusCode === 404 ? Search : AlertTriangle" 
            class="w-16 h-16 text-amber-500"
          />
        </div>
      </div>

      <!-- Error Code -->
      <div class="space-y-2">
        <h1 class="text-8xl font-bold text-white">
          {{ error.statusCode }}
        </h1>
        <h2 class="text-2xl font-semibold text-gray-300">
          {{ errorInfo.title }}
        </h2>
      </div>

      <!-- Error Message -->
      <p class="text-gray-400 text-lg">
        {{ errorInfo.description }}
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button
          to="/"
          variant="primary"
          class="inline-flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Go Home
        </Button>

        <Button
          @click="handleError"
          variant="secondary"
          class="inline-flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </Button>
      </div>

      <!-- Help Links -->
      <div class="pt-8 border-t border-space-800">
        <p class="text-gray-500 text-sm mb-4">
          Need help? Try these:
        </p>
        <div class="flex flex-wrap justify-center gap-4 text-sm">
          <NuxtLink to="/science" class="text-primary-400 hover:text-primary-300 transition-colors">
            Browse Science
          </NuxtLink>
          <NuxtLink to="/technology" class="text-primary-400 hover:text-primary-300 transition-colors">
            Technology
          </NuxtLink>
          <NuxtLink to="/mathematics" class="text-primary-400 hover:text-primary-300 transition-colors">
            Mathematics
          </NuxtLink>
          <NuxtLink to="/about" class="text-primary-400 hover:text-primary-300 transition-colors">
            About Us
          </NuxtLink>
        </div>
      </div>

      <!-- Error Details (dev only) -->
      <div v-if="error.message && false" class="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
        <p class="text-red-400 text-sm font-mono break-all">
          {{ error.message }}
        </p>
      </div>
    </div>
  </div>
</template>
