<script setup lang="ts">
// Set page meta
useHead({
  title: 'Technology - Awesome Horizon',
  meta: [
    { name: 'description', content: 'Innovations shaping our digital future - AI, Web Development, Programming, and more cutting-edge tech resources.' }
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
        <h1 class="text-5xl font-bold text-white mb-4">Technology</h1>
        <p class="text-xl text-primary-100 max-w-2xl mx-auto">Innovations shaping our digital future - AI, Web Development, Programming, and more cutting-edge tech resources.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="prose prose-invert prose-lg max-w-4xl mx-auto pb-16 px-4">
      <div class="space-y-6">
        <h1 class="text-4xl font-bold text-white mb-8">Technology Resources</h1>
        
        <div class="grid gap-6">
          <!-- Technology Statistics Banner -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div class="group p-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl border border-emerald-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-emerald-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-300"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">380+</div>
                  <div class="text-xs text-emerald-200">Total Resources</div>
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
                  <div class="text-xs text-blue-200">Tech Companies</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-purple-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-300"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/><path d="m9 1 3 3 3-3"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">8</div>
                  <div class="text-xs text-purple-200">Tech Areas</div>
                </div>
              </div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl border border-orange-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-orange-500/30 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-300"><polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/></svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white">2025</div>
                  <div class="text-xs text-orange-200">Latest Content</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Technology Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>
              </div>
              Technology
            </h2>
            
            <!-- Technology Categories Overview -->
            <div class="mb-8 relative">
              <!-- Animated Background -->
              <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
              
              <div class="relative p-8 bg-space-800/40 backdrop-blur-sm rounded-2xl border border-space-700/50 shadow-2xl overflow-hidden">
                <div class="flex items-center justify-between mb-8">
                  <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                    <div class="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>
                    </div>
                    Technology Learning Journey
                  </h3>
                  <div class="flex items-center gap-2 text-sm text-gray-400">
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    380+ Resources
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
                      <filter id="glow-technology">
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
                    <!-- Computer Science branch (top) -->
                    <path d="M 170 235 Q 170 195 170 150" stroke="#10b981" stroke-width="2" fill="none"/>
                    
                    <!-- Web Development branch (bottom) -->
                    <path d="M 270 235 Q 270 275 270 320" stroke="#3b82f6" stroke-width="2" fill="none"/>
                    
                    <!-- Mobile Development branch (top) -->
                    <path d="M 370 235 Q 370 195 370 150" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                    
                    <!-- AI & ML branch (bottom) -->
                    <path d="M 470 235 Q 470 275 470 320" stroke="#f59e0b" stroke-width="2" fill="none"/>
                    
                    <!-- Data Science branch (top) -->
                    <path d="M 570 235 Q 570 195 570 150" stroke="#ef4444" stroke-width="2" fill="none"/>
                    
                    <!-- DevOps branch (bottom) -->
                    <path d="M 670 235 Q 670 275 670 320" stroke="#06b6d4" stroke-width="2" fill="none"/>
                    
                    <!-- Cybersecurity branch (top) -->
                    <path d="M 750 235 Q 750 195 750 150" stroke="#ec4899" stroke-width="2" fill="none"/>
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
                  
                  <!-- Computer Science -->
                  <div class="absolute top-[235px] left-[170px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('computer-science').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <rect x="4" y="4" width="16" height="16" rx="2"/>
                          <rect x="8" y="8" width="8" height="8" rx="1"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Computer Science</div>
                    </div>
                  </div>
                  
                  <!-- Web Development -->
                  <div class="absolute top-[235px] left-[270px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('web-development').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="2" x2="22" y1="12" y2="12"/>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Web Development</div>
                    </div>
                  </div>
                  
                  <!-- Mobile Development -->
                  <div class="absolute top-[235px] left-[370px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('mobile-development').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                          <line x1="12" x2="12.01" y1="18" y2="18"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Mobile Development</div>
                    </div>
                  </div>
                  
                  <!-- AI & Machine Learning -->
                  <div class="absolute top-[235px] left-[470px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('ai-ml').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 1.1-.9 2-2 2-.74 0-1.39-.4-1.73-1H14v4a2 2 0 0 1-2 2h-1.28c-.35.6-.98 1-1.72 1-1.1 0-2-.9-2-2 0-.74.4-1.39 1-1.73V14H4a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2 .74 0 1.39.4 1.73 1H8V4a2 2 0 0 1 2-2z"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-yellow-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">AI & ML</div>
                    </div>
                  </div>
                  
                  <!-- Data Science -->
                  <div class="absolute top-[235px] left-[570px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('data-science').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M3 3v18h18"/>
                          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Data Science</div>
                    </div>
                  </div>
                  
                  <!-- DevOps -->
                  <div class="absolute top-[235px] left-[670px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('devops').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-cyan-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">DevOps</div>
                    </div>
                  </div>
                  
                  <!-- Cybersecurity -->
                  <div class="absolute top-[235px] left-[750px] z-10">
                    <div class="group cursor-pointer" onclick="document.getElementById('cybersecurity').scrollIntoView({behavior: 'smooth'})">
                      <div class="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-pink-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                          <path d="M9 12l2 2 4-4"/>
                        </svg>
                      </div>
                      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-pink-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">Cybersecurity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- COMPUTER SCIENCE SECTION -->
          <div id="computer-science" class="relative group">
            <!-- Section Divider -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-emerald-400 to-transparent rounded-full opacity-60"></div>
            
            <div class="pl-8 space-y-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl border border-emerald-500/30 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Computer Science</h3>
                    <p class="text-emerald-200 text-sm">Programming fundamentals and CS concepts</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                  <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span class="text-xs text-emerald-300 font-medium">12 Resources</span>
                </div>
              </div>
            
            <!-- GitHub-style Branch Network for Computer Science -->
            <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
              <!-- Animated Background Grid -->
              <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
              </div>
              
              <!-- SVG for Clean Branch Lines with Curved Connections -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                <!-- Main vertical branch line for Fundamentals (continuous) -->
                <line x1="120" y1="60" x2="120" y2="200" stroke="#10b981" stroke-width="3"/>
                
                <!-- Fundamentals resource branches with curved junctions -->
                <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#3b82f6" stroke-width="3" fill="none"/>
                <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#06b6d4" stroke-width="3" fill="none"/>
                <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#f59e0b" stroke-width="3" fill="none"/>
                
                <!-- Main vertical branch line for AP Computer Science (continuous) -->
                <line x1="120" y1="250" x2="120" y2="370" stroke="#3b82f6" stroke-width="3"/>
                
                <!-- AP CS resource branches with curved junctions -->
                <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#f59e0b" stroke-width="3" fill="none"/>
                <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#ef4444" stroke-width="3" fill="none"/>
                
                <!-- Main vertical branch line for Advanced Topics (continuous) -->
                <line x1="120" y1="420" x2="120" y2="540" stroke="#ec4899" stroke-width="3"/>
                
                <!-- Advanced resource branches with curved junctions -->
                <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
              </svg>
              
              <!-- Main Branch Headers -->
              <!-- Fundamentals Header -->
              <div class="absolute top-[45px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-emerald-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-emerald-500/30">CS Fundamentals</div>
                </div>
              </div>
              
              <!-- AP Computer Science Header -->
              <div class="absolute top-[235px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.87 2 9l6.91-1.74L12 2z"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-blue-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-blue-500/30">AP Computer Science</div>
                </div>
              </div>
              
              <!-- Advanced Topics Header -->
              <div class="absolute top-[405px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-pink-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-pink-500/30">Advanced Topics</div>
                </div>
              </div>
              
              <!-- Individual Resource Nodes -->
              <!-- Fundamentals Resources -->
              <div class="absolute top-[95px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.edx.org/cs50" target="_blank" class="hover:text-white">Harvard CS50</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[125px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.youtube.com/playlist?list=PLhQjrBD2T381L3iZyDTxRwOBuUt6m1FnW" target="_blank" class="hover:text-white">CS50 Lectures</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[155px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://github.com/ossu/computer-science" target="_blank" class="hover:text-white">OSSU CS Path</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[185px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.codecademy.com/learn/learn-how-to-code" target="_blank" class="hover:text-white">Codecademy Basics</a>
                  </div>
                </div>
              </div>
              
              <!-- AP Computer Science Resources -->
              <div class="absolute top-[265px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://runestone.academy/ns/books/published/StudentCSP/index.html?mode=browsing" target="_blank" class="hover:text-white">Runestone AP CSP</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[295px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://runestone.academy/ns/books/published/csawesome/index.html?mode=browsing" target="_blank" class="hover:text-white">AP CSAwesome Java</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[325px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://codingbat.com/java" target="_blank" class="hover:text-white">CodingBat Java</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[355px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://apstudents.collegeboard.org/courses/ap-computer-science-a" target="_blank" class="hover:text-white">AP CS A Guide</a>
                  </div>
                </div>
              </div>
              
              <!-- Advanced Topics Resources -->
              <div class="absolute top-[435px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://leetcode.com/explore/" target="_blank" class="hover:text-white">LeetCode Practice</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[465px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.hackerrank.com/domains/algorithms" target="_blank" class="hover:text-white">HackerRank Algorithms</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[495px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.geeksforgeeks.org/data-structures/" target="_blank" class="hover:text-white">GeeksforGeeks DS</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[525px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.coursera.org/specializations/algorithms" target="_blank" class="hover:text-white">Coursera Algorithms</a>
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

          <!-- WEB DEVELOPMENT SECTION -->
          <div id="web-development" class="relative group">
            <!-- Section Divider -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent rounded-full opacity-60"></div>
            
            <div class="pl-8 space-y-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Web Development</h3>
                    <p class="text-blue-200 text-sm">Modern web technologies and frameworks</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                  <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span class="text-xs text-blue-300 font-medium">12 Resources</span>
                </div>
              </div>
            
            <!-- GitHub-style Branch Network for Web Development -->
            <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
              <!-- Animated Background Grid -->
              <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
              </div>
              
              <!-- SVG for Clean Branch Lines with Curved Connections -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                <!-- Main vertical branch line for Frontend Basics (continuous) -->
                <line x1="120" y1="60" x2="120" y2="200" stroke="#3b82f6" stroke-width="3"/>
                
                <!-- Frontend resource branches with curved junctions -->
                <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#f59e0b" stroke-width="3" fill="none"/>
                <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#ef4444" stroke-width="3" fill="none"/>
                
                <!-- Main vertical branch line for JavaScript & Frameworks (continuous) -->
                <line x1="120" y1="250" x2="120" y2="370" stroke="#10b981" stroke-width="3"/>
                
                <!-- JavaScript resource branches with curved junctions -->
                <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#3b82f6" stroke-width="3" fill="none"/>
                <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#06b6d4" stroke-width="3" fill="none"/>
                <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#f59e0b" stroke-width="3" fill="none"/>
                
                <!-- Main vertical branch line for Backend & Full Stack (continuous) -->
                <line x1="120" y1="420" x2="120" y2="540" stroke="#ec4899" stroke-width="3"/>
                
                <!-- Backend resource branches with curved junctions -->
                <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
              </svg>
              
              <!-- Main Branch Headers -->
              <!-- Frontend Basics Header -->
              <div class="absolute top-[45px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-blue-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-blue-500/30">Frontend Basics</div>
                </div>
              </div>
              
              <!-- JavaScript & Frameworks Header -->
              <div class="absolute top-[235px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-emerald-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-emerald-500/30">JavaScript & Frameworks</div>
                </div>
              </div>
              
              <!-- Backend & Full Stack Header -->
              <div class="absolute top-[405px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-pink-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-pink-500/30">Backend & Full Stack</div>
                </div>
              </div>
              
              <!-- Individual Resource Nodes -->
              <!-- Frontend Basics Resources -->
              <div class="absolute top-[95px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank" class="hover:text-white">MDN Web Docs</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[125px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.freecodecamp.org/learn/responsive-web-design/" target="_blank" class="hover:text-white">FreeCodeCamp HTML/CSS</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[155px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://css-tricks.com/guides/" target="_blank" class="hover:text-white">CSS-Tricks Guides</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[185px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://flexboxfroggy.com/" target="_blank" class="hover:text-white">Flexbox Froggy</a>
                  </div>
                </div>
              </div>
              
              <!-- JavaScript & Frameworks Resources -->
              <div class="absolute top-[265px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://eloquentjavascript.net" target="_blank" class="hover:text-white">Eloquent JavaScript</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[295px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" class="hover:text-white">React Tutorial</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[325px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://vuejs.org/guide/" target="_blank" class="hover:text-white">Vue.js Guide</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[355px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://angular.io/tutorial" target="_blank" class="hover:text-white">Angular Tutorial</a>
                  </div>
                </div>
              </div>
              
              <!-- Backend & Full Stack Resources -->
              <div class="absolute top-[435px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://nodejs.org/en/docs/guides/" target="_blank" class="hover:text-white">Node.js Guides</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[465px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://expressjs.com/en/starter/installing.html" target="_blank" class="hover:text-white">Express.js Guide</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[495px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://nextjs.org/learn" target="_blank" class="hover:text-white">Next.js Learn</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[525px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.mongodb.com/docs/manual/tutorial/" target="_blank" class="hover:text-white">MongoDB Tutorial</a>
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

          <!-- MOBILE DEVELOPMENT SECTION -->
          <div id="mobile-development" class="relative group">
            <!-- Section Divider -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent rounded-full opacity-60"></div>
            
            <div class="pl-8 space-y-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Mobile Development</h3>
                    <p class="text-purple-200 text-sm">iOS, Android, and cross-platform apps</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                  <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span class="text-xs text-purple-300 font-medium">12 Resources</span>
                </div>
              </div>
            
            <!-- GitHub-style Branch Network for Mobile Development -->
            <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
              <!-- Animated Background Grid -->
              <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
              </div>
              
              <!-- SVG for Clean Branch Lines with Curved Connections -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                <!-- Main vertical branch line for iOS Development (continuous) -->
                <line x1="120" y1="60" x2="120" y2="200" stroke="#8b5cf6" stroke-width="3"/>
                
                <!-- iOS resource branches with curved junctions -->
                <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#3b82f6" stroke-width="3" fill="none"/>
                <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#f59e0b" stroke-width="3" fill="none"/>
                <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#ef4444" stroke-width="3" fill="none"/>
                
                <!-- Main vertical branch line for Android Development (continuous) -->
                <line x1="120" y1="250" x2="120" y2="370" stroke="#10b981" stroke-width="3"/>
                
                <!-- Android resource branches with curved junctions -->
                <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#3b82f6" stroke-width="3" fill="none"/>
                <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#06b6d4" stroke-width="3" fill="none"/>
                <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#f59e0b" stroke-width="3" fill="none"/>
                
                <!-- Main vertical branch line for Cross-Platform (continuous) -->
                <line x1="120" y1="420" x2="120" y2="540" stroke="#ec4899" stroke-width="3"/>
                
                <!-- Cross-Platform resource branches with curved junctions -->
                <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
              </svg>
              
              <!-- Main Branch Headers -->
              <!-- iOS Development Header -->
              <div class="absolute top-[45px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                      <line x1="12" x2="12.01" y1="18" y2="18"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-purple-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-purple-500/30">iOS Development</div>
                </div>
              </div>
              
              <!-- Android Development Header -->
              <div class="absolute top-[235px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                      <path d="M4 22h16"/>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-emerald-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-emerald-500/30">Android Development</div>
                </div>
              </div>
              
              <!-- Cross-Platform Header -->
              <div class="absolute top-[405px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 1.1-.9 2-2 2-.74 0-1.39-.4-1.73-1H14v4a2 2 0 0 1-2 2h-1.28c-.35.6-.98 1-1.72 1-1.1 0-2-.9-2-2 0-.74.4-1.39 1-1.73V14H4a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2 .74 0 1.39.4 1.73 1H8V4a2 2 0 0 1 2-2z"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-pink-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-pink-500/30">Cross-Platform</div>
                </div>
              </div>
              
              <!-- Individual Resource Nodes -->
              <!-- iOS Development Resources -->
              <div class="absolute top-[95px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://cs193p.sites.stanford.edu" target="_blank" class="hover:text-white">Stanford CS193P</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[125px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://developer.apple.com/tutorials/swiftui" target="_blank" class="hover:text-white">Apple SwiftUI</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[155px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.apple.com/swift/playgrounds/" target="_blank" class="hover:text-white">Swift Playgrounds</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[185px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.hackingwithswift.com/100/swiftui" target="_blank" class="hover:text-white">100 Days SwiftUI</a>
                  </div>
                </div>
              </div>
              
              <!-- Android Development Resources -->
              <div class="absolute top-[265px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://developer.android.com/courses" target="_blank" class="hover:text-white">Android Courses</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[295px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://kotlinlang.org/docs/android-overview.html" target="_blank" class="hover:text-white">Kotlin for Android</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[325px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://developer.android.com/jetpack/compose/tutorial" target="_blank" class="hover:text-white">Jetpack Compose</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[355px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803" target="_blank" class="hover:text-white">Android Basics</a>
                  </div>
                </div>
              </div>
              
              <!-- Cross-Platform Resources -->
              <div class="absolute top-[435px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://flutter.dev/docs/get-started/codelab" target="_blank" class="hover:text-white">Flutter Codelab</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[465px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://reactnative.dev/docs/getting-started" target="_blank" class="hover:text-white">React Native</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[495px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://xamarin.microsoft.com/getting-started" target="_blank" class="hover:text-white">Xamarin Guide</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[525px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://ionicframework.com/getting-started" target="_blank" class="hover:text-white">Ionic Framework</a>
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

          <!-- AI & MACHINE LEARNING SECTION -->
          <div id="ai-ml" class="relative group">
            <!-- Section Divider -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-yellow-400 to-transparent rounded-full opacity-60"></div>
            
            <div class="pl-8 space-y-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-2xl border border-yellow-500/30 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 1.1-.9 2-2 2-.74 0-1.39-.4-1.73-1H14v4a2 2 0 0 1-2 2h-1.28c-.35.6-.98 1-1.72 1-1.1 0-2-.9-2-2 0-.74.4-1.39 1-1.73V14H4a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2 .74 0 1.39.4 1.73 1H8V4a2 2 0 0 1 2-2z"/></svg>
                  <div>
                    <h3 class="text-2xl font-bold text-white">AI & Machine Learning</h3>
                    <p class="text-yellow-200 text-sm">Artificial intelligence and ML algorithms</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 px-3 py-1 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                  <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span class="text-xs text-yellow-300 font-medium">12 Resources</span>
                </div>
              </div>
            
            <!-- GitHub-style Branch Network for AI & ML -->
            <div class="relative min-h-[600px] bg-space-900/30 rounded-xl p-8 overflow-hidden">
              <!-- Animated Background Grid -->
              <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
              </div>
              
              <!-- SVG for Clean Branch Lines with Curved Connections -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                <!-- Main vertical branch line for ML Fundamentals (continuous) -->
                <line x1="120" y1="60" x2="120" y2="200" stroke="#f59e0b" stroke-width="3"/>
                
                <!-- ML Fundamentals resource branches with curved junctions -->
                <path d="M 120 107 Q 155 107 170 107 L 250 107" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 137 Q 155 137 170 137 L 250 137" stroke="#3b82f6" stroke-width="3" fill="none"/>
                <path d="M 120 167 Q 155 167 170 167 L 250 167" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 197 Q 155 197 170 197 L 250 197" stroke="#ef4444" stroke-width="3" fill="none"/>
                
                <!-- Main vertical branch line for Deep Learning (continuous) -->
                <line x1="120" y1="250" x2="120" y2="370" stroke="#8b5cf6" stroke-width="3"/>
                
                <!-- Deep Learning resource branches with curved junctions -->
                <path d="M 120 277 Q 155 277 170 277 L 250 277" stroke="#f59e0b" stroke-width="3" fill="none"/>
                <path d="M 120 307 Q 155 307 170 307 L 250 307" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 337 Q 155 337 170 337 L 250 337" stroke="#06b6d4" stroke-width="3" fill="none"/>
                <path d="M 120 367 Q 155 367 170 367 L 250 367" stroke="#3b82f6" stroke-width="3" fill="none"/>
                
                <!-- Main vertical branch line for AI Applications (continuous) -->
                <line x1="120" y1="420" x2="120" y2="540" stroke="#ec4899" stroke-width="3"/>
                
                <!-- AI Applications resource branches with curved junctions -->
                <path d="M 120 447 Q 155 447 170 447 L 250 447" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 120 477 Q 155 477 170 477 L 250 477" stroke="#10b981" stroke-width="3" fill="none"/>
                <path d="M 120 507 Q 155 507 170 507 L 250 507" stroke="#06b6d4" stroke-width="3" fill="none"/>
                <path d="M 120 537 Q 155 537 170 537 L 250 537" stroke="#f59e0b" stroke-width="3" fill="none"/>
              </svg>
              
              <!-- Main Branch Headers -->
              <!-- ML Fundamentals Header -->
              <div class="absolute top-[45px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-yellow-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-yellow-500/30">ML Fundamentals</div>
                </div>
              </div>
              
              <!-- Deep Learning Header -->
              <div class="absolute top-[235px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 1.1-.9 2-2 2-.74 0-1.39-.4-1.73-1H14v4a2 2 0 0 1-2 2h-1.28c-.35.6-.98 1-1.72 1-1.1 0-2-.9-2-2 0-.74.4-1.39 1-1.73V14H4a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2 .74 0 1.39.4 1.73 1H8V4a2 2 0 0 1 2-2z"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-purple-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-purple-500/30">Deep Learning</div>
                </div>
              </div>
              
              <!-- AI Applications Header -->
              <div class="absolute top-[405px] left-[50px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    </svg>
                  </div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full text-sm text-pink-300 font-bold whitespace-nowrap bg-space-800/90 px-3 py-1 rounded-lg border border-pink-500/30">AI Applications</div>
                </div>
              </div>
              
              <!-- Individual Resource Nodes -->
              <!-- ML Fundamentals Resources -->
              <div class="absolute top-[95px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.coursera.org/learn/machine-learning" target="_blank" class="hover:text-white">Andrew Ng ML Course</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[125px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://scikit-learn.org/stable/tutorial/index.html" target="_blank" class="hover:text-white">Scikit-learn Tutorial</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[155px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.kaggle.com/learn" target="_blank" class="hover:text-white">Kaggle Learn</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[185px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.edx.org/course/introduction-to-artificial-intelligence-ai" target="_blank" class="hover:text-white">MIT AI Course</a>
                  </div>
                </div>
              </div>
              
              <!-- Deep Learning Resources -->
              <div class="absolute top-[265px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.deeplearning.ai/" target="_blank" class="hover:text-white">DeepLearning.ai</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[295px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://pytorch.org/tutorials/" target="_blank" class="hover:text-white">PyTorch Tutorials</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[325px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.tensorflow.org/learn" target="_blank" class="hover:text-white">TensorFlow Learn</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[355px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://cs231n.github.io/" target="_blank" class="hover:text-white">Stanford CS231n</a>
                  </div>
                </div>
              </div>
              
              <!-- AI Applications Resources -->
              <div class="absolute top-[435px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-purple-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://huggingface.co/course/chapter1/1" target="_blank" class="hover:text-white">Hugging Face NLP</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[465px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-emerald-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://opencv.org/courses/" target="_blank" class="hover:text-white">OpenCV Computer Vision</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[495px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.fast.ai/" target="_blank" class="hover:text-white">Fast.ai Practical AI</a>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-[525px] left-[190px] z-10">
                <div class="group cursor-pointer">
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:scale-125 transition-all duration-300">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div class="absolute left-8 top-1/2 transform -translate-y-1/2 text-xs text-amber-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-space-800/90 px-2 py-1 rounded">
                    <a href="https://www.openai.com/research/" target="_blank" class="hover:text-white">OpenAI Research</a>
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