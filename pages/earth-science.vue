<script setup lang="ts">
useHead({
  title: 'Earth Science - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master Earth Science from K-12 to research with 1500+ curated resources. Geology, meteorology, oceanography, climate science, and environmental studies.' }
  ]
})

const levels = [
  { id: 'beginner', icon: 'seedling', title: 'Beginner', subtitle: 'K-12', color: 'emerald', resources: 400 },
  { id: 'intermediate', icon: 'target', title: 'Intermediate', subtitle: 'Undergraduate', color: 'purple', resources: 600 },
  { id: 'advanced', icon: 'rocket', title: 'Advanced', subtitle: 'Graduate/Research', color: 'rose', resources: 500 }
]

const featuredResources = [
  { title: 'NASA Earth Observatory', author: 'NASA', url: 'https://earthobservatory.nasa.gov/', desc: 'Earth science visualizations' },
  { title: 'USGS', author: 'USGS', url: 'https://www.usgs.gov/', desc: 'Geological Survey resources' },
  { title: 'NOAA Education', author: 'NOAA', url: 'https://www.noaa.gov/education', desc: 'Ocean and atmosphere education' },
  { title: 'Geology.com', author: 'Geology.com', url: 'https://geology.com/', desc: 'Geology information and resources' },
  { title: 'Climate.gov', author: 'NOAA', url: 'https://www.climate.gov/', desc: 'Climate science education' },
  { title: 'National Geographic', author: 'NatGeo', url: 'https://education.nationalgeographic.org/', desc: 'Earth science content' }
]

const geologyResources = [
  { name: 'Geology.com', url: 'https://geology.com/', desc: 'Geology resources and information' },
  { name: 'USGS Geology', url: 'https://www.usgs.gov/geology', desc: 'Geological Survey geology resources' },
  { name: 'Mindat', url: 'https://www.mindat.org/', desc: 'Mineral database' },
  { name: 'GeoScienceWorld', url: 'https://www.geoscienceworld.org/', desc: 'Geoscience research' },
  { name: 'OneGeology', url: 'http://www.onegeology.org/', desc: 'Global geology maps' },
  { name: 'Macrostrat', url: 'https://macrostrat.org/', desc: 'Geological database' }
]

const meteorologyResources = [
  { name: 'NOAA NWS', url: 'https://www.weather.gov/', desc: 'National Weather Service' },
  { name: 'Weather Underground', url: 'https://www.wunderground.com/', desc: 'Weather data and education' },
  { name: 'JetStream', url: 'https://www.weather.gov/jetstream', desc: 'Online weather school' },
  { name: 'COMET', url: 'https://www.meted.ucar.edu/', desc: 'Meteorology education' },
  { name: 'Windy', url: 'https://www.windy.com/', desc: 'Interactive weather maps' }
]

const oceanographyResources = [
  { name: 'NOAA Ocean', url: 'https://oceanexplorer.noaa.gov/', desc: 'Ocean exploration' },
  { name: 'NASA Ocean', url: 'https://sealevel.nasa.gov/', desc: 'Sea level research' },
  { name: 'Woods Hole', url: 'https://www.whoi.edu/', desc: 'Oceanographic institution' },
  { name: 'Scripps', url: 'https://scripps.ucsd.edu/', desc: 'Ocean research' },
  { name: 'MarineBio', url: 'https://marinebio.org/', desc: 'Marine biology database' }
]

const climateResources = [
  { name: 'Climate.gov', url: 'https://www.climate.gov/', desc: 'Climate science portal' },
  { name: 'NASA Climate', url: 'https://climate.nasa.gov/', desc: 'Global climate change' },
  { name: 'IPCC', url: 'https://www.ipcc.ch/', desc: 'Climate change reports' },
  { name: 'Carbon Brief', url: 'https://www.carbonbrief.org/', desc: 'Climate analysis' },
  { name: 'RealClimate', url: 'https://www.realclimate.org/', desc: 'Climate science blog' }
]

const textbookResources = [
  { title: 'OpenStax Earth Science', url: 'https://openstax.org/details/books/earth-science', author: 'OpenStax', type: 'FREE PDF' },
  { title: 'Physical Geology', url: 'https://opentextbc.ca/geology/', author: 'BCcampus', type: 'FREE' },
  { title: 'Introduction to Oceanography', url: 'https://rwu.pressbooks.pub/oceanography/', author: 'RWU', type: 'FREE' }
]

const visualizationTools = [
  { name: 'Google Earth', url: 'https://earth.google.com/', desc: 'Virtual globe' },
  { name: 'NASA WorldWind', url: 'https://worldwind.arc.nasa.gov/', desc: 'Open source globe' },
  { name: 'Visible Earth', url: 'https://visibleearth.nasa.gov/', desc: 'NASA images' },
  { name: 'WebGIS', url: 'https://www.arcgis.com/', desc: 'Mapping platform' }
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
            <span class="text-sm text-green-300">1500+ Earth Science Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Earth Science
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our planet with comprehensive resources covering geology, meteorology, oceanography, and climate science from K-12 to research level.
          </p>

          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">400+</div>
              <div class="text-sm text-gray-400">K-12 Resources</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">600+</div>
              <div class="text-sm text-gray-400">University Courses</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">500+</div>
              <div class="text-sm text-gray-400">Research Tools</div>
            </div>
          </div>
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

      <!-- Geology -->
      <section id="geology" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Geology</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in geologyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-amber-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Meteorology -->
      <section id="meteorology" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Meteorology</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in meteorologyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-cyan-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Oceanography -->
      <section id="oceanography" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Oceanography</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in oceanographyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Climate Science -->
      <section id="climate" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Climate Science</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in climateResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-emerald-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Free Textbooks</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in textbookResources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-400">{{ r.author }}</p>
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
