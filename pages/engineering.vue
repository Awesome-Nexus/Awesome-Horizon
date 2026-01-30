<script setup lang="ts">
useHead({
  title: 'Engineering - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master engineering from K-12 to professional with 2500+ curated resources. Mechanical, Electrical, Civil, Aerospace, and Software Engineering courses, textbooks, and tools.' }
  ]
})

const featuredResources = [
  { title: 'MIT OpenCourseWare Engineering', author: 'MIT', url: 'https://ocw.mit.edu/courses/engineering/', desc: 'Complete engineering curriculum' },
  { title: 'NPTEL Engineering', author: 'IIT India', url: 'https://nptel.ac.in/engineering.html', desc: 'Indian engineering courses' },
  { title: 'Engineering Toolbox', author: 'Various', url: 'https://www.engineeringtoolbox.com/', desc: 'Engineering resources and tools' },
  { title: 'Grabcad', author: 'Stratasys', url: 'https://grabcad.com/', desc: 'CAD models and community' },
  { title: 'Coursera Engineering', author: 'Various Universities', url: 'https://www.coursera.org/browse/engineering', desc: 'University engineering courses' },
  { title: 'edX Engineering', author: 'MIT/Harvard', url: 'https://www.edx.org/learn/engineering', desc: 'Engineering courses' }
]

const quickLinks = [
  { name: 'Mechanical', url: '#mechanical', count: 150 },
  { name: 'Electrical', url: '#electrical', count: 120 },
  { name: 'Civil', url: '#civil', count: 100 },
  { name: 'Aerospace', url: '#aerospace', count: 80 },
  { name: 'CAD Tools', url: '#cad', count: 60 },
  { name: 'Standards', url: '#standards', count: 40 }
]

const mechanicalResources = [
  { title: 'MIT Mechanical Engineering', url: 'https://ocw.mit.edu/courses/mechanical-engineering/', provider: 'MIT', type: 'Free Courses' },
  { title: 'Learn Mech', url: 'https://www.learnmech.com/', provider: 'LearnMech', type: 'Tutorial' },
  { title: 'Mechanical Design Handbook', url: 'https://www.machinedesign.com/', provider: 'Machine Design', type: 'Reference' },
  { title: 'Thermopedia', url: 'http://www.thermopedia.com/', provider: 'A-to-Z Guide', type: 'Reference' },
  { title: 'Engineers Edge', url: 'https://www.engineersedge.com/', provider: 'Engineers Edge', type: 'Resources' },
  { title: 'MIT MechE', url: 'https://meche.mit.edu/', provider: 'MIT', type: 'University' }
]

const electricalResources = [
  { name: 'All About Circuits', url: 'https://www.allaboutcircuits.com/', desc: 'Electrical engineering education' },
  { name: 'Electrical4U', url: 'https://www.electrical4u.com/', desc: 'Electrical engineering' },
  { name: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org/', desc: 'Research papers' },
  { name: 'CircuitLab', url: 'https://www.circuitlab.com/', desc: 'Circuit simulation' },
  { name: 'Falstad Circuit', url: 'https://www.falstad.com/circuit/', desc: 'Free circuit simulator' }
]

const civilResources = [
  { name: 'Civil Engineering Academy', url: 'https://civilengineeringacademy.com/', desc: 'FE/PE exam prep' },
  { name: 'Structurae', url: 'https://structurae.net/', desc: 'Structural engineering' },
  { name: 'SkyscraperCenter', url: 'https://www.skyscrapercenter.com/', desc: 'Tall building database' },
  { name: 'Engineering News-Record', url: 'https://www.enr.com/', desc: 'Construction industry' },
  { name: 'Civicus', url: 'https://www.civicus.org/', desc: 'Civil engineering tools' }
]

const aerospaceResources = [
  { name: 'NASA Aeronautics', url: 'https://www.nasa.gov/aeronautics', desc: 'Aerospace education' },
  { name: 'AIAA', url: 'https://www.aiaa.org/', desc: 'Aerospace professional org' },
  { name: 'MIT AeroAstro', url: 'https://aeroastro.mit.edu/', desc: 'Aerospace engineering' },
  { name: 'Space.com', url: 'https://www.space.com/', desc: 'Space news and education' }
]

const cadTools = [
  { name: 'AutoCAD', url: 'https://www.autodesk.com/products/autocad/overview', type: 'Commercial' },
  { name: 'Fusion 360', url: 'https://www.autodesk.com/products/fusion-360/', type: 'Free/Hobby' },
  { name: 'SolidWorks', url: 'https://www.solidworks.com/', type: 'Commercial' },
  { name: 'Onshape', url: 'https://www.onshape.com/', type: 'Cloud CAD' },
  { name: 'FreeCAD', url: 'https://www.freecad.org/', type: 'Open Source' },
  { name: 'Blender', url: 'https://www.blender.org/', type: 'Free' },
  { name: 'SketchUp', url: 'https://www.sketchup.com/', type: 'Freemium' },
  { name: 'Tinkercad', url: 'https://www.tinkercad.com/', type: 'Free' }
]

const standardsResources = [
  { name: 'ISO Standards', url: 'https://www.iso.org/', desc: 'International standards' },
  { name: 'ASME', url: 'https://www.asme.org/', desc: 'Mechanical engineering' },
  { name: 'IEEE Standards', url: 'https://standards.ieee.org/', desc: 'Electrical standards' },
  { name: 'ASTM', url: 'https://www.astm.org/', desc: 'Materials standards' },
  { name: 'ANSI', url: 'https://www.ansi.org/', desc: 'American standards' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-space-950 to-amber-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/30 mb-6">
            <span class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-orange-300">2500+ Global Engineering Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Engineering
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master engineering from K-12 to professional with 2500+ curated resources. Mechanical, Electrical, Civil, Aerospace, CAD tools, and standards.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-orange-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-orange-400">({{ link.count }})</span>
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
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ r.title }}</h3>
            <p class="text-sm text-orange-400 mb-2">{{ r.author }}</p>
            <p class="text-xs text-gray-400">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Mechanical -->
      <section id="mechanical" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Mechanical Engineering</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in mechanicalResources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-orange-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500">{{ r.provider }}</p>
          </a>
        </div>
      </section>

      <!-- Electrical -->
      <section id="electrical" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Electrical Engineering</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in electricalResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-yellow-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Civil -->
      <section id="civil" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Civil Engineering</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in civilResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-amber-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Aerospace -->
      <section id="aerospace" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Aerospace Engineering</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in aerospaceResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- CAD Tools -->
      <section id="cad" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">CAD & Design Tools</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in cadTools" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-cyan-400">{{ r.name }}</h4>
          </a>
        </div>
      </section>

      <!-- Standards -->
      <section id="standards" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Engineering Standards</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in standardsResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-red-400">{{ r.name }}</h4>
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
