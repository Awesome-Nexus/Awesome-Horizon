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
                    <line x1="70" y1="235" x2="750" y2="235" stroke="#0ea5e9" stroke-width="3" opacity="0.6" filter="url(#glow-mathematics)"/>
                    
                    <!-- Vertical branch lines -->
                    <line x1="170" y1="235" x2="170" y2="150" stroke="#0ea5e9" stroke-width="2" opacity="0.5"/>
                    <line x1="270" y1="235" x2="270" y2="320" stroke="#8b5cf6" stroke-width="2" opacity="0.5"/>
                    <line x1="370" y1="235" x2="370" y2="150" stroke="#10b981" stroke-width="2" opacity="0.5"/>
                    <line x1="470" y1="235" x2="470" y2="320" stroke="#eab308" stroke-width="2" opacity="0.5"/>
                    <line x1="570" y1="235" x2="570" y2="150" stroke="#3b82f6" stroke-width="2" opacity="0.5"/>
                    <line x1="670" y1="235" x2="670" y2="320" stroke="#f97316" stroke-width="2" opacity="0.5"/>
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
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-sky-400"><path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/></svg>
              </div>
              Calculus
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Calculus AB & BC</h3>
                <p class="text-gray-400 text-sm mb-3">Comprehensive calculus resources from basics to advanced topics.</p>
                <div class="space-y-2">
                  <a href="https://www.youtube.com/watch?v=WUvTyaaNkzM&list=PL0-GT3co4r2wlh6UHTUeQsrf3mlS2lk6x" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• 3Blue1Brown: Essence of Calculus</a>
                  <a href="https://www.khanacademy.org/math/ap-calculus-ab" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Khan Academy AP Calculus AB</a>
                  <a href="https://www.youtube.com/playlist?list=PLF797E961509B4EB5" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Professor Leonard Calculus 1</a>
                  <a href="https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Paul's Online Notes Calculus</a>
                </div>
              </div>
              
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Multivariable Calculus</h3>
                <p class="text-gray-400 text-sm mb-3">Advanced calculus topics including vectors, partial derivatives, and multiple integrals.</p>
                <div class="space-y-2">
                  <a href="https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• MIT Multivariable Calculus</a>
                  <a href="https://www.youtube.com/playlist?list=PLHXZ9OQGMqxc_CvEy7xBKRQr6I214QJcd" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Dr. Trefor Bazett Multivariable Calculus</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Linear Algebra Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/></svg>
              </div>
              Linear Algebra
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Matrix Theory & Applications</h3>
                <p class="text-gray-400 text-sm mb-3">Essential linear algebra concepts for mathematics, engineering, and data science.</p>
                <div class="space-y-2">
                  <a href="https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• MIT Linear Algebra (Gilbert Strang)</a>
                  <a href="https://youtube.com/playlist?list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• 3Blue1Brown: Linear Algebra Intuition</a>
                  <a href="https://joshua.smcvt.edu/linearalgebra/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Jim Hefferon's Linear Algebra (Free Textbook)</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Statistics Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
              </div>
              Statistics & Probability
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">AP Statistics & College Stats</h3>
                <p class="text-gray-400 text-sm mb-3">Statistical analysis, probability theory, and data interpretation.</p>
                <div class="space-y-2">
                  <a href="https://www.khanacademy.org/math/ap-statistics" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Khan Academy AP Statistics</a>
                  <a href="https://ocw.mit.edu/courses/18-440-probability-and-random-variables-spring-2014/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• MIT Probability and Random Variables</a>
                </div>
              </div>
            </div>
          </div>

          <!-- High School Math Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              High School Mathematics
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Algebra & Precalculus</h3>
                <p class="text-gray-400 text-sm mb-3">Foundation mathematics from algebra through precalculus and trigonometry.</p>
                <div class="space-y-2">
                  <a href="https://www.youtube.com/playlist?list=PLC292123722B1B450" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Professor Leonard Intermediate Algebra</a>
                  <a href="https://www.youtube.com/playlist?list=PLDesaqWTN6ESsmwELdrzhcGiRhk5DjwLP" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Professor Leonard Precalculus</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Math Tools Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
              </div>
              Mathematical Tools
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Calculators & Visualization</h3>
                <p class="text-gray-400 text-sm mb-3">Interactive tools for mathematical computation and visualization.</p>
                <div class="space-y-2">
                  <a href="https://www.desmos.com" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Desmos Graphing Calculator</a>
                  <a href="https://www.wolframalpha.com" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• WolframAlpha Knowledge Engine</a>
                  <a href="https://www.geogebra.org/?lang=en" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• GeoGebra 3D Calculator</a>
                  <a href="https://www.symbolab.com" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Symbolab Math Solver</a>
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