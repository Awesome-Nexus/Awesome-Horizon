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
          <!-- Computer Science Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>
              </div>
              Computer Science
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Getting Started</h3>
                <p class="text-gray-400 text-sm mb-3">Introduction to computer science fundamentals and programming concepts.</p>
                <div class="space-y-2">
                  <a href="https://www.edx.org/cs50" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Harvard CS50: Introduction to Computer Science</a>
                  <a href="https://www.youtube.com/playlist?list=PLhQjrBD2T381L3iZyDTxRwOBuUt6m1FnW" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• 2019 CS50 Lectures</a>
                  <a href="https://github.com/ossu/computer-science" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• OSSU Computer Science Path</a>
                </div>
              </div>
              
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">AP Computer Science</h3>
                <p class="text-gray-400 text-sm mb-3">Resources for AP Computer Science Principles and Java programming.</p>
                <div class="space-y-2">
                  <a href="https://runestone.academy/ns/books/published/StudentCSP/index.html?mode=browsing" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Runestone AP CSP</a>
                  <a href="https://runestone.academy/ns/books/published/csawesome/index.html?mode=browsing" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Runestone AP CSAwesome (Java)</a>
                  <a href="https://codingbat.com/java" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• CodingBat Java Practice</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Web Development Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              Web Development
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">JavaScript & Modern Web</h3>
                <p class="text-gray-400 text-sm mb-3">Learn JavaScript, frameworks, and modern web development practices.</p>
                <div class="space-y-2">
                  <a href="https://eloquentjavascript.net" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Eloquent Javascript (Interactive Book)</a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• MDN Web Docs HTTP Guide</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Development Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>
              </div>
              iOS Development
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Swift & SwiftUI</h3>
                <p class="text-gray-400 text-sm mb-3">Learn iOS app development with Swift and SwiftUI from Stanford and Apple.</p>
                <div class="space-y-2">
                  <a href="https://cs193p.sites.stanford.edu" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Stanford CS193P (SwiftUI)</a>
                  <a href="https://developer.apple.com/tutorials/swiftui" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Apple SwiftUI Tutorials</a>
                  <a href="https://www.apple.com/swift/playgrounds/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Swift Playgrounds</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Programming for Kids Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400"><path d="M9 12l2 2 4-4"/><path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2h-5L9.293 0.293A1 1 0 0 0 8.586 0H4a2 2 0 0 0-2 2v9c0 .552.448 1 1 1z"/></svg>
              </div>
              Programming for Kids
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Visual Programming & Games</h3>
                <p class="text-gray-400 text-sm mb-3">Fun, interactive ways to learn programming fundamentals.</p>
                <div class="space-y-2">
                  <a href="https://scratch.mit.edu/about" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Scratch (MIT Visual Programming)</a>
                  <a href="https://pixelpad.io" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• PixelPad (Python Game Engine)</a>
                  <a href="https://studio.code.org/courses" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Code.org Interactive Courses</a>
                  <a href="https://www.construct.net/en" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Construct 3 (Game Studio)</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Version Control Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m15.5 3.5-1 1m-5 5-1 1m-5 5-1 1"/><path d="m20.5 8.5-1 1m-5 5-1 1m-5 5-1 1"/><path d="M1 12h6m6 0h6"/></svg>
              </div>
              Version Control & Collaboration
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Git & GitHub</h3>
                <p class="text-gray-400 text-sm mb-3">Essential tools for code management and collaboration.</p>
                <div class="space-y-2">
                  <a href="https://gitimmersion.com" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Git Immersion (Interactive Tutorial)</a>
                  <a href="https://docs.github.com/en/get-started/quickstart/hello-world" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• GitHub Docs & Quickstart</a>
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