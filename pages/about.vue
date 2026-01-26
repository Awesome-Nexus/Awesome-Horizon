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
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-white">🔬 Science</h3>
              <p class="text-gray-400">From fundamental physics to cutting-edge research</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-white">💻 Technology</h3>
              <p class="text-gray-400">Programming, AI, web development, and emerging tech</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-white">⚙️ Engineering</h3>
              <p class="text-gray-400">Civil, mechanical, electrical, and aerospace engineering</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-white">🎨 Arts</h3>
              <p class="text-gray-400">Creative expression, design, history, and digital arts</p>
            </div>
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
                  <h3 class="text-lg font-semibold text-white mb-2">🎯 Curated Quality</h3>
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
                  <h3 class="text-lg font-semibold text-white mb-2">🌟 Comprehensive Coverage</h3>
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
                  <h3 class="text-lg font-semibold text-white mb-2">🚀 Modern Learning</h3>
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
                  <h3 class="text-lg font-semibold text-white mb-2">🆓 Free Access</h3>
                  <p class="text-gray-400">Most resources are completely free, making quality education accessible to everyone regardless of economic background.</p>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h3 class="font-semibold text-white">Nuxt 3</h3>
                <p class="text-gray-400 text-sm">The intuitive Vue framework for modern web applications</p>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4 bg-space-800/50 rounded-lg border border-space-700">
              <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/></svg>
              </div>
              <div>
                <h3 class="font-semibold text-white">TailwindCSS</h3>
                <p class="text-gray-400 text-sm">Utility-first CSS framework for rapid UI development</p>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4 bg-space-800/50 rounded-lg border border-space-700">
              <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <div>
                <h3 class="font-semibold text-white">Nuxt Content</h3>
                <p class="text-gray-400 text-sm">File-based CMS for seamless content management</p>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4 bg-space-800/50 rounded-lg border border-space-700">
              <div class="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
              </div>
              <div>
                <h3 class="font-semibold text-white">Vue 3</h3>
                <p class="text-gray-400 text-sm">Progressive JavaScript framework for building user interfaces</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center py-12 space-y-6">
          <h2 class="text-3xl font-bold text-white">Ready to Start Learning?</h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Join thousands of learners who are already exploring our curated collection of educational resources.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/explore" 
              class="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Explore Categories
            </NuxtLink>
            <NuxtLink 
              to="/search" 
              class="inline-flex items-center gap-2 bg-space-800 hover:bg-space-700 text-white px-8 py-3 rounded-full font-medium transition-colors border border-space-700 hover:border-primary-500/50"
            >
              Search Resources
            </NuxtLink>
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