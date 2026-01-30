<script setup lang="ts">
useHead({
  title: 'Psychology - Complete Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master psychology from beginner to advanced with 100+ curated resources. Cognitive, clinical, social, developmental psychology, and neuroscience.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'Introduction to Psychology',
    description: 'AP Psychology, introductory courses, basics',
    color: 'emerald',
    resources: 30,
    topics: ['Intro Psychology', 'AP Psychology', 'Psychology Basics']
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate Level',
    description: 'Major branches and specializations',
    color: 'purple',
    resources: 40,
    topics: ['Cognitive Psychology', 'Social Psychology', 'Developmental Psychology']
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate & Research',
    description: 'Clinical, neuroscience, research methods',
    color: 'rose',
    resources: 30,
    topics: ['Clinical Psychology', 'Neuroscience', 'Research Methods']
  }
]

const featuredResources = [
  { title: 'Crash Course Psychology', author: 'Crash Course', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6', desc: 'Comprehensive video series' },
  { title: 'Nobas Psychology', author: 'NOBA Project', url: 'https://nobaproject.com/', desc: 'Free peer-reviewed textbooks' },
  { title: 'OpenStax Psychology', author: 'OpenStax', url: 'https://openstax.org/details/books/psychology', desc: 'Free college textbook' },
  { title: 'Simply Psychology', author: 'Simply Psychology', url: 'https://www.simplypsychology.org/', desc: 'Psychology explanations' },
  { title: 'Psychology Today', author: 'Psychology Today', url: 'https://www.psychologytoday.com/', desc: 'Articles and resources' },
  { title: 'Verywell Mind', author: 'Verywell', url: 'https://www.verywellmind.com/', desc: 'Mental health resources' }
]

const quickLinks = [
  { name: 'Intro Psychology', url: '#intro', icon: 'book', count: 20 },
  { name: 'Cognitive', url: '#cognitive', icon: 'brain', count: 25 },
  { name: 'Social', url: '#social', icon: 'users', count: 20 },
  { name: 'Developmental', url: '#developmental', icon: 'child', count: 15 },
  { name: 'Clinical', url: '#clinical', icon: 'heart', count: 15 },
  { name: 'Neuroscience', url: '#neuroscience', icon: 'activity', count: 15 }
]

const introResources = [
  { title: 'Crash Course Psychology', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6', type: 'Video', desc: '40+ episode video series' },
  { title: 'OpenStax Psychology', url: 'https://openstax.org/details/books/psychology', type: 'FREE Textbook', desc: 'College-level intro text' },
  { title: 'Nobas Psychology', url: 'https://nobaproject.com/', type: 'FREE Textbook', desc: 'Peer-reviewed modules' },
  { title: 'Khan Academy Psychology', url: 'https://www.khanacademy.org/test-prep/mcat/psychological', type: 'Free Course', desc: 'MCAT psychology prep' },
  { title: 'Yale Introduction to Psychology', url: 'https://oyc.yale.edu/psychology/psyc-110', type: 'Lecture', desc: 'Professor Paul Bloom' },
  { title: 'Harvard Psychology', url: 'https://www.youtube.com/c/HarvardPsychology', type: 'YouTube', desc: 'Harvard lectures' }
]

const cognitiveResources = [
  { name: 'Cognitive Psychology (Stanford)', url: 'https://plato.stanford.edu/entries/cognitive-science/', desc: 'Stanford Encyclopedia' },
  { name: 'Cognitive Class', url: 'https://cognitiveclass.ai/', desc: 'Free cognitive science courses' },
  { name: 'Memory and Cognition', url: 'https://www.simplypsychology.org/memory.html', desc: 'Memory explained' },
  { name: 'BrainFacts', url: 'https://www.brainfacts.org/', desc: 'Neuroscience foundation' },
  { name: 'Cognitive Neuroscience', url: 'https://www.cognitive-neuroscience.com/', desc: 'Research and education' }
]

const socialResources = [
  { name: 'Social Psychology Network', url: 'https://www.socialpsychology.org/', desc: 'Resources and directory' },
  { name: 'SPSSI', url: 'https://www.spssi.org/', desc: 'Social issues and psychology' },
  { name: 'The Personality Project', url: 'https://personality-project.org/', desc: 'Personality psychology' },
  { name: 'Psychology of Relationships', url: 'https://www.psychologytoday.com/us/basics/relationships', desc: 'Relationship science' }
]

const developmentalResources = [
  { name: 'CDC Developmental Milestones', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/', desc: 'Child development' },
  { name: 'Zero to Three', url: 'https://www.zerotothree.org/', desc: 'Early childhood development' },
  { name: 'Society for Research in Child Development', url: 'https://www.srcd.org/', desc: 'Research and resources' },
  { name: 'Developmental Psychology (Simply)', url: 'https://www.simplypsychology.org/developmental-psychology.html', desc: 'Overview guide' }
]

const clinicalResources = [
  { name: 'Psychology Today Find a Therapist', url: 'https://www.psychologytoday.com/us/therapists', desc: 'Therapist directory' },
  { name: 'NAMI', url: 'https://www.nami.org/', desc: 'Mental health organization' },
  { name: 'Mental Health America', url: 'https://mhanational.org/', desc: 'Screening and resources' },
  { name: 'SAMHSA', url: 'https://www.samhsa.gov/', desc: 'Substance abuse and mental health' },
  { name: 'APA Clinical Practice', url: 'https://www.apa.org/practice/guidelines', desc: 'Clinical guidelines' }
]

const neuroscienceResources = [
  { name: 'Neuroscience News', url: 'https://neurosciencenews.com/', desc: 'Latest research' },
  { name: 'Dana Foundation', url: 'https://www.dana.org/', desc: 'Brain science' },
  { name: 'Neuroanatomy (Washington)', url: 'http://www9.biostr.washington.edu/da.html', desc: 'Digital atlas' },
  { name: 'Human Connectome Project', url: 'https://www.humanconnectome.org/', desc: 'Brain mapping' },
  { name: 'NeuroSky', url: 'https://neurosky.com/', desc: 'EEG and brain monitoring' }
]

const researchResources = [
  { name: 'PubMed Psychology', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=psychology', desc: 'Psychology research' },
  { name: 'PsycINFO', url: 'https://www.apa.org/pubs/databases/psyccinfo', desc: 'APA database' },
  { name: 'Frontiers in Psychology', url: 'https://www.frontiersin.org/journals/psychology', desc: 'Open access journal' },
  { name: 'PLOS Psychology', url: 'https://journals.plos.org/plosone/browse/psychology', desc: 'Open science' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-space-950 to-rose-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/science" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full border border-pink-500/30 mb-6">
            <span class="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-pink-300">100+ Psychology Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
              Psychology
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore the science of mind and behavior. From cognitive processes to clinical practice, discover comprehensive resources for understanding human psychology.
          </p>

          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">30+</div>
              <div class="text-sm text-gray-400">Intro Resources</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">40+</div>
              <div class="text-sm text-gray-400">Specialized Topics</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">30+</div>
              <div class="text-sm text-gray-400">Research Tools</div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-pink-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-pink-400">({{ link.count }})</span>
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
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ r.title }}</h3>
            <p class="text-sm text-pink-400 mb-2">{{ r.author }}</p>
            <p class="text-xs text-gray-400">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Intro Psychology -->
      <section id="intro" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Introduction to Psychology</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in introResources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-emerald-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Cognitive Psychology -->
      <section id="cognitive" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Cognitive Psychology</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in cognitiveResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-purple-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Social Psychology -->
      <section id="social" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Social Psychology</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in socialResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Developmental -->
      <section id="developmental" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Developmental Psychology</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in developmentalResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-amber-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Clinical -->
      <section id="clinical" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Clinical Psychology</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in clinicalResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-rose-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Neuroscience -->
      <section id="neuroscience" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Neuroscience</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in neuroscienceResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-cyan-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Research -->
      <section id="research" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Research Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in researchResources" :key="r.name" :href="r.url" target="_blank"
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
