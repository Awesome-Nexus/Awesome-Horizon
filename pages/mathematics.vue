<script setup lang="ts">
useHead({
  title: 'Mathematics - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master mathematics from K-12 to PhD research with 2500+ curated resources. Free textbooks, MIT/Harvard courses, problem solving platforms, and research databases.' }
  ]
})

const featuredResources = [
  { title: 'Khan Academy Math', author: 'Khan Academy', url: 'https://www.khanacademy.org/math', desc: 'Complete K-12 + college math' },
  { title: 'MIT OCW Mathematics', author: 'MIT', url: 'https://ocw.mit.edu/courses/mathematics/', desc: 'Undergraduate and graduate courses' },
  { title: 'Wolfram MathWorld', author: 'Wolfram', url: 'https://mathworld.wolfram.com/', desc: 'Comprehensive math encyclopedia' },
  { title: 'Paul Online Math Notes', author: 'Lamar University', url: 'https://tutorial.math.lamar.edu/', desc: 'Excellent calculus and DE notes' },
  { title: '3Blue1Brown', author: 'Grant Sanderson', url: 'https://www.3blue1brown.com/', desc: 'Visual math explanations' },
  { title: 'arXiv Math', author: 'Cornell', url: 'https://arxiv.org/archive/math', desc: 'Research papers in mathematics' }
]

const quickLinks = [
  { name: 'K-12 Math', url: '#k12', count: 150 },
  { name: 'Algebra', url: '#algebra', count: 100 },
  { name: 'Calculus', url: '#calculus', count: 120 },
  { name: 'Linear Algebra', url: '#linear', count: 80 },
  { name: 'Problem Solving', url: '#problems', count: 200 },
  { name: 'Competitions', url: '#competitions', count: 50 }
]

const k12Resources = [
  { title: 'Khan Academy Math', url: 'https://www.khanacademy.org/math', provider: 'Khan Academy', type: 'Free Course' },
  { title: 'IXL Math', url: 'https://www.ixl.com/math', provider: 'IXL', type: 'Practice' },
  { title: 'Art of Problem Solving', url: 'https://artofproblemsolving.com/', provider: 'AoPS', type: 'Courses' },
  { title: 'Brilliant Math', url: 'https://brilliant.org/courses/math/', provider: 'Brilliant', type: 'Interactive' },
  { title: 'Desmos', url: 'https://www.desmos.com/', provider: 'Desmos', type: 'Graphing' },
  { title: 'GeoGebra', url: 'https://www.geogebra.org/', provider: 'GeoGebra', type: 'Math Tools' },
  { title: 'Math is Fun', url: 'https://www.mathsisfun.com/', provider: 'MathsIsFun', type: 'Tutorial' },
  { title: 'PatrickJMT', url: 'https://patrickjmt.com/', provider: 'PatrickJMT', type: 'Videos' }
]

const textbooksBeginner = [
  { title: 'OpenStax Algebra', author: 'OpenStax', url: 'https://openstax.org/details/books/elementary-algebra', type: 'FREE PDF' },
  { title: 'OpenStax Calculus', author: 'OpenStax', url: 'https://openstax.org/details/books/calculus-volume-1', type: 'FREE PDF' },
  { title: 'Calculus Made Easy', author: 'Silvanus Thompson', url: 'http://calculusmadeeasy.org/', type: 'FREE' },
  { title: 'Paul Notes - Algebra', author: 'Paul Dawkins', url: 'https://tutorial.math.lamar.edu/Classes/Alg/Alg.aspx', type: 'FREE WEB' },
  { title: 'Paul Notes - Calculus', author: 'Paul Dawkins', url: 'https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx', type: 'FREE WEB' }
]

