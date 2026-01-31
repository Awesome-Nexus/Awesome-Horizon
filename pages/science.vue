<script setup lang="ts">
useHead({
  title: 'Science - Complete Learning Hub | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Explore science subjects with 15,000+ curated resources. Physics, Chemistry, Biology, Earth Science, Astronomy, Psychology, Environmental Science and more from K-12 to research level.' }
  ]
})

const scienceSubjects = [
  {
    id: 'physics',
    name: 'Physics',
    icon: 'atom',
    color: 'purple',
    resources: '3000+',
    description: 'Mechanics, E&M, Quantum, Relativity, Particle Physics',
    url: '/physics'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: 'flask',
    color: 'emerald',
    resources: '2500+',
    description: 'Organic, Inorganic, Physical, Analytical, Biochemistry',
    url: '/chemistry'
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: 'dna',
    color: 'green',
    resources: '2500+',
    description: 'Genetics, Molecular Biology, Ecology, Anatomy',
    url: '/biology'
  },
  {
    id: 'earth-science',
    name: 'Earth Science',
    icon: 'globe',
    color: 'amber',
    resources: '1500+',
    description: 'Geology, Meteorology, Oceanography, Climate',
    url: '/earth-science'
  },
  {
    id: 'astronomy',
    name: 'Astronomy',
    icon: 'star',
    color: 'indigo',
    resources: '120+',
    description: 'Observational, Astrophysics, Cosmology, Space',
    url: '/astronomy'
  },
  {
    id: 'psychology',
    name: 'Psychology',
    icon: 'brain',
    color: 'pink',
    resources: '100+',
    description: 'Cognitive, Clinical, Social, Developmental',
    url: '/psychology'
  },
  {
    id: 'environmental',
    name: 'Environmental Science',
    icon: 'leaf',
    color: 'teal',
    resources: '150+',
    description: 'Ecology, Conservation, Sustainability, Climate',
    url: '/environmental'
  }
]

const featuredResources = [
  { name: 'Khan Academy Science', url: 'https://www.khanacademy.org/science', desc: 'K-12 science courses' },
  { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/', desc: 'University science courses' },
  { name: 'Nature', url: 'https://www.nature.com/', desc: 'Leading science journal' },
  { name: 'Science Magazine', url: 'https://www.science.org/', desc: 'AAAS publication' },
  { name: 'NASA', url: 'https://www.nasa.gov/', desc: 'Space and Earth science' },
  { name: 'NOAA', url: 'https://www.noaa.gov/', desc: 'Ocean and atmosphere' }
]

const levels = [
  { name: 'K-12', count: '3000+', color: 'emerald' },
  { name: 'Undergraduate', count: '5000+', color: 'blue' },
  { name: 'Graduate', count: '4000+', color: 'purple' },
  { name: 'Research', count: '3000+', color: 'rose' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-space-950 to-blue-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Home
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full border border-primary-500/30 mb-6">
            <span class="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-primary-300">15,000+ Science Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Science
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore the natural world and human mind with comprehensive resources covering Physics, Chemistry, Biology, Earth Science, Astronomy, Psychology, and Environmental Science from K-12 to research level.
          </p>

          <!-- Level Stats -->
          <div class="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12">
            <div v-for="level in levels" :key="level.name" class="text-center">
              <div class="text-3xl font-bold" :class="`text-${level.color}-400`">{{ level.count }}</div>
              <div class="text-sm text-gray-400">{{ level.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      <!-- Science Subjects Grid -->
      <section>
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Science Subjects</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <NuxtLink v-for="subject in scienceSubjects" :key="subject.id" :to="subject.url"
             class="group p-6 bg-gray-900/50 rounded-2xl border border-gray-800 transition-all hover:scale-105 hover:border-opacity-50"
             :class="`hover:border-${subject.color}-500`">
            <div class="flex items-center justify-between mb-4">
              <div :class="`w-12 h-12 bg-${subject.color}-500/20 rounded-xl flex items-center justify-center`">
                <span class="text-2xl">{{ 
                  subject.id === 'physics' ? '⚛️' : 
                  subject.id === 'chemistry' ? '🧪' : 
                  subject.id === 'biology' ? '🧬' : 
                  subject.id === 'earth-science' ? '🌍' : 
                  subject.id === 'astronomy' ? '🔭' :
                  subject.id === 'psychology' ? '🧠' : '🌱'
                }}</span>
              </div>
              <span :class="`text-xs px-2 py-1 bg-${subject.color}-500/20 text-${subject.color}-400 rounded-full`">{{ subject.resources }}</span>
            </div>
            <h3 :class="`text-xl font-bold text-white group-hover:text-${subject.color}-400 transition-colors`">{{ subject.name }}</h3>
            <p class="text-sm text-gray-400 mt-2">{{ subject.description }}</p>
          </NuxtLink>
        </div>
      </section>

      <!-- Featured Resources -->
      <section>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Science Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in featuredResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{{ r.name }}</h3>
            <p class="text-sm text-gray-400">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Why Science Section -->
      <section class="bg-gray-900/30 rounded-3xl p-8 border border-gray-800">
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Why Study Science?</h2>
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div class="p-4">
            <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl">🔬</span>
            </div>
            <h3 class="font-semibold text-white mb-2">Understand the World</h3>
            <p class="text-sm text-gray-400">Discover how the universe works from atoms to galaxies</p>
          </div>
          <div class="p-4">
            <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl">💡</span>
            </div>
            <h3 class="font-semibold text-white mb-2">Solve Problems</h3>
            <p class="text-sm text-gray-400">Develop critical thinking and analytical skills</p>
          </div>
          <div class="p-4">
            <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl">🚀</span>
            </div>
            <h3 class="font-semibold text-white mb-2">Shape the Future</h3>
            <p class="text-sm text-gray-400">Drive innovation in technology, medicine, and sustainability</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 { scroll-margin-top: 5rem; }
</style>
