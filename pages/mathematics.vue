<script setup lang="ts">
// Set page meta
useHead({
  title: 'Mathematics - Awesome Horizon',
  meta: [
    { name: 'description', content: 'The language of the universe - Algebra, Calculus, Logic, Statistics, and mathematical concepts at all levels.' }
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
        <h1 class="text-5xl font-bold text-white mb-4">Mathematics</h1>
        <p class="text-xl text-primary-100 max-w-2xl mx-auto">The language of the universe - Algebra, Calculus, Logic, Statistics, and mathematical concepts at all levels.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="prose prose-invert prose-lg max-w-4xl mx-auto pb-16 px-4">
      <div class="space-y-6">
        <h1 class="text-4xl font-bold text-white mb-8">Mathematics Resources</h1>
        
        <div class="grid gap-6">
          <!-- Mathematics Statistics Banner -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div class="group p-6 bg-gradient-to-br from-sky-500/20 to-sky-600/20 rounded-2xl border border-sky-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-sky-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-sky-300"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">320+</div>
                  <div class="text-xs text-sky-200">Total Resources</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-purple-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-300"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">40+</div>
                  <div class="text-xs text-purple-200">Universities</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-green-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-300"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/><path d="m9 1 3 3 3-3"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">6</div>
                  <div class="text-xs text-green-200">Math Areas</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl border border-yellow-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-yellow-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-300"><polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">2025</div>
                  <div class="text-xs text-yellow-200">Latest Content</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mathematics Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-sky-400"><path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/></svg>
              </div>
              Mathematics
            </h2>
            
            <!-- Mathematics Categories Overview -->
            <div class="mb-8 relative">
              <!-- Animated Background -->
              <div class="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-green-500/10 rounded-2xl blur-xl"></div>
              
              <div class="relative p-8 bg-space-800/40 backdrop-blur-sm rounded-2xl border border-space-700/50 shadow-2xl overflow-hidden">
                <div class="flex items-center justify-between mb-8">
                  <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                    <div class="p-3 bg-gradient-to-br from-sky-500 to-purple-500 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/></svg>
                    </div>
                    Mathematics Learning Journey
                  </h3>
                  <div class="flex items-center gap-2 text-sm text-gray-400">
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    320+ Resources
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
                      <filter id="glow-mathematics">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    <!-- Main horizontal branch line -->
                    <line x1="70" y1="235" x2="750" y2="235" stroke="#4a5568" stroke-width="2"/>
                    
                    <!-- Vertical branch lines with curved junctions -->
                    <!-- Calculus branch (top) -->
                    <path d="M 170 235 Q 170 195 170 150" stroke="#0ea5e9" stroke-width="2" fill="none"/>
                    
                    <!-- Linear Algebra branch (bottom) -->
                    <path d="M 270 235 Q 270 275 270 320" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                    
                    <!-- Statistics branch (top) -->
                    <path d="M 370 235 Q 370 195 370 150" stroke="#10b981" stroke-width="2" fill="none"/>
                    
                    <!-- High School branch (bottom) -->
                    <path d="M 470 235 Q 470 275 470 320" stroke="#eab308" stroke-width="2" fill="none"/>
                    
                    <!-- Math Tools branch (top) -->
                    <path d="M 570 235 Q 570 195 570 150" stroke="#3b82f6" stroke-width="2" fill="none"/>
                    
                    <!-- Advanced Topics branch (bottom) -->
                    <path d="M 670 235 Q 670 275 670 320" stroke="#f97316" stroke-width="2" fill="none"/>
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
                  
                  <!-- Calculus -->
                  <div class="absolute top-[235px] left-[170px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('calculus').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-sky-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-sky-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Calculus</div>
                    </div>
                  </div>
                  
                  <!-- Linear Algebra -->
                  <div class="absolute top-[235px] left-[270px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('linear-algebra').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <rect width="18" height="18" x="3" y="3" rx="2"/>
                          <path d="M9 9h6v6H9z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Linear Algebra</div>
                    </div>
                  </div>
                  
                  <!-- Statistics -->
                  <div class="absolute top-[235px] left-[370px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('statistics').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M3 3v18h18"/>
                          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Statistics</div>
                    </div>
                  </div>
                  
                  <!-- High School -->
                  <div class="absolute top-[235px] left-[470px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('high-school').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-yellow-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">High School</div>
                    </div>
                  </div>
                  
                  <!-- Tools -->
                  <div class="absolute top-[235px] left-[570px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('tools').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
                          <path d="M9 22v-4h6v4"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Tools</div>
                    </div>
                  </div>
                  
                  <!-- Advanced -->
                  <div class="absolute top-[235px] left-[670px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('advanced').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-orange-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Advanced</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Calculus Section -->
          <div id="calculus" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-sky-400"><path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/></svg>
              </div>
              Calculus
            </h2>
            
            <!-- GitHub-style Branch Network for Calculus -->
            <div class="relative min-h-[400px] bg-space-900/30 rounded-xl p-6 overflow-hidden mb-8">
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <!-- Main vertical branches -->
                <line x1="100" y1="50" x2="100" y2="350" stroke="#0ea5e9" stroke-width="3" opacity="0.6"/>
                <line x1="300" y1="50" x2="300" y2="350" stroke="#0284c7" stroke-width="3" opacity="0.6"/>
                <line x1="500" y1="50" x2="500" y2="350" stroke="#0369a1" stroke-width="3" opacity="0.6"/>
                
                <!-- Horizontal resource branches -->
                <line x1="100" y1="100" x2="250" y2="100" stroke="#0ea5e9" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="150" x2="250" y2="150" stroke="#0ea5e9" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="200" x2="250" y2="200" stroke="#0ea5e9" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="250" x2="250" y2="250" stroke="#0ea5e9" stroke-width="2" opacity="0.4"/>
                
                <line x1="300" y1="100" x2="450" y2="100" stroke="#0284c7" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="150" x2="450" y2="150" stroke="#0284c7" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="200" x2="450" y2="200" stroke="#0284c7" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="250" x2="450" y2="250" stroke="#0284c7" stroke-width="2" opacity="0.4"/>
                
                <line x1="500" y1="100" x2="650" y2="100" stroke="#0369a1" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="150" x2="650" y2="150" stroke="#0369a1" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="200" x2="650" y2="200" stroke="#0369a1" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="250" x2="650" y2="250" stroke="#0369a1" stroke-width="2" opacity="0.4"/>
                
                <!-- Junction circles -->
                <circle cx="100" cy="100" r="4" fill="#0ea5e9"/>
                <circle cx="100" cy="150" r="4" fill="#0ea5e9"/>
                <circle cx="100" cy="200" r="4" fill="#0ea5e9"/>
                <circle cx="100" cy="250" r="4" fill="#0ea5e9"/>
                <circle cx="300" cy="100" r="4" fill="#0284c7"/>
                <circle cx="300" cy="150" r="4" fill="#0284c7"/>
                <circle cx="300" cy="200" r="4" fill="#0284c7"/>
                <circle cx="300" cy="250" r="4" fill="#0284c7"/>
                <circle cx="500" cy="100" r="4" fill="#0369a1"/>
                <circle cx="500" cy="150" r="4" fill="#0369a1"/>
                <circle cx="500" cy="200" r="4" fill="#0369a1"/>
                <circle cx="500" cy="250" r="4" fill="#0369a1"/>
              </svg>
              
              <!-- Branch Headers -->
              <div class="absolute top-4 left-[70px] text-center">
                <div class="text-sm font-bold text-sky-300 mb-2">Fundamentals</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-bold text-sky-300 mb-2">Advanced</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-bold text-sky-300 mb-2">Applications</div>
              </div>
              
              <!-- Fundamentals Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=WUvTyaaNkzM&list=PL0-GT3co4r2wlh6UHTUeQsrf3mlS2lk6x" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-sky-500/30 rounded-lg p-3 hover:border-sky-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-sky-300 mb-1">3Blue1Brown</div>
                    <div class="text-xs text-gray-300">Essence of Calculus</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://www.khanacademy.org/math/ap-calculus-ab" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-sky-500/30 rounded-lg p-3 hover:border-sky-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-sky-300 mb-1">Khan Academy</div>
                    <div class="text-xs text-gray-300">AP Calculus AB</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.youtube.com/playlist?list=PLF797E961509B4EB5" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-sky-500/30 rounded-lg p-3 hover:border-sky-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-sky-300 mb-1">Professor Leonard</div>
                    <div class="text-xs text-gray-300">Calculus 1</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-sky-500/30 rounded-lg p-3 hover:border-sky-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-sky-300 mb-1">Paul's Notes</div>
                    <div class="text-xs text-gray-300">Online Calculus</div>
                  </div>
                </a>
              </div>
              
              <!-- Advanced Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-sky-600/30 rounded-lg p-3 hover:border-sky-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-sky-300 mb-1">MIT OpenCourseWare</div>
                    <div class="text-xs text-gray-300">Multivariable Calculus</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/playlist?list=PLHXZ9OQGMqxc_CvEy7xBKRQr6I214QJcd" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-sky-600/30 rounded-lg p-3 hover:border-sky-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-sky-300 mb-1">Dr. Trefor Bazett</div>
                    <div class="text-xs text-gray-300">Multivariable Calc</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-sky-600/30 rounded-lg p-3 hover:border-sky-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-sky-300 mb-1">3Blue1Brown</div>
                    <div class="text-xs text-gray-300">Differential Equations</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.khanacademy.org/math/ap-calculus-bc" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-sky-600/30 rounded-lg p-3 hover:border-sky-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-sky-300 mb-1">Khan Academy</div>
                    <div class="text-xs text-gray-300">AP Calculus BC</div>
                  </div>
                </a>
              </div>
              
              <!-- Applications Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=9vKqVkMQHKk" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-sky-700/30 rounded-lg p-3 hover:border-sky-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-sky-300 mb-1">Physics Applications</div>
                    <div class="text-xs text-gray-300">Calculus in Physics</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=rAof9Ld5sOg" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-sky-700/30 rounded-lg p-3 hover:border-sky-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-sky-300 mb-1">Engineering Math</div>
                    <div class="text-xs text-gray-300">Real World Calculus</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=YX40hbAHx3s" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-sky-700/30 rounded-lg p-3 hover:border-sky-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-sky-300 mb-1">Optimization</div>
                    <div class="text-xs text-gray-300">Max/Min Problems</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=WsQQvHm4lSw" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-sky-700/30 rounded-lg p-3 hover:border-sky-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-sky-300 mb-1">Related Rates</div>
                    <div class="text-xs text-gray-300">Dynamic Problems</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Linear Algebra Section -->
          <div id="linear-algebra" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/></svg>
              </div>
              Linear Algebra
            </h2>
            
            <!-- GitHub-style Branch Network for Linear Algebra -->
            <div class="relative min-h-[400px] bg-space-900/30 rounded-xl p-6 overflow-hidden mb-8">
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <!-- Main vertical branches -->
                <line x1="100" y1="50" x2="100" y2="350" stroke="#8b5cf6" stroke-width="3" opacity="0.6"/>
                <line x1="300" y1="50" x2="300" y2="350" stroke="#7c3aed" stroke-width="3" opacity="0.6"/>
                <line x1="500" y1="50" x2="500" y2="350" stroke="#6d28d9" stroke-width="3" opacity="0.6"/>
                
                <!-- Horizontal resource branches -->
                <line x1="100" y1="100" x2="250" y2="100" stroke="#8b5cf6" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="150" x2="250" y2="150" stroke="#8b5cf6" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="200" x2="250" y2="200" stroke="#8b5cf6" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="250" x2="250" y2="250" stroke="#8b5cf6" stroke-width="2" opacity="0.4"/>
                
                <line x1="300" y1="100" x2="450" y2="100" stroke="#7c3aed" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="150" x2="450" y2="150" stroke="#7c3aed" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="200" x2="450" y2="200" stroke="#7c3aed" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="250" x2="450" y2="250" stroke="#7c3aed" stroke-width="2" opacity="0.4"/>
                
                <line x1="500" y1="100" x2="650" y2="100" stroke="#6d28d9" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="150" x2="650" y2="150" stroke="#6d28d9" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="200" x2="650" y2="200" stroke="#6d28d9" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="250" x2="650" y2="250" stroke="#6d28d9" stroke-width="2" opacity="0.4"/>
                
                <!-- Junction circles -->
                <circle cx="100" cy="100" r="4" fill="#8b5cf6"/>
                <circle cx="100" cy="150" r="4" fill="#8b5cf6"/>
                <circle cx="100" cy="200" r="4" fill="#8b5cf6"/>
                <circle cx="100" cy="250" r="4" fill="#8b5cf6"/>
                <circle cx="300" cy="100" r="4" fill="#7c3aed"/>
                <circle cx="300" cy="150" r="4" fill="#7c3aed"/>
                <circle cx="300" cy="200" r="4" fill="#7c3aed"/>
                <circle cx="300" cy="250" r="4" fill="#7c3aed"/>
                <circle cx="500" cy="100" r="4" fill="#6d28d9"/>
                <circle cx="500" cy="150" r="4" fill="#6d28d9"/>
                <circle cx="500" cy="200" r="4" fill="#6d28d9"/>
                <circle cx="500" cy="250" r="4" fill="#6d28d9"/>
              </svg>
              
              <!-- Branch Headers -->
              <div class="absolute top-4 left-[70px] text-center">
                <div class="text-sm font-bold text-purple-300 mb-2">Foundations</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-bold text-purple-300 mb-2">Applications</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-bold text-purple-300 mb-2">Advanced</div>
              </div>
              
              <!-- Foundations Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">MIT OpenCourseWare</div>
                    <div class="text-xs text-gray-300">Gilbert Strang</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://youtube.com/playlist?list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">3Blue1Brown</div>
                    <div class="text-xs text-gray-300">Visual Intuition</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://joshua.smcvt.edu/linearalgebra/" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Jim Hefferon</div>
                    <div class="text-xs text-gray-300">Free Textbook</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.khanacademy.org/math/linear-algebra" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Khan Academy</div>
                    <div class="text-xs text-gray-300">Interactive Lessons</div>
                  </div>
                </a>
              </div>
              
              <!-- Applications Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=fNk_zzaMoSs" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-600/30 rounded-lg p-3 hover:border-purple-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Data Science</div>
                    <div class="text-xs text-gray-300">ML Applications</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=kjBOesZCoqc" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-600/30 rounded-lg p-3 hover:border-purple-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Computer Graphics</div>
                    <div class="text-xs text-gray-300">3D Transformations</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=P2LTAUO1TdA" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-600/30 rounded-lg p-3 hover:border-purple-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Engineering</div>
                    <div class="text-xs text-gray-300">System Analysis</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=uQhTuRlWMxw" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-600/30 rounded-lg p-3 hover:border-purple-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Economics</div>
                    <div class="text-xs text-gray-300">Input-Output Models</div>
                  </div>
                </a>
              </div>
              
              <!-- Advanced Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=TgKwz5Ikpc8" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-700/30 rounded-lg p-3 hover:border-purple-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Eigenvalues</div>
                    <div class="text-xs text-gray-300">Spectral Theory</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=PFDu9oVAE-g" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-700/30 rounded-lg p-3 hover:border-purple-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">SVD</div>
                    <div class="text-xs text-gray-300">Singular Value Decomp</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=rHLEWRxRGiM" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-700/30 rounded-lg p-3 hover:border-purple-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Abstract Algebra</div>
                    <div class="text-xs text-gray-300">Vector Spaces</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=LyGKycYT2v0" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-700/30 rounded-lg p-3 hover:border-purple-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Numerical Methods</div>
                    <div class="text-xs text-gray-300">Computational LA</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Statistics Section -->
          <div id="statistics" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
              </div>
              Statistics & Probability
            </h2>
            
            <!-- GitHub-style Branch Network for Statistics -->
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
                <div class="text-sm font-bold text-green-300 mb-2">Fundamentals</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-bold text-green-300 mb-2">Probability</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-bold text-green-300 mb-2">Data Science</div>
              </div>
              
              <!-- Fundamentals Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://www.khanacademy.org/math/ap-statistics" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-500/30 rounded-lg p-3 hover:border-green-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Khan Academy</div>
                    <div class="text-xs text-gray-300">AP Statistics</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://ocw.mit.edu/courses/18-440-probability-and-random-variables-spring-2014/" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-500/30 rounded-lg p-3 hover:border-green-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">MIT OpenCourseWare</div>
                    <div class="text-xs text-gray-300">Probability Theory</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-500/30 rounded-lg p-3 hover:border-green-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Crash Course</div>
                    <div class="text-xs text-gray-300">Statistics</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=MdHtK7CWpCQ" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-500/30 rounded-lg p-3 hover:border-green-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">StatQuest</div>
                    <div class="text-xs text-gray-300">Statistics Basics</div>
                  </div>
                </a>
              </div>
              
              <!-- Probability Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=uzkc-qNVoOk" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-600/30 rounded-lg p-3 hover:border-green-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">3Blue1Brown</div>
                    <div class="text-xs text-gray-300">Bayes Theorem</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=HZGCoVF3YvM" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-600/30 rounded-lg p-3 hover:border-green-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Probability Theory</div>
                    <div class="text-xs text-gray-300">Random Variables</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=Zxm4Xxvzohk" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-600/30 rounded-lg p-3 hover:border-green-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Central Limit</div>
                    <div class="text-xs text-gray-300">Theorem Explained</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=SzZ6GpcfoQY" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-600/30 rounded-lg p-3 hover:border-green-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Distributions</div>
                    <div class="text-xs text-gray-300">Normal & Binomial</div>
                  </div>
                </a>
              </div>
              
              <!-- Data Science Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=zRUliXuwJCQ" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-700/30 rounded-lg p-3 hover:border-green-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Hypothesis Testing</div>
                    <div class="text-xs text-gray-300">Statistical Tests</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=5N9V07EIfIg" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-700/30 rounded-lg p-3 hover:border-green-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Regression Analysis</div>
                    <div class="text-xs text-gray-300">Linear Models</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=fCVuiW9AFzY" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-700/30 rounded-lg p-3 hover:border-green-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Data Visualization</div>
                    <div class="text-xs text-gray-300">Charts & Graphs</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=aircAruvnKk" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-700/30 rounded-lg p-3 hover:border-green-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Machine Learning</div>
                    <div class="text-xs text-gray-300">Statistical Learning</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- High School Math Section -->
          <div id="high-school" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              High School Mathematics
            </h2>
            
            <!-- GitHub-style Branch Network for High School Math -->
            <div class="relative min-h-[400px] bg-space-900/30 rounded-xl p-6 overflow-hidden mb-8">
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <!-- Main vertical branches -->
                <line x1="100" y1="50" x2="100" y2="350" stroke="#eab308" stroke-width="3" opacity="0.6"/>
                <line x1="300" y1="50" x2="300" y2="350" stroke="#ca8a04" stroke-width="3" opacity="0.6"/>
                <line x1="500" y1="50" x2="500" y2="350" stroke="#a16207" stroke-width="3" opacity="0.6"/>
                
                <!-- Horizontal resource branches -->
                <line x1="100" y1="100" x2="250" y2="100" stroke="#eab308" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="150" x2="250" y2="150" stroke="#eab308" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="200" x2="250" y2="200" stroke="#eab308" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="250" x2="250" y2="250" stroke="#eab308" stroke-width="2" opacity="0.4"/>
                
                <line x1="300" y1="100" x2="450" y2="100" stroke="#ca8a04" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="150" x2="450" y2="150" stroke="#ca8a04" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="200" x2="450" y2="200" stroke="#ca8a04" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="250" x2="450" y2="250" stroke="#ca8a04" stroke-width="2" opacity="0.4"/>
                
                <line x1="500" y1="100" x2="650" y2="100" stroke="#a16207" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="150" x2="650" y2="150" stroke="#a16207" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="200" x2="650" y2="200" stroke="#a16207" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="250" x2="650" y2="250" stroke="#a16207" stroke-width="2" opacity="0.4"/>
                
                <!-- Junction circles -->
                <circle cx="100" cy="100" r="4" fill="#eab308"/>
                <circle cx="100" cy="150" r="4" fill="#eab308"/>
                <circle cx="100" cy="200" r="4" fill="#eab308"/>
                <circle cx="100" cy="250" r="4" fill="#eab308"/>
                <circle cx="300" cy="100" r="4" fill="#ca8a04"/>
                <circle cx="300" cy="150" r="4" fill="#ca8a04"/>
                <circle cx="300" cy="200" r="4" fill="#ca8a04"/>
                <circle cx="300" cy="250" r="4" fill="#ca8a04"/>
                <circle cx="500" cy="100" r="4" fill="#a16207"/>
                <circle cx="500" cy="150" r="4" fill="#a16207"/>
                <circle cx="500" cy="200" r="4" fill="#a16207"/>
                <circle cx="500" cy="250" r="4" fill="#a16207"/>
              </svg>
              
              <!-- Branch Headers -->
              <div class="absolute top-4 left-[70px] text-center">
                <div class="text-sm font-bold text-yellow-300 mb-2">Algebra</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-bold text-yellow-300 mb-2">Geometry</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-bold text-yellow-300 mb-2">Precalculus</div>
              </div>
              
              <!-- Algebra Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://www.youtube.com/playlist?list=PLC292123722B1B450" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-500/30 rounded-lg p-3 hover:border-yellow-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Professor Leonard</div>
                    <div class="text-xs text-gray-300">Intermediate Algebra</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://www.khanacademy.org/math/algebra" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-500/30 rounded-lg p-3 hover:border-yellow-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Khan Academy</div>
                    <div class="text-xs text-gray-300">Algebra Basics</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=NybHckSEQBI" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-500/30 rounded-lg p-3 hover:border-yellow-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Algebra Essentials</div>
                    <div class="text-xs text-gray-300">Solving Equations</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=V6l-m5-zGNc" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-500/30 rounded-lg p-3 hover:border-yellow-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Quadratic Functions</div>
                    <div class="text-xs text-gray-300">Parabolas & Roots</div>
                  </div>
                </a>
              </div>
              
              <!-- Geometry Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.khanacademy.org/math/geometry" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-600/30 rounded-lg p-3 hover:border-yellow-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Khan Academy</div>
                    <div class="text-xs text-gray-300">Geometry</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=mhd9FXYdf4s" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-600/30 rounded-lg p-3 hover:border-yellow-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Geometry Basics</div>
                    <div class="text-xs text-gray-300">Shapes & Proofs</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=kfF40MiS7zA" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-600/30 rounded-lg p-3 hover:border-yellow-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Trigonometry</div>
                    <div class="text-xs text-gray-300">Sin, Cos, Tan</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=mOd1F1VZHeI" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-600/30 rounded-lg p-3 hover:border-yellow-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Circle Geometry</div>
                    <div class="text-xs text-gray-300">Angles & Arcs</div>
                  </div>
                </a>
              </div>
              
              <!-- Precalculus Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/playlist?list=PLDesaqWTN6ESsmwELdrzhcGiRhk5DjwLP" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-700/30 rounded-lg p-3 hover:border-yellow-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Professor Leonard</div>
                    <div class="text-xs text-gray-300">Precalculus</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.khanacademy.org/math/precalculus" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-700/30 rounded-lg p-3 hover:border-yellow-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Khan Academy</div>
                    <div class="text-xs text-gray-300">Precalculus</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=fYyARMqiaag" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-700/30 rounded-lg p-3 hover:border-yellow-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Functions</div>
                    <div class="text-xs text-gray-300">Domain & Range</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=sULa9Lc4pck" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-700/30 rounded-lg p-3 hover:border-yellow-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Exponentials</div>
                    <div class="text-xs text-gray-300">Logs & Growth</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Math Tools Section -->
          <div id="math-tools" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
              </div>
              Mathematical Tools
            </h2>
            
            <!-- GitHub-style Branch Network for Math Tools -->
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
                <div class="text-sm font-bold text-blue-300 mb-2">Calculators</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-bold text-blue-300 mb-2">Visualization</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-bold text-blue-300 mb-2">Solvers</div>
              </div>
              
              <!-- Calculators Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://www.desmos.com" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Desmos</div>
                    <div class="text-xs text-gray-300">Graphing Calculator</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://www.wolframalpha.com" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">WolframAlpha</div>
                    <div class="text-xs text-gray-300">Knowledge Engine</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.calculator.net" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Calculator.net</div>
                    <div class="text-xs text-gray-300">Online Calculators</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.mathway.com" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Mathway</div>
                    <div class="text-xs text-gray-300">Step-by-Step</div>
                  </div>
                </a>
              </div>
              
              <!-- Visualization Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.geogebra.org/?lang=en" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-600/30 rounded-lg p-3 hover:border-blue-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">GeoGebra</div>
                    <div class="text-xs text-gray-300">3D Calculator</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.graphcalc.com" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-600/30 rounded-lg p-3 hover:border-blue-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">GraphCalc</div>
                    <div class="text-xs text-gray-300">Function Plotter</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.mathpix.com" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-600/30 rounded-lg p-3 hover:border-blue-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Mathpix</div>
                    <div class="text-xs text-gray-300">OCR & LaTeX</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.maplesoft.com/products/maple/" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-600/30 rounded-lg p-3 hover:border-blue-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Maple</div>
                    <div class="text-xs text-gray-300">Math Software</div>
                  </div>
                </a>
              </div>
              
              <!-- Solvers Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.symbolab.com" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-700/30 rounded-lg p-3 hover:border-blue-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Symbolab</div>
                    <div class="text-xs text-gray-300">Math Solver</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.cymath.com" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-700/30 rounded-lg p-3 hover:border-blue-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Cymath</div>
                    <div class="text-xs text-gray-300">Equation Solver</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.photomath.com" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-700/30 rounded-lg p-3 hover:border-blue-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Photomath</div>
                    <div class="text-xs text-gray-300">Camera Math</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.microsoft.com/en-us/microsoft-365/excel" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-700/30 rounded-lg p-3 hover:border-blue-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Excel Math</div>
                    <div class="text-xs text-gray-300">Spreadsheet Math</div>
                  </div>
                </a>
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