const calculusResources = [
  { name: 'MIT 18.01 Single Variable Calculus', url: 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/', desc: 'OCW Scholar' },
  { name: 'MIT 18.02 Multivariable Calculus', url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/', desc: 'OCW Scholar' },
  { name: 'MIT 18.03 Differential Equations', url: 'https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/', desc: 'OCW Scholar' },
  { name: 'Professor Leonard Calculus', url: 'https://www.youtube.com/c/ProfessorLeonard', desc: 'YouTube Lectures' },
  { name: 'Calculus.org', url: 'http://calculus.org/', desc: 'Problems and solutions' },
  { name: 'Integral Calculator', url: 'https://www.integral-calculator.com/', desc: 'Step-by-step integration' }
]

const linearAlgebraResources = [
  { name: 'MIT 18.06 Linear Algebra', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', desc: 'Gilbert Strang classic' },
  { name: '3Blue1Brown Linear Algebra', url: 'https://www.3blue1brown.com/topics/linear-algebra', desc: 'Essence of LA series' },
  { name: 'Interactive Linear Algebra', url: 'https://textbooks.math.gatech.edu/ila/', desc: 'Georgia Tech' },
  { name: 'Immersive Math', url: 'http://immersivemath.com/ila/index.html', desc: 'Interactive LA' }
]

const problemResources = [
  { name: 'Project Euler', url: 'https://projecteuler.net/', desc: 'Computational problems' },
  { name: 'Brilliant', url: 'https://brilliant.org/', desc: 'Interactive problems' },
  { name: 'Art of Problem Solving', url: 'https://artofproblemsolving.com/', desc: 'Contest math' },
  { name: 'Brilliant.org Problems', url: 'https://brilliant.org/courses/', desc: 'All levels' },
  { name: 'Wolfram Problem Generator', url: 'https://www.wolframalpha.com/problem-generator/', desc: 'Practice problems' },
  { name: 'Math StackExchange', url: 'https://math.stackexchange.com/', desc: 'Q&A community' }
]

const competitionResources = [
  { name: 'IMO Official', url: 'https://www.imo-official.org/', desc: 'International Math Olympiad' },
  { name: 'Putnam Competition', url: 'https://www.maa.org/programs-and-communities/member-communities/maa-awards/putnam-competition', desc: 'Undergraduate competition' },
  { name: 'AMC/AIME', url: 'https://www.maa.org/math-competitions', desc: 'American competitions' },
  { name: 'ARML', url: 'https://www.arml.com/', desc: 'American Regions Math League' },
  { name: 'Math Kangaroo', url: 'https://www.mathkangaroo.org/', desc: 'International competition' }
]

const advancedResources = [
  { name: 'MIT 18.100A Real Analysis', url: 'https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/', desc: 'Rigorous calculus' },
  { name: 'MIT 18.901 Algebraic Topology', url: 'https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/', desc: 'Topology' },
  { name: 'Harvard Math 55', url: 'https://legacy-www.math.harvard.edu/archive/55b_fall_09/index.html', desc: 'Honors advanced calculus' },
  { name: 'Stacks Project', url: 'https://stacks.math.columbia.edu/', desc: 'Algebraic geometry' },
  { name: 'Kerodon', url: 'https://kerodon.net/', desc: 'Higher category theory' },
  { name: 'nLab', url: 'https://ncatlab.org/nlab/show/HomePage', desc: 'Category theory wiki' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-space-950 to-indigo-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 mb-6">
            <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-blue-300">2500+ Global Mathematics Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Mathematics
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master mathematics from K-12 to PhD research with 2500+ curated resources. Free textbooks, MIT courses, problem solving platforms, and research databases.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-blue-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-blue-400">({{ link.count }})</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      <!-- Featured -->
      <section>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in featuredResources" :key="r.title" :href="r.url" target="_blank"
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ r.title }}</h3>
            <p class="text-sm text-blue-400 mb-2">{{ r.author }}</p>
            <p class="text-xs text-gray-400">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- K-12 -->
      <section id="k12" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">K-12 Mathematics</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in k12Resources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-blue-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500">{{ r.provider }}</p>
          </a>
        </div>
      </section>

      <!-- Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Free Textbooks</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="book in textbooksBeginner" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-blue-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>
      </section>

      <!-- Calculus -->
      <section id="calculus" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Calculus</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in calculusResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-indigo-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Linear Algebra -->
      <section id="linear" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Linear Algebra</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in linearAlgebraResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-purple-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Problem Solving -->
      <section id="problems" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Problem Solving Platforms</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in problemResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-cyan-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Competitions -->
      <section id="competitions" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Math Competitions</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in competitionResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-amber-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Advanced -->
      <section id="advanced" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Advanced & Research</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in advancedResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-rose-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>
