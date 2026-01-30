<script setup lang="ts">
useHead({
  title: 'Astronomy - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master Astronomy from K-12 to research with 120+ curated resources. Observational astronomy, astrophysics, cosmology, and space exploration.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'Introduction to Astronomy',
    description: 'Stargazing, solar system, basic astronomy',
    color: 'emerald',
    resources: 40,
    topics: ['Stargazing', 'Solar System', 'Night Sky']
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate Level',
    description: 'Astrophysics, stellar evolution, galaxies',
    color: 'purple',
    resources: 45,
    topics: ['Astrophysics', 'Stellar Evolution', 'Galaxies']
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate & Research',
    description: 'Cosmology, GR, high-energy astrophysics',
    color: 'rose',
    resources: 35,
    topics: ['Cosmology', 'General Relativity', 'Research']
  }
]

const featuredResources = [
  { title: 'Crash Course Astronomy', author: 'Crash Course', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL', desc: '46-episode video series' },
  { title: 'NASA', author: 'NASA', url: 'https://www.nasa.gov/', desc: 'Space agency education' },
  { title: 'ESA', author: 'ESA', url: 'https://www.esa.int/', desc: 'European Space Agency' },
  { title: 'HubbleSite', author: 'STScI', url: 'https://hubblesite.org/', desc: 'Hubble Telescope resources' },
  { title: 'Astronomy Picture of the Day', author: 'NASA', url: 'https://apod.nasa.gov/', desc: 'Daily space images' },
  { title: 'Sky & Telescope', author: 'AAS', url: 'https://skyandtelescope.org/', desc: 'Astronomy magazine' }
]

const quickLinks = [
  { name: 'Stargazing', url: '#stargazing', icon: 'star', count: 25 },
  { name: 'Solar System', url: '#solar', icon: 'sun', count: 20 },
  { name: 'Astrophysics', url: '#astrophysics', icon: 'atom', count: 25 },
  { name: 'Cosmology', url: '#cosmology', icon: 'globe', count: 20 },
  { name: 'Space Exploration', url: '#exploration', icon: 'rocket', count: 20 },
  { name: 'Tools', url: '#tools', icon: 'tool', count: 15 }
]

const stargazingResources = [
  { title: 'Stellarium Web', url: 'https://stellarium-web.org/', type: 'Free Tool', desc: 'Online planetarium' },
  { title: 'Heavens-Above', url: 'https://www.heavens-above.com/', type: 'Web App', desc: 'Satellite tracking' },
  { title: 'TimeAndDate Astronomy', url: 'https://www.timeanddate.com/astronomy/', type: 'Reference', desc: 'Night sky guide' },
  { title: 'EarthSky', url: 'https://earthsky.org/', type: 'Website', desc: 'Astronomy news' },
  { title: 'In-The-Sky', url: 'https://in-the-sky.org/', type: 'Guide', desc: 'Observing guide' },
  { title: 'Astronomy.com', url: 'https://www.astronomy.com/', type: 'Magazine', desc: 'Amateur astronomy' }
]

const solarSystemResources = [
  { name: 'NASA Solar System', url: 'https://solarsystem.nasa.gov/', desc: 'Official NASA resource' },
  { name: 'The Planets', url: 'https://theplanets.org/', desc: 'Solar system guide' },
  { name: 'Space.com Solar System', url: 'https://www.space.com/solar-system', desc: 'Space news' },
  { name: 'Nine Planets', url: 'https://nineplanets.org/', desc: 'Solar system tours' },
  { name: 'Planetary Society', url: 'https://www.planetary.org/', desc: 'Space advocacy' }
]

const astrophysicsResources = [
  { name: 'Astrophysics (arXiv)', url: 'https://arxiv.org/archive/astro-ph', desc: 'Research papers' },
  { name: 'NASA ADS', url: 'https://ui.adsabs.harvard.edu/', desc: 'Astrophysics Data System' },
  { name: 'SIMBAD', url: 'http://simbad.u-strasbg.fr/', desc: 'Astronomical database' },
  { name: 'NED', url: 'https://ned.ipac.caltech.edu/', desc: 'Extragalactic database' },
  { name: 'AstroPy', url: 'https://www.astropy.org/', desc: 'Python astronomy' },
  { name: 'CosmoCalc', url: 'http://www.astro.ucla.edu/~wright/CosmoCalc.html', desc: 'Cosmology calculator' }
]

const cosmologyResources = [
  { name: 'Planck Mission', url: 'https://www.esa.int/Science_Exploration/Space_Science/Planck', desc: 'CMB research' },
  { name: 'LIGO', url: 'https://www.ligo.caltech.edu/', desc: 'Gravitational waves' },
  { name: 'CERN Cosmology', url: 'https://home.cern/science/physics/cosmology', desc: 'Particle cosmology' },
  { name: 'Dark Energy Survey', url: 'https://www.darkenergysurvey.org/', desc: 'Dark energy research' },
  { name: 'Legacy Survey', url: 'https://www.legacysurvey.org/', desc: 'Sky surveys' }
]

const explorationResources = [
  { name: 'SpaceX', url: 'https://www.spacex.com/', desc: 'Commercial spaceflight' },
  { name: 'Blue Origin', url: 'https://www.blueorigin.com/', desc: 'Space exploration' },
  { name: 'JPL', url: 'https://www.jpl.nasa.gov/', desc: 'Jet Propulsion Laboratory' },
  { name: 'ESA Science', url: 'https://science.esa.int/', desc: 'ESA missions' },
  { name: 'Space.com', url: 'https://www.space.com/', desc: 'Space news' },
  { name: 'Universe Today', url: 'https://www.universetoday.com/', desc: 'Space education' }
]

const toolResources = [
  { name: 'Celestia', url: 'https://celestia.space/', desc: '3D space simulation' },
  { name: 'WorldWide Telescope', url: 'https://worldwidetelescope.org/', desc: 'Virtual telescope' },
  { name: 'Aladin Sky Atlas', url: 'https://aladin.u-strasbg.fr/', desc: 'Sky atlas software' },
  { name: 'DS9', url: 'https://sites.google.com/cfa.harvard.edu/saoimageds9', desc: 'FITS image viewer' },
  { name: 'SAOImage', url: 'http://tdc-www.harvard.edu/software/saoimage.html', desc: 'Image analysis' }
]

const courseResources = [
  { name: 'Crash Course Astronomy', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL', desc: '46-episode YouTube series' },
  { name: 'Coursera Astronomy', url: 'https://www.coursera.org/browse/physical-science-and-engineering/astronomy', desc: 'University courses' },
  { name: 'edX Astronomy', url: 'https://www.edx.org/learn/astronomy', desc: 'College courses' },
  { name: 'Astronomy OpenStax', url: 'https://openstax.org/details/books/astronomy', desc: 'Free textbook' },
  { name: 'MIT Astrophysics', url: 'https://ocw.mit.edu/courses/physics/8-902-astrophysics-i-spring-2006/', desc: 'Graduate course' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-space-950 to-purple-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/science" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 rounded-full border border-indigo-500/30 mb-6">
            <span class="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-indigo-300">120+ Astronomy Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Astronomy
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore the cosmos with comprehensive resources covering stargazing, astrophysics, cosmology, and space exploration from beginner to research level.
          </p>

          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">40+</div>
              <div class="text-sm text-gray-400">Stargazing Tools</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">45+</div>
              <div class="text-sm text-gray-400">Astrophysics</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">35+</div>
              <div class="text-sm text-gray-400">Research</div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-indigo-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-indigo-400">({{ link.count }})</span>
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
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ r.title }}</h3>
            <p class="text-sm text-indigo-400 mb-2">{{ r.author }}</p>
            <p class="text-xs text-gray-400">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Stargazing -->
      <section id="stargazing" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Stargazing & Night Sky</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in stargazingResources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-cyan-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Solar System -->
      <section id="solar" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Solar System</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in solarSystemResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-orange-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Astrophysics -->
      <section id="astrophysics" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Astrophysics & Research</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in astrophysicsResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-purple-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Cosmology -->
      <section id="cosmology" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Cosmology</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in cosmologyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-pink-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Space Exploration -->
      <section id="exploration" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Space Exploration</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in explorationResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Tools -->
      <section id="tools" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Astronomy Tools</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in toolResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-emerald-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Courses -->
      <section id="courses" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Courses & Learning</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in courseResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-amber-400">{{ r.name }}</h4>
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
