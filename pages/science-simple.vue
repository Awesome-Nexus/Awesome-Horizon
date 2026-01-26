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
          <!-- Physics Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
              </div>
              Physics
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Introduction to Physics</h3>
                <p class="text-gray-400 text-sm mb-3">Foundational physics concepts and principles.</p>
                <div class="space-y-2">
                  <a href="https://youtu.be/ZihywtixUYo" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Map of Physics</a>
                  <a href="https://youtu.be/TclBJZuUAOY" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• What is Science?</a>
                  <a href="http://hyperphysics.phy-astr.gsu.edu/hbase/hph.html" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• HyperPhysics</a>
                  <a href="https://www.khanacademy.org/science/physics" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Khan Academy Physics</a>
                </div>
              </div>

              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Physics Textbooks</h3>
                <p class="text-gray-400 text-sm mb-3">World-class free physics textbooks and resources.</p>
                <div class="space-y-2">
                  <a href="https://www.feynmanlectures.caltech.edu/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Feynman Lectures on Physics</a>
                  <a href="https://openstax.org/details/books/college-physics-2e" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• OpenStax College Physics</a>
                  <a href="https://openstax.org/details/books/university-physics-volume-1" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• OpenStax University Physics</a>
                </div>
              </div>

              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">AP & College Physics</h3>
                <p class="text-gray-400 text-sm mb-3">Resources for AP Physics courses.</p>
                <div class="space-y-2">
                  <a href="https://www.flippingphysics.com/ap-physics-1.html" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Flipping Physics AP</a>
                  <a href="https://www.physicsclassroom.com/class" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• The Physics Classroom</a>
                  <a href="https://www.bozemanscience.com/ap-physics-1-video-list" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Bozeman Physics AP</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Chemistry Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>
              </div>
              Chemistry
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">General Chemistry</h3>
                <p class="text-gray-400 text-sm mb-3">Foundational chemistry concepts for high school and college students.</p>
                <div class="space-y-2">
                  <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• CrashCourse Chemistry</a>
                  <a href="https://chem.libretexts.org/Bookshelves/General_Chemistry" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• LibreTexts General Chemistry</a>
                  <a href="https://www.youtube.com/user/tdewitt451/featured" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Tyler DeWitt Chemistry</a>
                </div>
              </div>

              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Organic Chemistry</h3>
                <p class="text-gray-400 text-sm mb-3">Comprehensive organic chemistry resources.</p>
                <div class="space-y-2">
                  <a href="https://www.masterorganicchemistry.com/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Master Organic Chemistry</a>
                  <a href="https://www.organicchemistrytutor.com/organic-chemistry-notes/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Organic Chemistry Tutor</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Biology Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3Z"/><path d="M19 11c-.64-.64-1.84-.84-3-1.2a3.9 3.9 0 0 1-2-2c-.36-1.16-.56-2.36-1.2-3"/><path d="M5 11c.64-.64 1.84-.84 3-1.2a3.9 3.9 0 0 0 2-2c.36-1.16.56-2.36 1.2-3"/><path d="M12 22s4-9 4-13"/><path d="M8 22s-4-9-4-13"/></svg>
              </div>
              Biology
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">General Biology</h3>
                <p class="text-gray-400 text-sm mb-3">Comprehensive biology resources covering all major topics.</p>
                <div class="space-y-2">
                  <a href="https://www.bozemanscience.com/ap-biology" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Bozeman Science AP Biology</a>
                  <a href="https://library.fiveable.me/ap-bio" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• AP Biology Fiveable</a>
                  <a href="https://www.ixl.com/science/biology" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• IXL Biology Skills</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Environmental Science Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              Environmental Science
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">AP Environmental Science</h3>
                <p class="text-gray-400 text-sm mb-3">Comprehensive APES resources and exam preparation.</p>
                <div class="space-y-2">
                  <a href="https://www.khanacademy.org/science/ap-college-environmental-science" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Khan Academy APES</a>
                  <a href="https://www.bozemanscience.com/ap-environmental-science" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Bozeman Science APES</a>
                  <a href="https://library.fiveable.me/ap-enviro" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Fiveable APES</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Astronomy Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-400"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41-1.41"/><path d="m19.07 4.93-1.41-1.41"/></svg>
              </div>
              Astronomy & Space
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-space-800/50 rounded-lg border border-space-700 hover:border-primary-500/50 transition-colors">
                <h3 class="font-semibold text-white mb-2">Space Science</h3>
                <p class="text-gray-400 text-sm mb-3">Explore the universe with NASA and astronomy resources.</p>
                <div class="space-y-2">
                  <a href="https://spaceplace.nasa.gov" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• NASA Space Place</a>
                  <a href="https://www.jpl.nasa.gov/edu/learn/tag/search/space+travel" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• NASA JPL Education</a>
                  <a href="https://scaleofuniverse.com/" target="_blank" class="block text-primary-400 hover:text-white transition-colors text-sm">• Scale of the Universe</a>
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
