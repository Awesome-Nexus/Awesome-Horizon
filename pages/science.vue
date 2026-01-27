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
            
            <!-- Science Categories Overview -->
            <div class="mb-8 relative">
              <!-- Animated Background -->
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
              
              <div class="relative p-8 bg-space-800/40 backdrop-blur-sm rounded-2xl border border-space-700/50 shadow-2xl overflow-hidden">
                <div class="flex items-center justify-between mb-8">
                  <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                    <div class="p-3 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
                    </div>
                    Science Learning Journey
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
                    <defs>
                      <filter id="glow-science">
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
                    <!-- Physics branch (top) -->
                    <path d="M 150 235 Q 150 195 150 150" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                    
                    <!-- Chemistry branch (bottom) -->
                    <path d="M 250 235 Q 250 275 250 320" stroke="#10b981" stroke-width="2" fill="none"/>
                    
                    <!-- Biology branch (top) -->
                    <path d="M 350 235 Q 350 195 350 150" stroke="#22c55e" stroke-width="2" fill="none"/>
                    
                    <!-- Psychology branch (bottom) -->
                    <path d="M 450 235 Q 450 275 450 320" stroke="#ec4899" stroke-width="2" fill="none"/>
                    
                    <!-- Environmental Science branch (top) -->
                    <path d="M 550 235 Q 550 195 550 150" stroke="#3b82f6" stroke-width="2" fill="none"/>
                    
                    <!-- Astronomy branch (bottom) -->
                    <path d="M 650 235 Q 650 275 650 320" stroke="#6366f1" stroke-width="2" fill="none"/>
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
                  
                  <!-- Physics -->
                  <div class="absolute top-[235px] left-[150px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('physics').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M8 12l2 2 4-4"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Physics</div>
                    </div>
                  </div>
                  
                  <!-- Chemistry -->
                  <div class="absolute top-[235px] left-[250px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('chemistry').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/>
                          <path d="M6.453 15h11.094"/>
                          <path d="M8.5 2h7"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Chemistry</div>
                    </div>
                  </div>
                  
                  <!-- Biology -->
                  <div class="absolute top-[235px] left-[350px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('biology').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3Z"/>
                          <path d="M19 11c-.64-.64-1.84-.84-3-1.2a3.9 3.9 0 0 1-2-2c-.36-1.16-.56-2.36-1.2-3"/>
                          <path d="M5 11c.64-.64 1.84-.84 3-1.2a3.9 3.9 0 0 0 2-2c.36-1.16.56-2.36 1.2-3"/>
                          <path d="M12 22s4-9 4-13"/>
                          <path d="M8 22s-4-9-4-13"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Biology</div>
                    </div>
                  </div>
                  
                  <!-- Psychology -->
                  <div class="absolute top-[235px] left-[450px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('psychology').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-pink-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-pink-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Psychology</div>
                    </div>
                  </div>
                  
                  <!-- Environmental Science -->
                  <div class="absolute top-[235px] left-[550px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('environmental-science').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                          <path d="M2 12h20"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Environmental</div>
                    </div>
                  </div>
                  
                  <!-- Astronomy -->
                  <div class="absolute top-[235px] left-[650px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('astronomy').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
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
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-indigo-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Astronomy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- PHYSICS SECTION -->
          <div id="physics" class="relative group">
            <!-- Section Divider -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent rounded-full opacity-60"></div>
            
            <div class="pl-8 space-y-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Physics</h3>
                    <p class="text-purple-200 text-sm">Fundamental laws of nature and motion</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                  <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span class="text-xs text-purple-300 font-medium">13 Resources</span>
                </div>
              </div>
            
            <!-- GitHub-style Branch Network for Physics -->
            <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
              <!-- Animated Background Grid -->
              <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
              </div>
              
              <!-- SVG for Clean Branch Lines with Curved Connections -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                <!-- Main vertical branch line for Introduction (continuous) -->
                <line x1="120" y1="60" x2="120" y2="200" stroke="#8b5cf6" stroke-width="3"/>
                
                <!-- Introduction resource branches with curved junctions -->
                <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#3b82f6" stroke-width="3" fill="none"/>
                <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#06b6d4" stroke-width="3" fill="none"/>
                <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#f59e0b" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for Introduction branch -->
                <circle cx="120" cy="107" r="4" fill="#10b981"/>
                <circle cx="120" cy="137" r="4" fill="#3b82f6"/>
                <circle cx="120" cy="167" r="4" fill="#06b6d4"/>
                <circle cx="120" cy="197" r="4" fill="#f59e0b"/>
                
                <!-- Main vertical branch line for Textbooks (continuous) -->
                <line x1="120" y1="250" x2="120" y2="370" stroke="#10b981" stroke-width="3"/>
                
                <!-- Textbook resource branches with curved junctions -->
                <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#3b82f6" stroke-width="3" fill="none"/>
                <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#f59e0b" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for Textbooks branch -->
                <circle cx="120" cy="277" r="4" fill="#8b5cf6"/>
                <circle cx="120" cy="307" r="4" fill="#3b82f6"/>
                <circle cx="120" cy="337" r="4" fill="#f59e0b"/>
                
                <!-- Main vertical branch line for AP & Advanced (continuous) -->
                <line x1="120" y1="420" x2="120" y2="540" stroke="#ef4444" stroke-width="3"/>
                
                <!-- Advanced resource branches with curved junctions -->
                <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
                
                <!-- Junction dots for AP & Advanced branch -->
                <circle cx="120" cy="447" r="4" fill="#8b5cf6"/>
                <circle cx="120" cy="477" r="4" fill="#10b981"/>
                <circle cx="120" cy="507" r="4" fill="#06b6d4"/>
                <circle cx="120" cy="537" r="4" fill="#f59e0b"/>
              </svg>
              
              <!-- Main Branch Headers -->
              <!-- Introduction Header -->
              <div class="absolute top-[45px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-purple-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-purple-500/30">Introduction</div>
                </div>
              </div>
              
              <!-- Textbooks Header -->
              <div class="absolute top-[235px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-emerald-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-emerald-500/30">Textbooks</div>
                </div>
              </div>
              
              <!-- AP & Advanced Header -->
              <div class="absolute top-[405px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.87 2 9l6.91-1.74L12 2z"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-red-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-red-500/30">AP & Advanced</div>
                </div>
              </div>
              
              <!-- Individual Resource Nodes -->
              <!-- Introduction Resources -->
              <div class="absolute top-[95px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://youtu.be/ZihywtixUYo" target="_blank" class="hover:text-white">Map of Physics</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[125px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://youtu.be/TclBJZuUAOY" target="_blank" class="hover:text-white">What is Science?</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[155px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="http://hyperphysics.phy-astr.gsu.edu/hbase/hph.html" target="_blank" class="hover:text-white">HyperPhysics</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[185px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.khanacademy.org/science/physics" target="_blank" class="hover:text-white">Khan Academy</a>
                  </div>
                </div>
              </div>
              
              <!-- Textbook Resources -->
              <div class="absolute top-[265px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.feynmanlectures.caltech.edu/" target="_blank" class="hover:text-white">Feynman Lectures</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[295px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://openstax.org/details/books/college-physics-2e" target="_blank" class="hover:text-white">OpenStax College</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[325px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://openstax.org/details/books/university-physics-volume-1" target="_blank" class="hover:text-white">OpenStax University</a>
                  </div>
                </div>
              </div>
              
              <!-- AP & Advanced Resources -->
              <div class="absolute top-[435px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.flippingphysics.com/ap-physics-1.html" target="_blank" class="hover:text-white">Flipping Physics</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[465px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.physicsclassroom.com/class" target="_blank" class="hover:text-white">Physics Classroom</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[495px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.bozemanscience.com/ap-physics-1-video-list" target="_blank" class="hover:text-white">Bozeman Physics</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[525px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" target="_blank" class="hover:text-white">MIT Classical</a>
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
                    <span>10 Resources</span>
                  </div>
                </div>
              </div>
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