<template>
  <div class="min-h-screen bg-space-950 text-space-100 flex items-center justify-center px-4">
    <div class="text-center space-y-6 max-w-md">
      <!-- Error Icon -->
      <div class="flex justify-center">
        <div class="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-400">
            <circle cx="12" cy="12" r="10"/>
            <path d="m15 9-6 6"/>
            <path d="m9 9 6 6"/>
          </svg>
        </div>
      </div>

      <!-- Error Message -->
      <div class="space-y-2">
        <h1 class="text-4xl font-bold text-white">{{ error.statusCode }}</h1>
        <h2 class="text-xl font-semibold text-gray-300">
          {{ error.statusCode === 404 ? 'Page Not Found' : 'Something went wrong' }}
        </h2>
        <p class="text-gray-400">
          {{ error.statusCode === 404 
            ? 'The page you\'re looking for doesn\'t exist.' 
            : 'We\'re sorry, but something unexpected happened.' 
          }}
        </p>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink 
          to="/" 
          class="btn-primary inline-flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          Go Home
        </NuxtLink>
        
        <button 
          @click="handleError" 
          class="btn-secondary inline-flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 16 4 4 4-4"/>
            <path d="M7 20V4"/>
            <path d="m21 8-4-4-4 4"/>
            <path d="M17 4v16"/>
          </svg>
          Try Again
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    statusMessage?: string
  }
}>()

const handleError = () => clearError({ redirect: '/' })

// Set page title
useHead({
  title: `Error ${props.error.statusCode} - Awesome Horizon`
})
</script>