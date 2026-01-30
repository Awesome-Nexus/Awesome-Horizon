<script setup lang="ts">
// Set page meta
useHead({
  title: 'Science - Awesome Horizon',
  meta: [
    { name: 'description', content: 'Explore the fundamental laws of nature, from biology to physics. Comprehensive resources for science education.' }
  ]
})
</script>

<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="relative py-12 text-center overflow-hidden">
      <!-- Background Glow -->
      <div class="absolute inset-0 bg-primary-500/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>
      
      <div class="relative z-10">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-primary-400 hover:text-white mb-6 transition-colors text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Categories
        </NuxtLink>
        <h1 class="text-5xl font-bold text-white mb-4">Science</h1>
        <p class="text-xl text-primary-100 max-w-2xl mx-auto">Explore the fundamental laws of nature, from biology to physics. Comprehensive resources for science education.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="prose prose-invert prose-lg max-w-4xl mx-auto pb-16 px-4">
      <div class="space-y-6">
        <h1 class="text-4xl font-bold text-white mb-8">Science Resources</h1>
        
        <div class="grid gap-6">
          <!-- Science Statistics Banner -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div class="group p-6 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl border border-primary-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-primary-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-300"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">2000+</div>
                  <div class="text-xs text-primary-200">Total Resources</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl border border-emerald-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-emerald-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-300"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">50+</div>
                  <div class="text-xs text-emerald-200">Global Institutions</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-blue-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-300"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/><path d="m9 1 3 3 3-3"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">6</div>
                  <div class="text-xs text-blue-200">Science Areas</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-purple-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-300"><polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">2025</div>
                  <div class="text-xs text-purple-200">Latest Content</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Science Overview Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-400"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
              </div>
              Science
            </h2>
            
            <!-- Quick Navigation Cards -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-white mb-4">Science Categories</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                <NuxtLink to="/physics" class="p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all hover:scale-105 group">
                  <div class="text-2xl mb-2 group-hover:scale-110 transition-transform">⚛️</div>
                  <div class="text-sm font-medium text-white">Physics</div>
                  <div class="text-xs text-purple-300">1500+ resources</div>
                </NuxtLink>
                
                <NuxtLink to="/chemistry" class="p-4 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-xl border border-emerald-500/30 hover:border-emerald-400 transition-all hover:scale-105 group">
                  <div class="text-2xl mb-2 group-hover:scale-110 transition-transform">🧪</div>
                  <div class="text-sm font-medium text-white">Chemistry</div>
                  <div class="text-xs text-emerald-300">1000+ resources</div>
                </NuxtLink>
                
                <NuxtLink to="/biology" class="p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-500/30 hover:border-green-400 transition-all hover:scale-105 group">
                  <div class="text-2xl mb-2 group-hover:scale-110 transition-transform">🧬</div>
                  <div class="text-sm font-medium text-white">Biology</div>
                  <div class="text-xs text-green-300">1000+ resources</div>
                </NuxtLink>
                
                <button onclick="document.getElementById('psychology').scrollIntoView({behavior: 'smooth'})" class="p-4 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl border border-pink-500/30 hover:border-pink-400 transition-all hover:scale-105 group">
                  <div class="text-2xl mb-2 group-hover:scale-110 transition-transform">🧠</div>
                  <div class="text-sm font-medium text-white">Psychology</div>
                  <div class="text-xs text-pink-300">100+ resources</div>
                </button>
                
                <button onclick="document.getElementById('environmental-science').scrollIntoView({behavior: 'smooth'})" class="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all hover:scale-105 group">
                  <div class="text-2xl mb-2 group-hover:scale-110 transition-transform">🌍</div>
                  <div class="text-sm font-medium text-white">Environmental</div>
                  <div class="text-xs text-blue-300">150+ resources</div>
                </button>
                
                <button onclick="document.getElementById('astronomy').scrollIntoView({behavior: 'smooth'})" class="p-4 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl border border-indigo-500/30 hover:border-indigo-400 transition-all hover:scale-105 group">
                  <div class="text-2xl mb-2 group-hover:scale-110 transition-transform">🔭</div>
                  <div class="text-sm font-medium text-white">Astronomy</div>
                  <div class="text-xs text-indigo-300">120+ resources</div>
                </button>
              </div>
            </div>
          </div>

        <!-- CHEMISTRY SECTION -->
          <div id="chemistry" class="relative group">
            <!-- Section Divider -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-emerald-400 to-transparent rounded-full opacity-60"></div>
            
            <div class="pl-8 space-y-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl border border-emerald-500/30 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Chemistry</h3>
                    <p class="text-emerald-200 text-sm">Molecular structures and chemical reactions</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                  <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span class="text-xs text-emerald-300 font-medium">8 Resources</span>
                </div>
              </div>
            
            <!-- GitHub-style Branch Network for Chemistry -->
            <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
              <!-- Animated Background Grid -->
              <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
              </div>
              
              <!-- SVG for Clean Branch Lines with Curved Connections -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                <!-- Main vertical branch line for General Chemistry (continuous) -->
                <line x1="120" y1="60" x2="120" y2="200" stroke="#10b981" stroke-width="3"/>
                
                <!-- General Chemistry resource branches with curved junctions -->
                <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#3b82f6" stroke-width="3" fill="none"/>
                <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#f59e0b" stroke-width="3" fill="none"/>
                <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#ef4444" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for General Chemistry branch -->
                <circle cx="120" cy="107" r="4" fill="#8b5cf6"/>
                <circle cx="120" cy="137" r="4" fill="#3b82f6"/>
                <circle cx="120" cy="167" r="4" fill="#f59e0b"/>
                <circle cx="120" cy="197" r="4" fill="#ef4444"/>
                
                <!-- Main vertical branch line for Organic Chemistry (continuous) -->
                <line x1="120" y1="250" x2="120" y2="350" stroke="#8b5cf6" stroke-width="3"/>
                
                <!-- Organic Chemistry resource branches with curved junctions -->
                <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 317 Q 155 317 170 317 L 250 317" stroke="#3b82f6" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for Organic Chemistry branch -->
                <circle cx="120" cy="277" r="4" fill="#10b981"/>
                <circle cx="120" cy="317" r="4" fill="#3b82f6"/>
                
                <!-- Main vertical branch line for Simulations (continuous) -->
                <line x1="120" y1="400" x2="120" y2="500" stroke="#06b6d4" stroke-width="3"/>
                
                <!-- Simulations resource branches with curved junctions -->
                <path d="M 120 427 Q 155 427 170 427 L 250 427" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 467 Q 155 467 170 467 L 250 467" stroke="#10b981" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for Simulations branch -->
                <circle cx="120" cy="427" r="4" fill="#8b5cf6"/>
                <circle cx="120" cy="467" r="4" fill="#10b981"/>
              </svg>
              
              <!-- Main Branch Headers -->
              <!-- General Chemistry Header -->
              <div class="absolute top-[45px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/>
                      <path d="M6.453 15h11.094"/>
                      <path d="M8.5 2h7"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-emerald-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-emerald-500/30">General Chemistry</div>
                </div>
              </div>
              
              <!-- Organic Chemistry Header -->
              <div class="absolute top-[235px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 1.1-.9 2-2 2-.74 0-1.39-.4-1.73-1H14v4a2 2 0 0 1-2 2h-1.28c-.35.6-.98 1-1.72 1-1.1 0-2-.9-2-2 0-.74.4-1.39 1-1.73V14H4a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2 .74 0 1.39.4 1.73 1H8V4a2 2 0 0 1 2-2z"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-purple-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-purple-500/30">Organic Chemistry</div>
                </div>
              </div>
              
              <!-- Simulations Header -->
              <div class="absolute top-[385px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-cyan-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-cyan-500/30">Simulations</div>
                </div>
              </div>
              
              <!-- Individual Resource Nodes -->
              <!-- General Chemistry Resources -->
              <div class="absolute top-[95px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr" target="_blank" class="hover:text-white">CrashCourse Chemistry</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[125px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://chem.libretexts.org/Bookshelves/General_Chemistry" target="_blank" class="hover:text-white">LibreTexts General</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[155px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.youtube.com/user/tdewitt451/featured" target="_blank" class="hover:text-white">Tyler DeWitt</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[185px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.sciencegeek.net/APchemistry/index.shtml" target="_blank" class="hover:text-white">Science Geek AP</a>
                  </div>
                </div>
              </div>
              
              <!-- Organic Chemistry Resources -->
              <div class="absolute top-[265px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.masterorganicchemistry.com/" target="_blank" class="hover:text-white">Master Organic</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[305px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.organicchemistrytutor.com/organic-chemistry-notes/" target="_blank" class="hover:text-white">Organic Tutor</a>
                  </div>
                </div>
              </div>
              
              <!-- Simulations Resources -->
              <div class="absolute top-[415px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://apps.apple.com/app/id1639183447" target="_blank" class="hover:text-white">3DMolecules</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[455px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://phet.colorado.edu/en/simulations/filter?subjects=chemistry&type=html&sort=alpha&view=grid" target="_blank" class="hover:text-white">PhET Chemistry</a>
                  </div>
                </div>
              </div>
              
              <!-- Network Statistics -->
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex items-center justify-between text-sm text-gray-400">
                  <span class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    GitHub-style Branch Network
                  </span>
                  <div class="flex items-center gap-4">
                    <span>3 Main Branches</span>
                    <span>•</span>
                    <span>8 Resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <!-- BIOLOGY SECTION -->
          <div id="biology" class="relative group">
            <!-- Section Divider -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-green-400 to-transparent rounded-full opacity-60"></div>
            
            <div class="pl-8 space-y-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3Z"/><path d="M19 11c-.64-.64-1.84-.84-3-1.2a3.9 3.9 0 0 1-2-2c-.36-1.16-.56-2.36-1.2-3"/><path d="M5 11c.64-.64 1.84-.84 3-1.2a3.9 3.9 0 0 0 2-2c.36-1.16.56-2.36 1.2-3"/><path d="M12 22s4-9 4-13"/><path d="M8 22s-4-9-4-13"/></svg>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Biology</h3>
                    <p class="text-green-200 text-sm">Living organisms and life processes</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-xs text-green-300 font-medium">6 Resources</span>
                </div>
              </div>
            
            <!-- GitHub-style Branch Network for Biology -->
            <div class="relative min-h-[500px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
              <!-- Animated Background Grid -->
              <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
              </div>
              
              <!-- SVG for Clean Branch Lines with Curved Connections -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                <!-- Main vertical branch line for General Biology (continuous) -->
                <line x1="120" y1="60" x2="120" y2="200" stroke="#22c55e" stroke-width="3"/>
                
                <!-- General Biology resource branches with curved junctions -->
                <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#3b82f6" stroke-width="3" fill="none"/>
                <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#f59e0b" stroke-width="3" fill="none"/>
                <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#10b981" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for General Biology branch -->
                <circle cx="120" cy="107" r="4" fill="#8b5cf6"/>
                <circle cx="120" cy="137" r="4" fill="#3b82f6"/>
                <circle cx="120" cy="167" r="4" fill="#f59e0b"/>
                <circle cx="120" cy="197" r="4" fill="#10b981"/>
                
                <!-- Main vertical branch line for Molecular Biology (continuous) -->
                <line x1="120" y1="250" x2="120" y2="350" stroke="#8b5cf6" stroke-width="3"/>
                
                <!-- Molecular Biology resource branches with curved junctions -->
                <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#22c55e" stroke-width="3" fill="none"/>
                <path d="M 120 317 Q 155 317 170 317 L 250 317" stroke="#3b82f6" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for Molecular Biology branch -->
                <circle cx="120" cy="277" r="4" fill="#22c55e"/>
                <circle cx="120" cy="317" r="4" fill="#3b82f6"/>
              </svg>
              
              <!-- Main Branch Headers -->
              <!-- General Biology Header -->
              <div class="absolute top-[45px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3Z"/>
                      <path d="M19 11c-.64-.64-1.84-.84-3-1.2a3.9 3.9 0 0 1-2-2c-.36-1.16-.56-2.36-1.2-3"/>
                      <path d="M5 11c.64-.64 1.84-.84 3-1.2a3.9 3.9 0 0 0 2-2c.36-1.16.56-2.36 1.2-3"/>
                      <path d="M12 22s4-9 4-13"/>
                      <path d="M8 22s-4-9-4-13"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-green-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-green-500/30">General Biology</div>
                </div>
              </div>
              
              <!-- Molecular Biology Header -->
              <div class="absolute top-[235px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 1.1-.9 2-2 2-.74 0-1.39-.4-1.73-1H14v4a2 2 0 0 1-2 2h-1.28c-.35.6-.98 1-1.72 1-1.1 0-2-.9-2-2 0-.74.4-1.39 1-1.73V14H4a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2 .74 0 1.39.4 1.73 1H8V4a2 2 0 0 1 2-2z"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-purple-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-purple-500/30">Molecular Biology</div>
                </div>
              </div>
              
              <!-- Individual Resource Nodes -->
              <!-- General Biology Resources -->
              <div class="absolute top-[95px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.bozemanscience.com/ap-biology" target="_blank" class="hover:text-white">Bozeman AP Bio</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[125px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://library.fiveable.me/ap-bio" target="_blank" class="hover:text-white">AP Bio Fiveable</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[155px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.ixl.com/science/biology" target="_blank" class="hover:text-white">IXL Biology</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[185px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.khanacademy.org/science/biology" target="_blank" class="hover:text-white">Khan Academy</a>
                  </div>
                </div>
              </div>
              
              <!-- Molecular Biology Resources -->
              <div class="absolute top-[265px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-green-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtOAKdwNXeKYFQp6sAI-qw-J" target="_blank" class="hover:text-white">CrashCourse Bio</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[305px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://bio.libretexts.org/" target="_blank" class="hover:text-white">LibreTexts Bio</a>
                  </div>
                </div>
              </div>
              
              <!-- Network Statistics -->
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex items-center justify-between text-sm text-gray-400">
                  <span class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    GitHub-style Branch Network
                  </span>
                  <div class="flex items-center gap-4">
                    <span>2 Main Branches</span>
                    <span>•</span>
                    <span>6 Resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <!-- PSYCHOLOGY SECTION -->
          <div id="psychology" class="relative group">
            <!-- Section Divider -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-pink-400 to-transparent rounded-full opacity-60"></div>
            
            <div class="pl-8 space-y-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded-2xl border border-pink-500/30 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-pink-400"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Psychology</h3>
                    <p class="text-pink-200 text-sm">Human behavior and mental processes</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 px-3 py-1 bg-pink-500/20 rounded-full border border-pink-500/30">
                  <div class="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  <span class="text-xs text-pink-300 font-medium">3 Resources</span>
                </div>
              </div>
            
            <!-- GitHub-style Branch Network for Psychology -->
            <div class="relative min-h-[400px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
              <!-- Animated Background Grid -->
              <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
              </div>
              
              <!-- SVG for Clean Branch Lines with Curved Connections -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                <!-- Main vertical branch line for AP Psychology (continuous) -->
                <line x1="120" y1="60" x2="120" y2="200" stroke="#ec4899" stroke-width="3"/>
                
                <!-- AP Psychology resource branches with curved junctions -->
                <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#3b82f6" stroke-width="3" fill="none"/>
                <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#10b981" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for AP Psychology branch -->
                <circle cx="120" cy="107" r="4" fill="#8b5cf6"/>
                <circle cx="120" cy="137" r="4" fill="#3b82f6"/>
                <circle cx="120" cy="167" r="4" fill="#10b981"/>
              </svg>
              
              <!-- Main Branch Headers -->
              <!-- AP Psychology Header -->
              <div class="absolute top-[45px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-pink-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-pink-500/30">AP Psychology</div>
                </div>
              </div>
              
              <!-- Individual Resource Nodes -->
              <!-- AP Psychology Resources -->
              <div class="absolute top-[95px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6" target="_blank" class="hover:text-white">CrashCourse Psych</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[125px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.crackap.com/ap/psychology/" target="_blank" class="hover:text-white">CrackAP Psych</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[155px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.khanacademy.org/test-prep/mcat/behavior/intro-to-psychology" target="_blank" class="hover:text-white">Khan Academy</a>
                  </div>
                </div>
              </div>
              
              <!-- Network Statistics -->
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex items-center justify-between text-sm text-gray-400">
                  <span class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
                    GitHub-style Branch Network
                  </span>
                  <div class="flex items-center gap-4">
                    <span>1 Main Branch</span>
                    <span>•</span>
                    <span>3 Resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <!-- ENVIRONMENTAL SCIENCE SECTION -->
          <div id="environmental-science" class="relative group">
            <!-- Section Divider -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent rounded-full opacity-60"></div>
            
            <div class="pl-8 space-y-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Environmental Science</h3>
                    <p class="text-blue-200 text-sm">Earth systems and environmental issues</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                  <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span class="text-xs text-blue-300 font-medium">5 Resources</span>
                </div>
              </div>
            
            <!-- GitHub-style Branch Network for Environmental Science -->
            <div class="relative min-h-[500px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
              <!-- Animated Background Grid -->
              <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
              </div>
              
              <!-- SVG for Clean Branch Lines with Curved Connections -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                <!-- Main vertical branch line for AP Environmental Science (continuous) -->
                <line x1="120" y1="60" x2="120" y2="200" stroke="#3b82f6" stroke-width="3"/>
                
                <!-- APES resource branches with curved junctions -->
                <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#f59e0b" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for AP Environmental Science branch -->
                <circle cx="120" cy="107" r="4" fill="#8b5cf6"/>
                <circle cx="120" cy="137" r="4" fill="#10b981"/>
                <circle cx="120" cy="167" r="4" fill="#f59e0b"/>
                
                <!-- Main vertical branch line for Climate Science (continuous) -->
                <line x1="120" y1="250" x2="120" y2="350" stroke="#10b981" stroke-width="3"/>
                
                <!-- Climate Science resource branches with curved junctions -->
                <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#3b82f6" stroke-width="3" fill="none"/>
                <path d="M 120 317 Q 155 317 170 317 L 250 317" stroke="#06b6d4" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for Climate Science branch -->
                <circle cx="120" cy="277" r="4" fill="#3b82f6"/>
                <circle cx="120" cy="317" r="4" fill="#06b6d4"/>
              </svg>
              
              <!-- Main Branch Headers -->
              <!-- AP Environmental Science Header -->
              <div class="absolute top-[45px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                      <path d="M2 12h20"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-blue-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-blue-500/30">AP Environmental</div>
                </div>
              </div>
              
              <!-- Climate Science Header -->
              <div class="absolute top-[235px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14,2 14,8 20,8"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-emerald-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-emerald-500/30">Climate Science</div>
                </div>
              </div>
              
              <!-- Individual Resource Nodes -->
              <!-- AP Environmental Science Resources -->
              <div class="absolute top-[95px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.khanacademy.org/science/ap-college-environmental-science" target="_blank" class="hover:text-white">Khan Academy APES</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[125px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.bozemanscience.com/ap-environmental-science" target="_blank" class="hover:text-white">Bozeman APES</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[155px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://library.fiveable.me/ap-enviro" target="_blank" class="hover:text-white">Fiveable APES</a>
                  </div>
                </div>
              </div>
              
              <!-- Climate Science Resources -->
              <div class="absolute top-[265px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://climate.nasa.gov/evidence/" target="_blank" class="hover:text-white">NASA Climate</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[305px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.noaa.gov/education/resource-collections/climate" target="_blank" class="hover:text-white">NOAA Climate</a>
                  </div>
                </div>
              </div>
              
              <!-- Network Statistics -->
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex items-center justify-between text-sm text-gray-400">
                  <span class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    GitHub-style Branch Network
                  </span>
                  <div class="flex items-center gap-4">
                    <span>2 Main Branches</span>
                    <span>•</span>
                    <span>5 Resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <!-- ASTRONOMY & SPACE SECTION -->
          <div id="astronomy" class="relative group">
            <!-- Section Divider -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-indigo-400 to-transparent rounded-full opacity-60"></div>
            
            <div class="pl-8 space-y-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 rounded-2xl border border-indigo-500/30 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-400"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41-1.41"/><path d="m19.07 4.93-1.41-1.41"/></svg>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Astronomy & Space</h3>
                    <p class="text-indigo-200 text-sm">Universe exploration and space science</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 px-3 py-1 bg-indigo-500/20 rounded-full border border-indigo-500/30">
                  <div class="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                  <span class="text-xs text-indigo-300 font-medium">7 Resources</span>
                </div>
              </div>
            
            <!-- GitHub-style Branch Network for Astronomy -->
            <div class="relative min-h-[500px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
              <!-- Animated Background Grid -->
              <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
              </div>
              
              <!-- SVG for Clean Branch Lines with Curved Connections -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                <!-- Main vertical branch line for Space Science (continuous) -->
                <line x1="120" y1="60" x2="120" y2="200" stroke="#6366f1" stroke-width="3"/>
                
                <!-- Space Science resource branches with curved junctions -->
                <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#3b82f6" stroke-width="3" fill="none"/>
                <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#f59e0b" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for Space Science branch -->
                <circle cx="120" cy="107" r="4" fill="#8b5cf6"/>
                <circle cx="120" cy="137" r="4" fill="#3b82f6"/>
                <circle cx="120" cy="167" r="4" fill="#10b981"/>
                <circle cx="120" cy="197" r="4" fill="#f59e0b"/>
                
                <!-- Main vertical branch line for Interactive Simulations (continuous) -->
                <line x1="120" y1="250" x2="120" y2="370" stroke="#06b6d4" stroke-width="3"/>
                
                <!-- Simulations resource branches with curved junctions -->
                <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#f59e0b" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for Interactive Simulations branch -->
                <circle cx="120" cy="277" r="4" fill="#8b5cf6"/>
                <circle cx="120" cy="307" r="4" fill="#10b981"/>
                <circle cx="120" cy="337" r="4" fill="#f59e0b"/>
              </svg>
              
              <!-- Main Branch Headers -->
              <!-- Space Science Header -->
              <div class="absolute top-[45px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <circle cx="12" cy="12" r="4"/>
                      <path d="M12 2v2"/>
                      <path d="M12 20v2"/>
                      <path d="m4.93 4.93 1.41 1.41"/>
                      <path d="m17.66 17.66 1.41 1.41"/>
                      <path d="M2 12h2"/>
                      <path d="M20 12h2"/>
                      <path d="m6.34 17.66-1.41-1.41"/>
                      <path d="m19.07 4.93-1.41-1.41"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-indigo-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-indigo-500/30">Space Science</div>
                </div>
              </div>
              
              <!-- Interactive Simulations Header -->
              <div class="absolute top-[235px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-cyan-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-cyan-500/30">Simulations</div>
                </div>
              </div>
              
              <!-- Individual Resource Nodes -->
              <!-- Space Science Resources -->
              <div class="absolute top-[95px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://spaceplace.nasa.gov" target="_blank" class="hover:text-white">NASA Space Place</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[125px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.jpl.nasa.gov/edu/learn/tag/search/space+travel" target="_blank" class="hover:text-white">NASA JPL Education</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[155px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://scaleofuniverse.com/" target="_blank" class="hover:text-white">Scale of Universe</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[185px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.esa.int/Education" target="_blank" class="hover:text-white">ESA Education</a>
                  </div>
                </div>
              </div>
              
              <!-- Interactive Simulations Resources -->
              <div class="absolute top-[265px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://phet.colorado.edu/en/simulations/filter?subjects=physics&type=html,prototype" target="_blank" class="hover:text-white">PhET Physics</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[295px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://ophysics.com/index.html" target="_blank" class="hover:text-white">oPhysics Interactive</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[325px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.thephysicsaviary.com" target="_blank" class="hover:text-white">Physics Aviary</a>
                  </div>
                </div>
              </div>
              
              <!-- Network Statistics -->
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex items-center justify-between text-sm text-gray-400">
                  <span class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    GitHub-style Branch Network
                  </span>
                  <div class="flex items-center gap-4">
                    <span>2 Main Branches</span>
                    <span>•</span>
                    <span>7 Resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Custom prose styles for links to match theme */
.prose a {
  color: var(--color-primary-400);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;
}
.prose a:hover {
  color: #fff;
  border-bottom-color: var(--color-primary-400);
}
.prose h2 {
  color: #fff;
  margin-top: 3rem;
  font-size: 1.875rem;
}

/* 3D Space Animations */
@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

.perspective-1000 {
  perspective: 1000px;
}

.transform-gpu {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Enhanced hover effects for 3D elements */
.group:hover .transform-gpu {
  transform: translateZ(10px);
}
</style>