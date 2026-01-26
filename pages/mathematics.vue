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