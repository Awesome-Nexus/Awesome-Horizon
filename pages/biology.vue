<script setup lang="ts">
useHead({
  title: 'Biology - Complete Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master biology from beginner to research level with 1000+ curated resources. Free textbooks, courses, simulations, and more from MIT, Harvard, and universities worldwide.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'High School / AP',
    description: 'General biology, cell biology, genetics basics',
    color: 'emerald',
    resources: 350,
    topics: ['General Biology', 'AP Biology', 'Cell Structure', 'Genetics Basics']
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate',
    description: 'Molecular biology, biochemistry, ecology, physiology',
    color: 'purple',
    resources: 400,
    topics: ['Molecular Biology', 'Biochemistry', 'Ecology', 'Physiology']
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate / Research',
    description: 'Advanced genetics, neuroscience, bioinformatics, research methods',
    color: 'rose',
    resources: 250,
    topics: ['Advanced Genetics', 'Neuroscience', 'Bioinformatics', 'Systems Biology']
  }
]

const featuredResources = [
  {
    title: 'LibreTexts Biology',
    author: 'LibreTexts Project',
    type: 'Free Library',
    url: 'https://bio.libretexts.org/',
    description: 'Comprehensive open biology library with 100+ textbooks'
  },
  {
    title: 'Khan Academy Biology',
    author: 'Khan Academy',
    type: 'Free Course',
    url: 'https://www.khanacademy.org/science/biology',
    description: 'Comprehensive biology curriculum for all levels'
  },
  {
    title: 'iNaturalist',
    author: 'California Academy of Sciences',
    type: 'App/Community',
    url: 'https://www.inaturalist.org/',
    description: 'Species identification and citizen science'
  },
  {
    title: 'NCBI Resources',
    author: 'National Library of Medicine',
    type: 'Database',
    url: 'https://www.ncbi.nlm.nih.gov/',
    description: 'Genomic databases and research tools'
  },
  {
    title: 'Cell Biology by the Numbers',
    author: 'Ron Milo & Rob Phillips',
    type: 'Free Book',
    url: 'https://book.bionumbers.org/',
    description: 'Back-of-envelope calculations for cell biology'
  },
  {
    title: 'Rosalind',
    author: 'University of California',
    type: 'Platform',
    url: 'https://rosalind.info/',
    description: 'Learn bioinformatics through problem solving'
  }
]

const quickLinks = [
  { name: 'Free Textbooks', url: '#textbooks', count: 100 },
  { name: 'MIT OCW', url: '#mitocw', count: 25 },
  { name: 'YouTube Channels', url: '#youtube', count: 35 },
  { name: 'Molecular Biology', url: '#molecular', count: 80 },
  { name: 'Genetics', url: '#genetics', count: 60 },
  { name: 'Ecology', url: '#ecology', count: 40 },
  { name: 'Neuroscience', url: '#neuroscience', count: 50 },
  { name: 'Bioinformatics', url: '#bioinformatics', count: 40 },
  { name: 'Biology Olympiad', url: '#olympiad', count: 25 },
  { name: 'Podcasts', url: '#podcasts', count: 15 }
]

// Free Textbooks
const freeTextbooks = [
  { title: 'Biology 2e', author: 'OpenStax', level: 'Beginner', type: 'FREE PDF', url: 'https://openstax.org/details/books/biology-2e' },
  { title: 'Concepts of Biology', author: 'OpenStax', level: 'Beginner', type: 'FREE PDF', url: 'https://openstax.org/details/books/concepts-biology' },
  { title: 'Anatomy & Physiology', author: 'OpenStax', level: 'Intermediate', type: 'FREE PDF', url: 'https://openstax.org/details/books/anatomy-and-physiology' },
  { title: 'Biochemistry Free For All', author: 'Oregon State', level: 'Intermediate', type: 'FREE', url: 'https://open.oregonstate.education/biochemfreeforall/' },
  { title: 'Cell Biology', author: 'Oregon State', level: 'Intermediate', type: 'FREE PDF', url: 'https://open.oregonstate.education/cellbiology/' },
  { title: 'Cell Biology by the Numbers', author: 'Milo & Phillips', level: 'Advanced', type: 'FREE', url: 'https://book.bionumbers.org/' },
  { title: 'Introduction to Genetics', author: 'TRU Open Textbooks', level: 'Intermediate', type: 'FREE', url: 'https://open.umn.edu/opentextbooks/textbooks/introduction-to-genetics' },
  { title: 'Fundamentals of Cell Biology', author: 'Marjorie Hass', level: 'Intermediate', type: 'FREE', url: 'https://open.umn.edu/opentextbooks/textbooks/fundamentals-of-cell-biology' }
]

