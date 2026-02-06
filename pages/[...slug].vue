<script setup lang="ts">
const route = useRoute()
const error = useError()

const requestedPath = computed(() => route.path)

const isClientError = computed(() => {
  const statusCode = error.value?.statusCode as number || 404
  return statusCode >= 400 && statusCode < 500
})

const suggestedPaths = computed(() => {
  const path = requestedPath.value.toLowerCase()
  
  if (path.includes('science') || path.includes('physics') || path.includes('chem')) {
    return [{ label: 'Science', path: '/science' }]
  }
  if (path.includes('technology') || path.includes('tech') || path.includes('computer')) {
    return [{ label: 'Technology', path: '/technology' }]
  }
  if (path.includes('engineering') || path.includes('mechanical') || path.includes('electrical')) {
    return [{ label: 'Engineering', path: '/engineering' }]
  }
  if (path.includes('art') || path.includes('music') || path.includes('design')) {
    return [{ label: 'Arts', path: '/arts' }]
  }
  if (path.includes('math') || path.includes('algebra') || path.includes('calculus')) {
    return [{ label: 'Mathematics', path: '/mathematics' }]
  }
  
  return [
    { label: 'Science', path: '/science' },
    { label: 'Technology', path: '/technology' },
    { label: 'Engineering', path: '/engineering' },
    { label: 'Arts', path: '/arts' },
    { label: 'Mathematics', path: '/mathematics' }
  ]
})

useHead({
  title: 'Page Not Found | Awesome Horizon',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-space-950 text-space-100 flex items-center justify-center px-4">
    <div class="text-center space-y-8 max-w-2xl w-full">
      <!-- Animated 404 -->
      <div class="relative">
        <div class="text-9xl font-bold text-white opacity-10">404</div>
        <div 
          class="absolute inset-0 flex items-center justify-center text-9xl font-bold"
          :class="isClientError ? 'text-amber-500' : 'text-red-500'"
          style="margin-top: -0.5rem;"
        >
          4<span class="animate-pulse">0</span>4
        </div>
      </div>

      <!-- Message -->
      <div class="space-y-4">
        <h1 class="text-3xl font-bold text-white">Page Not Found</h1>
        <p class="text-gray-400 text-lg">
          The page <code class="text-primary-400 px-2 py-1 bg-space-800 rounded">/{{ requestedPath.split('/').filter(Boolean).slice(0, 3).join('/') }}</code> 
          doesn't exist or has been moved.
        </p>
      </div>

      <!-- Suggested Paths -->
      <div class="pt-8">
        <p class="text-gray-500 text-sm mb-6">You might be looking for:</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink 
            v-for="suggestion in suggestedPaths" 
            :key="suggestion.path"
            :to="suggestion.path"
            class="px-4 py-2 bg-space-800 hover:bg-space-700 text-gray-300 hover:text-white rounded-lg text-sm transition-colors"
          >
            {{ suggestion.label }}
          </NuxtLink>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <NuxtLink
          to="/"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all hover:scale-105"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Go Home
        </NuxtLink>
        
        <button
          @click="$router.back()"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-space-800 hover:bg-space-700 text-gray-200 font-semibold rounded-lg border border-space-700 transition-all hover:scale-105"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>
