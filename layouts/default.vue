<template>
  <div class="min-h-screen bg-space-950 text-space-100 font-sans selection:bg-primary-500 selection:text-white">
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
        <nav class="hidden md:flex gap-6">
          <NuxtLink to="/explore" class="hover:text-primary-400 transition-colors">Explore</NuxtLink>
          <NuxtLink to="/about" class="hover:text-primary-400 transition-colors">About</NuxtLink>
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
            to="/explore" 
            @click="mobileMenuOpen = false"
            class="block px-4 py-3 rounded-lg hover:bg-space-800 hover:text-primary-400 transition-colors"
          >
            Explore
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            @click="mobileMenuOpen = false"
            class="block px-4 py-3 rounded-lg hover:bg-space-800 hover:text-primary-400 transition-colors"
          >
            About
          </NuxtLink>
        </nav>
      </div>
    </header>
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>
    
    <footer class="border-t border-space-800 py-8 mt-12 text-center text-gray-500 text-sm">
      <p>&copy; {{ new Date().getFullYear() }} Awesome Horizon. Empowering learners worldwide.</p>
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
