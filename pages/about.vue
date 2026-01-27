<script setup lang="ts">
// Set page meta
useHead({
  title: 'About - Awesome Horizon',
  meta: [
    { name: 'description', content: 'Learn about our mission to democratize access to high-quality educational resources across STEAM disciplines.' }
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
          Back to Home
        </NuxtLink>
        <h1 class="text-5xl font-bold text-white mb-4">About Awesome Horizon</h1>
        <p class="text-xl text-primary-100 max-w-2xl mx-auto">Learn about our mission to democratize access to high-quality educational resources across STEAM disciplines.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="prose prose-invert prose-lg max-w-4xl mx-auto pb-16 px-4">
      <div class="space-y-12">
        <!-- Mission Section -->
        <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
          <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <div class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-400"><path d="M9 12l2 2 4-4"/><path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2h-5L9.293 0.293A1 1 0 0 0 8.586 0H4a2 2 0 0 0-2 2v9c0 .552.448 1 1 1z"/></svg>
            </div>
            Our Mission
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            To democratize access to high-quality educational resources by providing a carefully curated collection of learning materials for students, educators, and lifelong learners across STEAM disciplines.
          </p>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                  <path d="M9 18h6"/>
                  <path d="M10 22h4"/>
                </svg>
                Science
              </h3>
              <p class="text-gray-400">From fundamental physics to cutting-edge research</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400">
                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                  <rect x="8" y="8" width="8" height="8" rx="1"/>
                </svg>
                Technology
              </h3>
              <p class="text-gray-400">Programming, AI, web development, and emerging tech</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-400">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                Engineering
              </h3>
              <p class="text-gray-400">Civil, mechanical, electrical, and aerospace engineering</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-rose-400">
                  <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
                </svg>
                Arts
              </h3>
              <p class="text-gray-400">Creative expression, design, history, and digital arts</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-sky-400">
                  <path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/>
                </svg>
                Mathematics
              </h3>
              <p class="text-gray-400">The language of the universe - algebra, calculus, and logic</p>
            </div>
          </div>
        </div>

        <!-- Our Story -->
        <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
          <h2 class="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-400">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.78-7.78 5.5 5.5 0 0 1 7.78 7.78Z"/>
              </svg>
            </div>
            Meet the Creators Behind Awesome Horizon
          </h2>
          
          <!-- Team Photos -->
          <div class="flex flex-col lg:flex-row justify-center items-center gap-40 mb-8">
            <!-- Matthew - Left -->
            <div class="text-center">
              <div class="relative mb-4">
                <div class="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
                <img 
                  src="/matthew.webp" 
                  alt="Matthew Valancy" 
                  class="relative w-32 h-32 rounded-full object-cover border-4 border-purple-500/30 shadow-lg"
                  loading="lazy"
                />
              </div>
              <h3 class="text-xl font-bold text-white">Matthew Valancy</h3>
              <p class="text-purple-400 font-medium">Creator & Engineer</p>
            </div>
            
            <!-- Lakshman - Right -->
            <div class="text-center">
              <div class="relative mb-4">
                <div class="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"></div>
                <img 
                  src="/lakshman.webp" 
                  alt="Lakshman Patel" 
                  class="relative w-32 h-32 rounded-full object-cover border-4 border-cyan-500/30 shadow-lg"
                  loading="lazy"
                />
              </div>
              <h3 class="text-xl font-bold text-white">Lakshman Patel</h3>
              <p class="text-cyan-400 font-medium">Creator & Engineer</p>
            </div>
          </div>
          
          <!-- Story Content -->
          <div class="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              We're two engineers who spent years building robotics software together in Silicon Valley, working on the kind of complex systems that make autonomous machines tick. Matthew is a Bay Area native, while Lakshman comes from a humble, hard-working farming family in India.
            </p>
            <p>
              Then we got laid off. Oops.
            </p>
            <p>
              But instead of moping around, we decided to channel our skills into something more personal: creating software that helps people stay organized and achieve their goals. Our journey led us to build not just task management tools, but educational platforms that make learning accessible and enjoyable.
            </p>
            <p>
              Awesome Horizon started as a way to curate the best educational resources we wish we had when we were learning. We wanted something that combines powerful content with a delightful user experience - no more boring, complicated learning platforms. We believe educational resources should be intuitive, beautiful, and make you want to explore and learn every day. That's what we're here to build.
            </p>
          </div>
        </div>

        <!-- What Makes Us Different -->
        <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
          <h2 class="text-3xl font-bold text-white mb-8">What Makes Us Different</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400">
                      <path d="M9 12l2 2 4-4"/>
                      <path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2h-5L9.293 0.293A1 1 0 0 0 8.586 0H4a2 2 0 0 0-2 2v9c0 .552.448 1 1 1z"/>
                    </svg>
                    Curated Quality
                  </h3>
                  <p class="text-gray-400">Every resource is hand-picked and vetted by educators and industry professionals to ensure the highest quality learning experience.</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
                      <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/>
                    </svg>
                    Comprehensive Coverage
                  </h3>
                  <p class="text-gray-400">From K-12 to college-level and beyond, we cover all educational levels with appropriate resources for each stage of learning.</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 1.1-.9 2-2 2-.74 0-1.39-.4-1.73-1H14v4a2 2 0 0 1-2 2h-1.28c-.35.6-.98 1-1.72 1-1.1 0-2-.9-2-2 0-.74.4-1.39 1-1.73V14H4a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2 .74 0 1.39.4 1.73 1H8V4a2 2 0 0 1 2-2z"/>
                    </svg>
                    Modern Learning
                  </h3>
                  <p class="text-gray-400">Interactive simulations, video lectures, hands-on projects, and cutting-edge educational tools that make learning engaging and effective.</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                    Free Access
                  </h3>
                  <p class="text-gray-400">All resources are completely free, making quality education accessible to everyone regardless of economic background.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Technology Stack -->
        <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
          <h2 class="text-3xl font-bold text-white mb-6">Built With Modern Technology</h2>
          <p class="text-gray-300 text-lg mb-8">
            Awesome Horizon is built using cutting-edge web technologies to provide a fast, responsive, and accessible learning experience.
          </p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-center gap-4 p-4 bg-space-800/50 rounded-lg border border-space-700">
              <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-green-400">
                  <path d="M12.146.006c-.054.003-.105.015-.158.02L.083 1.608A.5.5 0 0 0 0 2.1v19.8a.5.5 0 0 0 .083.492l11.905 1.582c.053.005.104.017.158.02.054-.003.105-.015.158-.02L24.209 22.392A.5.5 0 0 0 24.292 21.9V2.1a.5.5 0 0 0-.083-.492L12.304.026c-.053-.005-.104-.017-.158-.02zM12 2.1l10.5 1.4v17l-10.5 1.4-10.5-1.4v-17L12 2.1z"/>
                  <path d="M12 7.5L6.5 9v6l5.5 1.5L17.5 15V9L12 7.5z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-white">Nuxt 3</h3>
                <p class="text-gray-400 text-sm">The intuitive Vue framework for modern web applications</p>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4 bg-space-800/50 rounded-lg border border-space-700">
              <div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-cyan-400">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-white">TailwindCSS</h3>
                <p class="text-gray-400 text-sm">Utility-first CSS framework for rapid UI development</p>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4 bg-space-800/50 rounded-lg border border-space-700">
              <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-purple-400">
                  <path d="M12.146.006c-.054.003-.105.015-.158.02L.083 1.608A.5.5 0 0 0 0 2.1v19.8a.5.5 0 0 0 .083.492l11.905 1.582c.053.005.104.017.158.02.054-.003.105-.015.158-.02L24.209 22.392A.5.5 0 0 0 24.292 21.9V2.1a.5.5 0 0 0-.083-.492L12.304.026c-.053-.005-.104-.017-.158-.02zM12 2.1l10.5 1.4v17l-10.5 1.4-10.5-1.4v-17L12 2.1z"/>
                  <path d="M8 8h8v2H8V8zm0 3h8v2H8v-2zm0 3h5v2H8v-2z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-white">Nuxt Content</h3>
                <p class="text-gray-400 text-sm">File-based CMS for seamless content management</p>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4 bg-space-800/50 rounded-lg border border-space-700">
              <div class="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-emerald-400">
                  <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-white">Vue 3</h3>
                <p class="text-gray-400 text-sm">Progressive JavaScript framework for building user interfaces</p>
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
</style>