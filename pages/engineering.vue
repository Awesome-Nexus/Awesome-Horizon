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
          <!-- Mechanical Engineering Section -->
          <div class="bg-space-900/50 rounded-2xl p-8 border border-space-800">
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