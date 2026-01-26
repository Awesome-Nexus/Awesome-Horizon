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
                    <line x1="70" y1="235" x2="750" y2="235" stroke="#f59e0b" stroke-width="3" opacity="0.6" filter="url(#glow-engineering)"/>
                    
                    <!-- Vertical branch lines -->
                    <line x1="170" y1="235" x2="170" y2="150" stroke="#f59e0b" stroke-width="2" opacity="0.5"/>
                    <line x1="270" y1="235" x2="270" y2="320" stroke="#3b82f6" stroke-width="2" opacity="0.5"/>
                    <line x1="370" y1="235" x2="370" y2="150" stroke="#eab308" stroke-width="2" opacity="0.5"/>
                    <line x1="470" y1="235" x2="470" y2="320" stroke="#10b981" stroke-width="2" opacity="0.5"/>
                    <line x1="570" y1="235" x2="570" y2="150" stroke="#8b5cf6" stroke-width="2" opacity="0.5"/>
                    <line x1="670" y1="235" x2="670" y2="320" stroke="#ef4444" stroke-width="2" opacity="0.5"/>
                    <line x1="750" y1="235" x2="750" y2="150" stroke="#06b6d4" stroke-width="2" opacity="0.5"/>
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
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-400"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>
              </div>
              Mechanical Engineering
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Fundamentals & Design</h3>
                <p class="text-gray-400 text-sm mb-3">Core mechanical engineering concepts, design principles, and applications.</p>
                <div class="space-y-2">
                  <a href="https://youtu.be/ht9GwXQMgpo" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Understanding Engineering Drawings</a>
                  <a href="https://www.youtube.com/playlist?list=PLX2gX-ftPVXUjkEEXJoC0mx8mxTlfqpCn" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Simple Machines (Dr. George Mehler)</a>
                  <a href="http://www.ilectureonline.com/lectures/subject/ENGINEERING/29" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• iLectureOnline Mechanical Engineering</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Aerospace Engineering Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              </div>
              Aerospace Engineering
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Flight & Aerodynamics</h3>
                <p class="text-gray-400 text-sm mb-3">Principles of flight, aerodynamics, and aerospace engineering fundamentals.</p>
                <div class="space-y-2">
                  <a href="https://youtu.be/5O-j0w-h7v0" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Principles of Flight</a>
                  <a href="https://youtu.be/edLnZgF9mUg" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Airplane Aerodynamics (MIT)</a>
                  <a href="https://youtu.be/E3i_XHlVCeU" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Understanding Aerodynamic Lift</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Electrical Engineering Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
              </div>
              Electrical Engineering
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Circuits & Systems</h3>
                <p class="text-gray-400 text-sm mb-3">Electrical circuits, systems analysis, and electronic engineering principles.</p>
                <div class="space-y-2">
                  <a href="http://www.ilectureonline.com/lectures/subject/ENGINEERING/28" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• iLectureOnline Electrical Engineering</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Chemical Engineering Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>
              </div>
              Chemical Engineering
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Process Engineering</h3>
                <p class="text-gray-400 text-sm mb-3">Chemical processes, refining, and industrial applications.</p>
                <div class="space-y-2">
                  <a href="https://www.youtube.com/watch?v=k4cVxGndh9g" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• The Principle of Refining</a>
                  <a href="https://www.youtube.com/watch?v=hC1PKRmiEvs" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• How an Oil Refinery Works (1950 Shell Film)</a>
                </div>
              </div>
            </div>
          </div>

          <!-- General Engineering Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              General Engineering
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Engineering Fundamentals</h3>
                <p class="text-gray-400 text-sm mb-3">Core engineering principles and interdisciplinary resources.</p>
                <div class="space-y-2">
                  <a href="https://youtu.be/btGYcizV0iI" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• What is Engineering?</a>
                  <a href="https://youtu.be/FAJGx3zP-Eo" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Who Makes Things Happen? Engineers!</a>
                  <a href="https://www.engineer4free.com" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Engineer4Free University Level Courses</a>
                  <a href="https://cosmolearning.org/engineering/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• CosmoLearning Engineering Videos</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Engineering Talks Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-400"><path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3Z"/><path d="M19 11c-.64-.64-1.84-.84-3-1.2a3.9 3.9 0 0 1-2-2c-.36-1.16-.56-2.36-1.2-3"/><path d="M5 11c.64-.64 1.84-.84 3-1.2a3.9 3.9 0 0 0 2-2c.36-1.16.56-2.36 1.2-3"/><path d="M12 22s4-9 4-13"/><path d="M8 22s-4-9-4-13"/></svg>
              </div>
              Inspiring Talks
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Engineering Leadership & Innovation</h3>
                <p class="text-gray-400 text-sm mb-3">Inspirational talks from engineering leaders and innovators.</p>
                <div class="space-y-2">
                  <a href="https://archive.org/details/podcast_businessleadership-video_the-art-engineering_1000084846101" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• The Art of Engineering (James Dyson)</a>
                  <a href="https://youtu.be/FEeTLopLkEo" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Inspiring the Next Generation of Female Engineers</a>
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