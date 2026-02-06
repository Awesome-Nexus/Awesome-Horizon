<script setup lang="ts">
const router = useRouter()

const reloadPage = () => {
  router.go(0)
}
</script>

<template>
  <div class="min-h-screen bg-space-950 text-space-100 flex items-center justify-center px-4">
    <div class="text-center space-y-8 max-w-md">
      <!-- Offline Icon -->
      <div class="relative flex justify-center">
        <div class="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            class="text-gray-500"
            aria-hidden="true"
          >
            <line x1="1" y1="1" x2="23" y2="23"/>
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
            <path d="M10.71 5.05A16 16 0 0 1 22.58 9"/>
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
            <line x1="12" y1="20" x2="12.01" y2="20"/>
          </svg>
        </div>
      </div>

      <!-- Message -->
      <div class="space-y-4">
        <h1 class="text-3xl font-bold text-white">You're Offline</h1>
        <p class="text-gray-400">
          It looks like you've lost your internet connection. Don't worry - some of our content may still be available.
        </p>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <button
          @click="reloadPage"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all hover:scale-105 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-space-950"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/>
          </svg>
          Try Again
        </button>
      </div>

      <!-- Tips -->
      <div class="pt-8 border-t border-space-800">
        <p class="text-gray-500 text-sm mb-4">While you're offline, you can:</p>
        <ul class="text-gray-400 text-sm space-y-2 text-left">
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-0.5 text-green-400" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            Browse cached pages you've visited
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-0.5 text-green-400" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            View your saved favorites
          </li>
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-0.5 text-green-400" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            Read any downloaded resources
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
