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
          <!-- Physics Statistics Banner -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div class="group p-6 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl border border-primary-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-primary-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-300"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">450+</div>
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
                  <div class="text-2xl font-bold text-white">10</div>
                  <div class="text-xs text-blue-200">Learning Categories</div>
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
          
          <!-- Physics Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
              </div>
              Physics
            </h2>
            
            <!-- Physics Categories Overview -->
            <div class="mb-8 relative">
              <!-- Animated Background -->
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>
              
              <div class="relative p-8 bg-space-800/40 backdrop-blur-sm rounded-2xl border border-space-700/50 shadow-2xl overflow-hidden">
                <div class="flex items-center justify-between mb-8">
                  <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                    <div class="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                    </div>
                    Physics Learning Journey
                  </h3>
                  <div class="flex items-center gap-2 text-sm text-gray-400">
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    450+ Resources
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
                    <!-- Main horizontal branch line -->
                    <line x1="80" y1="250" x2="720" y2="250" stroke="#4a5568" stroke-width="2"/>
                    
                    <!-- Vertical branch lines -->
                    <!-- Regional branch (top) -->
                    <path d="M 180 250 Q 180 200 180 150" stroke="#14b8a6" stroke-width="2" fill="none"/>
                    
                    <!-- Specialized branch (bottom) -->
                    <path d="M 280 250 Q 280 320 280 370" stroke="#ec4899" stroke-width="2" fill="none"/>
                    
                    <!-- Applied branch (top) -->
                    <path d="M 480 250 Q 480 200 480 150" stroke="#f97316" stroke-width="2" fill="none"/>
                    
                    <!-- Community branch (bottom) -->
                    <path d="M 580 250 Q 580 320 580 370" stroke="#22c55e" stroke-width="2" fill="none"/>
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
                  
                  <!-- Foundations -->
                  <div class="absolute top-[235px] left-[170px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('foundations').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Foundations</div>
                    </div>
                  </div>
                  
                  <!-- Institutions -->
                  <div class="absolute top-[235px] left-[270px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('institutions').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                          <path d="M3 6h18"/>
                          <path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Institutions</div>
                    </div>
                  </div>
                  
                  <!-- Digital -->
                  <div class="absolute top-[235px] left-[370px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('digital').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                          <path d="M12 18h.01"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Digital</div>
                    </div>
                  </div>
                  
                  <!-- Interactive -->
                  <div class="absolute top-[235px] left-[470px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('interactive').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <rect width="18" height="18" x="3" y="3" rx="2"/>
                          <path d="M9 9h6v6H9z"/>
                          <path d="m9 1 3 3 3-3"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Interactive</div>
                    </div>
                  </div>
                  
                  <!-- Advanced -->
                  <div class="absolute top-[235px] left-[570px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('advanced').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Advanced</div>
                    </div>
                  </div>
                  
                  <!-- Competitions -->
                  <div class="absolute top-[235px] left-[670px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('competitions').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                          <path d="M4 22h16"/>
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-yellow-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Competitions</div>
                    </div>
                  </div>
                  
                  <!-- Branch Nodes (Vertical Branches) -->
                  <!-- Regional (top branch) -->
                  <div class="absolute top-[135px] left-[170px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('regional').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                          <path d="M2 12h20"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-teal-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Regional</div>
                    </div>
                  </div>
                  
                  <!-- Specialized (bottom branch) -->
                  <div class="absolute top-[355px] left-[270px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('specialized').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-pink-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Specialized</div>
                    </div>
                  </div>
                  
                  <!-- Applied (top branch) -->
                  <div class="absolute top-[135px] left-[470px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('applied').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-orange-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Applied</div>
                    </div>
                  </div>
                  
                  <!-- Community (bottom branch) -->
                  <div class="absolute top-[355px] left-[570px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('community').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.78-7.78 5.5 5.5 0 0 1 7.78 7.78Z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Community</div>
                    </div>
                  </div>
                </div>
                
                <!-- Interactive Legend -->
                <div class="mt-6 pt-4 border-t border-space-700/50">
                  <div class="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-gray-500 rounded-full"></div>
                      Clean GitHub-style Branch Network
                    </span>
                    <div class="flex items-center gap-4">
                      <span>Click any node to explore that section</span>
                    </div>
                  </div>
                  
                  <!-- Network Statistics -->
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div class="flex items-center gap-2 p-2 bg-space-800/30 rounded-lg">
                      <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span class="text-gray-300">Main Branch Flow</span>
                    </div>
                    <div class="flex items-center gap-2 p-2 bg-space-800/30 rounded-lg">
                      <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span class="text-gray-300">Clean Connections</span>
                    </div>
                    <div class="flex items-center gap-2 p-2 bg-space-800/30 rounded-lg">
                      <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span class="text-gray-300">10 Categories</span>
                    </div>
                    <div class="flex items-center gap-2 p-2 bg-space-800/30 rounded-lg">
                      <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">No Overlapping</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating Category Navigation -->
            <div class="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
              <div class="bg-space-900/80 backdrop-blur-md rounded-2xl border border-space-700/50 p-4 shadow-2xl">
                <div class="space-y-3">
                  <div class="text-xs text-gray-400 font-medium mb-3">Quick Navigation</div>
                  
                  <a href="#foundations" class="group flex items-center gap-2 p-2 rounded-lg hover:bg-primary-500/20 transition-colors">
                    <div class="w-2 h-2 bg-primary-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span class="text-xs text-gray-300 group-hover:text-white">Foundations</span>
                  </a>
                  
                  <a href="#institutions" class="group flex items-center gap-2 p-2 rounded-lg hover:bg-emerald-500/20 transition-colors">
                    <div class="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span class="text-xs text-gray-300 group-hover:text-white">Institutions</span>
                  </a>
                  
                  <a href="#digital" class="group flex items-center gap-2 p-2 rounded-lg hover:bg-blue-500/20 transition-colors">
                    <div class="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span class="text-xs text-gray-300 group-hover:text-white">Digital</span>
                  </a>
                  
                  <a href="#interactive" class="group flex items-center gap-2 p-2 rounded-lg hover:bg-purple-500/20 transition-colors">
                    <div class="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span class="text-xs text-gray-300 group-hover:text-white">Interactive</span>
                  </a>
                  
                  <a href="#advanced" class="group flex items-center gap-2 p-2 rounded-lg hover:bg-red-500/20 transition-colors">
                    <div class="w-2 h-2 bg-red-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span class="text-xs text-gray-300 group-hover:text-white">Advanced</span>
                  </a>
                  
                  <a href="#competitions" class="group flex items-center gap-2 p-2 rounded-lg hover:bg-yellow-500/20 transition-colors">
                    <div class="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span class="text-xs text-gray-300 group-hover:text-white">Competitions</span>
                  </a>
                  
                  <a href="#regional" class="group flex items-center gap-2 p-2 rounded-lg hover:bg-cyan-500/20 transition-colors">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span class="text-xs text-gray-300 group-hover:text-white">Regional</span>
                  </a>
                  
                  <a href="#specialized" class="group flex items-center gap-2 p-2 rounded-lg hover:bg-pink-500/20 transition-colors">
                    <div class="w-2 h-2 bg-pink-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span class="text-xs text-gray-300 group-hover:text-white">Specialized</span>
                  </a>
                  
                  <a href="#applied" class="group flex items-center gap-2 p-2 rounded-lg hover:bg-orange-500/20 transition-colors">
                    <div class="w-2 h-2 bg-orange-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span class="text-xs text-gray-300 group-hover:text-white">Applied</span>
                  </a>
                  
                  <a href="#community" class="group flex items-center gap-2 p-2 rounded-lg hover:bg-green-500/20 transition-colors">
                    <div class="w-2 h-2 bg-green-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span class="text-xs text-gray-300 group-hover:text-white">Community</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="space-y-8">
              <!-- FOUNDATIONS SECTION -->
              <div id="foundations" class="relative group">
                <!-- Section Divider -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-primary-400 to-transparent rounded-full opacity-60"></div>
                
                <div class="pl-8 space-y-6">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl border border-primary-500/30 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-400"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                      <div>
                        <h3 class="text-2xl font-bold text-white">Foundations</h3>
                        <p class="text-primary-200 text-sm">Building blocks of physics knowledge</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-1 bg-primary-500/20 rounded-full border border-primary-500/30">
                      <div class="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                      <span class="text-xs text-primary-300 font-medium">12 Resources</span>
                    </div>
                  </div>
                
                <!-- GitHub-style Branch Network for Foundations -->
                <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
                  <!-- Animated Background Grid -->
                  <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
                  </div>
                  
                  <!-- SVG for Clean Branch Lines with Curved Connections -->
                  <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    <!-- Main vertical branch line for Introduction to Physics (continuous) -->
                    <line x1="120" y1="60" x2="120" y2="200" stroke="#6366f1" stroke-width="3"/>
                    
                    <!-- Individual resource branches with very pronounced curved junctions -->
                    <!-- Map of Physics branch with bigger curve -->
                    <path d="M 120 107 Q 155 107 170 107 L 214 107" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                    
                    <!-- What is Science branch with bigger curve -->
                    <path d="M 120 137 Q 155 137 170 137 L 214 137" stroke="#10b981" stroke-width="2" fill="none"/>
                    
                    <!-- HyperPhysics branch with bigger curve -->
                    <path d="M 120 167 Q 155 167 170 167 L 214 167" stroke="#f59e0b" stroke-width="2" fill="none"/>
                    
                    <!-- Khan Academy branch with bigger curve -->
                    <path d="M 120 197 Q 155 197 170 197 L 214 197" stroke="#ef4444" stroke-width="2" fill="none"/>
                    
                    <!-- Main vertical branch line for Textbooks (continuous) -->
                    <line x1="120" y1="230" x2="120" y2="370" stroke="#10b981" stroke-width="3"/>
                    
                    <!-- Textbook resource branches with very pronounced curved junctions -->
                    <!-- Feynman Lectures branch with bigger curve -->
                    <path d="M 120 267 Q 155 267 170 267 L 214 267" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                    
                    <!-- OpenStax College Physics branch with bigger curve -->
                    <path d="M 120 297 Q 155 297 170 297 L 214 297" stroke="#3b82f6" stroke-width="2" fill="none"/>
                    
                    <!-- OpenStax University Physics branch with bigger curve -->
                    <path d="M 120 327 Q 155 327 170 327 L 214 327" stroke="#06b6d4" stroke-width="2" fill="none"/>
                    
                    <!-- Best Physics Courses branch with bigger curve -->
                    <path d="M 120 357 Q 155 357 170 357 L 214 357" stroke="#f59e0b" stroke-width="2" fill="none"/>
                    
                    <!-- Main vertical branch line for AP & College (continuous) -->
                    <line x1="120" y1="400" x2="120" y2="540" stroke="#3b82f6" stroke-width="3"/>
                    
                    <!-- AP Physics resource branches with very pronounced curved junctions -->
                    <!-- Flipping Physics branch with bigger curve -->
                    <path d="M 120 437 Q 155 437 170 437 L 214 437" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                    
                    <!-- Physics Classroom branch with bigger curve -->
                    <path d="M 120 467 Q 155 467 170 467 L 214 467" stroke="#10b981" stroke-width="2" fill="none"/>
                    
                    <!-- Bozeman Physics branch with bigger curve -->
                    <path d="M 120 497 Q 155 497 170 497 L 214 497" stroke="#f59e0b" stroke-width="2" fill="none"/>
                    
                    <!-- AP Physics Examples branch with bigger curve -->
                    <path d="M 120 527 Q 155 527 170 527 L 214 527" stroke="#ef4444" stroke-width="2" fill="none"/>
                  </svg>
                  
                  <!-- Main Branch Headers -->
                  <!-- Introduction to Physics Header -->
                  <div class="absolute top-[45px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-primary-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="m9 12 2 2 4-4"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-primary-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-primary-500/30">Introduction to Physics</div>
                    </div>
                  </div>
                  
                  <!-- Textbooks Header -->
                  <div class="absolute top-[200px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-emerald-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-emerald-500/30">World-Class Textbooks</div>
                    </div>
                  </div>
                  
                  <!-- AP & College Header -->
                  <div class="absolute top-[370px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.87 2 9l6.91-1.74L12 2z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-blue-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-blue-500/30">AP & College Physics</div>
                    </div>
                  </div>
                  
                  <!-- Individual Resource Nodes -->
                  <!-- Introduction to Physics Resources -->
                  <div class="absolute top-[95px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://youtu.be/ZihywtixUYo" target="_blank" class="hover:text-white">Map of Physics</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[125px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://youtu.be/TclBJZuUAOY" target="_blank" class="hover:text-white">What is Science?</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[155px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="http://hyperphysics.phy-astr.gsu.edu/hbase/hph.html" target="_blank" class="hover:text-white">HyperPhysics</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[185px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.khanacademy.org/science/physics" target="_blank" class="hover:text-white">Khan Academy</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Textbook Resources -->
                  <div class="absolute top-[255px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.feynmanlectures.caltech.edu/" target="_blank" class="hover:text-white">Feynman Lectures</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[285px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://openstax.org/details/books/college-physics-2e" target="_blank" class="hover:text-white">OpenStax College</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[315px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://openstax.org/details/books/university-physics-volume-1" target="_blank" class="hover:text-white">OpenStax University</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[345px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.classcentral.com/report/best-physics-courses/" target="_blank" class="hover:text-white">Best Courses</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- AP & College Resources -->
                  <div class="absolute top-[425px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.flippingphysics.com/ap-physics-1.html" target="_blank" class="hover:text-white">Flipping Physics</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[455px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.physicsclassroom.com/class" target="_blank" class="hover:text-white">Physics Classroom</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[485px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.bozemanscience.com/ap-physics-1-video-list" target="_blank" class="hover:text-white">Bozeman Physics</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[515px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.collegevine.com/faq/14989/ap-physics-example-problems" target="_blank" class="hover:text-white">AP Examples</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Network Statistics -->
                  <div class="absolute bottom-4 left-4 right-4">
                    <div class="flex items-center justify-between text-sm text-gray-400">
                      <span class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                        GitHub-style Branch Network
                      </span>
                      <div class="flex items-center gap-4">
                        <span>3 Main Branches</span>
                        <span>•</span>
                        <span>12 Resources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <!-- INSTITUTIONS SECTION -->
              <div id="institutions" class="relative group">
                <!-- Section Divider -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-emerald-400 to-transparent rounded-full opacity-60"></div>
                
                <div class="pl-8 space-y-6">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl border border-emerald-500/30 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                      <div>
                        <h3 class="text-2xl font-bold text-white">Institutions</h3>
                        <p class="text-emerald-200 text-sm">World-class physics education</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                      <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span class="text-xs text-emerald-300 font-medium">12 Resources</span>
                    </div>
                  </div>
                
                <!-- GitHub-style Branch Network for Institutions -->
                <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
                  <!-- Animated Background Grid -->
                  <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
                  </div>
                  
                  <!-- SVG for Clean Branch Lines with Curved Connections -->
                  <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    <!-- Main vertical branch line for MIT OpenCourseWare (continuous) -->
                    <line x1="120" y1="60" x2="120" y2="200" stroke="#10b981" stroke-width="3"/>
                    
                    <!-- MIT resource branches with curved junctions -->
                    <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#3b82f6" stroke-width="3" fill="none"/>
                    <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for Top Universities (continuous) -->
                    <line x1="120" y1="250" x2="120" y2="370" stroke="#3b82f6" stroke-width="3"/>
                    
                    <!-- University resource branches with curved junctions -->
                    <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#ef4444" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for European Programs (continuous) -->
                    <line x1="120" y1="420" x2="120" y2="540" stroke="#ec4899" stroke-width="3"/>
                    
                    <!-- European resource branches with curved junctions -->
                    <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
                  </svg>
                  
                  <!-- Main Branch Headers -->
                  <!-- MIT OpenCourseWare Header -->
                  <div class="absolute top-[45px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-emerald-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-emerald-500/30">MIT OpenCourseWare</div>
                    </div>
                  </div>
                  
                  <!-- Top Universities Header -->
                  <div class="absolute top-[235px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.87 2 9l6.91-1.74L12 2z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-blue-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-blue-500/30">Top Universities</div>
                    </div>
                  </div>
                  
                  <!-- European Programs Header -->
                  <div class="absolute top-[405px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-pink-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                          <path d="M2 12h20"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-pink-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-pink-500/30">European Programs</div>
                    </div>
                  </div>
                  
                  <!-- Individual Resource Nodes -->
                  <!-- MIT Resources -->
                  <div class="absolute top-[95px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" target="_blank" class="hover:text-white">Classical Mechanics</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[125px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/" target="_blank" class="hover:text-white">Electricity & Magnetism</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[155px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/" target="_blank" class="hover:text-white">Thermodynamics</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[185px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://blossoms.mit.edu/resources/physics_resources" target="_blank" class="hover:text-white">BLOSSOMS Resources</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- University Resources -->
                  <div class="absolute top-[265px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://physics.stanford.edu/academics/graduate-students/graduate-resources/physics-education-resources" target="_blank" class="hover:text-white">Stanford Physics</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[295px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="http://web.mit.edu/physics/" target="_blank" class="hover:text-white">MIT Physics Dept</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[325px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://helpacads.com/worlds-tops-physics-universities/" target="_blank" class="hover:text-white">Top Universities 2024</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[355px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://stilt.com/schools/best-physics-schools/" target="_blank" class="hover:text-white">Best Physics Schools</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- European Resources -->
                  <div class="absolute top-[435px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://home.web.cern.ch/summer-student-programme" target="_blank" class="hover:text-white">CERN Summer Program</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[465px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://cms.cern/interact-with-cms/cms-physics-masterclass" target="_blank" class="hover:text-white">CMS Masterclass</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[495px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://cas.web.cern.ch/" target="_blank" class="hover:text-white">CERN Accelerator School</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[525px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://eps.site-ym.com/page/edu_resources_eu" target="_blank" class="hover:text-white">European Physics Society</a>
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
                        <span>12 Resources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <!-- DIGITAL LEARNING SECTION -->
              <div id="digital" class="relative group">
                <!-- Section Divider -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent rounded-full opacity-60"></div>
                
                <div class="pl-8 space-y-6">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                      <div>
                        <h3 class="text-2xl font-bold text-white">Digital Learning</h3>
                        <p class="text-blue-200 text-sm">Modern digital physics education</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                      <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span class="text-xs text-blue-300 font-medium">12 Resources</span>
                    </div>
                  </div>
                
                <!-- GitHub-style Branch Network for Digital Learning -->
                <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
                  <!-- Animated Background Grid -->
                  <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
                  </div>
                  
                  <!-- SVG for Clean Branch Lines with Curved Connections -->
                  <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    <!-- Main vertical branch line for YouTube Channels (continuous) -->
                    <line x1="120" y1="60" x2="120" y2="200" stroke="#ef4444" stroke-width="3"/>
                    
                    <!-- YouTube resource branches with curved junctions -->
                    <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for Mobile Apps (continuous) -->
                    <line x1="120" y1="250" x2="120" y2="370" stroke="#10b981" stroke-width="3"/>
                    
                    <!-- Mobile Apps resource branches with curved junctions -->
                    <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#3b82f6" stroke-width="3" fill="none"/>
                    <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#ef4444" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for AI-Powered Education (continuous) -->
                    <line x1="120" y1="420" x2="120" y2="540" stroke="#8b5cf6" stroke-width="3"/>
                    
                    <!-- AI Education resource branches with curved junctions -->
                    <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
                  </svg>
                  
                  <!-- Main Branch Headers -->
                  <!-- YouTube Channels Header -->
                  <div class="absolute top-[45px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-red-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                          <path d="m10 15 5-3-5-3z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-red-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-red-500/30">YouTube Channels</div>
                    </div>
                  </div>
                  
                  <!-- Mobile Apps Header -->
                  <div class="absolute top-[235px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                          <path d="M12 18h.01"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-emerald-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-emerald-500/30">Mobile Apps & Games</div>
                    </div>
                  </div>
                  
                  <!-- AI-Powered Education Header -->
                  <div class="absolute top-[405px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M12 2a2 2 0 0 1 1.02.24l7 4a2 2 0 0 1 0 3.52l-7 4a2 2 0 0 1-2.04 0l-7-4a2 2 0 0 1 0-3.52l7-4A2 2 0 0 1 12 2Z"/>
                          <path d="m8 12 4 4 4-4"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-purple-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-purple-500/30">AI-Powered Education</div>
                    </div>
                  </div>
                  
                  <!-- Individual Resource Nodes -->
                  <!-- YouTube Resources -->
                  <div class="absolute top-[95px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.youtube.com/c/3blue1brown" target="_blank" class="hover:text-white">3Blue1Brown</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[125px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.youtube.com/c/veritasium" target="_blank" class="hover:text-white">Veritasium</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[155px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.youtube.com/c/minutephysics" target="_blank" class="hover:text-white">MinutePhysics</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[185px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.youtube.com/c/SciShow" target="_blank" class="hover:text-white">SciShow</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Mobile Apps Resources -->
                  <div class="absolute top-[265px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://technicalustad.com/best-physics-apps/" target="_blank" class="hover:text-white">Best Physics Apps 2025</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[295px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.educationalappstore.com/app/category/physics-apps" target="_blank" class="hover:text-white">Educational App Store</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[325px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://play.google.com/store/apps/details?id=com.physic.physicsapp" target="_blank" class="hover:text-white">Physics Lab School</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[355px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.commonsense.org/education/lists/great-games-for-physics" target="_blank" class="hover:text-white">Physics Games</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- AI Education Resources -->
                  <div class="absolute top-[435px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://scale.stanford.edu/ai/repository/beyond-answers-large-language-model-powered-tutoring-system-physics-education-deep" target="_blank" class="hover:text-white">Physics-STAR (Stanford)</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[465px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://utm.io/uiuow" target="_blank" class="hover:text-white">Harvard AI Study</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[495px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://astra-ai.co/subjects/physics" target="_blank" class="hover:text-white">Astra AI Physics Tutor</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[525px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://slejournal.springeropen.com/articles/10.1186/s40561-023-00273-7" target="_blank" class="hover:text-white">ChatGPT in Physics Education</a>
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
                        <span>3 Main Branches</span>
                        <span>•</span>
                        <span>12 Resources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <!-- INTERACTIVE SECTION -->
              <div id="interactive" class="relative group">
                <!-- Section Divider -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent rounded-full opacity-60"></div>
                
                <div class="pl-8 space-y-6">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/><path d="m9 1 3 3 3-3"/></svg>
                      <div>
                        <h3 class="text-2xl font-bold text-white">Interactive</h3>
                        <p class="text-purple-200 text-sm">Hands-on physics experiences</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                      <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span class="text-xs text-purple-300 font-medium">12 Resources</span>
                    </div>
                  </div>
                
                <!-- GitHub-style Branch Network for Interactive -->
                <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
                  <!-- Animated Background Grid -->
                  <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
                  </div>
                  
                  <!-- SVG for Clean Branch Lines with Curved Connections -->
                  <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    <!-- Main vertical branch line for Simulations & Virtual Labs (continuous) -->
                    <line x1="120" y1="60" x2="120" y2="200" stroke="#3b82f6" stroke-width="3"/>
                    
                    <!-- Simulations resource branches with curved junctions -->
                    <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#ef4444" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for VR/AR/XR Learning (continuous) -->
                    <line x1="120" y1="250" x2="120" y2="370" stroke="#06b6d4" stroke-width="3"/>
                    
                    <!-- VR/AR/XR resource branches with curved junctions -->
                    <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#ef4444" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for DIY Physics & Maker Education (continuous) -->
                    <line x1="120" y1="420" x2="120" y2="540" stroke="#f97316" stroke-width="3"/>
                    
                    <!-- DIY Maker resource branches with curved junctions -->
                    <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
                  </svg>
                  
                  <!-- Main Branch Headers -->
                  <!-- Simulations & Virtual Labs Header -->
                  <div class="absolute top-[45px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <rect width="18" height="18" x="3" y="3" rx="2"/>
                          <path d="M9 9h6v6H9z"/>
                          <path d="m9 1 3 3 3-3"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-blue-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-blue-500/30">Simulations & Virtual Labs</div>
                    </div>
                  </div>
                  
                  <!-- VR/AR/XR Learning Header -->
                  <div class="absolute top-[235px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-cyan-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-cyan-500/30">VR/AR/XR Learning</div>
                    </div>
                  </div>
                  
                  <!-- DIY Physics & Maker Education Header -->
                  <div class="absolute top-[405px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-orange-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-orange-500/30">DIY Physics & Maker</div>
                    </div>
                  </div>
                  
                  <!-- Individual Resource Nodes -->
                  <!-- Simulations Resources -->
                  <div class="absolute top-[95px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://phet.colorado.edu/en/simulations/filter?subjects=physics&type=html,prototype" target="_blank" class="hover:text-white">PhET Physics Simulations</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[125px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://ophysics.com/index.html" target="_blank" class="hover:text-white">oPhysics Interactive</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[155px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.thephysicsaviary.com" target="_blank" class="hover:text-white">The Physics Aviary</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[185px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://sites.google.com/view/afreeparticle/interactives?authuser=0" target="_blank" class="hover:text-white">A Free Particle</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- VR/AR/XR Resources -->
                  <div class="absolute top-[265px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1410163/full" target="_blank" class="hover:text-white">Immersive STEM Education</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[295px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://entechonline.com/ar-vr-xr-and-mixed-reality-the-future-of-learning-science/" target="_blank" class="hover:text-white">Future of Learning Science</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[325px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.un-pub.eu/ojs/index.php/cerj/article/view/9629" target="_blank" class="hover:text-white">AR in Physics Education</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[355px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://ui.adsabs.harvard.edu/abs/arXiv:2311.18392" target="_blank" class="hover:text-white">AR Technology Review</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- DIY Maker Resources -->
                  <div class="absolute top-[435px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.arduino.cc/education/science-kit/" target="_blank" class="hover:text-white">Arduino Science Kit</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[465px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://pubs.aip.org/aapt/pte/article/59/2/134/775917/Implementing-Raspberry-Pi-3-and-Python-in-the" target="_blank" class="hover:text-white">Raspberry Pi in Physics Lab</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[495px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.physicsforums.com/threads/physics-experiments-with-arduino-and-raspberry-pi.1078835/" target="_blank" class="hover:text-white">Physics Experiments Forum</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[525px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://studiousguy.com/physics-project-ideas/" target="_blank" class="hover:text-white">50+ DIY Physics Projects</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Network Statistics -->
                  <div class="absolute bottom-4 left-4 right-4">
                    <div class="flex items-center justify-between text-sm text-gray-400">
                      <span class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                        GitHub-style Branch Network
                      </span>
                      <div class="flex items-center gap-4">
                        <span>3 Main Branches</span>
                        <span>•</span>
                        <span>12 Resources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <!-- ADVANCED SECTION -->
              <div id="advanced" class="relative group">
                <!-- Branch Connector Line -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-400 to-transparent rounded-full opacity-60"></div>
                
                <div class="pl-8 space-y-6">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl border border-red-500/30 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-400"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                      <div>
                        <h3 class="text-2xl font-bold text-white">Advanced</h3>
                        <p class="text-red-200 text-sm">Cutting-edge physics research</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-1 bg-red-500/20 rounded-full border border-red-500/30">
                      <div class="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                      <span class="text-xs text-red-300 font-medium">12 Resources</span>
                    </div>
                  </div>
                
                <!-- GitHub-style Branch Network for Advanced -->
                <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
                  <!-- Animated Background Grid -->
                  <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
                  </div>
                  
                  <!-- SVG for Clean Branch Lines with Curved Connections -->
                  <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    <!-- Main vertical branch line for Quantum Computing (continuous) -->
                    <line x1="120" y1="60" x2="120" y2="200" stroke="#8b5cf6" stroke-width="3"/>
                    
                    <!-- Quantum resource branches with curved junctions -->
                    <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#ef4444" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for Computational Physics (continuous) -->
                    <line x1="120" y1="250" x2="120" y2="370" stroke="#10b981" stroke-width="3"/>
                    
                    <!-- Computational resource branches with curved junctions -->
                    <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#3b82f6" stroke-width="3" fill="none"/>
                    <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#ef4444" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for Research Centers (continuous) -->
                    <line x1="120" y1="420" x2="120" y2="540" stroke="#3b82f6" stroke-width="3"/>
                    
                    <!-- Research resource branches with curved junctions -->
                    <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
                  </svg>
                  
                  <!-- Main Branch Headers -->
                  <!-- Quantum Computing Header -->
                  <div class="absolute top-[45px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M12 2a2 2 0 0 1 1.02.24l7 4a2 2 0 0 1 0 3.52l-7 4a2 2 0 0 1-2.04 0l-7-4a2 2 0 0 1 0-3.52l7-4A2 2 0 0 1 12 2Z"/>
                          <path d="m8 12 4 4 4-4"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-purple-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-purple-500/30">Quantum Computing</div>
                    </div>
                  </div>
                  
                  <!-- Computational Physics Header -->
                  <div class="absolute top-[235px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                          <path d="M12 18h.01"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-emerald-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-emerald-500/30">Computational Physics</div>
                    </div>
                  </div>
                  
                  <!-- Research Centers Header -->
                  <div class="absolute top-[405px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                          <path d="M3 6h18"/>
                          <path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-blue-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-blue-500/30">Research Centers</div>
                    </div>
                  </div>
                  
                  <!-- Individual Resource Nodes -->
                  <!-- Quantum Computing Resources -->
                  <div class="absolute top-[95px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://arxiv.org/html/2505.14809v1" target="_blank" class="hover:text-white">Quantum Computing in High School</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[125px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.exp.science/academy-modules/quantum-computing" target="_blank" class="hover:text-white">Exponential Science Academy</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[155px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://epjquantumtechnology.springeropen.com/articles/10.1140/epjqt/s40507-024-00271-9" target="_blank" class="hover:text-white">Hands-on Quantum Computing</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[185px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.spinquanta.com/news-detail/quantum-computing-education-the-complete-guide-to-building-tomorrow's-quantum-workforce" target="_blank" class="hover:text-white">Quantum Workforce</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Computational Physics Resources -->
                  <div class="absolute top-[265px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://arxiv.org/html/2408.01844v1" target="_blank" class="hover:text-white">Computational Physics Ground Up</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[295px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.sciencebuddies.org/blog/arduino-science-projects" target="_blank" class="hover:text-white">Arduino Physics Projects</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[325px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="http://www.sciencebuddies.org/blog/next-level-maker-space-projects" target="_blank" class="hover:text-white">Makerspace STEM Projects</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[355px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.weareteachers.com/raspberry-pi-projects/" target="_blank" class="hover:text-white">51 Raspberry Pi Projects</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Research Centers Resources -->
                  <div class="absolute top-[435px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://summerstudents.desy.de/" target="_blank" class="hover:text-white">DESY Summer Programme</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[465px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://education.fnal.gov/quarknet/" target="_blank" class="hover:text-white">QuarkNet - Fermilab</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[495px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.desy.de/index_eng.html" target="_blank" class="hover:text-white">DESY Research Center</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[525px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://ar5iv.labs.arxiv.org/html/2203.15128" target="_blank" class="hover:text-white">HEP Technology Transfer</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Network Statistics -->
                  <div class="absolute bottom-4 left-4 right-4">
                    <div class="flex items-center justify-between text-sm text-gray-400">
                      <span class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                        GitHub-style Branch Network
                      </span>
                      <div class="flex items-center gap-4">
                        <span>3 Main Branches</span>
                        <span>•</span>
                        <span>12 Resources</span>
                      </div>
                    </div>
                  </div>
                </div>
                  <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-space-800/60 to-space-900/60 backdrop-blur-sm border border-space-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div class="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
                    </div>
                    
                    <div class="relative p-6">
                      <div class="flex items-start justify-between mb-4">
                        <h4 class="font-bold text-white text-lg flex items-center gap-3 group-hover:text-red-300 transition-colors">
                          <div class="flex items-center gap-2 text-red-400 font-mono text-sm">
                            <span class="w-6 h-6 flex items-center justify-center bg-red-500/20 rounded border border-red-500/30">├</span>
                          </div>
                          Quantum Computing & Emerging Technologies
                        </h4>
                        <div class="px-2 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                          <span class="text-xs text-purple-300 font-medium">Quantum</span>
                        </div>
                      </div>
                      
                      <p class="text-gray-400 text-sm mb-4 leading-relaxed">Cutting-edge physics education in quantum computing and nanotechnology.</p>
                      
                      <div class="space-y-3">
                        <a href="https://arxiv.org/html/2505.14809v1" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-red-500/30">
                          <div class="w-2 h-2 bg-red-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-red-400 hover:text-white transition-colors text-sm flex-1">Introducing Quantum Computing to High-School Curricula</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-red-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://www.exp.science/academy-modules/quantum-computing" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-red-500/30">
                          <div class="w-2 h-2 bg-red-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-red-400 hover:text-white transition-colors text-sm flex-1">Exponential Science Academy - Quantum Computing</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-red-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://epjquantumtechnology.springeropen.com/articles/10.1140/epjqt/s40507-024-00271-9" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-red-500/30">
                          <div class="w-2 h-2 bg-red-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-red-400 hover:text-white transition-colors text-sm flex-1">Hands-on Quantum Computing for High School Students</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-red-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://www.spinquanta.com/news-detail/quantum-computing-education-the-complete-guide-to-building-tomorrow's-quantum-workforce" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-red-500/30">
                          <div class="w-2 h-2 bg-red-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-red-400 hover:text-white transition-colors text-sm flex-1">Building Tomorrow's Quantum Workforce</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-red-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-space-800/60 to-space-900/60 backdrop-blur-sm border border-space-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div class="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
                    </div>
                    
                    <div class="relative p-6">
                      <div class="flex items-start justify-between mb-4">
                        <h4 class="font-bold text-white text-lg flex items-center gap-3 group-hover:text-red-300 transition-colors">
                          <div class="flex items-center gap-2 text-red-400 font-mono text-sm">
                            <span class="w-6 h-6 flex items-center justify-center bg-red-500/20 rounded border border-red-500/30">├</span>
                          </div>
                          Computational Physics & Programming
                        </h4>
                        <div class="px-2 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                          <span class="text-xs text-green-300 font-medium">Code</span>
                        </div>
                      </div>
                      
                      <p class="text-gray-400 text-sm mb-4 leading-relaxed">Learn physics through computational methods and programming.</p>
                      
                      <div class="space-y-3">
                        <a href="https://arxiv.org/html/2408.01844v1" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-red-500/30">
                          <div class="w-2 h-2 bg-red-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-red-400 hover:text-white transition-colors text-sm flex-1">Implementing Computational Physics from Ground Up</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-red-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://www.sciencebuddies.org/blog/arduino-science-projects" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-red-500/30">
                          <div class="w-2 h-2 bg-red-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-red-400 hover:text-white transition-colors text-sm flex-1">Arduino Projects for Physical Computing</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-red-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="http://www.sciencebuddies.org/blog/next-level-maker-space-projects" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-red-500/30">
                          <div class="w-2 h-2 bg-red-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-red-400 hover:text-white transition-colors text-sm flex-1">Next-Level Makerspace STEM Projects</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-red-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://www.weareteachers.com/raspberry-pi-projects/" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-red-500/30">
                          <div class="w-2 h-2 bg-red-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-red-400 hover:text-white transition-colors text-sm flex-1">51 Raspberry Pi Projects for Education</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-red-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-space-800/60 to-space-900/60 backdrop-blur-sm border border-space-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div class="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
                    </div>
                    
                    <div class="relative p-6">
                      <div class="flex items-start justify-between mb-4">
                        <h4 class="font-bold text-white text-lg flex items-center gap-3 group-hover:text-red-300 transition-colors">
                          <div class="flex items-center gap-2 text-red-400 font-mono text-sm">
                            <span class="w-6 h-6 flex items-center justify-center bg-red-500/20 rounded border border-red-500/30">└</span>
                          </div>
                          International Physics Research Centers
                        </h4>
                        <div class="px-2 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                          <span class="text-xs text-blue-300 font-medium">Research</span>
                        </div>
                      </div>
                      
                      <p class="text-gray-400 text-sm mb-4 leading-relaxed">Educational programs from world's leading physics research institutions.</p>
                      
                      <div class="space-y-3">
                        <a href="https://summerstudents.desy.de/" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-red-500/30">
                          <div class="w-2 h-2 bg-red-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-red-400 hover:text-white transition-colors text-sm flex-1">DESY Summer Student Programme (Germany)</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-red-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://education.fnal.gov/quarknet/" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-red-500/30">
                          <div class="w-2 h-2 bg-red-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-red-400 hover:text-white transition-colors text-sm flex-1">QuarkNet - Fermilab Education Program</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-red-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://www.desy.de/index_eng.html" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-red-500/30">
                          <div class="w-2 h-2 bg-red-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-red-400 hover:text-white transition-colors text-sm flex-1">DESY - Deutsches Elektronen-Synchrotron</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-red-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://ar5iv.labs.arxiv.org/html/2203.15128" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-red-500/30">
                          <div class="w-2 h-2 bg-red-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-red-400 hover:text-white transition-colors text-sm flex-1">HEP Laboratory Technology Transfer Programs</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-red-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <!-- COMPETITIONS SECTION -->
              <div id="competitions" class="relative group">
                <!-- Branch Connector Line -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-yellow-400 to-transparent rounded-full opacity-60"></div>
                
                <div class="pl-8 space-y-6">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-2xl border border-yellow-500/30 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                      <div>
                        <h3 class="text-2xl font-bold text-white">Competitions</h3>
                        <p class="text-yellow-200 text-sm">Physics contests & olympiads</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-1 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                      <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span class="text-xs text-yellow-300 font-medium">12 Resources</span>
                    </div>
                  </div>
                
                <!-- GitHub-style Branch Network for Competitions -->
                <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
                  <!-- Animated Background Grid -->
                  <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
                  </div>
                  
                  <!-- SVG for Clean Branch Lines with Curved Connections -->
                  <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    <!-- Main vertical branch line for International Olympiads (continuous) -->
                    <line x1="120" y1="60" x2="120" y2="200" stroke="#f59e0b" stroke-width="3"/>
                    
                    <!-- Olympiad resource branches with curved junctions -->
                    <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#3b82f6" stroke-width="3" fill="none"/>
                    <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#ef4444" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for National Competitions (continuous) -->
                    <line x1="120" y1="250" x2="120" y2="370" stroke="#10b981" stroke-width="3"/>
                    
                    <!-- National resource branches with curved junctions -->
                    <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#3b82f6" stroke-width="3" fill="none"/>
                    <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#ef4444" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for Problem Solving (continuous) -->
                    <line x1="120" y1="420" x2="120" y2="540" stroke="#3b82f6" stroke-width="3"/>
                    
                    <!-- Problem solving resource branches with curved junctions -->
                    <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
                  </svg>
                  
                  <!-- Main Branch Headers -->
                  <!-- International Olympiads Header -->
                  <div class="absolute top-[45px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-amber-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                          <path d="M4 22h16"/>
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-amber-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-amber-500/30">International Olympiads</div>
                    </div>
                  </div>
                  
                  <!-- National Competitions Header -->
                  <div class="absolute top-[235px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                          <path d="M2 12h20"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-emerald-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-emerald-500/30">National Competitions</div>
                    </div>
                  </div>
                  
                  <!-- Problem Solving Header -->
                  <div class="absolute top-[405px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M9 12l2 2 4-4"/>
                          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                          <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                          <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-blue-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-blue-500/30">Problem Solving</div>
                    </div>
                  </div>
                  
                  <!-- Individual Resource Nodes -->
                  <!-- International Olympiads Resources -->
                  <div class="absolute top-[95px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.ioc.ee/~kalda/ipho/" target="_blank" class="hover:text-white">International Physics Olympiad</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[125px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.aapt.org/physicsteam/2025/home.cfm" target="_blank" class="hover:text-white">USA Physics Team 2025</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[155px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.aapt.org/physicsbowl/" target="_blank" class="hover:text-white">Physics Bowl Competition</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[185px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.f-ma.org/" target="_blank" class="hover:text-white">F=ma Contest (AAPT)</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- National Competitions Resources -->
                  <div class="absolute top-[265px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.usapho.org/" target="_blank" class="hover:text-white">USA Physics Olympiad</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[295px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.aapt.org/programs/contests/" target="_blank" class="hover:text-white">AAPT Physics Contests</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[325px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.scienceolympiad.org/" target="_blank" class="hover:text-white">Science Olympiad</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[355px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.physicscentral.com/explore/contests.cfm" target="_blank" class="hover:text-white">Physics Central Contests</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Problem Solving Resources -->
                  <div class="absolute top-[435px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.physicsforums.com/" target="_blank" class="hover:text-white">Physics Forums</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[465px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://brilliant.org/courses/physics/" target="_blank" class="hover:text-white">Brilliant Physics Courses</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[495px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.reddit.com/r/AskPhysics/" target="_blank" class="hover:text-white">r/AskPhysics Community</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[525px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://physics.stackexchange.com/" target="_blank" class="hover:text-white">Physics Stack Exchange</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Network Statistics -->
                  <div class="absolute bottom-4 left-4 right-4">
                    <div class="flex items-center justify-between text-sm text-gray-400">
                      <span class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        GitHub-style Branch Network
                      </span>
                      <div class="flex items-center gap-4">
                        <span>3 Main Branches</span>
                        <span>•</span>
                        <span>12 Resources</span>
                      </div>
                    </div>
                  </div>
                </div>
                  <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-space-800/60 to-space-900/60 backdrop-blur-sm border border-space-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10">
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div class="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5"></div>
                    </div>
                    
                    <div class="relative p-6">
                      <div class="flex items-start justify-between mb-4">
                        <h4 class="font-bold text-white text-lg flex items-center gap-3 group-hover:text-yellow-300 transition-colors">
                          <div class="flex items-center gap-2 text-yellow-400 font-mono text-sm">
                            <span class="w-6 h-6 flex items-center justify-center bg-yellow-500/20 rounded border border-yellow-500/30">├</span>
                          </div>
                          Physics Olympiads & Competitions
                        </h4>
                        <div class="px-2 py-1 bg-gold-500/20 rounded-full border border-gold-500/30">
                          <span class="text-xs text-gold-300 font-medium">Global</span>
                        </div>
                      </div>
                      
                      <p class="text-gray-400 text-sm mb-4 leading-relaxed">International physics competitions and problem-solving resources.</p>
                      
                      <div class="space-y-3">
                        <a href="https://www.ioc.ee/~kalda/ipho/" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-yellow-500/30">
                          <div class="w-2 h-2 bg-yellow-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-yellow-400 hover:text-white transition-colors text-sm flex-1">International Physics Olympiad (IPhO) Resources</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-yellow-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://www.aapt.org/physicsteam/2025/home.cfm" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-yellow-500/30">
                          <div class="w-2 h-2 bg-yellow-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-yellow-400 hover:text-white transition-colors text-sm flex-1">USA Physics Team 2025</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-yellow-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://www.aapt.org/physicsbowl/" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-yellow-500/30">
                          <div class="w-2 h-2 bg-yellow-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-yellow-400 hover:text-white transition-colors text-sm flex-1">Physics Bowl Competition</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-yellow-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://www.f-ma.org/" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-yellow-500/30">
                          <div class="w-2 h-2 bg-yellow-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-yellow-400 hover:text-white transition-colors text-sm flex-1">F=ma Contest (AAPT)</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-yellow-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-space-800/60 to-space-900/60 backdrop-blur-sm border border-space-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10">
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div class="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5"></div>
                    </div>
                    
                    <div class="relative p-6">
                      <div class="flex items-start justify-between mb-4">
                        <h4 class="font-bold text-white text-lg flex items-center gap-3 group-hover:text-yellow-300 transition-colors">
                          <div class="flex items-center gap-2 text-yellow-400 font-mono text-sm">
                            <span class="w-6 h-6 flex items-center justify-center bg-yellow-500/20 rounded border border-yellow-500/30">└</span>
                          </div>
                          Problem Solving & Practice
                        </h4>
                        <div class="px-2 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                          <span class="text-xs text-blue-300 font-medium">Practice</span>
                        </div>
                      </div>
                      
                      <p class="text-gray-400 text-sm mb-4 leading-relaxed">Physics problem-solving techniques and practice resources.</p>
                      
                      <div class="space-y-3">
                        <a href="https://www.physicsforums.com/" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-yellow-500/30">
                          <div class="w-2 h-2 bg-yellow-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-yellow-400 hover:text-white transition-colors text-sm flex-1">Physics Forums (900,000+ Members)</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-yellow-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://brilliant.org/courses/physics/" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-yellow-500/30">
                          <div class="w-2 h-2 bg-yellow-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-yellow-400 hover:text-white transition-colors text-sm flex-1">Brilliant Physics Courses</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-yellow-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://www.reddit.com/r/AskPhysics/" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-yellow-500/30">
                          <div class="w-2 h-2 bg-yellow-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-yellow-400 hover:text-white transition-colors text-sm flex-1">r/AskPhysics Community</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-yellow-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                        
                        <a href="https://physics.stackexchange.com/" target="_blank" class="group/link flex items-center gap-3 p-3 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-all duration-300 border border-transparent hover:border-yellow-500/30">
                          <div class="w-2 h-2 bg-yellow-400 rounded-full group-hover/link:scale-125 transition-transform"></div>
                          <span class="text-yellow-400 hover:text-white transition-colors text-sm flex-1">Physics Stack Exchange</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 group-hover/link:text-yellow-400 transition-colors"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <!-- REGIONAL EXCELLENCE SECTION -->
              <div id="regional" class="relative group">
                <!-- Section Divider -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-cyan-400 to-transparent rounded-full opacity-60"></div>
                
                <div class="pl-8 space-y-6">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                      <div>
                        <h3 class="text-2xl font-bold text-white">Regional Excellence</h3>
                        <p class="text-cyan-200 text-sm">Global physics education leaders</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-1 bg-cyan-500/20 rounded-full border border-cyan-500/30">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span class="text-xs text-cyan-300 font-medium">12 Resources</span>
                    </div>
                  </div>
                
                <!-- GitHub-style Branch Network for Regional Excellence -->
                <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
                  <!-- Animated Background Grid -->
                  <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
                  </div>
                  
                  <!-- SVG for Clean Branch Lines with Curved Connections -->
                  <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    <!-- Main vertical branch line for Nordic Excellence (continuous) -->
                    <line x1="120" y1="60" x2="120" y2="200" stroke="#14b8a6" stroke-width="3"/>
                    
                    <!-- Nordic resource branches with curved junctions -->
                    <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#3b82f6" stroke-width="3" fill="none"/>
                    <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for Asian Excellence (continuous) -->
                    <line x1="120" y1="250" x2="120" y2="370" stroke="#ef4444" stroke-width="3"/>
                    
                    <!-- Asian resource branches with curved junctions -->
                    <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for CERN Global Programs (continuous) -->
                    <line x1="120" y1="420" x2="120" y2="540" stroke="#22c55e" stroke-width="3"/>
                    
                    <!-- CERN resource branches with curved junctions -->
                    <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
                  </svg>
                  
                  <!-- Main Branch Headers -->
                  <!-- Nordic Excellence Header -->
                  <div class="absolute top-[45px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-teal-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                          <path d="M2 12h20"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-teal-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-teal-500/30">Nordic Excellence</div>
                    </div>
                  </div>
                  
                  <!-- Asian Excellence Header -->
                  <div class="absolute top-[235px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-red-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.87 2 9l6.91-1.74L12 2z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-red-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-red-500/30">Asian Excellence</div>
                    </div>
                  </div>
                  
                  <!-- CERN Global Programs Header -->
                  <div class="absolute top-[405px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-green-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-green-500/30">CERN Global Programs</div>
                    </div>
                  </div>
                  
                  <!-- Individual Resource Nodes -->
                  <!-- Nordic Excellence Resources -->
                  <div class="absolute top-[95px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.ind.ku.dk/english/research/kuper/" target="_blank" class="hover:text-white">KUPER - Copenhagen Physics Education</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[125px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://fastercapital.com/content/Quality-education--Nordic-Model--Revolutionizing-Education-for-Excellence.html" target="_blank" class="hover:text-white">Nordic Model Excellence</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[155px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://20countries.com/nordic-countries/edu/" target="_blank" class="hover:text-white">Nordic Education System</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[185px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://link.springer.com/chapter/10.1007/978-3-319-97148-3_8" target="_blank" class="hover:text-white">Nordic Mathematical Learning</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Asian Excellence Resources -->
                  <div class="absolute top-[265px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.phys.s.u-tokyo.ac.jp/en/" target="_blank" class="hover:text-white">University of Tokyo Physics</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[295px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.tus.ac.jp/en/fac/riko/phy.html" target="_blank" class="hover:text-white">Tokyo University of Science</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[325px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://aws2025.com/" target="_blank" class="hover:text-white">Asian Winter School</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[355px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://en.wikipedia.org/wiki/Riken" target="_blank" class="hover:text-white">RIKEN Research Institute</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- CERN Global Programs Resources -->
                  <div class="absolute top-[435px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://indico.cern.ch/e/clashep2025" target="_blank" class="hover:text-white">CERN Latin-American School 2025</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[465px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="http://africanschoolofphysics.web.cern.ch/" target="_blank" class="hover:text-white">African School of Physics</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[495px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://en.wikipedia.org/wiki/Synchrotron-Light_for_Experimental_Science_and_Applications_in_the_Middle_East" target="_blank" class="hover:text-white">SESAME Middle East Facility</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[525px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.nature.com/articles/s42254-023-00618-8" target="_blank" class="hover:text-white">Physics in Latin America</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Network Statistics -->
                  <div class="absolute bottom-4 left-4 right-4">
                    <div class="flex items-center justify-between text-sm text-gray-400">
                      <span class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        GitHub-style Branch Network
                      </span>
                      <div class="flex items-center gap-4">
                        <span>3 Main Branches</span>
                        <span>•</span>
                        <span>12 Resources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <!-- SPECIALIZED SECTION -->
              <div id="specialized" class="relative group">
                <!-- Section Divider -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-pink-400 to-transparent rounded-full opacity-60"></div>
                
                <div class="pl-8 space-y-6">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded-2xl border border-pink-500/30 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-pink-400"><polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/></svg>
                      <div>
                        <h3 class="text-2xl font-bold text-white">Specialized</h3>
                        <p class="text-pink-200 text-sm">Inclusive & diverse physics</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-1 bg-pink-500/20 rounded-full border border-pink-500/30">
                      <div class="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      <span class="text-xs text-pink-300 font-medium">12 Resources</span>
                    </div>
                  </div>
                
                <!-- GitHub-style Branch Network for Specialized -->
                <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
                  <!-- Animated Background Grid -->
                  <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
                  </div>
                  
                  <!-- SVG for Clean Branch Lines with Curved Connections -->
                  <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    <!-- Main vertical branch line for Indigenous Physics (continuous) -->
                    <line x1="120" y1="60" x2="120" y2="200" stroke="#ec4899" stroke-width="3"/>
                    
                    <!-- Indigenous resource branches with curved junctions -->
                    <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#3b82f6" stroke-width="3" fill="none"/>
                    <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for Accessible Education (continuous) -->
                    <line x1="120" y1="250" x2="120" y2="370" stroke="#3b82f6" stroke-width="3"/>
                    
                    <!-- Accessible resource branches with curved junctions -->
                    <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#ef4444" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for Diversity & Inclusion (continuous) -->
                    <line x1="120" y1="420" x2="120" y2="540" stroke="#22c55e" stroke-width="3"/>
                    
                    <!-- Diversity resource branches with curved junctions -->
                    <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
                  </svg>
                  
                  <!-- Main Branch Headers -->
                  <!-- Indigenous Physics Header -->
                  <div class="absolute top-[45px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-pink-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-pink-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-pink-500/30">Indigenous Physics</div>
                    </div>
                  </div>
                  
                  <!-- Accessible Education Header -->
                  <div class="absolute top-[235px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-blue-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-blue-500/30">Accessible Education</div>
                    </div>
                  </div>
                  
                  <!-- Diversity & Inclusion Header -->
                  <div class="absolute top-[405px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.78-7.78 5.5 5.5 0 0 1 7.78 7.78Z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-green-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-green-500/30">Diversity & Inclusion</div>
                    </div>
                  </div>
                  
                  <!-- Individual Resource Nodes -->
                  <!-- Indigenous Physics Resources -->
                  <div class="absolute top-[95px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://letstalkscience.ca/news-media/widening-scope-indigenous-knowledge-in-quantum-physics" target="_blank" class="hover:text-white">Indigenous Knowledge in Quantum</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[125px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.lightsource.ca/public/ed/education-events/indigenous-perspectives-in-chemistry-and-physics.php" target="_blank" class="hover:text-white">Indigenous Perspectives</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[155px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://link.springer.com/10.1007/s11422-021-10085-1" target="_blank" class="hover:text-white">Indigenous Artefacts in Curriculum</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[185px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.ictinc.ca/blog/making-science-relevant-to-indigenous-students" target="_blank" class="hover:text-white">Science for Indigenous Students</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Accessible Education Resources -->
                  <div class="absolute top-[265px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://stemeducationjournal.springeropen.com/articles/10.1186/s40594-021-00282-3" target="_blank" class="hover:text-white">Physics Webpages Accessibility</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[295px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://doit.uw.edu/brief/equal-access-science-and-students-with-sensory-impairments" target="_blank" class="hover:text-white">Equal Access for Sensory Impairments</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[325px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.aph.org/blog/exploring-the-world-of-adapted-physical-education-enhancing-inclusivity-for-blind-and-visually-impaired-students-accessible-technology-and-adaptive-equipment/" target="_blank" class="hover:text-white">Adaptive Equipment for Blind Students</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[355px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.physport.org/recommendations/Entry.cfm?ID=125042" target="_blank" class="hover:text-white">Creating Inclusive Classrooms</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Diversity & Inclusion Resources -->
                  <div class="absolute top-[435px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://news.stanford.edu/stories/2019/08/making-physics-inclusive" target="_blank" class="hover:text-white">Stanford POISE Program</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[465px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://physvals.mit.edu/resources/underrepresented" target="_blank" class="hover:text-white">MIT Underrepresented Resources</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[495px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.aps.org/programs/minorities/" target="_blank" class="hover:text-white">APS Inclusion Alliance</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[525px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.iop.org/education/dismantling-barriers-to-inclusion-physics" target="_blank" class="hover:text-white">IOP Limit Less Campaign</a>
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
                        <span>3 Main Branches</span>
                        <span>•</span>
                        <span>12 Resources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <!-- APPLIED SECTION -->
              <div id="applied" class="relative group">
                <!-- Section Divider -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-transparent rounded-full opacity-60"></div>
                
                <div class="pl-8 space-y-6">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl border border-orange-500/30 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                      <div>
                        <h3 class="text-2xl font-bold text-white">Applied</h3>
                        <p class="text-orange-200 text-sm">Real-world physics applications</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-1 bg-orange-500/20 rounded-full border border-orange-500/30">
                      <div class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      <span class="text-xs text-orange-300 font-medium">12 Resources</span>
                    </div>
                  </div>
                
                <!-- GitHub-style Branch Network for Applied -->
                <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
                  <!-- Animated Background Grid -->
                  <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
                  </div>
                  
                  <!-- SVG for Clean Branch Lines with Curved Connections -->
                  <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    <!-- Main vertical branch line for Space Agency Education (continuous) -->
                    <line x1="120" y1="60" x2="120" y2="200" stroke="#f97316" stroke-width="3"/>
                    
                    <!-- Space Agency resource branches with curved junctions -->
                    <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#3b82f6" stroke-width="3" fill="none"/>
                    <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for Interactive Museums (continuous) -->
                    <line x1="120" y1="250" x2="120" y2="370" stroke="#8b5cf6" stroke-width="3"/>
                    
                    <!-- Museums resource branches with curved junctions -->
                    <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#ef4444" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for Online Learning Platforms (continuous) -->
                    <line x1="120" y1="420" x2="120" y2="540" stroke="#22c55e" stroke-width="3"/>
                    
                    <!-- Online resource branches with curved junctions -->
                    <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
                  </svg>
                  
                  <!-- Main Branch Headers -->
                  <!-- Space Agency Education Header -->
                  <div class="absolute top-[45px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-orange-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-orange-500/30">Space Agency Education</div>
                    </div>
                  </div>
                  
                  <!-- Interactive Museums Header -->
                  <div class="absolute top-[235px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                          <path d="M3 6h18"/>
                          <path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-purple-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-purple-500/30">Interactive Museums</div>
                    </div>
                  </div>
                  
                  <!-- Online Learning Platforms Header -->
                  <div class="absolute top-[405px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                          <path d="M12 18h.01"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-green-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-green-500/30">Online Learning Platforms</div>
                    </div>
                  </div>
                  
                  <!-- Individual Resource Nodes -->
                  <!-- Space Agency Education Resources -->
                  <div class="absolute top-[95px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://sci.esa.int/c/portal/jump.cfm?oid=44053" target="_blank" class="hover:text-white">ESA Education Office</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[125px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.esa.int/Education/ESA_Academy/Training_Future_Opportunities" target="_blank" class="hover:text-white">ESA Academy Training</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[155px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://science.larc.nasa.gov/edu/" target="_blank" class="hover:text-white">NASA Langley Science</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[185px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://science.gsfc.nasa.gov/660/outreach/index.html" target="_blank" class="hover:text-white">NASA Goddard Astrophysics</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Interactive Museums Resources -->
                  <div class="absolute top-[265px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://science.cern/news/news/cern/cern-science-gateway-interactive-exhibitions-everyone" target="_blank" class="hover:text-white">CERN Science Gateway</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[295px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.exploratorium.edu/visit" target="_blank" class="hover:text-white">Exploratorium San Francisco</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[325px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.sfcitizen.com/exploratorium-interactive-science-and-art-experiences/" target="_blank" class="hover:text-white">Interactive Science & Art</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[355px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.theteachingastrophysicist.com/post/space-agencies-nasa-esa-and-the-science-mathematics-classroom" target="_blank" class="hover:text-white">Space Agencies in Classroom</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Online Learning Platforms Resources -->
                  <div class="absolute top-[435px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.coursera.org/browse/physical-science-and-engineering/physics-and-astronomy" target="_blank" class="hover:text-white">Coursera Physics & Astronomy</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[465px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.edx.org/learn/physics" target="_blank" class="hover:text-white">edX Physics Courses</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[495px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.classcentral.com/subject/physics" target="_blank" class="hover:text-white">Class Central Physics</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[525px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.guru99.com/online-physics-course.html/" target="_blank" class="hover:text-white">40 Best Physics Courses</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Network Statistics -->
                  <div class="absolute bottom-4 left-4 right-4">
                    <div class="flex items-center justify-between text-sm text-gray-400">
                      <span class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                        GitHub-style Branch Network
                      </span>
                      <div class="flex items-center gap-4">
                        <span>3 Main Branches</span>
                        <span>•</span>
                        <span>12 Resources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <!-- COMMUNITY SECTION -->
              <div id="community" class="relative group">
                <!-- Section Divider -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-green-400 to-transparent rounded-full opacity-60"></div>
                
                <div class="pl-8 space-y-6">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.78-7.78 5.5 5.5 0 0 1 7.78 7.78Z"/></svg>
                      <div>
                        <h3 class="text-2xl font-bold text-white">Community</h3>
                        <p class="text-green-200 text-sm">Physics communities & forums</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                      <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span class="text-xs text-green-300 font-medium">12 Resources</span>
                    </div>
                  </div>
                
                <!-- GitHub-style Branch Network for Community -->
                <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
                  <!-- Animated Background Grid -->
                  <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
                  </div>
                  
                  <!-- SVG for Clean Branch Lines with Curved Connections -->
                  <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    <!-- Main vertical branch line for Citizen Science (continuous) -->
                    <line x1="120" y1="60" x2="120" y2="200" stroke="#22c55e" stroke-width="3"/>
                    
                    <!-- Citizen Science resource branches with curved junctions -->
                    <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#3b82f6" stroke-width="3" fill="none"/>
                    <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for Physics Podcasts (continuous) -->
                    <line x1="120" y1="250" x2="120" y2="370" stroke="#8b5cf6" stroke-width="3"/>
                    
                    <!-- Podcasts resource branches with curved junctions -->
                    <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#f59e0b" stroke-width="3" fill="none"/>
                    <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#ef4444" stroke-width="3" fill="none"/>
                    
                    <!-- Main vertical branch line for Physics Forums (continuous) -->
                    <line x1="120" y1="420" x2="120" y2="540" stroke="#f97316" stroke-width="3"/>
                    
                    <!-- Forums resource branches with curved junctions -->
                    <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                    <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                    <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
                  </svg>
                  
                  <!-- Main Branch Headers -->
                  <!-- Citizen Science Header -->
                  <div class="absolute top-[45px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.78-7.78 5.5 5.5 0 0 1 7.78 7.78Z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-green-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-green-500/30">Citizen Science</div>
                    </div>
                  </div>
                  
                  <!-- Physics Podcasts Header -->
                  <div class="absolute top-[235px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                          <line x1="12" x2="12" y1="19" y2="22"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-purple-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-purple-500/30">Physics Podcasts</div>
                    </div>
                  </div>
                  
                  <!-- Physics Forums Header -->
                  <div class="absolute top-[405px] left-[50px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                      </div>
                      <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-orange-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-orange-500/30">Physics Forums</div>
                    </div>
                  </div>
                  
                  <!-- Individual Resource Nodes -->
                  <!-- Citizen Science Resources -->
                  <div class="absolute top-[95px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://lhcathome.web.cern.ch/" target="_blank" class="hover:text-white">LHC@home CERN Computing</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[125px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://openscience.cern/citizen-science" target="_blank" class="hover:text-white">CERN Open Science Projects</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[155px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://ippog.web.cern.ch/" target="_blank" class="hover:text-white">IPPOG Particle Physics Outreach</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[185px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://research.nd.edu/news/notre-dame-physicists-contribute-to-major-breakthrough-in-gravitational-wave-detection/" target="_blank" class="hover:text-white">Notre Dame Gravitational Waves</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Physics Podcasts Resources -->
                  <div class="absolute top-[265px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.sciencefriday.com/" target="_blank" class="hover:text-white">Science Friday NPR</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[295px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://podcast.feedspot.com/physics_podcasts/" target="_blank" class="hover:text-white">20 Best Physics Podcasts</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[325px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://player.fm/featured/physics" target="_blank" class="hover:text-white">Best Physics Podcasts Collection</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[355px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://phys.org/news/2009-04-sixty-unravelling-secret-language.html" target="_blank" class="hover:text-white">Sixty Symbols Video Series</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Physics Forums Resources -->
                  <div class="absolute top-[435px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.physicsforums.com/" target="_blank" class="hover:text-white">Physics Forums 900K+ Members</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[465px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://physics.stackexchange.com/" target="_blank" class="hover:text-white">Physics Stack Exchange</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[495px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.reddit.com/r/AskPhysics/" target="_blank" class="hover:text-white">r/AskPhysics Community</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-[525px] left-[190px] z-10">
                    <div class="group cursor-pointer">
                      <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                        <a href="https://www.reddit.com/r/Physics/" target="_blank" class="hover:text-white">r/Physics 1.8M Members</a>
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
                        <span>3 Main Branches</span>
                        <span>•</span>
                        <span>12 Resources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <!-- Chemistry Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>
              </div>
              Chemistry
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">General Chemistry</h3>
                <p class="text-gray-400 text-sm mb-3">Foundational chemistry concepts for high school and college students.</p>
                <div class="space-y-2">
                  <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• CrashCourse Chemistry</a>
                  <a href="https://chem.libretexts.org/Bookshelves/General_Chemistry" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• LibreTexts General Chemistry</a>
                  <a href="https://www.youtube.com/user/tdewitt451/featured" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Tyler DeWitt Chemistry</a>
                  <a href="https://www.sciencegeek.net/APchemistry/index.shtml" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Science Geek AP Chemistry</a>
                </div>
              </div>

              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Organic Chemistry</h3>
                <p class="text-gray-400 text-sm mb-3">Comprehensive organic chemistry resources for advanced students.</p>
                <div class="space-y-2">
                  <a href="https://www.masterorganicchemistry.com/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Master Organic Chemistry (400+ Blog Posts)</a>
                  <a href="https://www.organicchemistrytutor.com/organic-chemistry-notes/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Organic Chemistry Tutor (300+ Pages)</a>
                  <a href="https://supersciencegrl.co.uk/learning" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• SuperScienceGrl Resources</a>
                </div>
              </div>

              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Biochemistry</h3>
                <p class="text-gray-400 text-sm mb-3">Bridge chemistry and biology with biochemical processes.</p>
                <div class="space-y-2">
                  <a href="https://guides.lib.uconn.edu/chem/oer" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Open Education Resources for Chemistry</a>
                  <a href="https://chem.libretexts.org/Bookshelves" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• LibreTexts Chemistry (All Disciplines)</a>
                </div>
              </div>
            </div>
          </div>
          <!-- Biology Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3Z"/><path d="M19 11c-.64-.64-1.84-.84-3-1.2a3.9 3.9 0 0 1-2-2c-.36-1.16-.56-2.36-1.2-3"/><path d="M5 11c.64-.64 1.84-.84 3-1.2a3.9 3.9 0 0 0 2-2c.36-1.16.56-2.36 1.2-3"/><path d="M12 22s4-9 4-13"/><path d="M8 22s-4-9-4-13"/></svg>
              </div>
              Biology
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">General Biology</h3>
                <p class="text-gray-400 text-sm mb-3">Comprehensive biology resources covering all major topics.</p>
                <div class="space-y-2">
                  <a href="https://www.bozemanscience.com/ap-biology" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Bozeman Science AP Biology</a>
                  <a href="https://library.fiveable.me/ap-bio" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• AP Biology Fiveable</a>
                  <a href="https://www.ixl.com/science/biology" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• IXL Biology Skills</a>
                  <a href="https://www.library.illinois.edu/biology/biologicalliterature/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Biology Virtual Library (3,000+ Resources)</a>
                </div>
              </div>

              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Molecular Biology & Genetics</h3>
                <p class="text-gray-400 text-sm mb-3">Advanced topics in molecular biology, genetics, and genomics.</p>
                <div class="space-y-2">
                  <a href="https://openpress.wheatoncollege.edu/molecularecologyv1/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Molecular Ecology & Evolution (Wheaton College)</a>
                  <a href="https://www.nature.com/scitable/knowledge/library/molecular-genetic-techniques-and-markers-for-ecological-15785936/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Nature Scitable: Molecular Genetic Techniques</a>
                  <a href="https://www.student-notes.net/comprehensive-guide-to-ecology-and-genetics-for-students/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Comprehensive Guide to Ecology and Genetics</a>
                </div>
              </div>

              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Ecology & Evolution</h3>
                <p class="text-gray-400 text-sm mb-3">Study ecosystems, biodiversity, and evolutionary processes.</p>
                <div class="space-y-2">
                  <a href="https://palmdesert.ucr.edu/calnatblog/2024/07/29/great-divide-genetics-vs-ecology-understanding-natures-mysteries" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Genetics vs. Ecology in Understanding Nature</a>
                  <a href="https://www.researchgate.net/publication/389482062_Exploring_evolution_in_the_context_of_molecular_genetics_and_ecology_a_dual_perspective/download" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Evolution: Molecular Genetics & Ecology Perspective</a>
                </div>
              </div>
            </div>
          </div>
          <!-- Environmental Science Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              Environmental Science & Climate Change
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">AP Environmental Science</h3>
                <p class="text-gray-400 text-sm mb-3">Comprehensive APES resources and exam preparation.</p>
                <div class="space-y-2">
                  <a href="https://www.khanacademy.org/science/ap-college-environmental-science" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Khan Academy APES</a>
                  <a href="https://www.bozemanscience.com/ap-environmental-science" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Bozeman Science APES</a>
                  <a href="https://library.fiveable.me/ap-enviro" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Fiveable APES Exam Review</a>
                </div>
              </div>

              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Climate Change & Sustainability</h3>
                <p class="text-gray-400 text-sm mb-3">Current climate science and sustainability resources for 2024-2025.</p>
                <div class="space-y-2">
                  <a href="https://www.cleanet.org/clean/educational_resources/collection/index.html" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• CLEAN Collection (Climate & Energy Education)</a>
                  <a href="https://earth.org/the-biggest-environmental-problems-of-our-lifetime/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• 15 Biggest Environmental Problems of 2024</a>
                  <a href="https://www.sustainablenewton.org/resources.html" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Resources for Understanding Climate Crisis</a>
                  <a href="https://www.canada.ca/en/environment-climate-change/services/science-technology/science-strategy/2024-2029.html" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Environment & Climate Change Canada Strategy</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Astronomy & Space Science Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-400"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41-1.41"/><path d="m19.07 4.93-1.41-1.41"/></svg>
              </div>
              Astronomy & Space Science
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">NASA Educational Resources</h3>
                <p class="text-gray-400 text-sm mb-3">Official NASA resources for space science education.</p>
                <div class="space-y-2">
                  <a href="https://spaceplace.nasa.gov" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• NASA Space Place (Educational Website)</a>
                  <a href="https://www.jpl.nasa.gov/edu/learn/tag/search/space+travel" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• NASA JPL Education</a>
                  <a href="https://solc.gsfc.nasa.gov/educators.html" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• NASA Space Operations Learning Center</a>
                  <a href="https://universe-of-learning.org/resources" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• NASA's Universe of Learning</a>
                </div>
              </div>

              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Interactive Astronomy Tools</h3>
                <p class="text-gray-400 text-sm mb-3">Explore the universe with interactive astronomy tools.</p>
                <div class="space-y-2">
                  <a href="https://scaleofuniverse.com/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Scale of the Universe (Interactive)</a>
                  <a href="https://www.iau.org/science/scientific_bodies/working_groups/259/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Network for Astronomy School Education (NASE)</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Interactive Tools & Simulations -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/><path d="m9 1 3 3 3-3"/></svg>
              </div>
              Interactive Tools & Simulations
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Chemistry Simulations</h3>
                <p class="text-gray-400 text-sm mb-3">Virtual chemistry labs and molecular modeling tools.</p>
                <div class="space-y-2">
                  <a href="https://apps.apple.com/app/id1639183447" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• 3DMolecules (Interactive 3D Chemistry)</a>
                  <a href="https://phet.colorado.edu/en/simulations/filter?subjects=chemistry&type=html&sort=alpha&view=grid" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• PhET Chemistry Simulations</a>
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
.prose ul {
  list-style-type: none;
  padding-left: 0;
}
.prose li {
  margin-top: 1rem;
  padding: 1.5rem;
  background: rgba(30, 41, 59, 0.5); /* space-900/50 */
  border-radius: 1rem;
  border: 1px solid rgba(51, 65, 85, 0.5); /* space-800/50 */
  transition: all 0.2s;
}
.prose li:hover {
  background: rgba(30, 41, 59, 0.8);
  border-color: var(--color-primary-500);
  transform: translateY(-2px);
}
.prose strong {
  color: #fff;
  font-size: 1.125rem;
  display: block;
  margin-bottom: 0.25rem;
}
</style>