// MIT OCW Courses
const mitCourses = [
  { code: '7.01x', title: 'Intro to Biology', professor: 'MIT Faculty', level: 'Beginner', url: 'https://ocw.mit.edu/courses/7-01x/' },
  { code: '7.06', title: 'Cell Biology', professor: 'MIT Faculty', level: 'Advanced', url: 'https://ocw.mit.edu/courses/7-06-cell-biology-spring-2007/' },
  { code: '7.28', title: 'Molecular Biology', professor: 'MIT Faculty', level: 'Advanced', url: 'https://ocw.mit.edu/courses/7-28-molecular-biology-spring-2005/' },
  { code: '7.29', title: 'Evolution & Development', professor: 'MIT Faculty', level: 'Advanced', url: 'https://ocw.mit.edu/courses/7-29j-evolution-and-development-spring-2004/' },
  { code: '7.30', title: 'Ecology', professor: 'MIT Faculty', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/7-30-ecology-i-fall-2005/' },
  { code: '7.32', title: 'Systems Biology', professor: 'MIT Faculty', level: 'Advanced', url: 'https://ocw.mit.edu/courses/7-32-systems-biology-fall-2014/' },
  { code: '9.01', title: 'Neuroscience', professor: 'MIT Faculty', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/9-01-introduction-to-neuroscience-fall-2007/' }
]

// YouTube Channels
const youtubeChannels = [
  { name: 'Crash Course Biology', subs: '12M+', focus: 'General Biology', description: 'Comprehensive biology course', url: 'https://www.youtube.com/@crashcourse' },
  { name: 'Khan Academy', subs: '8M+', focus: 'All Biology', description: 'Biology tutorials', url: 'https://www.youtube.com/@khanacademy' },
  { name: 'Professor Dave Explains', subs: '3M+', focus: 'Molecular Biology', description: 'Biology and chemistry', url: 'https://www.youtube.com/@ProfessorDaveExplains' },
  { name: 'Amoeba Sisters', subs: '2M+', focus: 'Educational Biology', description: 'Biology cartoons', url: 'https://www.youtube.com/@AmoebaSisters' },
  { name: 'Ninja Nerd', subs: '1M+', focus: 'Medical Biology', description: 'Physiology and anatomy', url: 'https://www.youtube.com/@NinjaNerdOfficial' },
  { name: 'Shomu\'s Biology', subs: '500K+', focus: 'Cell Biology', description: 'Molecular techniques', url: 'https://www.youtube.com/@ShomusBiology' }
]

// Molecular Biology
const molecularBiology = [
  { name: 'MIT 7.06x Cell Biology', url: 'https://ocw.mit.edu/courses/res-7-007-7-06x/', type: 'Course', description: 'MIT cell biology course' },
  { name: 'Molecular Biology (Lecturio)', url: 'https://www.lecturio.com/concepts/molecular-and-cell-biology/', type: 'Course', description: 'Comprehensive molecular biology' },
  { name: 'DNA Decoding (McMaster)', url: 'https://www.coursera.org/learn/mcmaster-genes', type: 'MOOC', description: 'Gene expression and mechanisms' },
  { name: 'Cell Signaling (KAIST)', url: 'https://www.coursera.org/learn/cell-signaling', type: 'MOOC', description: 'Signal transduction pathways' }
]

// Genetics
const geneticsResources = [
  { name: 'Introduction to Genetics', url: 'https://open.umn.edu/opentextbooks/textbooks/introduction-to-genetics', type: 'Textbook', description: 'Transmission genetics' },
  { name: 'Chromosomes & Traits', url: 'https://rotel.pressbooks.pub/genetics/', type: 'Textbook', description: 'DNA structure to evolution' },
  { name: 'Population Genetics', url: 'https://hydrodictyon.eeb.uconn.edu/eebedia/index.php/Teaching', type: 'Notes', description: 'Advanced population genetics' },
  { name: 'HMX Genetics (Harvard)', url: 'https://hmx.harvard.edu/', type: 'Course', description: 'Foundational genetics' }
]

// Ecology
const ecologyResources = [
  { name: 'Rice University Ecology', url: 'https://online.rice.edu/courses/intro-to-biology-ecology/', type: 'Course', description: 'University-level ecology' },
  { name: 'Ecology (AMNH)', url: 'https://www.coursera.org/learn/ecology', type: 'MOOC', description: 'Ecosystem dynamics' },
  { name: 'FutureLearn Ecology', url: 'https://www.futurelearn.com/subjects/nature-and-environment-courses/ecology', type: 'Courses', description: 'Multiple ecology courses' },
  { name: 'British Ecological Society', url: 'https://www.britishecologicalsociety.org/', type: 'Society', description: 'Teaching resources' }
]

// Neuroscience
const neuroscienceResources = [
  { name: 'Harvard Neuroscience', url: 'https://pll.harvard.edu/catalog?keywords=neuroscience', type: 'Courses', description: 'Fundamentals of Neuroscience' },
  { name: 'Understanding the Brain', url: 'https://www.coursera.org/learn/neurobiology', type: 'MOOC', description: 'Neurobiology of everyday life' },
  { name: 'Medical Neuroscience (Duke)', url: 'https://www.coursera.org/learn/medical-neuroscience', type: 'MOOC', description: 'Advanced medical neuroscience' },
  { name: 'Synapses, Neurons and Brains', url: 'https://www.coursera.org/learn/synapses', type: 'MOOC', description: 'Brain function fundamentals' }
]

// Bioinformatics
const bioinformaticsResources = [
  { name: 'Rosalind', url: 'https://rosalind.info/', type: 'Platform', description: 'Learn bioinformatics by solving' },
  { name: 'NCBI Resource Guide', url: 'https://www.ncbi.nlm.nih.gov/guide/all/', type: 'Database', description: 'Genomic databases and tools' },
  { name: 'UCSC Genome Browser', url: 'https://genome.ucsc.edu/', type: 'Tool', description: 'Genome visualization' },
  { name: 'EMBL-EBI', url: 'https://www.ebi.ac.uk/', type: 'Database', description: 'European bioinformatics' },
  { name: 'Bioconductor', url: 'https://www.bioconductor.org/', type: 'Software', description: 'R packages for genomics' },
  { name: 'BioPython', url: 'https://biopython.org/', type: 'Software', description: 'Python tools for bioinformatics' }
]

// Biology Olympiad
const olympiadResources = [
  { name: 'IBO Official', url: 'https://www.ibo-info.org/', type: 'Official', description: 'International Biology Olympiad' },
  { name: 'UK Biology Olympiad', url: 'https://www.ukbiologycompetitions.org/british-biology-olympiad', type: 'UK', description: 'British Biology Olympiad' },
  { name: 'USABO', url: 'https://www.cee.org/programs/usabio', type: 'US', description: 'USA Biology Olympiad' }
]

// Podcasts
const podcasts = [
  { name: 'This Week in Virology', url: 'https://www.microbe.tv/twiv/', description: 'Virology discussions' },
  { name: 'The Infinite Monkey Cage', url: 'https://www.bbc.co.uk/programmes/b00snr0w', description: 'BBC science with biology' },
  { name: 'Ologies (Biology episodes)', url: 'https://www.alieward.com/ologies', description: 'Science interviews' },
  { name: 'The Biology of Everything', url: 'https://podcasts.apple.com/us/podcast/the-biology-of-everything/id1481812176', description: 'Biology explained' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
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
            <span class="text-sm text-green-300">1000+ Curated Biology Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Biology
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master biology from high school to research level. Free textbooks, courses, and resources from MIT, Harvard, and institutions worldwide.
          </p>

          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">3</div>
              <div class="text-sm text-gray-400">Difficulty Levels</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">100+</div>
              <div class="text-sm text-gray-400">Free Textbooks</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">25+</div>
              <div class="text-sm text-gray-400">MIT OCW Courses</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">1000+</div>
              <div class="text-sm text-gray-400">Total Resources</div>
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

    <!-- Content Sections -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      <!-- Featured Resources -->
      <section>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in featuredResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ resource.title }}</h3>
            <p class="text-sm text-green-400 mb-2">{{ resource.author }}</p>
            <p class="text-xs text-gray-400">{{ resource.description }}</p>
          </a>
        </div>
      </section>

      <!-- Free Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Free Biology Textbooks</h2>
            <p class="text-gray-400">Open access textbooks from OpenStax, LibreTexts, and more</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="book in freeTextbooks" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ book.type }}</span>
              <span class="text-xs text-gray-500">{{ book.level }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-green-400 transition-colors">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>
      </section>

      <!-- MIT OCW -->
      <section id="mitocw" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">MIT OpenCourseWare</h2>
            <p class="text-gray-400">Complete biology courses from MIT</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="course in mitCourses" :key="course.code" :href="course.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xl font-bold text-red-400">{{ course.code }}</span>
              <span class="text-xs text-gray-500">{{ course.level }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">{{ course.title }}</h4>
            <p class="text-sm text-gray-500">{{ course.professor }}</p>
          </a>
        </div>
      </section>

      <!-- YouTube Channels -->
      <section id="youtube" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">YouTube Channels</h2>
            <p class="text-gray-400">Best biology education channels</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="channel in youtubeChannels" :key="channel.name" :href="channel.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-center gap-4 mb-3">
              <div class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                {{ channel.name[0] }}
              </div>
              <div>
                <h4 class="font-semibold text-white group-hover:text-red-400 transition-colors">{{ channel.name }}</h4>
                <p class="text-sm text-gray-500">{{ channel.subs }} subscribers</p>
              </div>
            </div>
            <p class="text-sm text-green-400 mb-1">{{ channel.focus }}</p>
            <p class="text-xs text-gray-500">{{ channel.description }}</p>
          </a>
        </div>
      </section>

      <!-- Molecular Biology -->
      <section id="molecular" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Molecular Biology</h2>
            <p class="text-gray-400">DNA, RNA, proteins, and cellular mechanisms</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="res in molecularBiology" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-blue-400 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Genetics -->
      <section id="genetics" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Genetics</h2>
            <p class="text-gray-400">Inheritance, genomics, and genetic analysis</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="res in geneticsResources" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-purple-400 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Ecology -->
      <section id="ecology" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Ecology & Environment</h2>
            <p class="text-gray-400">Ecosystems, conservation, and environmental biology</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="res in ecologyResources" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-emerald-400 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Neuroscience -->
      <section id="neuroscience" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Neuroscience</h2>
            <p class="text-gray-400">Brain, nervous system, and cognitive science</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="res in neuroscienceResources" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-pink-400 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Bioinformatics -->
      <section id="bioinformatics" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Bioinformatics</h2>
            <p class="text-gray-400">Computational biology and genomic analysis</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="res in bioinformaticsResources" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-cyan-400 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Biology Olympiad -->
      <section id="olympiad" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Biology Olympiad</h2>
            <p class="text-gray-400">Competition preparation resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="res in olympiadResources" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-amber-500 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Podcasts -->
      <section id="podcasts" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Biology Podcasts</h2>
            <p class="text-gray-400">Learn biology on the go</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="podcast in podcasts" :key="podcast.name" :href="podcast.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">{{ podcast.name }}</h4>
            <p class="text-xs text-gray-500">{{ podcast.description }}</p>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/science" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>
        
        <div class="flex flex-wrap justify-center gap-4 text-sm">
          <a href="https://bio.libretexts.org/" target="_blank" class="text-gray-500 hover:text-green-400 transition-colors">LibreTexts Biology</a>
          <span class="text-gray-700">•</span>
          <a href="https://www.khanacademy.org/science/biology" target="_blank" class="text-gray-500 hover:text-green-400 transition-colors">Khan Academy Biology</a>
          <span class="text-gray-700">•</span>
          <a href="https://rosalind.info/" target="_blank" class="text-gray-500 hover:text-green-400 transition-colors">Rosalind</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>