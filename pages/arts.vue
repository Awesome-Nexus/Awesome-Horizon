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
          <!-- Visual Arts Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-rose-400"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>
              </div>
              Painting & Drawing
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Fine Arts Fundamentals</h3>
                <p class="text-gray-400 text-sm mb-3">Learn painting, drawing techniques, and color theory from expert instructors.</p>
                <div class="space-y-2">
                  <a href="https://littleneocreative.com/mixingpaint/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• How to Mix Paint (Nicole Little)</a>
                  <a href="https://shadingreference.com" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Shading References Tool</a>
                  <a href="https://cosmolearning.org/topics/drawing/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• CosmoLearning Drawing Courses</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Digital Arts Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/><path d="m9 1 3 3 3-3"/></svg>
              </div>
              Digital Photography & Design
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Photography & Digital Arts</h3>
                <p class="text-gray-400 text-sm mb-3">Master digital photography and design principles with professional techniques.</p>
                <div class="space-y-2">
                  <a href="https://cosmolearning.org/courses/digital-photography-with-marc-levoy/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Digital Photography with Marc Levoy (Stanford)</a>
                  <a href="https://youtu.be/c1ksrjRA678" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Industrial Design at Delta Faucet</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Art History Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-400"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              Art & Cultural History
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">AP History Courses</h3>
                <p class="text-gray-400 text-sm mb-3">Comprehensive history resources for AP and college-level courses.</p>
                <div class="space-y-2">
                  <a href="https://www.youtube.com/@heimlershistory" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Heimler's History (AP US, European, World History)</a>
                  <a href="https://www.youtube.com/playlist?app=desktop&list=PLlair5BOIPJaUm7qr07c7J-A_zyt2dH3I" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• APUSH Reviews in 10 Minutes</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Traditional Arts Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 3 3"/></svg>
              </div>
              Calligraphy & Traditional Arts
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Applied Arts</h3>
                <p class="text-gray-400 text-sm mb-3">Traditional art forms including calligraphy and applied design techniques.</p>
                <div class="space-y-2">
                  <a href="https://en.wikipedia.org/wiki/Calligraphy" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Calligraphy Overview (Wikipedia)</a>
                  <a href="https://en.wikipedia.org/wiki/Art" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• What is Art? (Wikipedia)</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Design Inspiration Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><path d="M9 12l2 2 4-4"/><path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2h-5L9.293 0.293A1 1 0 0 0 8.586 0H4a2 2 0 0 0-2 2v9c0 .552.448 1 1 1z"/></svg>
              </div>
              Design & Innovation
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Design Thinking & Innovation</h3>
                <p class="text-gray-400 text-sm mb-3">Learn from design leaders and innovators about creative problem-solving.</p>
                <div class="space-y-2">
                  <a href="https://youtu.be/9uOMectkCCs" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• The First Secret of Great Design (Tony Fadell TED Talk)</a>
                  <a href="https://archive.org/details/podcast_businessleadership-video_the-art-engineering_1000084846101" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• The Art of Engineering (James Dyson)</a>
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