<template>
  <div class="min-h-screen bg-space-950 text-space-100 font-mono selection:bg-primary-500 selection:text-white">
    <header class="border-b border-space-800 bg-space-900/50 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="h-10 w-10 relative">
             <div class="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <AppLogo class="relative z-10 text-primary-400 group-hover:drop-shadow-[0_0_15px_rgba(33,186,227,0.5)] transition-all" />
          </div>
          <span class="text-2xl font-bold text-primary-400 tracking-tight">
            Awesome Horizon
          </span>
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex gap-6 items-center">
          <NuxtLink 
            to="/about" 
            class="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            About
          </NuxtLink>
          <a 
            href="https://github.com/Awesome-Nexus/Awesome-Horizon" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium"
            title="View on GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            GitHub
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-space-800 transition-colors"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-space-800 bg-space-900/95 backdrop-blur-md">
        <nav class="px-4 py-4 space-y-2">
          <NuxtLink 
            to="/about" 
            @click="mobileMenuOpen = false"
            class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-space-800 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>About</span>
          </NuxtLink>
          <a 
            href="https://github.com/Awesome-Nexus/Awesome-Horizon" 
            target="_blank" 
            rel="noopener noreferrer"
            @click="mobileMenuOpen = false"
            class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-space-800 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>
    
    <footer class="border-t border-space-800 py-12 mt-16 bg-space-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Brand Section -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="h-8 w-8">
                <AppLogo />
              </div>
              <span class="text-xl font-bold text-white">Awesome Horizon</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed">
              Curated educational resources for Science, Technology, Engineering, Arts, and Mathematics.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h3 class="text-white font-semibold">Quick Links</h3>
            <div class="space-y-2">
              <NuxtLink to="/science" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">Science</NuxtLink>
              <NuxtLink to="/technology" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">Technology</NuxtLink>
              <NuxtLink to="/engineering" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">Engineering</NuxtLink>
              <NuxtLink to="/arts" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">Arts</NuxtLink>
              <NuxtLink to="/mathematics" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">Mathematics</NuxtLink>
            </div>
          </div>

          <!-- Connect -->
          <div class="space-y-4">
            <h3 class="text-white font-semibold">Connect</h3>
            <div class="space-y-2">
              <NuxtLink to="/about" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">About Us</NuxtLink>
              <a href="https://github.com/Awesome-Nexus/Awesome-Horizon" target="_blank" rel="noopener noreferrer" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">GitHub Repository</a>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="border-t border-space-800 pt-8 space-y-4 text-center">
          <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Built with</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-red-400">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>and dedication to education</span>
          </div>
          <p class="text-gray-500 text-sm">&copy; {{ new Date().getFullYear() }} Awesome Horizon. Empowering learners worldwide.</p>
          <p class="text-gray-500 text-xs mt-2">Last Published: v1.0.0 (January 31, 2026)</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>
