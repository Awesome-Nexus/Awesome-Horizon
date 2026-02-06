<script setup lang="ts">
const mobileMenuOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

</script>

<template>
  <div 
    class="min-h-screen bg-space-950 text-space-100 font-mono selection:bg-primary-500 selection:text-white"
    :class="{ 'overflow-hidden': mobileMenuOpen }"
  >
    <!-- Skip to main content for keyboard users -->
    <a 
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg"
    >
      Skip to main content
    </a>

    <header 
      class="border-b border-space-800 bg-space-900/50 backdrop-blur-md sticky top-0 z-50"
      role="banner"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NuxtLink 
          to="/" 
          class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-space-900 rounded-lg"
          aria-label="Awesome Horizon - Home"
        >
          <div class="h-10 w-10 relative">
             <div class="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <AppLogo class="relative z-10 text-primary-400 group-hover:drop-shadow-[0_0_15px_rgba(33,186,227,0.5)] transition-all" />
          </div>
          <span class="text-2xl font-bold text-primary-400 tracking-tight">
            Awesome Horizon
          </span>
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <nav 
          class="hidden md:flex gap-4 items-center" 
          role="navigation" 
          aria-label="Main navigation"
        >
          <!-- Categories Dropdown -->
          <div class="relative group">
            <button 
              class="flex items-center gap-2 px-3 py-1.5 text-gray-300 hover:text-white transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
              aria-haspopup="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-180 transition-transform" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div 
              class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
              role="menu"
            >
              <div class="bg-space-900 border border-space-700 rounded-xl shadow-xl p-2 min-w-[200px]">
                <NuxtLink 
                  to="/science" 
                  class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-space-800 text-gray-300 hover:text-purple-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  role="menuitem"
                >
                  <Icon name="flask" :size="16" class="text-purple-400" aria-hidden="true" /> Science
                </NuxtLink>
                <NuxtLink 
                  to="/technology" 
                  class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-space-800 text-gray-300 hover:text-cyan-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  role="menuitem"
                >
                  <Icon name="cpu" :size="16" class="text-cyan-400" aria-hidden="true" /> Technology
                </NuxtLink>
                <NuxtLink 
                  to="/engineering" 
                  class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-space-800 text-gray-300 hover:text-orange-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  role="menuitem"
                >
                  <Icon name="cog" :size="16" class="text-orange-400" aria-hidden="true" /> Engineering
                </NuxtLink>
                <NuxtLink 
                  to="/arts" 
                  class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-space-800 text-gray-300 hover:text-pink-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  role="menuitem"
                >
                  <Icon name="palette" :size="16" class="text-pink-400" aria-hidden="true" /> Arts
                </NuxtLink>
                <NuxtLink 
                  to="/mathematics" 
                  class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-space-800 text-gray-300 hover:text-indigo-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  role="menuitem"
                >
                  <Icon name="sigma" :size="16" class="text-indigo-400" aria-hidden="true" /> Mathematics
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink 
            to="/about" 
            class="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
            aria-label="About Awesome Horizon"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            About
          </NuxtLink>
          <a 
            href="https://github.com/Awesome-Nexus/Awesome-Horizon" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
            aria-label="View Awesome Horizon on GitHub (opens in new tab)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            GitHub
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-space-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen" 
        id="mobile-menu"
        class="md:hidden border-t border-space-800 bg-space-900/95 backdrop-blur-md max-h-[80vh] overflow-y-auto"
        role="navigation" 
        aria-label="Mobile navigation"
      >
        <nav class="px-4 py-4 space-y-2">
          <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider" aria-hidden="true">Categories</div>
          <NuxtLink 
            to="/science"
            @click="closeMobileMenu"
            class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-space-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <Icon name="flask" :size="16" class="text-purple-400" aria-hidden="true" />
            <span>Science</span>
          </NuxtLink>
          <NuxtLink 
            to="/technology"
            @click="closeMobileMenu"
            class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-space-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <Icon name="cpu" :size="16" class="text-cyan-400" aria-hidden="true" />
            <span>Technology</span>
          </NuxtLink>
          <NuxtLink 
            to="/engineering"
            @click="closeMobileMenu"
            class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-space-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <Icon name="cog" :size="16" class="text-orange-400" aria-hidden="true" />
            <span>Engineering</span>
          </NuxtLink>
          <NuxtLink 
            to="/arts"
            @click="closeMobileMenu"
            class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-pink-400 hover:bg-space-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <Icon name="palette" :size="16" class="text-pink-400" aria-hidden="true" />
            <span>Arts</span>
          </NuxtLink>
          <NuxtLink 
            to="/mathematics"
            @click="closeMobileMenu"
            class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-indigo-400 hover:bg-space-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <Icon name="sigma" :size="16" class="text-indigo-400" aria-hidden="true" />
            <span>Mathematics</span>
          </NuxtLink>

           <div class="border-t border-space-800 my-2"></div>

           <NuxtLink
            to="/about" 
            @click="closeMobileMenu"
            class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-space-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
           >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>About</span>
          </NuxtLink>
          <a 
            href="https://github.com/Awesome-Nexus/Awesome-Horizon" 
            target="_blank" 
            rel="noopener noreferrer"
            @click="closeMobileMenu"
            class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-space-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="View Awesome Horizon on GitHub (opens in new tab)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
    
    <!-- Page Content with Transition -->
    <main 
      id="main-content" 
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      role="main"
    >
      <NuxtPage />
    </main>
    
    <footer 
      class="border-t border-space-800 py-12 mt-16 bg-space-900/50"
      role="contentinfo"
    >
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
            <h3 class="text-white font-semibold" id="footer-quick-links">Quick Links</h3>
            <nav aria-labelledby="footer-quick-links">
              <ul class="space-y-2">
                <li><NuxtLink to="/science" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">Science</NuxtLink></li>
                <li><NuxtLink to="/technology" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">Technology</NuxtLink></li>
                <li><NuxtLink to="/engineering" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">Engineering</NuxtLink></li>
                <li><NuxtLink to="/arts" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">Arts</NuxtLink></li>
                <li><NuxtLink to="/mathematics" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">Mathematics</NuxtLink></li>
              </ul>
            </nav>
          </div>

          <!-- Connect -->
          <div class="space-y-4">
            <h3 class="text-white font-semibold" id="footer-connect">Connect</h3>
            <nav aria-labelledby="footer-connect">
              <ul class="space-y-2">
                <li><NuxtLink to="/about" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">About Us</NuxtLink></li>
                <li><a href="https://github.com/Awesome-Nexus/Awesome-Horizon" target="_blank" rel="noopener noreferrer" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">GitHub Repository</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="border-t border-space-800 pt-8 space-y-4 text-center">
          <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Built with</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-red-400" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>and dedication to education</span>
          </div>
          <p class="text-gray-500 text-sm">&copy; {{ new Date().getFullYear() }} Awesome Horizon. Empowering learners worldwide.</p>
          <p class="text-gray-500 text-xs mt-2">Last updated: February 6, 2026</p>
        </div>
      </div>
    </footer>
  </div>
</template>
