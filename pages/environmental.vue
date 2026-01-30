<script setup lang="ts">
useHead({
  title: 'Environmental Science - Complete Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master environmental science with 150+ curated resources. Ecology, conservation, sustainability, climate change, and environmental policy.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'Introduction to Environment',
    description: 'AP Environmental Science, basics, ecology intro',
    color: 'emerald',
    resources: 50,
    topics: ['Intro to Environment', 'APES', 'Basic Ecology']
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate Level',
    description: 'Ecology, conservation, sustainability',
    color: 'purple',
    resources: 60,
    topics: ['Ecology', 'Conservation Biology', 'Sustainability']
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate & Policy',
    description: 'Climate science, environmental policy, research',
    color: 'rose',
    resources: 40,
    topics: ['Climate Science', 'Environmental Policy', 'Research']
  }
]

const featuredResources = [
  { title: 'Khan Academy Environmental Science', author: 'Khan Academy', url: 'https://www.khanacademy.org/science/ap-environmental-science', desc: 'AP Environmental Science' },
  { title: 'NASA Climate', author: 'NASA', url: 'https://climate.nasa.gov/', desc: 'Climate change evidence' },
  { title: 'EPA', author: 'EPA', url: 'https://www.epa.gov/', desc: 'Environmental protection resources' },
  { title: 'National Geographic Environment', author: 'NatGeo', url: 'https://education.nationalgeographic.org/resource/environmental-science/', desc: 'Educational resources' },
  { title: 'WWF', author: 'WWF', url: 'https://www.worldwildlife.org/', desc: 'Wildlife conservation' },
  { title: 'Nature Conservancy', author: 'TNC', url: 'https://www.nature.org/', desc: 'Conservation science' }
]

const quickLinks = [
  { name: 'AP Environmental', url: '#apes', icon: 'book', count: 20 },
  { name: 'Ecology', url: '#ecology', icon: 'leaf', count: 40 },
  { name: 'Climate Change', url: '#climate', icon: 'thermometer', count: 35 },
  { name: 'Conservation', url: '#conservation', icon: 'shield', count: 25 },
  { name: 'Sustainability', url: '#sustainability', icon: 'refresh', count: 20 },
  { name: 'Policy', url: '#policy', icon: 'file-text', count: 15 }
]

const apesResources = [
  { title: 'Khan Academy APES', url: 'https://www.khanacademy.org/science/ap-environmental-science', type: 'Free Course', desc: 'Complete AP prep' },
  { title: 'College Board APES', url: 'https://apstudents.collegeboard.org/courses/ap-environmental-science', type: 'Official', desc: 'Official AP course' },
  { title: 'APES Notes', url: 'https://www.apesnotes.com/', type: 'Study Guide', desc: 'Notes and resources' },
  { title: 'Bozeman Science APES', url: 'https://www.bozemanscience.com/ap-environmental-science', type: 'Video', desc: 'Paul Andersen videos' },
  { title: 'APES Practice Exams', url: 'https://www.albert.io/ap-environmental-science', type: 'Practice', desc: 'Test prep' }
]

const ecologyResources = [
  { name: 'iNaturalist', url: 'https://www.inaturalist.org/', desc: 'Species identification app' },
  { name: 'Encyclopedia of Life', url: 'https://eol.org/', desc: 'Global species database' },
  { name: 'Ecological Society of America', url: 'https://www.esa.org/', desc: 'Professional resources' },
  { name: 'NatureServe', url: 'https://www.natureserve.org/', desc: 'Biodiversity data' },
  { name: 'GBIF', url: 'https://www.gbif.org/', desc: 'Biodiversity information' },
  { name: 'Ecology.com', url: 'https://www.ecology.com/', desc: 'Ecology portal' }
]

