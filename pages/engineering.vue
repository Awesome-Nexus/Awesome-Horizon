<script setup lang="ts">
// Set page meta
useHead({
  title: 'Engineering - Awesome Horizon',
  meta: [
    { name: 'description', content: 'Building the world around us - Civil, Mechanical, Electrical, Aerospace, and other engineering disciplines.' }
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
        <h1 class="text-5xl font-bold text-white mb-4">Engineering</h1>
        <p class="text-xl text-primary-100 max-w-2xl mx-auto">Building the world around us - Civil, Mechanical, Electrical, Aerospace, and other engineering disciplines.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="prose prose-invert prose-lg max-w-4xl mx-auto pb-16 px-4">
      <div class="space-y-6">
        <h1 class="text-4xl font-bold text-white mb-8">Engineering Resources</h1>
        
        <div class="grid gap-6">
          <!-- Engineering Statistics Banner -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div class="group p-6 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl border border-amber-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-amber-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-300"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">240+</div>
                  <div class="text-xs text-amber-200">Total Resources</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-blue-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-300"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">35+</div>
                  <div class="text-xs text-blue-200">Universities</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-green-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-300"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/><path d="m9 1 3 3 3-3"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">7</div>
                  <div class="text-xs text-green-200">Disciplines</div>
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

          <!-- Engineering Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-400"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>
              </div>
              Engineering
            </h2>
            
            <!-- Engineering Categories Overview -->
            <div class="mb-8 relative">
              <!-- Animated Background -->
              <div class="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-green-500/10 rounded-2xl blur-xl"></div>
              
              <div class="relative p-8 bg-space-800/40 backdrop-blur-sm rounded-2xl border border-space-700/50 shadow-2xl overflow-hidden">
                <div class="flex items-center justify-between mb-8">
                  <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                    <div class="p-3 bg-gradient-to-br from-amber-500 to-blue-500 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>
                    </div>
                    Engineering Learning Journey
                  </h3>
                  <div class="flex items-center gap-2 text-sm text-gray-400">
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    240+ Resources
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
                      <filter id="glow-engineering">
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
                    <!-- Mechanical branch (top) -->
                    <path d="M 170 235 Q 170 195 170 150" stroke="#f59e0b" stroke-width="2" fill="none"/>
                    
                    <!-- Aerospace branch (bottom) -->
                    <path d="M 270 235 Q 270 275 270 320" stroke="#3b82f6" stroke-width="2" fill="none"/>
                    
                    <!-- Electrical branch (top) -->
                    <path d="M 370 235 Q 370 195 370 150" stroke="#eab308" stroke-width="2" fill="none"/>
                    
                    <!-- Chemical branch (bottom) -->
                    <path d="M 470 235 Q 470 275 470 320" stroke="#10b981" stroke-width="2" fill="none"/>
                    
                    <!-- General branch (top) -->
                    <path d="M 570 235 Q 570 195 570 150" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                    
                    <!-- Inspiring Talks branch (bottom) -->
                    <path d="M 670 235 Q 670 275 670 320" stroke="#ef4444" stroke-width="2" fill="none"/>
                    
                    <!-- Additional branch (top) -->
                    <path d="M 750 235 Q 750 195 750 150" stroke="#06b6d4" stroke-width="2" fill="none"/>
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
                  
                  <!-- Mechanical -->
                  <div class="absolute top-[235px] left-[170px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('mechanical').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Mechanical</div>
                    </div>
                  </div>
                  
                  <!-- Aerospace -->
                  <div class="absolute top-[235px] left-[270px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('aerospace').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Aerospace</div>
                    </div>
                  </div>
                  
                  <!-- Electrical -->
                  <div class="absolute top-[235px] left-[370px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('electrical').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-yellow-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Electrical</div>
                    </div>
                  </div>
                  
                  <!-- Chemical -->
                  <div class="absolute top-[235px] left-[470px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('chemical').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Chemical</div>
                    </div>
                  </div>
                  
                  <!-- General -->
                  <div class="absolute top-[235px] left-[570px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('general').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">General</div>
                    </div>
                  </div>
                  
                  <!-- Talks -->
                  <div class="absolute top-[235px] left-[670px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('talks').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3Z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Talks</div>
                    </div>
                  </div>
                  
                  <!-- Civil -->
                  <div class="absolute top-[235px] left-[750px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('civil').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-cyan-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Civil</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mechanical Engineering Section -->
          <div id="mechanical" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-400"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>
              </div>
              Mechanical Engineering
            </h2>
            
            <!-- GitHub-style Branch Network for Mechanical Engineering -->
            <div class="relative min-h-[400px] bg-space-900/30 rounded-xl p-6 overflow-hidden mb-8">
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <!-- Main vertical branches -->
                <line x1="100" y1="50" x2="100" y2="350" stroke="#f59e0b" stroke-width="3" opacity="0.6"/>
                <line x1="300" y1="50" x2="300" y2="350" stroke="#ea580c" stroke-width="3" opacity="0.6"/>
                <line x1="500" y1="50" x2="500" y2="350" stroke="#dc2626" stroke-width="3" opacity="0.6"/>
                
                <!-- Horizontal resource branches -->
                <line x1="100" y1="100" x2="250" y2="100" stroke="#f59e0b" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="150" x2="250" y2="150" stroke="#f59e0b" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="200" x2="250" y2="200" stroke="#f59e0b" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="250" x2="250" y2="250" stroke="#f59e0b" stroke-width="2" opacity="0.4"/>
                
                <line x1="300" y1="100" x2="450" y2="100" stroke="#ea580c" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="150" x2="450" y2="150" stroke="#ea580c" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="200" x2="450" y2="200" stroke="#ea580c" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="250" x2="450" y2="250" stroke="#ea580c" stroke-width="2" opacity="0.4"/>
                
                <line x1="500" y1="100" x2="650" y2="100" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="150" x2="650" y2="150" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="200" x2="650" y2="200" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="250" x2="650" y2="250" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
                
                <!-- Junction circles -->
                <circle cx="100" cy="100" r="4" fill="#f59e0b"/>
                <circle cx="100" cy="150" r="4" fill="#f59e0b"/>
                <circle cx="100" cy="200" r="4" fill="#f59e0b"/>
                <circle cx="100" cy="250" r="4" fill="#f59e0b"/>
                <circle cx="300" cy="100" r="4" fill="#ea580c"/>
                <circle cx="300" cy="150" r="4" fill="#ea580c"/>
                <circle cx="300" cy="200" r="4" fill="#ea580c"/>
                <circle cx="300" cy="250" r="4" fill="#ea580c"/>
                <circle cx="500" cy="100" r="4" fill="#dc2626"/>
                <circle cx="500" cy="150" r="4" fill="#dc2626"/>
                <circle cx="500" cy="200" r="4" fill="#dc2626"/>
                <circle cx="500" cy="250" r="4" fill="#dc2626"/>
              </svg>
              
              <!-- Branch Headers -->
              <div class="absolute top-4 left-[70px] text-center">
                <div class="text-sm font-semibold text-amber-300 bg-space-800/80 px-3 py-1 rounded-full border border-amber-500/30">Fundamentals</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-semibold text-orange-300 bg-space-800/80 px-3 py-1 rounded-full border border-orange-500/30">Design & CAD</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-semibold text-red-300 bg-space-800/80 px-3 py-1 rounded-full border border-red-500/30">Advanced</div>
              </div>
              
              <!-- Resource Nodes -->
              <!-- Fundamentals Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://youtu.be/ht9GwXQMgpo" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-amber-500/30 rounded-lg p-3 hover:border-amber-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-amber-300 mb-1">Engineering Drawings</div>
                    <div class="text-xs text-gray-300">Technical Drawing</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://www.youtube.com/playlist?list=PLX2gX-ftPVXUjkEEXJoC0mx8mxTlfqpCn" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-amber-500/30 rounded-lg p-3 hover:border-amber-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-amber-300 mb-1">Simple Machines</div>
                    <div class="text-xs text-gray-300">Dr. George Mehler</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="http://www.ilectureonline.com/lectures/subject/ENGINEERING/29" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-amber-500/30 rounded-lg p-3 hover:border-amber-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-amber-300 mb-1">Online Lectures</div>
                    <div class="text-xs text-gray-300">iLectureOnline</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.youtube.com/user/MIT" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-amber-500/30 rounded-lg p-3 hover:border-amber-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-amber-300 mb-1">MIT Courses</div>
                    <div class="text-xs text-gray-300">Mechanical Engineering</div>
                  </div>
                </a>
              </div>
              
              <!-- Design & CAD Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/SolidWorksOfficial" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">SolidWorks</div>
                    <div class="text-xs text-gray-300">CAD Software</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/AutodeskEducation" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">AutoCAD</div>
                    <div class="text-xs text-gray-300">Autodesk Education</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/FusionTutorials" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">Fusion 360</div>
                    <div class="text-xs text-gray-300">3D Design</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/user/CATIA" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-orange-500/30 rounded-lg p-3 hover:border-orange-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-orange-300 mb-1">CATIA</div>
                    <div class="text-xs text-gray-300">Professional CAD</div>
                  </div>
                </a>
              </div>
              
              <!-- Advanced Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/StanfordUniversity" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Stanford ME</div>
                    <div class="text-xs text-gray-300">Advanced Courses</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/CalTechUniversity" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Caltech ME</div>
                    <div class="text-xs text-gray-300">Research Topics</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/user/ANSYS" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">ANSYS</div>
                    <div class="text-xs text-gray-300">Simulation Software</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.engineer4free.com" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Engineer4Free</div>
                    <div class="text-xs text-gray-300">University Courses</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Aerospace Engineering Section -->
          <div id="aerospace" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              </div>
              Aerospace Engineering
            </h2>
            
            <!-- GitHub-style Branch Network for Aerospace Engineering -->
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
                <div class="text-sm font-bold text-blue-300 mb-2">Flight Principles</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-bold text-blue-300 mb-2">Aerodynamics</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-bold text-blue-300 mb-2">Space Systems</div>
              </div>
              
              <!-- Flight Principles Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://youtu.be/5O-j0w-h7v0" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Principles of Flight</div>
                    <div class="text-xs text-gray-300">Basic Flight Physics</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://youtu.be/edLnZgF9mUg" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">MIT Aerodynamics</div>
                    <div class="text-xs text-gray-300">Airplane Aerodynamics</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://youtu.be/E3i_XHlVCeU" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Aerodynamic Lift</div>
                    <div class="text-xs text-gray-300">Understanding Lift</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.nasa.gov/audience/forstudents/k-4/stories/nasa-knows/what-is-aeronautics-k4.html" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-500/30 rounded-lg p-3 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">NASA Aeronautics</div>
                    <div class="text-xs text-gray-300">What is Aeronautics</div>
                  </div>
                </a>
              </div>
              
              <!-- Aerodynamics Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=6UlsArvbTeo" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-600/30 rounded-lg p-3 hover:border-blue-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Wind Tunnel Testing</div>
                    <div class="text-xs text-gray-300">Aerodynamic Testing</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=QKCK4lJLQHU" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-600/30 rounded-lg p-3 hover:border-blue-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Supersonic Flight</div>
                    <div class="text-xs text-gray-300">Breaking Sound Barrier</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=wuJIqmha2Hc" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-600/30 rounded-lg p-3 hover:border-blue-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Computational Fluid</div>
                    <div class="text-xs text-gray-300">CFD Simulation</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=Gg0TXNXgz-w" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-600/30 rounded-lg p-3 hover:border-blue-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Hypersonic Flight</div>
                    <div class="text-xs text-gray-300">Extreme Speeds</div>
                  </div>
                </a>
              </div>
              
              <!-- Space Systems Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=DKK4KeLBcuw" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-700/30 rounded-lg p-3 hover:border-blue-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Rocket Propulsion</div>
                    <div class="text-xs text-gray-300">Space Launch Systems</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=ZJijzqSJPAk" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-700/30 rounded-lg p-3 hover:border-blue-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Orbital Mechanics</div>
                    <div class="text-xs text-gray-300">Spacecraft Orbits</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=_q4DrUHKC0Q" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-700/30 rounded-lg p-3 hover:border-blue-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Satellite Design</div>
                    <div class="text-xs text-gray-300">Space Technology</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=Hm8UrrkwG9k" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-blue-700/30 rounded-lg p-3 hover:border-blue-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-blue-300 mb-1">Mars Missions</div>
                    <div class="text-xs text-gray-300">Planetary Exploration</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Electrical Engineering Section -->
          <div id="electrical" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
              </div>
              Electrical Engineering
            </h2>
            
            <!-- GitHub-style Branch Network for Electrical Engineering -->
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
                <div class="text-sm font-bold text-yellow-300 mb-2">Circuit Basics</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-bold text-yellow-300 mb-2">Power Systems</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-bold text-yellow-300 mb-2">Electronics</div>
              </div>
              
              <!-- Circuit Basics Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="http://www.ilectureonline.com/lectures/subject/ENGINEERING/28" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-500/30 rounded-lg p-3 hover:border-yellow-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Online Lectures</div>
                    <div class="text-xs text-gray-300">Electrical Engineering</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=VQOfz2SXWQs" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-500/30 rounded-lg p-3 hover:border-yellow-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Basic Circuits</div>
                    <div class="text-xs text-gray-300">Ohm's Law & Circuits</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=8jF1OhgOdAg" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-500/30 rounded-lg p-3 hover:border-yellow-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">AC vs DC</div>
                    <div class="text-xs text-gray-300">Current Types</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=NLnw2EUYc7M" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-500/30 rounded-lg p-3 hover:border-yellow-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Capacitors</div>
                    <div class="text-xs text-gray-300">Energy Storage</div>
                  </div>
                </a>
              </div>
              
              <!-- Power Systems Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=w4QFJb9a8vo" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-600/30 rounded-lg p-3 hover:border-yellow-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Power Grid</div>
                    <div class="text-xs text-gray-300">Electrical Grid Systems</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=ZPyUKyGY_Tg" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-600/30 rounded-lg p-3 hover:border-yellow-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Transformers</div>
                    <div class="text-xs text-gray-300">Voltage Conversion</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=1fAAOrlHlsM" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-600/30 rounded-lg p-3 hover:border-yellow-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Motors & Generators</div>
                    <div class="text-xs text-gray-300">Electromechanical</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=S1jWdeRKvvk" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-600/30 rounded-lg p-3 hover:border-yellow-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Renewable Energy</div>
                    <div class="text-xs text-gray-300">Solar & Wind Power</div>
                  </div>
                </a>
              </div>
              
              <!-- Electronics Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=6Maq5IyHSuc" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-700/30 rounded-lg p-3 hover:border-yellow-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Semiconductors</div>
                    <div class="text-xs text-gray-300">Diodes & Transistors</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=7ukDKVHnac4" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-700/30 rounded-lg p-3 hover:border-yellow-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Digital Logic</div>
                    <div class="text-xs text-gray-300">Logic Gates & Circuits</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=sTHqnDKJdVQ" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-700/30 rounded-lg p-3 hover:border-yellow-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Microcontrollers</div>
                    <div class="text-xs text-gray-300">Arduino & Embedded</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=Maq24bX0jvs" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-yellow-700/30 rounded-lg p-3 hover:border-yellow-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-yellow-300 mb-1">Signal Processing</div>
                    <div class="text-xs text-gray-300">DSP & Filters</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Chemical Engineering Section -->
          <div id="chemical" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>
              </div>
              Chemical Engineering
            </h2>
            
            <!-- GitHub-style Branch Network for Chemical Engineering -->
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
                <div class="text-sm font-bold text-green-300 mb-2">Process Design</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-bold text-green-300 mb-2">Refining</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-bold text-green-300 mb-2">Biotechnology</div>
              </div>
              
              <!-- Process Design Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=k4cVxGndh9g" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-500/30 rounded-lg p-3 hover:border-green-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Refining Principles</div>
                    <div class="text-xs text-gray-300">Chemical Processes</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=hC1PKRmiEvs" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-500/30 rounded-lg p-3 hover:border-green-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Oil Refinery</div>
                    <div class="text-xs text-gray-300">Shell Film 1950</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=RMWQbmjGgs0" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-500/30 rounded-lg p-3 hover:border-green-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Mass Transfer</div>
                    <div class="text-xs text-gray-300">Unit Operations</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=7KuHuxM_5iI" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-500/30 rounded-lg p-3 hover:border-green-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Heat Transfer</div>
                    <div class="text-xs text-gray-300">Thermal Processes</div>
                  </div>
                </a>
              </div>
              
              <!-- Refining Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=Nji1xZ3n5jc" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-600/30 rounded-lg p-3 hover:border-green-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Distillation</div>
                    <div class="text-xs text-gray-300">Separation Process</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=hxMS4QJjbzg" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-600/30 rounded-lg p-3 hover:border-green-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Catalysis</div>
                    <div class="text-xs text-gray-300">Chemical Reactions</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=Qw8IiRgSMFQ" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-600/30 rounded-lg p-3 hover:border-green-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Petrochemicals</div>
                    <div class="text-xs text-gray-300">Chemical Industry</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=2LM0CZZ9Uw8" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-600/30 rounded-lg p-3 hover:border-green-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Process Control</div>
                    <div class="text-xs text-gray-300">Automation Systems</div>
                  </div>
                </a>
              </div>
              
              <!-- Biotechnology Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=8kK2zwjRV0M" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-700/30 rounded-lg p-3 hover:border-green-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Bioprocessing</div>
                    <div class="text-xs text-gray-300">Biological Systems</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=gG7uCskUOrA" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-700/30 rounded-lg p-3 hover:border-green-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Fermentation</div>
                    <div class="text-xs text-gray-300">Microbial Processes</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=jAhjPd4uNFY" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-700/30 rounded-lg p-3 hover:border-green-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Biofuels</div>
                    <div class="text-xs text-gray-300">Renewable Energy</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=FkVomB6cVJE" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-green-700/30 rounded-lg p-3 hover:border-green-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-green-300 mb-1">Pharmaceuticals</div>
                    <div class="text-xs text-gray-300">Drug Manufacturing</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- General Engineering Section -->
          <div id="general" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              General Engineering
            </h2>
            
            <!-- GitHub-style Branch Network for General Engineering -->
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
                <div class="text-sm font-bold text-purple-300 mb-2">Fundamentals</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-bold text-purple-300 mb-2">Education</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-bold text-purple-300 mb-2">Resources</div>
              </div>
              
              <!-- Fundamentals Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://youtu.be/btGYcizV0iI" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">What is Engineering?</div>
                    <div class="text-xs text-gray-300">Engineering Basics</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://youtu.be/FAJGx3zP-Eo" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Engineers Impact</div>
                    <div class="text-xs text-gray-300">Who Makes Things Happen</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=bipTWWHya8A" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Engineering Design</div>
                    <div class="text-xs text-gray-300">Design Process</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=fxZWIbNKJNs" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-500/30 rounded-lg p-3 hover:border-purple-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Problem Solving</div>
                    <div class="text-xs text-gray-300">Engineering Method</div>
                  </div>
                </a>
              </div>
              
              <!-- Education Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.engineer4free.com" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-600/30 rounded-lg p-3 hover:border-purple-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Engineer4Free</div>
                    <div class="text-xs text-gray-300">University Courses</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://cosmolearning.org/engineering/" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-600/30 rounded-lg p-3 hover:border-purple-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">CosmoLearning</div>
                    <div class="text-xs text-gray-300">Engineering Videos</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.khanacademy.org/science/physics" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-600/30 rounded-lg p-3 hover:border-purple-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Khan Academy</div>
                    <div class="text-xs text-gray-300">Physics & Engineering</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.edx.org/learn/engineering" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-600/30 rounded-lg p-3 hover:border-purple-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">edX Engineering</div>
                    <div class="text-xs text-gray-300">Online Courses</div>
                  </div>
                </a>
              </div>
              
              <!-- Resources Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.asme.org/topics-resources/content/7-different-types-of-engineering" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-700/30 rounded-lg p-3 hover:border-purple-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Engineering Types</div>
                    <div class="text-xs text-gray-300">ASME Guide</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.engineeringchallenges.org/" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-700/30 rounded-lg p-3 hover:border-purple-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">Grand Challenges</div>
                    <div class="text-xs text-gray-300">21st Century</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.nspe.org/" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-700/30 rounded-lg p-3 hover:border-purple-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">NSPE</div>
                    <div class="text-xs text-gray-300">Professional Society</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.ieee.org/" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-purple-700/30 rounded-lg p-3 hover:border-purple-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-purple-300 mb-1">IEEE</div>
                    <div class="text-xs text-gray-300">Engineering Society</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Engineering Talks Section -->
          <div id="talks" class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-400"><path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3Z"/><path d="M19 11c-.64-.64-1.84-.84-3-1.2a3.9 3.9 0 0 1-2-2c-.36-1.16-.56-2.36-1.2-3"/><path d="M5 11c.64-.64 1.84-.84 3-1.2a3.9 3.9 0 0 0 2-2c.36-1.16.56-2.36 1.2-3"/><path d="M12 22s4-9 4-13"/><path d="M8 22s-4-9-4-13"/></svg>
              </div>
              Inspiring Talks
            </h2>
            
            <!-- GitHub-style Branch Network for Inspiring Talks -->
            <div class="relative min-h-[400px] bg-space-900/30 rounded-xl p-6 overflow-hidden mb-8">
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <!-- Main vertical branches -->
                <line x1="100" y1="50" x2="100" y2="350" stroke="#ef4444" stroke-width="3" opacity="0.6"/>
                <line x1="300" y1="50" x2="300" y2="350" stroke="#dc2626" stroke-width="3" opacity="0.6"/>
                <line x1="500" y1="50" x2="500" y2="350" stroke="#b91c1c" stroke-width="3" opacity="0.6"/>
                
                <!-- Horizontal resource branches -->
                <line x1="100" y1="100" x2="250" y2="100" stroke="#ef4444" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="150" x2="250" y2="150" stroke="#ef4444" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="200" x2="250" y2="200" stroke="#ef4444" stroke-width="2" opacity="0.4"/>
                <line x1="100" y1="250" x2="250" y2="250" stroke="#ef4444" stroke-width="2" opacity="0.4"/>
                
                <line x1="300" y1="100" x2="450" y2="100" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="150" x2="450" y2="150" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="200" x2="450" y2="200" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
                <line x1="300" y1="250" x2="450" y2="250" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
                
                <line x1="500" y1="100" x2="650" y2="100" stroke="#b91c1c" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="150" x2="650" y2="150" stroke="#b91c1c" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="200" x2="650" y2="200" stroke="#b91c1c" stroke-width="2" opacity="0.4"/>
                <line x1="500" y1="250" x2="650" y2="250" stroke="#b91c1c" stroke-width="2" opacity="0.4"/>
                
                <!-- Junction circles -->
                <circle cx="100" cy="100" r="4" fill="#ef4444"/>
                <circle cx="100" cy="150" r="4" fill="#ef4444"/>
                <circle cx="100" cy="200" r="4" fill="#ef4444"/>
                <circle cx="100" cy="250" r="4" fill="#ef4444"/>
                <circle cx="300" cy="100" r="4" fill="#dc2626"/>
                <circle cx="300" cy="150" r="4" fill="#dc2626"/>
                <circle cx="300" cy="200" r="4" fill="#dc2626"/>
                <circle cx="300" cy="250" r="4" fill="#dc2626"/>
                <circle cx="500" cy="100" r="4" fill="#b91c1c"/>
                <circle cx="500" cy="150" r="4" fill="#b91c1c"/>
                <circle cx="500" cy="200" r="4" fill="#b91c1c"/>
                <circle cx="500" cy="250" r="4" fill="#b91c1c"/>
              </svg>
              
              <!-- Branch Headers -->
              <div class="absolute top-4 left-[70px] text-center">
                <div class="text-sm font-bold text-red-300 mb-2">Leadership</div>
              </div>
              <div class="absolute top-4 left-[270px] text-center">
                <div class="text-sm font-bold text-red-300 mb-2">Innovation</div>
              </div>
              <div class="absolute top-4 left-[470px] text-center">
                <div class="text-sm font-bold text-red-300 mb-2">Inspiration</div>
              </div>
              
              <!-- Leadership Branch -->
              <div class="absolute top-[85px] left-[260px] z-10">
                <a href="https://archive.org/details/podcast_businessleadership-video_the-art-engineering_1000084846101" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Art of Engineering</div>
                    <div class="text-xs text-gray-300">James Dyson</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[260px] z-10">
                <a href="https://youtu.be/FEeTLopLkEo" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Female Engineers</div>
                    <div class="text-xs text-gray-300">Next Generation</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=Ucp0TTmvqOE" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Engineering Ethics</div>
                    <div class="text-xs text-gray-300">Professional Responsibility</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[260px] z-10">
                <a href="https://www.youtube.com/watch?v=N7ZmPYaXoic" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Engineering Management</div>
                    <div class="text-xs text-gray-300">Leadership Skills</div>
                  </div>
                </a>
              </div>
              
              <!-- Innovation Branch -->
              <div class="absolute top-[85px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=ZJijzqSJPAk" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-600/30 rounded-lg p-3 hover:border-red-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Future of Engineering</div>
                    <div class="text-xs text-gray-300">Technology Trends</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=qYvXk_bqlBk" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-600/30 rounded-lg p-3 hover:border-red-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Sustainable Engineering</div>
                    <div class="text-xs text-gray-300">Green Technology</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=DKK4KeLBcuw" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-600/30 rounded-lg p-3 hover:border-red-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Space Engineering</div>
                    <div class="text-xs text-gray-300">Mars Mission</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[460px] z-10">
                <a href="https://www.youtube.com/watch?v=8jF1OhgOdAg" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-600/30 rounded-lg p-3 hover:border-red-500 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">AI in Engineering</div>
                    <div class="text-xs text-gray-300">Machine Learning</div>
                  </div>
                </a>
              </div>
              
              <!-- Inspiration Branch -->
              <div class="absolute top-[85px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=w4QFJb9a8vo" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-700/30 rounded-lg p-3 hover:border-red-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Engineering Marvels</div>
                    <div class="text-xs text-gray-300">Modern Wonders</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[135px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=bipTWWHya8A" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-700/30 rounded-lg p-3 hover:border-red-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Design Thinking</div>
                    <div class="text-xs text-gray-300">Creative Process</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[185px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=fxZWIbNKJNs" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-700/30 rounded-lg p-3 hover:border-red-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Problem Solving</div>
                    <div class="text-xs text-gray-300">Engineering Mindset</div>
                  </div>
                </a>
              </div>
              
              <div class="absolute top-[235px] left-[660px] z-10">
                <a href="https://www.youtube.com/watch?v=btGYcizV0iI" target="_blank" class="group block">
                  <div class="bg-space-800/90 border border-red-700/30 rounded-lg p-3 hover:border-red-600 transition-all duration-300 hover:scale-105 max-w-[200px]">
                    <div class="text-xs font-medium text-red-300 mb-1">Why Engineering?</div>
                    <div class="text-xs text-gray-300">Career Motivation</div>
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