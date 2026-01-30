<script setup lang="ts">
useHead({
  title: 'Chemistry - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master chemistry from K-12 to PhD research with 2500+ curated resources. Free textbooks, courses from MIT, Harvard, Oxford, virtual labs, organic chemistry tools, and research databases.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'K-12 to High School',
    description: 'School chemistry, AP/IB, basic concepts',
    color: 'emerald',
    resources: 600
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate University',
    description: 'University level chemistry',
    color: 'purple',
    resources: 1000
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate & Research',
    description: 'Graduate courses, PhD preparation',
    color: 'rose',
    resources: 900
  }
]

const featuredResources = [
  { title: 'LibreTexts Chemistry', author: 'UC Davis', url: 'https://chem.libretexts.org/', desc: 'Comprehensive free chemistry library' },
  { title: 'MIT OpenCourseWare Chemistry', author: 'MIT', url: 'https://ocw.mit.edu/courses/chemistry/', desc: 'Complete chemistry curriculum' },
  { title: 'Organic Chemistry Portal', author: 'Various', url: 'https://www.organic-chemistry.org/', desc: 'Organic chemistry resources' },
  { title: 'PubChem', author: 'NCBI', url: 'https://pubchem.ncbi.nlm.nih.gov/', desc: 'Chemical structure database' },
  { title: 'ChemSpider', author: 'RSC', url: 'http://www.chemspider.com/', desc: 'Chemical structures and properties' },
  { title: 'Periodic Table Live!', author: 'ChemEd DL', url: 'https://periodictable.com/', desc: 'Interactive periodic table' }
]

const quickLinks = [
  { name: 'K-12 Chemistry', url: '#k12', count: 100 },
  { name: 'Organic Chemistry', url: '#organic', count: 200 },
  { name: 'Virtual Labs', url: '#labs', count: 50 },
  { name: 'Databases', url: '#databases', count: 40 },
  { name: 'Software', url: '#software', count: 30 }
]

const k12Resources = [
  { title: 'Khan Academy Chemistry', url: 'https://www.khanacademy.org/science/chemistry', provider: 'Khan Academy', type: 'Free Course' },
  { title: 'Chem4Kids', url: 'http://www.chem4kids.com/', provider: 'Rader', type: 'Tutorial' },
  { title: 'Periodic Videos', url: 'http://www.periodicvideos.com/', provider: 'Nottingham', type: 'Video' },
  { title: 'Royal Society of Chemistry', url: 'https://edu.rsc.org/', provider: 'RSC', type: 'Resources' },
  { title: 'PhET Chemistry', url: 'https://phet.colorado.edu/en/simulations/filter?subjects=chemistry', provider: 'CU Boulder', type: 'Simulation' },
  { title: 'ChemCollective', url: 'http://chemcollective.org/', provider: 'CMU', type: 'Virtual Lab' }
]

const textbooksBeginner = [
  { title: 'OpenStax Chemistry', author: 'OpenStax', url: 'https://openstax.org/details/books/chemistry', type: 'FREE PDF' },
  { title: 'Chemistry LibreTexts', author: 'Various', url: 'https://chem.libretexts.org/', type: 'FREE WEB' },
  { title: 'CK-12 Chemistry', author: 'CK-12', url: 'https://www.ck12.org/chemistry/', type: 'FlexBook' }
]

const organicResources = [
  { name: 'Organic Chemistry Portal', url: 'https://www.organic-chemistry.org/', desc: 'Reactions and mechanisms' },
  { name: 'Name Reactions', url: 'https://www.organic-chemistry.org/namedreactions/', desc: 'Named reactions database' },
  { name: 'Chemistry by Design', url: 'http://chemistrybydesign.oia.arizona.edu/', desc: 'Total synthesis' },
  { name: 'Master Organic Chemistry', url: 'https://www.masterorganicchemistry.com/', desc: 'Tutorials and guides' }
]

const virtualLabs = [
  { name: 'ChemCollective', url: 'http://chemcollective.org/', provider: 'Carnegie Mellon' },
  { name: 'PhET Chemistry', url: 'https://phet.colorado.edu/chemistry', provider: 'CU Boulder' },
  { name: 'Labster Chemistry', url: 'https://www.labster.com/', provider: 'Labster' },
  { name: 'ChemReaX', url: 'https://chemreax.com/', provider: 'ScienceBySimulation' }
]

const databases = [
  { name: 'PubChem', url: 'https://pubchem.ncbi.nlm.nih.gov/', provider: 'NCBI' },
  { name: 'ChemSpider', url: 'http://www.chemspider.com/', provider: 'RSC' },
  { name: 'NIST Chemistry', url: 'https://webbook.nist.gov/chemistry/', provider: 'NIST' },
  { name: 'ChEBI', url: 'https://www.ebi.ac.uk/chebi/', provider: 'EMBL-EBI' },
  { name: 'PDB', url: 'https://www.rcsb.org/', provider: 'RCSB' },
  { name: 'DrugBank', url: 'https://go.drugbank.com/', provider: 'U Alberta' }
]

const softwareTools = [
  { name: 'ChemDraw', url: 'https://revvitysignals.com/products/research/chemdraw', type: 'Commercial' },
  { name: 'Avogadro', url: 'https://avogadro.cc/', type: 'Free' },
  { name: 'Jmol', url: 'http://jmol.sourceforge.net/', type: 'Free' },
  { name: 'PyMOL', url: 'https://pymol.org/', type: 'Free/Paid' },
  { name: 'Gaussian', url: 'https://gaussian.com/', type: 'Commercial' },
  { name: 'ChemSketch', url: 'https://www.acdlabs.com/resources/freeware/chemsketch/', type: 'Free' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-space-950 to-cyan-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-6">
            <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-emerald-300">2500+ Global Chemistry Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Chemistry
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master chemistry from K-12 to PhD research with 2500+ curated resources. Free textbooks, MIT courses, virtual labs, organic chemistry tools, and research databases.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-emerald-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-emerald-400">({{ link.count }})</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      <!-- Featured Resources -->
      <section>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in featuredResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ resource.title }}</h3>
            <p class="text-sm text-emerald-400 mb-2">{{ resource.author }}</p>
            <p class="text-xs text-gray-400">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- K-12 Resources -->
      <section id="k12" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">K-12 Chemistry Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in k12Resources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-emerald-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500">{{ r.provider }}</p>
          </a>
        </div>
      </section>

      <!-- Free Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Free Textbooks</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="book in textbooksBeginner" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-emerald-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>
      </section>

      <!-- Organic Chemistry -->
      <section id="organic" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Organic Chemistry Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in organicResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-emerald-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Virtual Labs -->
      <section id="labs" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Virtual Labs</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="lab in virtualLabs" :key="lab.name" :href="lab.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-cyan-400">{{ lab.name }}</h4>
            <p class="text-sm text-gray-500">{{ lab.provider }}</p>
          </a>
        </div>
      </section>

      <!-- Databases -->
      <section id="databases" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Chemical Databases</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="db in databases" :key="db.name" :href="db.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ db.name }}</h4>
            <p class="text-sm text-gray-500">{{ db.provider }}</p>
          </a>
        </div>
      </section>

      <!-- Software -->
      <section id="software" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Chemistry Software</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="sw in softwareTools" :key="sw.name" :href="sw.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ sw.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-indigo-400">{{ sw.name }}</h4>
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