const climateResources = [
  { name: 'NASA Climate', url: 'https://climate.nasa.gov/', desc: 'Climate change evidence' },
  { name: 'NOAA Climate', url: 'https://www.climate.gov/', desc: 'Climate data and tools' },
  { name: 'IPCC', url: 'https://www.ipcc.ch/', desc: 'Climate change reports' },
  { name: 'Carbon Brief', url: 'https://www.carbonbrief.org/', desc: 'Clear climate analysis' },
  { name: 'Climate Central', url: 'https://www.climatecentral.org/', desc: 'Climate science' },
  { name: 'RealClimate', url: 'https://www.realclimate.org/', desc: 'Climate science blog' }
]

const conservationResources = [
  { name: 'WWF', url: 'https://www.worldwildlife.org/', desc: 'Wildlife conservation' },
  { name: 'The Nature Conservancy', url: 'https://www.nature.org/', desc: 'Land conservation' },
  { name: 'Conservation International', url: 'https://www.conservation.org/', desc: 'Biodiversity conservation' },
  { name: 'IUCN Red List', url: 'https://www.iucnredlist.org/', desc: 'Threatened species' },
  { name: 'Wildlife Conservation Society', url: 'https://www.wcs.org/', desc: 'Wildlife protection' }
]

const sustainabilityResources = [
  { name: 'UN Sustainable Development Goals', url: 'https://sdgs.un.org/', desc: 'Global sustainability framework' },
  { name: 'Sustainability by MIT', url: 'https://climate.mit.edu/', desc: 'MIT climate portal' },
  { name: 'Ellen MacArthur Foundation', url: 'https://ellenmacarthurfoundation.org/', desc: 'Circular economy' },
  { name: 'Sustainable Brands', url: 'https://sustainablebrands.com/', desc: 'Sustainability news' },
  { name: 'GreenBiz', url: 'https://www.greenbiz.com/', desc: 'Sustainable business' }
]

const policyResources = [
  { name: 'EPA', url: 'https://www.epa.gov/', desc: 'Environmental protection' },
  { name: 'UN Environment', url: 'https://www.unep.org/', desc: 'Global environment program' },
  { name: 'World Resources Institute', url: 'https://www.wri.org/', desc: 'Research and policy' },
  { name: 'Environmental Law Institute', url: 'https://www.eli.org/', desc: 'Environmental law' }
]

const dataResources = [
  { name: 'Google Earth Engine', url: 'https://earthengine.google.com/', desc: 'Planetary-scale analysis' },
  { name: 'USGS Data', url: 'https://www.usgs.gov/products/data', desc: 'Earth science data' },
  { name: 'NOAA Data', url: 'https://www.ncei.noaa.gov/', desc: 'Climate data' },
  { name: 'Our World in Data', url: 'https://ourworldindata.org/', desc: 'Environmental data' },
  { name: 'Global Forest Watch', url: 'https://www.globalforestwatch.org/', desc: 'Forest monitoring' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-green-900/20 via-space-950 to-emerald-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/science" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30 mb-6">
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-green-300">150+ Environmental Science Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Environmental Science
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Understand our planet's systems and challenges. From ecology to climate change, explore resources for protecting and sustaining our environment.
          </p>

          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">50+</div>
              <div class="text-sm text-gray-400">K-12 Resources</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">60+</div>
              <div class="text-sm text-gray-400">Undergraduate</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">40+</div>
              <div class="text-sm text-gray-400">Research/Policy</div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-green-400">({{ link.count }})</span>
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
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ r.title }}</h3>
            <p class="text-sm text-green-400 mb-2">{{ r.author }}</p>
            <p class="text-xs text-gray-400">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- AP Environmental -->
      <section id="apes" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">AP Environmental Science</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in apesResources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-emerald-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Ecology -->
      <section id="ecology" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Ecology</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in ecologyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-lime-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-lime-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Climate Change -->
      <section id="climate" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Climate Change</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in climateResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-cyan-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Conservation -->
      <section id="conservation" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Conservation</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in conservationResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-amber-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Sustainability -->
      <section id="sustainability" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Sustainability</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in sustainabilityResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-teal-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Policy -->
      <section id="policy" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Environmental Policy</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in policyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Data -->
      <section id="data" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Environmental Data</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in dataResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-indigo-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/science" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 { scroll-margin-top: 5rem; }
</style>
