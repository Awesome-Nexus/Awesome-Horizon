<script setup lang="ts">
useHead({
  title: 'Biology - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master biology from K-12 to PhD research with 2500+ curated resources. Free textbooks, MIT/Harvard courses, virtual labs, anatomy tools, genomics databases.' }
  ]
})

const featuredResources = [
  { title: 'iBiology', author: 'UCSF', url: 'https://www.ibiology.org/', desc: 'Free biology talks and courses' },
  { title: 'MIT OpenCourseWare Biology', author: 'MIT', url: 'https://ocw.mit.edu/courses/biology/', desc: 'Complete biology curriculum' },
  { title: 'Khan Academy Biology', author: 'Khan Academy', url: 'https://www.khanacademy.org/science/biology', desc: 'Comprehensive biology courses' },
  { title: 'Nature Scitable', author: 'Nature', url: 'https://www.nature.com/scitable', desc: 'Genetics and cell biology' },
  { title: 'NCBI', author: 'NIH', url: 'https://www.ncbi.nlm.nih.gov/', desc: 'Biomedical and genomic information' },
  { title: 'Cell Image Library', author: 'ASCB', url: 'http://www.cellimagelibrary.org/', desc: 'Microscopy images' }
]

const quickLinks = [
  { name: 'K-12 Biology', url: '#k12', count: 120 },
  { name: 'Genetics', url: '#genetics', count: 150 },
  { name: 'Molecular Biology', url: '#molecular', count: 180 },
  { name: 'Anatomy', url: '#anatomy', count: 100 },
  { name: 'Ecology', url: '#ecology', count: 80 },
  { name: 'Databases', url: '#databases', count: 50 }
]

const k12Resources = [
  { title: 'Khan Academy Biology', url: 'https://www.khanacademy.org/science/biology', provider: 'Khan Academy', type: 'Free Course' },
  { title: 'BioInteractive', url: 'https://www.biointeractive.org/', provider: 'HHMI', type: 'Video/Lesson' },
  { title: 'Learn.Genetics', url: 'https://learn.genetics.utah.edu/', provider: 'Utah', type: 'Interactive' },
  { title: 'Cell Biology Animation', url: 'http://www.johnkyrk.com/', provider: 'John Kyrk', type: 'Animation' },
  { title: 'PhET Biology', url: 'https://phet.colorado.edu/en/simulations/filter?subjects=biology', provider: 'CU Boulder', type: 'Simulation' },
  { title: 'Biology Dictionary', url: 'https://biologydictionary.net/', provider: 'Biology Dictionary', type: 'Reference' }
]

const textbooksBeginner = [
  { title: 'OpenStax Biology', author: 'OpenStax', url: 'https://openstax.org/details/books/biology', type: 'FREE PDF' },
  { title: 'OpenStax Anatomy', author: 'OpenStax', url: 'https://openstax.org/details/books/anatomy-and-physiology', type: 'FREE PDF' },
  { title: 'Biology LibreTexts', author: 'Various', url: 'https://bio.libretexts.org/', type: 'FREE WEB' },
  { title: 'iBiology Textbook', author: 'iBiology', url: 'https://www.ibiology.org/educator-resources/', type: 'Free' }
]

const geneticsResources = [
  { name: 'Learn.Genetics', url: 'https://learn.genetics.utah.edu/', desc: 'Utah genetics education' },
  { name: 'DNA Learning Center', url: 'https://www.dnalc.org/', desc: 'Cold Spring Harbor' },
  { name: 'Genetics Home Reference', url: 'https://medlineplus.gov/genetics/', desc: 'NIH genetics' },
  { name: '23andMe Education', url: 'https://you.23andme.com/', desc: 'Personal genetics' },
  { name: 'NHGRI Education', url: 'https://www.genome.gov/education', desc: 'Human Genome Institute' }
]

const databases = [
  { name: 'NCBI PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/', provider: 'NIH' },
  { name: 'GenBank', url: 'https://www.ncbi.nlm.nih.gov/genbank/', provider: 'NCBI' },
  { name: 'Ensembl', url: 'https://www.ensembl.org/', provider: 'EMBL-EBI' },
  { name: 'UCSC Genome Browser', url: 'https://genome.ucsc.edu/', provider: 'UCSC' },
  { name: 'UniProt', url: 'https://www.uniprot.org/', provider: 'EMBL-EBI' },
  { name: 'PDB', url: 'https://www.rcsb.org/', provider: 'RCSB' }
]

const anatomyResources = [
  { name: 'Visible Body', url: 'https://www.visiblebody.com/', desc: '3D anatomy' },
  { name: 'Anatomy Learning', url: 'https://www.anatomylearning.com/', desc: 'Free 3D anatomy' },
  { name: 'Zygote Body', url: 'https://zygotebody.com/', desc: 'Classic web anatomy' },
  { name: 'GetBodySmart', url: 'https://www.getbodysmart.com/', desc: 'Anatomy tutorials' }
]

const ecologyResources = [
  { name: 'iNaturalist', url: 'https://www.inaturalist.org/', desc: 'Species identification' },
  { name: 'Encyclopedia of Life', url: 'https://eol.org/', desc: 'Global species database' },
  { name: 'GBIF', url: 'https://www.gbif.org/', desc: 'Biodiversity data' },
  { name: 'NOAA Ocean Education', url: 'https://oceanexplorer.noaa.gov/edu/welcome.html', desc: 'Marine biology' }
]

const softwareTools = [
  { name: 'ImageJ/FIJI', url: 'https://imagej.net/software/fiji/', type: 'Free', desc: 'Image analysis' },
  { name: 'CellProfiler', url: 'https://cellprofiler.org/', type: 'Free', desc: 'Cell analysis' },
  { name: 'SnapGene', url: 'https://www.snapgene.com/', type: 'Commercial', desc: 'DNA visualization' },
  { name: 'PyMOL', url: 'https://pymol.org/', type: 'Free/Paid', desc: 'Molecular visualization' },
  { name: 'BLAST', url: 'https://blast.ncbi.nlm.nih.gov/', type: 'Free', desc: 'Sequence analysis' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-green-900/20 via-space-950 to-emerald-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30 mb-6">
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-green-300">2500+ Global Biology Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Biology
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master biology from K-12 to PhD research with 2500+ curated resources. Free textbooks, MIT courses, virtual labs, anatomy tools, genomics databases.
          </p>
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

      <!-- K-12 -->
      <section id="k12" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">K-12 Biology Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in k12Resources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500">{{ r.provider }}</p>
          </a>
        </div>
      </section>

      <!-- Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Free Textbooks</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="book in textbooksBeginner" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>
      </section>

      <!-- Genetics -->
      <section id="genetics" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Genetics Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in geneticsResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-green-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Anatomy -->
      <section id="anatomy" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Anatomy & Physiology</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in anatomyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-emerald-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Ecology -->
      <section id="ecology" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Ecology & Environment</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in ecologyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-teal-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Databases -->
      <section id="databases" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Biological Databases</h2>
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
        <h2 class="text-3xl font-bold text-white mb-6">Biology Software</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="sw in softwareTools" :key="sw.name" :href="sw.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ sw.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-indigo-400">{{ sw.name }}</h4>
            <p class="text-xs text-gray-500 mt-1">{{ sw.desc }}</p>
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
