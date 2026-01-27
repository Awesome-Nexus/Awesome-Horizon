<script setup lang="ts">
// Set page meta
useHead({
  title: 'Arts - Awesome Horizon',
  meta: [
    { name: 'description', content: 'Creativity meets technique - Design, Music, Visual Arts, History, and creative expression resources.' }
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
        <h1 class="text-5xl font-bold text-white mb-4">Arts</h1>
        <p class="text-xl text-primary-100 max-w-2xl mx-auto">Creativity meets technique - Design, Music, Visual Arts, History, and creative expression resources.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="prose prose-invert prose-lg max-w-4xl mx-auto pb-16 px-4">
      <div class="space-y-6">
        <h1 class="text-4xl font-bold text-white mb-8">Arts Resources</h1>
        
        <div class="grid gap-6">
          <!-- Arts Statistics Banner -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div class="group p-6 bg-gradient-to-br from-rose-500/20 to-rose-600/20 rounded-2xl border border-rose-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-rose-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-rose-300"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">180+</div>
                  <div class="text-xs text-rose-200">Total Resources</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-purple-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-300"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">25+</div>
                  <div class="text-xs text-purple-200">Art Institutions</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl border border-amber-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-amber-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-300"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/><path d="m9 1 3 3 3-3"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">6</div>
                  <div class="text-xs text-amber-200">Art Categories</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-green-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-300"><polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">2025</div>
                  <div class="text-xs text-green-200">Latest Content</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Arts Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-rose-400"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>
              </div>
              Arts
            </h2>
            
            <!-- Arts Categories Overview -->
            <div class="mb-8 relative">
              <!-- Animated Background -->
              <div class="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-amber-500/10 rounded-2xl blur-xl"></div>
              
              <div class="relative p-8 bg-space-800/40 backdrop-blur-sm rounded-2xl border border-space-700/50 shadow-2xl overflow-hidden">
                <div class="flex items-center justify-between mb-8">
                  <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                    <div class="p-3 bg-gradient-to-br from-rose-500 to-purple-500 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>
                    </div>
                    Arts Learning Journey
                  </h3>
                  <div class="flex items-center gap-2 text-sm text-gray-400">
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    180+ Resources
                  </div>
                </div>
                
                <!-- GitHub-style Branch Network -->
                <div class="relative min-h-[500px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
                  <!-- Animated Background Grid -->
                  <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
                  </div>
                  
                  <!-- SVG for Clean Branch Lines -->
                  <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    <defs>
                      <filter id="glow-arts">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    <!-- Main horizontal branch line -->
                    <line x1="70" y1="235" x2="650" y2="235" stroke="#4a5568" stroke-width="2"/>
                    
                    <!-- Vertical branch lines with curved junctions -->
                    <!-- Visual Arts branch (top) -->
                    <path d="M 170 235 Q 170 195 170 150" stroke="#ec4899" stroke-width="2" fill="none"/>
                    
                    <!-- Digital Arts branch (bottom) -->
                    <path d="M 270 235 Q 270 275 270 320" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                    
                    <!-- Art History branch (top) -->
                    <path d="M 370 235 Q 370 195 370 150" stroke="#f59e0b" stroke-width="2" fill="none"/>
                    
                    <!-- Traditional Arts branch (bottom) -->
                    <path d="M 470 235 Q 470 275 470 320" stroke="#10b981" stroke-width="2" fill="none"/>
                    
                    <!-- Design Innovation branch (top) -->
                    <path d="M 570 235 Q 570 195 570 150" stroke="#3b82f6" stroke-width="2" fill="none"/>
                    
                    <!-- Creative Expression branch (bottom) -->
                    <path d="M 650 235 Q 650 275 650 320" stroke="#f97316" stroke-width="2" fill="none"/>
                  </svg>
                  
                  <!-- Main Branch Nodes (Horizontal Flow) -->
                  <!-- Start -->
                  <div class="absolute top-[235px] left-[70px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="m9 12 2 2 4-4"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Start</div>
                    </div>
                  </div>
                  
                  <!-- Visual Arts -->
                  <div class="absolute top-[235px] left-[170px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('visual-arts').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-rose-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-rose-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Visual Arts</div>
                    </div>
                  </div>
                  
                  <!-- Digital Arts -->
                  <div class="absolute top-[235px] left-[270px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('digital-arts').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <rect width="18" height="18" x="3" y="3" rx="2"/>
                          <path d="M9 9h6v6H9z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Digital Arts</div>
                    </div>
                  </div>
                  
                  <!-- Art History -->
                  <div class="absolute top-[235px] left-[370px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('art-history').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Art History</div>
                    </div>
                  </div>
                  
                  <!-- Traditional Arts -->
                  <div class="absolute top-[235px] left-[470px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('traditional-arts').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M12 20h9"/>
                          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Traditional</div>
                    </div>
                  </div>
                  
                  <!-- Design Innovation -->
                  <div class="absolute top-[235px] left-[570px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('design-innovation').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M9 12l2 2 4-4"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Design</div>
                    </div>
                  </div>
                  
                  <!-- Creative Expression -->
                  <div class="absolute top-[235px] left-[650px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('creative-expression').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-orange-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Creative</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <!-- Visual Arts Section -->
          <div id="visual-arts" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-rose-400"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>
              </div>
              Visual Arts & Painting
            </h2>
            
            <!-- GitHub-style Branch Network for Visual Arts -->
            <div class="relative min-h-[400px] bg-space-900/30 rounded-xl p-6 overflow-hidden mb-8">
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <!-- Main vertical branches -->
                <line x1="100" y1="50" x2="100" y2="350" stroke="#ec4899" stroke-width="3" opacity="0.6"/>
                <line x1="300" y1="50" x2="300" y2="350" stroke="#f97316" stroke-width="3" opacity="0.6"/>
                <line x1="500" y1="50" x2="500" y2="350" stroke="#8b5cf6" stroke-width="3" opacity="0.6"/>
                
                <!-- Horizontal resource branches -->
                <line x1="100" y1="100" x2="250" y2="100" stroke="#ec4899" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="150" x2="250" y2="150" stroke="#ec4899" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="200" x2="250" y2="200" stroke="#ec4899" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="250" x2="250" y2="250" stroke="#ec4899" stroke-width="2" opacity="0.4"/>
                
                <line x1="300" y1="100" x2="450" y2="100" stroke="#f97316" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="150" x2="450" y2="150" stroke="#f97316" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="200" x2="450" y2="200" stroke="#f97316" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="250" x2="450" y2="250" stroke="#f97316" stroke-width="2" opacity="0.4"/>
                
                <line x1="500" y1="100" x2="650" y2="100" stroke="#8b5cf6" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="150" x2="650" y2="150" stroke="#8b5cf6" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="200" x2="650" y2="200" stroke="#8b5cf6" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="250" x2="650" y2="250" stroke="#8b5cf6" stroke-width="2" opacity="0.4"/>
                
                <!-- Junction circles -->
                <circle cx="100" cy="100" r="4" fill="#ec4899"/>
                <circle cx="100" cy="150" r="4" fill="#ec4899"/>
                <circle cx="100" cy="200" r="4" fill="#ec4899"/>
                <circle cx="100" cy="250" r="4" fill="#ec4899"/>
                <circle cx="300" cy="100" r="4" fill="#f97316"/>
                <circle cx="300" cy="150" r="4" fill="#f97316"/>
                <circle cx="300" cy="200" r="4" fill="#f97316"/>
                <circle cx="300" cy="250" r="4" fill="#f97316"/>
                <circle cx="500" cy="100" r="4" fill="#8b5cf6"/>
                <circle cx="500" cy="150" r="4" fill="#8b5cf6"/>
                <circle cx="500" cy="200" r="4" fill="#8b5cf6"/>
                <circle cx="500" cy="250" r="4" fill="#8b5cf6"/>
              </svg>
              
              <!-- Branch Headers -->
              <div class="absolute top-4 left-[70px] text-center">
                <div class="text-sm font-semibold text-rose-300 bg-space-800/80 px-3 py-1 rounded-full border border-rose-500/30">Fundamentals</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-semibold text-orange-300 bg-space-800/80 px-3 py-1 rounded-full border border-orange-500/30">Techniques</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-semibold text-purple-300 bg-space-800/80 px-3 py-1 rounded-full border border-purple-500/30">Advanced</div>
              </div>
              
              <!-- Resource Nodes -->
              <!-- Fundamentals Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://littleneocreative.com/mixingpaint/" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-rose-500/30 rounded-lg p-3 hover:border-rose-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-rose-300 mb-1">Color Theory</div>
                    <div class="text-xs text-gray-300">How to Mix Paint</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://shadingreference.com" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-rose-500/30 rounded-lg p-3 hover:border-rose-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-rose-300 mb-1">Shading</div>
                    <div class="text-xs text-gray-300">Reference Tool</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://cosmolearning.org/topics/drawing/" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-rose-500/30 rounded-lg p-3 hover:border-rose-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-rose-300 mb-1">Drawing</div>
                    <div class="text-xs text-gray-300">CosmoLearning Courses</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/ProkoTV" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-rose-500/30 rounded-lg p-3 hover:border-rose-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-rose-300 mb-1">Figure Drawing</div>
                    <div class="text-xs text-gray-300">Proko Art Tutorials</div>
                  </div>
                </a>
              </div>
              
              <!-- Techniques Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/bluefley00" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Watercolor</div>
                    <div class="text-xs text-gray-300">Mind of Watercolor</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/drawingwiffwaffles" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Art Tips</div>
                    <div class="text-xs text-gray-300">DrawingWiffWaffles</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/FZDSCHOOL" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Character Design</div>
                    <div class="text-xs text-gray-300">FZD School</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/sinixdesign" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Digital Painting</div>
                    <div class="text-xs text-gray-300">Sinix Design</div>
                  </div>
                </a>
              </div>
              
              <!-- Advanced Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/FZDSCHOOL" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Concept Art</div>
                    <div class="text-xs text-gray-300">Professional Techniques</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/FZDSCHOOL" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Environment Art</div>
                    <div class="text-xs text-gray-300">Landscape Painting</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/FZDSCHOOL" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Portfolio</div>
                    <div class="text-xs text-gray-300">Professional Portfolio</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/FZDSCHOOL" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Art Career</div>
                    <div class="text-xs text-gray-300">Industry Insights</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Digital Arts Section -->
          <div id="digital-arts" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/><path d="m9 1 3 3 3-3"/></svg>
              </div>
              Digital Photography & Design
            </h2>
            
            <!-- GitHub-style Branch Network for Digital Arts -->
            <div class="relative min-h-[400px] bg-space-900/30 rounded-xl p-6 overflow-hidden mb-8">
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <!-- Main vertical branches -->
                <line x1="100" y1="50" x2="100" y2="350" stroke="#8b5cf6" stroke-width="3" opacity="0.6"/>
                <line x1="300" y1="50" x2="300" y2="350" stroke="#06b6d4" stroke-width="3" opacity="0.6"/>
                <line x1="500" y1="50" x2="500" y2="350" stroke="#f59e0b" stroke-width="3" opacity="0.6"/>
                
                <!-- Horizontal resource branches -->
                <line x1="100" y1="100" x2="250" y2="100" stroke="#8b5cf6" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="150" x2="250" y2="150" stroke="#8b5cf6" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="200" x2="250" y2="200" stroke="#8b5cf6" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="250" x2="250" y2="250" stroke="#8b5cf6" stroke-width="2" opacity="0.4"/>
                
                <line x1="300" y1="100" x2="450" y2="100" stroke="#06b6d4" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="150" x2="450" y2="150" stroke="#06b6d4" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="200" x2="450" y2="200" stroke="#06b6d4" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="250" x2="450" y2="250" stroke="#06b6d4" stroke-width="2" opacity="0.4"/>
                
                <line x1="500" y1="100" x2="650" y2="100" stroke="#f59e0b" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="150" x2="650" y2="150" stroke="#f59e0b" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="200" x2="650" y2="200" stroke="#f59e0b" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="250" x2="650" y2="250" stroke="#f59e0b" stroke-width="2" opacity="0.4"/>
                
                <!-- Junction circles -->
                <circle cx="100" cy="100" r="4" fill="#8b5cf6"/>
                <circle cx="100" cy="150" r="4" fill="#8b5cf6"/>
                <circle cx="100" cy="200" r="4" fill="#8b5cf6"/>
                <circle cx="100" cy="250" r="4" fill="#8b5cf6"/>
                <circle cx="300" cy="100" r="4" fill="#06b6d4"/>
                <circle cx="300" cy="150" r="4" fill="#06b6d4"/>
                <circle cx="300" cy="200" r="4" fill="#06b6d4"/>
                <circle cx="300" cy="250" r="4" fill="#06b6d4"/>
                <circle cx="500" cy="100" r="4" fill="#f59e0b"/>
                <circle cx="500" cy="150" r="4" fill="#f59e0b"/>
                <circle cx="500" cy="200" r="4" fill="#f59e0b"/>
                <circle cx="500" cy="250" r="4" fill="#f59e0b"/>
              </svg>
              
              <!-- Branch Headers -->
              <div class="absolute top-4 left-[70px] text-center">
                <div class="text-sm font-semibold text-purple-300 bg-space-800/80 px-3 py-1 rounded-full border border-purple-500/30">Photography</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-semibold text-cyan-300 bg-space-800/80 px-3 py-1 rounded-full border border-cyan-500/30">Design Tools</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-semibold text-amber-300 bg-space-800/80 px-3 py-1 rounded-full border border-amber-500/30">3D & Motion</div>
              </div>
              
              <!-- Resource Nodes -->
              <!-- Photography Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://cosmolearning.org/courses/digital-photography-with-marc-levoy/" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Stanford Course</div>
                    <div class="text-xs text-gray-300">Digital Photography</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/DigitalRevCom" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Camera Reviews</div>
                    <div class="text-xs text-gray-300">DigitalRev TV</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/AdoramaTV" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Photo Tutorials</div>
                    <div class="text-xs text-gray-300">Adorama TV</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/PeterMcKinnon" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Creative Photography</div>
                    <div class="text-xs text-gray-300">Peter McKinnon</div>
                  </div>
                </a>
              </div>
              
              <!-- Design Tools Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/tutvid" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-cyan-500/30 rounded-lg p-3 hover:border-cyan-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-cyan-300 mb-1">Photoshop</div>
                    <div class="text-xs text-gray-300">Tutvid Tutorials</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/PhlearnLLC" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-cyan-500/30 rounded-lg p-3 hover:border-cyan-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-cyan-300 mb-1">Design Skills</div>
                    <div class="text-xs text-gray-300">Phlearn</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/TheSkoolRocks" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-cyan-500/30 rounded-lg p-3 hover:border-cyan-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-cyan-300 mb-1">Illustrator</div>
                    <div class="text-xs text-gray-300">The Skool</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://youtu.be/c1ksrjRA678" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-cyan-500/30 rounded-lg p-3 hover:border-cyan-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-cyan-300 mb-1">Industrial Design</div>
                    <div class="text-xs text-gray-300">Delta Faucet</div>
                  </div>
                </a>
              </div>
              
              <!-- 3D & Motion Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/BlenderGuru" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-amber-500/30 rounded-lg p-3 hover:border-amber-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-amber-300 mb-1">3D Modeling</div>
                    <div class="text-xs text-gray-300">Blender Guru</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/ECAbrams" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-amber-500/30 rounded-lg p-3 hover:border-amber-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-amber-300 mb-1">Motion Graphics</div>
                    <div class="text-xs text-gray-300">Evan Abrams</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/videocopilot" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-amber-500/30 rounded-lg p-3 hover:border-amber-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-amber-300 mb-1">After Effects</div>
                    <div class="text-xs text-gray-300">Video Copilot</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/GreyscaleGorilla" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-amber-500/30 rounded-lg p-3 hover:border-amber-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-amber-300 mb-1">Cinema 4D</div>
                    <div class="text-xs text-gray-300">Greyscale Gorilla</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Art History Section -->
          <div id="art-history" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-400"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              Art & Cultural History
            </h2>
            
            <!-- GitHub-style Branch Network for Art History -->
            <div class="relative min-h-[400px] bg-space-900/30 rounded-xl p-6 overflow-hidden mb-8">
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <!-- Main vertical branches -->
                <line x1="100" y1="50" x2="100" y2="350" stroke="#f59e0b" stroke-width="3" opacity="0.6"/>
                <line x1="300" y1="50" x2="300" y2="350" stroke="#dc2626" stroke-width="3" opacity="0.6"/>
                <line x1="500" y1="50" x2="500" y2="350" stroke="#7c3aed" stroke-width="3" opacity="0.6"/>
                
                <!-- Horizontal resource branches -->
                <line x1="100" y1="100" x2="250" y2="100" stroke="#f59e0b" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="150" x2="250" y2="150" stroke="#f59e0b" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="200" x2="250" y2="200" stroke="#f59e0b" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="250" x2="250" y2="250" stroke="#f59e0b" stroke-width="2" opacity="0.4"/>
                
                <line x1="300" y1="100" x2="450" y2="100" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="150" x2="450" y2="150" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="200" x2="450" y2="200" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="250" x2="450" y2="250" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
                
                <line x1="500" y1="100" x2="650" y2="100" stroke="#7c3aed" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="150" x2="650" y2="150" stroke="#7c3aed" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="200" x2="650" y2="200" stroke="#7c3aed" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="250" x2="650" y2="250" stroke="#7c3aed" stroke-width="2" opacity="0.4"/>
                
                <!-- Junction circles -->
                <circle cx="100" cy="100" r="4" fill="#f59e0b"/>
                <circle cx="100" cy="150" r="4" fill="#f59e0b"/>
                <circle cx="100" cy="200" r="4" fill="#f59e0b"/>
                <circle cx="100" cy="250" r="4" fill="#f59e0b"/>
                <circle cx="300" cy="100" r="4" fill="#dc2626"/>
                <circle cx="300" cy="150" r="4" fill="#dc2626"/>
                <circle cx="300" cy="200" r="4" fill="#dc2626"/>
                <circle cx="300" cy="250" r="4" fill="#dc2626"/>
                <circle cx="500" cy="100" r="4" fill="#7c3aed"/>
                <circle cx="500" cy="150" r="4" fill="#7c3aed"/>
                <circle cx="500" cy="200" r="4" fill="#7c3aed"/>
                <circle cx="500" cy="250" r="4" fill="#7c3aed"/>
              </svg>
              
              <!-- Branch Headers -->
              <div class="absolute top-4 left-[70px] text-center">
                <div class="text-sm font-semibold text-amber-300 bg-space-800/80 px-3 py-1 rounded-full border border-amber-500/30">AP History</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-semibold text-red-300 bg-space-800/80 px-3 py-1 rounded-full border border-red-500/30">World History</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-semibold text-violet-300 bg-space-800/80 px-3 py-1 rounded-full border border-violet-500/30">Art Movements</div>
              </div>
              
              <!-- Resource Nodes -->
              <!-- AP History Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://www.youtube.com/@heimlershistory" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-amber-500/30 rounded-lg p-3 hover:border-amber-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-amber-300 mb-1">AP US History</div>
                    <div class="text-xs text-gray-300">Heimler's History</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://www.youtube.com/playlist?app=desktop&list=PLlair5BOIPJaUm7qr07c7J-A_zyt2dH3I" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-amber-500/30 rounded-lg p-3 hover:border-amber-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-amber-300 mb-1">APUSH Reviews</div>
                    <div class="text-xs text-gray-300">10 Minute Reviews</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/crashcourse" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-amber-500/30 rounded-lg p-3 hover:border-amber-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-amber-300 mb-1">AP European</div>
                    <div class="text-xs text-gray-300">Crash Course</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.khanacademy.org/humanities/ap-art-history" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-amber-500/30 rounded-lg p-3 hover:border-amber-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-amber-300 mb-1">AP Art History</div>
                    <div class="text-xs text-gray-300">Khan Academy</div>
                  </div>
                </a>
              </div>
              
              <!-- World History Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/crashcourse" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">World History</div>
                    <div class="text-xs text-gray-300">Crash Course</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/TedEd" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Historical Events</div>
                    <div class="text-xs text-gray-300">TED-Ed</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/HistoryChannel" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Documentaries</div>
                    <div class="text-xs text-gray-300">History Channel</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/OverSimplified" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Simplified History</div>
                    <div class="text-xs text-gray-300">OverSimplified</div>
                  </div>
                </a>
              </div>
              
              <!-- Art Movements Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/smarthistoryvideos" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-violet-500/30 rounded-lg p-3 hover:border-violet-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-violet-300 mb-1">Art History</div>
                    <div class="text-xs text-gray-300">Smarthistory</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/TheArtAssignment" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-violet-500/30 rounded-lg p-3 hover:border-violet-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-violet-300 mb-1">Art Analysis</div>
                    <div class="text-xs text-gray-300">The Art Assignment</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/greatartexplained" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-violet-500/30 rounded-lg p-3 hover:border-violet-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-violet-300 mb-1">Masterpieces</div>
                    <div class="text-xs text-gray-300">Great Art Explained</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://en.wikipedia.org/wiki/Art" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-violet-500/30 rounded-lg p-3 hover:border-violet-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-violet-300 mb-1">What is Art?</div>
                    <div class="text-xs text-gray-300">Wikipedia</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Traditional Arts Section -->
          <div id="traditional-arts" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 3 3"/></svg>
              </div>
              Traditional Arts & Crafts
            </h2>
            
            <!-- GitHub-style Branch Network for Traditional Arts -->
            <div class="relative min-h-[400px] bg-space-900/30 rounded-xl p-6 overflow-hidden mb-8">
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <!-- Main vertical branches -->
                <line x1="100" y1="50" x2="100" y2="350" stroke="#10b981" stroke-width="3" opacity="0.6"/>
                <line x1="300" y1="50" x2="300" y2="350" stroke="#059669" stroke-width="3" opacity="0.6"/>
                <line x1="500" y1="50" x2="500" y2="350" stroke="#047857" stroke-width="3" opacity="0.6"/>
                
                <!-- Horizontal resource branches -->
                <line x1="100" y1="100" x2="250" y2="100" stroke="#10b981" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="150" x2="250" y2="150" stroke="#10b981" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="200" x2="250" y2="200" stroke="#10b981" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="250" x2="250" y2="250" stroke="#10b981" stroke-width="2" opacity="0.4"/>
                
                <line x1="300" y1="100" x2="450" y2="100" stroke="#059669" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="150" x2="450" y2="150" stroke="#059669" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="200" x2="450" y2="200" stroke="#059669" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="250" x2="450" y2="250" stroke="#059669" stroke-width="2" opacity="0.4"/>
                
                <line x1="500" y1="100" x2="650" y2="100" stroke="#047857" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="150" x2="650" y2="150" stroke="#047857" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="200" x2="650" y2="200" stroke="#047857" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="250" x2="650" y2="250" stroke="#047857" stroke-width="2" opacity="0.4"/>
                
                <!-- Junction circles -->
                <circle cx="100" cy="100" r="4" fill="#10b981"/>
                <circle cx="100" cy="150" r="4" fill="#10b981"/>
                <circle cx="100" cy="200" r="4" fill="#10b981"/>
                <circle cx="100" cy="250" r="4" fill="#10b981"/>
                <circle cx="300" cy="100" r="4" fill="#059669"/>
                <circle cx="300" cy="150" r="4" fill="#059669"/>
                <circle cx="300" cy="200" r="4" fill="#059669"/>
                <circle cx="300" cy="250" r="4" fill="#059669"/>
                <circle cx="500" cy="100" r="4" fill="#047857"/>
                <circle cx="500" cy="150" r="4" fill="#047857"/>
                <circle cx="500" cy="200" r="4" fill="#047857"/>
                <circle cx="500" cy="250" r="4" fill="#047857"/>
              </svg>
              
              <!-- Branch Headers -->
              <div class="absolute top-4 left-[70px] text-center">
                <div class="text-sm font-semibold text-green-300 bg-space-800/80 px-3 py-1 rounded-full border border-green-500/30">Calligraphy</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-semibold text-emerald-300 bg-space-800/80 px-3 py-1 rounded-full border border-emerald-500/30">Crafts</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-semibold text-teal-300 bg-space-800/80 px-3 py-1 rounded-full border border-teal-500/30">Cultural Arts</div>
              </div>
              
              <!-- Resource Nodes -->
              <!-- Calligraphy Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://en.wikipedia.org/wiki/Calligraphy" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-500/30 rounded-lg p-3 hover:border-green-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Overview</div>
                    <div class="text-xs text-gray-300">Calligraphy History</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/TheCalligraphyGuy" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-500/30 rounded-lg p-3 hover:border-green-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Modern Calligraphy</div>
                    <div class="text-xs text-gray-300">The Calligraphy Guy</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/PaperPenInk" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-500/30 rounded-lg p-3 hover:border-green-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Hand Lettering</div>
                    <div class="text-xs text-gray-300">Paper Pen Ink</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/JohnNealBookseller" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-500/30 rounded-lg p-3 hover:border-green-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Traditional Scripts</div>
                    <div class="text-xs text-gray-300">John Neal Books</div>
                  </div>
                </a>
              </div>
              
              <!-- Crafts Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/ThreadBanger" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-emerald-500/30 rounded-lg p-3 hover:border-emerald-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-emerald-300 mb-1">DIY Crafts</div>
                    <div class="text-xs text-gray-300">ThreadBanger</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/5MinuteCraftsYT" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-emerald-500/30 rounded-lg p-3 hover:border-emerald-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-emerald-300 mb-1">Quick Crafts</div>
                    <div class="text-xs text-gray-300">5-Minute Crafts</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/AnnieSloan" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-emerald-500/30 rounded-lg p-3 hover:border-emerald-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-emerald-300 mb-1">Chalk Paint</div>
                    <div class="text-xs text-gray-300">Annie Sloan</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/SoCraftastic" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-emerald-500/30 rounded-lg p-3 hover:border-emerald-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-emerald-300 mb-1">Paper Crafts</div>
                    <div class="text-xs text-gray-300">SoCraftastic</div>
                  </div>
                </a>
              </div>
              
              <!-- Cultural Arts Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/AsianBoss" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-teal-500/30 rounded-lg p-3 hover:border-teal-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-teal-300 mb-1">Asian Arts</div>
                    <div class="text-xs text-gray-300">Cultural Traditions</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/NatGeo" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-teal-500/30 rounded-lg p-3 hover:border-teal-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-teal-300 mb-1">Indigenous Arts</div>
                    <div class="text-xs text-gray-300">National Geographic</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/smithsonianchannel" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-teal-500/30 rounded-lg p-3 hover:border-teal-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-teal-300 mb-1">Museum Arts</div>
                    <div class="text-xs text-gray-300">Smithsonian</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/BBCWorldwide" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-teal-500/30 rounded-lg p-3 hover:border-teal-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-teal-300 mb-1">World Arts</div>
                    <div class="text-xs text-gray-300">BBC Documentaries</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Design Innovation Section -->
          <div id="design-innovation" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><path d="M9 12l2 2 4-4"/><path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2h-5L9.293 0.293A1 1 0 0 0 8.586 0H4a2 2 0 0 0-2 2v9c0 .552.448 1 1 1z"/></svg>
              </div>
              Design & Innovation
            </h2>
            
            <!-- GitHub-style Branch Network for Design Innovation -->
            <div class="relative min-h-[400px] bg-space-900/30 rounded-xl p-6 overflow-hidden mb-8">
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <!-- Main vertical branches -->
                <line x1="100" y1="50" x2="100" y2="350" stroke="#3b82f6" stroke-width="3" opacity="0.6"/>
                <line x1="300" y1="50" x2="300" y2="350" stroke="#1d4ed8" stroke-width="3" opacity="0.6"/>
                <line x1="500" y1="50" x2="500" y2="350" stroke="#1e40af" stroke-width="3" opacity="0.6"/>
                
                <!-- Horizontal resource branches -->
                <line x1="100" y1="100" x2="250" y2="100" stroke="#3b82f6" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="150" x2="250" y2="150" stroke="#3b82f6" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="200" x2="250" y2="200" stroke="#3b82f6" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="250" x2="250" y2="250" stroke="#3b82f6" stroke-width="2" opacity="0.4"/>
                
                <line x1="300" y1="100" x2="450" y2="100" stroke="#1d4ed8" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="150" x2="450" y2="150" stroke="#1d4ed8" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="200" x2="450" y2="200" stroke="#1d4ed8" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="250" x2="450" y2="250" stroke="#1d4ed8" stroke-width="2" opacity="0.4"/>
                
                <line x1="500" y1="100" x2="650" y2="100" stroke="#1e40af" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="150" x2="650" y2="150" stroke="#1e40af" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="200" x2="650" y2="200" stroke="#1e40af" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="250" x2="650" y2="250" stroke="#1e40af" stroke-width="2" opacity="0.4"/>
                
                <!-- Junction circles -->
                <circle cx="100" cy="100" r="4" fill="#3b82f6"/>
                <circle cx="100" cy="150" r="4" fill="#3b82f6"/>
                <circle cx="100" cy="200" r="4" fill="#3b82f6"/>
                <circle cx="100" cy="250" r="4" fill="#3b82f6"/>
                <circle cx="300" cy="100" r="4" fill="#1d4ed8"/>
                <circle cx="300" cy="150" r="4" fill="#1d4ed8"/>
                <circle cx="300" cy="200" r="4" fill="#1d4ed8"/>
                <circle cx="300" cy="250" r="4" fill="#1d4ed8"/>
                <circle cx="500" cy="100" r="4" fill="#1e40af"/>
                <circle cx="500" cy="150" r="4" fill="#1e40af"/>
                <circle cx="500" cy="200" r="4" fill="#1e40af"/>
                <circle cx="500" cy="250" r="4" fill="#1e40af"/>
              </svg>
              
              <!-- Branch Headers -->
              <div class="absolute top-4 left-[70px] text-center">
                <div class="text-sm font-semibold text-blue-300 bg-space-800/80 px-3 py-1 rounded-full border border-blue-500/30">Design Thinking</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-semibold text-indigo-300 bg-space-800/80 px-3 py-1 rounded-full border border-indigo-500/30">Innovation</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-semibold text-blue-300 bg-space-800/80 px-3 py-1 rounded-full border border-blue-500/30">UX/UI Design</div>
              </div>
              
              <!-- Resource Nodes -->
              <!-- Design Thinking Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://youtu.be/9uOMectkCCs" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">TED Talk</div>
                    <div class="text-xs text-gray-300">Tony Fadell Design</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/ideo" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">IDEO Design</div>
                    <div class="text-xs text-gray-300">Design Thinking</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/stanforddesignschool" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Stanford d.school</div>
                    <div class="text-xs text-gray-300">Design Methods</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/designcouncil" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Design Council</div>
                    <div class="text-xs text-gray-300">Design Process</div>
                  </div>
                </a>
              </div>
              
              <!-- Innovation Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://archive.org/details/podcast_businessleadership-video_the-art-engineering_1000084846101" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-indigo-500/30 rounded-lg p-3 hover:border-indigo-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-indigo-300 mb-1">James Dyson</div>
                    <div class="text-xs text-gray-300">Art of Engineering</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/TEDtalksDirector" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-indigo-500/30 rounded-lg p-3 hover:border-indigo-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-indigo-300 mb-1">TED Talks</div>
                    <div class="text-xs text-gray-300">Innovation Stories</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/MIT" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-indigo-500/30 rounded-lg p-3 hover:border-indigo-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-indigo-300 mb-1">MIT Innovation</div>
                    <div class="text-xs text-gray-300">Technology Design</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/AppleInc" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-indigo-500/30 rounded-lg p-3 hover:border-indigo-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-indigo-300 mb-1">Apple Design</div>
                    <div class="text-xs text-gray-300">Product Innovation</div>
                  </div>
                </a>
              </div>
              
              <!-- UX/UI Design Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/GoogleDevelopers" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Google Design</div>
                    <div class="text-xs text-gray-300">Material Design</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/AdobeCreativeCloud" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Adobe XD</div>
                    <div class="text-xs text-gray-300">UX Design Tools</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/InVisionApp" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">InVision</div>
                    <div class="text-xs text-gray-300">Prototyping</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/Figmadesign" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Figma</div>
                    <div class="text-xs text-gray-300">Collaborative Design</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Creative Expression Section -->
          <div id="creative-expression" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400"><polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/></svg>
              </div>
              Creative Expression & Performance
            </h2>
            
            <!-- GitHub-style Branch Network for Creative Expression -->
            <div class="relative min-h-[400px] bg-space-900/30 rounded-xl p-6 overflow-hidden mb-8">
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <!-- Main vertical branches -->
                <line x1="100" y1="50" x2="100" y2="350" stroke="#f97316" stroke-width="3" opacity="0.6"/>
                <line x1="300" y1="50" x2="300" y2="350" stroke="#ea580c" stroke-width="3" opacity="0.6"/>
                <line x1="500" y1="50" x2="500" y2="350" stroke="#c2410c" stroke-width="3" opacity="0.6"/>
                
                <!-- Horizontal resource branches -->
                <line x1="100" y1="100" x2="250" y2="100" stroke="#f97316" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="150" x2="250" y2="150" stroke="#f97316" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="200" x2="250" y2="200" stroke="#f97316" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="250" x2="250" y2="250" stroke="#f97316" stroke-width="2" opacity="0.4"/>
                
                <line x1="300" y1="100" x2="450" y2="100" stroke="#ea580c" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="150" x2="450" y2="150" stroke="#ea580c" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="200" x2="450" y2="200" stroke="#ea580c" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="250" x2="450" y2="250" stroke="#ea580c" stroke-width="2" opacity="0.4"/>
                
                <line x1="500" y1="100" x2="650" y2="100" stroke="#c2410c" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="150" x2="650" y2="150" stroke="#c2410c" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="200" x2="650" y2="200" stroke="#c2410c" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="250" x2="650" y2="250" stroke="#c2410c" stroke-width="2" opacity="0.4"/>
                
                <!-- Junction circles -->
                <circle cx="100" cy="100" r="4" fill="#f97316"/>
                <circle cx="100" cy="150" r="4" fill="#f97316"/>
                <circle cx="100" cy="200" r="4" fill="#f97316"/>
                <circle cx="100" cy="250" r="4" fill="#f97316"/>
                <circle cx="300" cy="100" r="4" fill="#ea580c"/>
                <circle cx="300" cy="150" r="4" fill="#ea580c"/>
                <circle cx="300" cy="200" r="4" fill="#ea580c"/>
                <circle cx="300" cy="250" r="4" fill="#ea580c"/>
                <circle cx="500" cy="100" r="4" fill="#c2410c"/>
                <circle cx="500" cy="150" r="4" fill="#c2410c"/>
                <circle cx="500" cy="200" r="4" fill="#c2410c"/>
                <circle cx="500" cy="250" r="4" fill="#c2410c"/>
              </svg>
              
              <!-- Branch Headers -->
              <div class="absolute top-4 left-[70px] text-center">
                <div class="text-sm font-semibold text-orange-300 bg-space-800/80 px-3 py-1 rounded-full border border-orange-500/30">Music & Audio</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-semibold text-orange-300 bg-space-800/80 px-3 py-1 rounded-full border border-orange-500/30">Performance</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-semibold text-orange-300 bg-space-800/80 px-3 py-1 rounded-full border border-orange-500/30">Creative Writing</div>
              </div>
              
              <!-- Resource Nodes -->
              <!-- Music & Audio Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/musictheoryguy" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Music Theory</div>
                    <div class="text-xs text-gray-300">Theory Fundamentals</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/JustinGuitarSongs" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Guitar Lessons</div>
                    <div class="text-xs text-gray-300">JustinGuitar</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/PianoVideoLessons" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Piano Lessons</div>
                    <div class="text-xs text-gray-300">Piano Video Lessons</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/recordingrevolution" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Audio Production</div>
                    <div class="text-xs text-gray-300">Recording Revolution</div>
                  </div>
                </a>
              </div>
              
              <!-- Performance Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/ActingCoachScotland" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Acting Techniques</div>
                    <div class="text-xs text-gray-300">Acting Coach Scotland</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/StagewhisperTV" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Theater Arts</div>
                    <div class="text-xs text-gray-300">Stagewhisper</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/DanceOn" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Dance Tutorials</div>
                    <div class="text-xs text-gray-300">DanceOn</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/ToastmastersIntl" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Public Speaking</div>
                    <div class="text-xs text-gray-300">Toastmasters</div>
                  </div>
                </a>
              </div>
              
              <!-- Creative Writing Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/BrandonSanderson" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Fantasy Writing</div>
                    <div class="text-xs text-gray-300">Brandon Sanderson</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/TEDtalksDirector" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Storytelling</div>
                    <div class="text-xs text-gray-300">TED Talks</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/WritingCooperative" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Writing Tips</div>
                    <div class="text-xs text-gray-300">Writing Cooperative</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/NaNoWriMo" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Novel Writing</div>
                    <div class="text-xs text-gray-300">NaNoWriMo</div>
                  </div>
                </a>
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
</style>