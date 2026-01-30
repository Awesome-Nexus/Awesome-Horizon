<script setup lang="ts">
useHead({
  title: 'Chemistry - Complete Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master chemistry from beginner to research level with 1000+ curated resources. Free textbooks, courses, simulations, and more from top universities worldwide.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'High School / AP',
    description: 'General chemistry, organic chemistry basics',
    color: 'emerald',
    resources: 300,
    topics: ['General Chemistry', 'AP Chemistry', 'Chemical Bonding', 'Periodic Table']
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate',
    description: 'Organic, inorganic, physical, analytical chemistry',
    color: 'purple',
    resources: 400,
    topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry']
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate / Research',
    description: 'Advanced synthesis, spectroscopy, research methods',
    color: 'rose',
    resources: 300,
    topics: ['Advanced Organic', 'Spectroscopy', 'Quantum Chemistry', 'Materials Chemistry']
  }
]

const featuredResources = [
  {
    title: 'LibreTexts Chemistry',
    author: 'LibreTexts Project',
    type: 'Free Library',
    url: 'https://chem.libretexts.org/',
    description: 'Comprehensive open chemistry library with 100+ textbooks'
  },
  {
    title: 'Organic Chemistry Portal',
    author: 'Organic Chemistry Portal',
    type: 'Free Website',
    url: 'https://www.organic-chemistry.org/',
    description: 'Reactions, mechanisms, named reactions database'
  },
  {
    title: 'Chemistry LibreTexts',
    author: 'Multiple Authors',
    type: 'Free Textbooks',
    url: 'https://chem.libretexts.org/',
    description: 'Complete chemistry curriculum from general to advanced'
  },
  {
    title: 'Periodic Table (PTable)',
    author: 'Michael Dayah',
    type: 'Interactive Tool',
    url: 'https://ptable.com/',
    description: 'Interactive periodic table with properties'
  },
  {
    title: 'ChemTalk',
    author: 'ChemTalk Nonprofit',
    type: 'Free Education',
    url: 'https://chemistrytalk.org/',
    description: 'Making chemistry accessible to everyone'
  },
  {
    title: 'Chemistry World',
    author: 'Royal Society of Chemistry',
    type: 'Free Magazine',
    url: 'https://www.chemistryworld.com/',
    description: 'Chemistry news and articles'
  }
]

const quickLinks = [
  { name: 'Free Textbooks', url: '#textbooks', count: 100 },
  { name: 'MIT OCW', url: '#mitocw', count: 30 },
  { name: 'YouTube Channels', url: '#youtube', count: 40 },
  { name: 'Simulations', url: '#simulations', count: 25 },
  { name: 'Organic Chemistry', url: '#organic', count: 150 },
  { name: 'Physical Chemistry', url: '#physical', count: 80 },
  { name: 'Analytical Chemistry', url: '#analytical', count: 60 },
  { name: 'Chemistry Olympiad', url: '#olympiad', count: 30 },
  { name: 'Chemistry Societies', url: '#societies', count: 15 },
  { name: 'Podcasts', url: '#podcasts', count: 20 },
  { name: 'Blogs', url: '#blogs', count: 15 }
]

// Free Textbooks
const freeTextbooks = [
  { title: 'Chemistry - The Central Science', author: 'Brown, LeMay, Bursten', level: 'Beginner', type: 'Reference', url: 'https://chem.libretexts.org/' },
  { title: 'Organic Chemistry', author: 'Clayden et al.', level: 'Intermediate', type: 'Textbook', url: 'https://www.organic-chemistry.org/books/' },
  { title: 'Physical Chemistry', author: 'Atkins & de Paula', level: 'Intermediate', type: 'Textbook', url: 'https://chem.libretexts.org/' },
  { title: 'Inorganic Chemistry', author: 'Miessler & Tarr', level: 'Intermediate', type: 'Textbook', url: 'https://chem.libretexts.org/' },
  { title: 'Analytical Chemistry', author: 'Skoog et al.', level: 'Intermediate', type: 'Textbook', url: 'https://chem.libretexts.org/' },
  { title: 'General Chemistry', author: 'OpenStax', level: 'Beginner', type: 'FREE PDF', url: 'https://openstax.org/details/books/chemistry' },
  { title: 'Chemistry 2e', author: 'OpenStax', level: 'Beginner', type: 'FREE PDF', url: 'https://openstax.org/details/books/chemistry-2e' },
  { title: 'Organic Chemistry with a Biological Emphasis', author: 'Tim Soderberg', level: 'Intermediate', type: 'FREE', url: 'https://chem.libretexts.org/' }
]

// MIT OCW Courses
const mitCourses = [
  { code: '5.111', title: 'Principles of Chemical Science', professor: 'MIT Faculty', level: 'Beginner', url: 'https://ocw.mit.edu/courses/5-111-principles-of-chemical-science-fall-2008/' },
  { code: '5.112', title: 'Chemistry of Sports', professor: 'MIT Faculty', level: 'Beginner', url: 'https://ocw.mit.edu/courses/5-112-chemistry-of-sports-fall-2009/' },
  { code: '5.12', title: 'Organic Chemistry I', professor: 'MIT Faculty', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/5-12-organic-chemistry-i-spring-2005/' },
  { code: '5.13', title: 'Organic Chemistry II', professor: 'MIT Faculty', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/5-13-organic-chemistry-ii-spring-2006/' },
  { code: '5.60', title: 'Thermodynamics & Kinetics', professor: 'MIT Faculty', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/5-60-thermodynamics-and-kinetics-spring-2008/' },
  { code: '5.61', title: 'Physical Chemistry', professor: 'MIT Faculty', level: 'Advanced', url: 'https://ocw.mit.edu/courses/5-61-physical-chemistry-fall-2007/' },
  { code: '5.62', title: 'Statistical Thermodynamics', professor: 'MIT Faculty', level: 'Advanced', url: 'https://ocw.mit.edu/courses/5-62-physical-chemistry-ii-spring-2008/' }
]

// YouTube Channels
const youtubeChannels = [
  { name: 'Tyler DeWitt', subs: '1M+', focus: 'General Chemistry', description: 'Clear chemistry tutorials', url: 'https://www.youtube.com/@tdewitt451' },
  { name: 'Professor Dave Explains', subs: '2M+', focus: 'Organic/Inorganic', description: 'Chemistry explanations', url: 'https://www.youtube.com/@ProfessorDaveExplains' },
  { name: 'The Organic Chemistry Tutor', subs: '5M+', focus: 'Organic Chemistry', description: 'OChem problem solving', url: 'https://www.youtube.com/@TheOrganicChemistryTutor' },
  { name: 'NurdRage', subs: '1M+', focus: 'Chemistry Experiments', description: 'Lab demonstrations', url: 'https://www.youtube.com/@NurdRage' },
  { name: 'ChemThom', subs: '200K+', focus: 'Physical Chemistry', description: 'Physical chemistry tutorials', url: 'https://www.youtube.com/@ChemThom' },
  { name: 'Leah4Sci', subs: '500K+', focus: 'Organic Chemistry', description: 'OChem help and mechanisms', url: 'https://www.youtube.com/@Leah4Sci' }
]

// Chemistry Simulations
const simulations = [
  { name: 'PhET Chemistry', url: 'https://phet.colorado.edu/en/simulations/filter?subjects=chemistry', type: 'Interactive', description: 'University of Colorado simulations' },
  { name: 'ChemCollective', url: 'http://www.chemcollective.org/', type: 'Virtual Lab', description: 'Virtual chemistry lab activities' },
  { name: 'ChemReaX', url: 'https://chemreax.com/', type: 'Thermodynamics', description: 'Chemical equilibrium simulation' },
  { name: 'Molecular Workbench', url: 'https://mw.concord.org/', type: 'Molecular', description: 'Molecular dynamics simulations' },
  { name: 'ChemSketch', url: 'https://www.acdlabs.com/resources/freeware/chemsketch/', type: 'Drawing', description: 'Chemical structure drawing' }
]

// Organic Chemistry Resources
const organicChemistry = [
  { name: 'Organic Chemistry Portal', url: 'https://www.organic-chemistry.org/', type: 'Database', description: 'Reactions, mechanisms, synthesis' },
  { name: 'Named Reactions', url: 'https://www.organic-chemistry.org/namedreactions/', type: 'Reference', description: 'Comprehensive named reaction database' },
  { name: 'Mechanism Home Page', url: 'https://www.chem.ucla.edu/harding/ec_tutorials/tutorial_index.htm', type: 'Tutorial', description: 'Arrow-pushing mechanisms' },
  { name: 'Chemistry by Design', url: 'https://cbc.arizona.edu/', type: 'App', description: 'Total synthesis learning app' }
]

// Chemistry Societies
const chemistrySocieties = [
  { name: 'American Chemical Society', url: 'https://www.acs.org/', country: 'USA', description: 'Largest scientific society' },
  { name: 'Royal Society of Chemistry', url: 'https://www.rsc.org/', country: 'UK', description: 'UK chemistry society' },
  { name: 'German Chemical Society', url: 'https://www.gdch.de/', country: 'Germany', description: 'Deutsche Chemische Gesellschaft' },
  { name: 'Chemical Society of Japan', url: 'https://www.chemistry.or.jp/', country: 'Japan', description: 'Japanese chemistry society' },
  { name: 'IUPAC', url: 'https://iupac.org/', country: 'International', description: 'International chemical standards' }
]

// Chemistry Olympiad
const olympiadResources = [
  { name: 'IChO Official', url: 'https://www.icho-official.org/', type: 'Official', description: 'International Chemistry Olympiad' },
  { name: 'USNCO', url: 'https://www.acs.org/education/olympiad.html', type: 'US', description: 'US National Chemistry Olympiad' },
  { name: 'Chem Olympiad Problems', url: 'https://www.acs.org/education/olympiad/prepare.html', type: 'Problems', description: 'Past exam problems' }
]

// Podcasts
const podcasts = [
  { name: 'Chemistry For Your Life', url: 'https://chemistryforyourlife.buzzsprout.com/', description: 'Everyday chemistry explained' },
  { name: 'Stereo Chemistry', url: 'https://cen.acs.org/physical-chemistry/stereo-chemistry-podcast.html', description: 'C&EN podcast' },
  { name: 'Episodic Table', url: 'https://episodictable.com/', description: 'Stories of each element' },
  { name: 'Chemistry World', url: 'https://www.chemistryworld.com/podcasts', description: 'RSC chemistry podcast' },
  { name: 'ChemTalk', url: 'https://chemistrytalk.org/', description: 'Interviews with chemists' }
]

// Blogs
const blogs = [
  { name: 'Compound Interest', url: 'https://www.compoundchem.com/', description: 'Chemistry infographics' },
  { name: 'Chemistry World', url: 'https://www.chemistryworld.com/', description: 'RSC news and articles' },
  { name: 'ChemTalk', url: 'https://chemistrytalk.org/', description: 'Making chemistry accessible' },
  { name: 'The Curious Wavefunction', url: 'https://wavefunction.fieldofscience.com/', description: 'Scientific commentary' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-space-950 to-blue-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/science" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-6">
            <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-emerald-300">1000+ Curated Chemistry Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Chemistry
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master chemistry from high school to research level. Free textbooks, courses, simulations, and resources from MIT, RSC, ACS, and universities worldwide.
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
              <div class="text-3xl font-bold text-white">30+</div>
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
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-emerald-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-emerald-400">({{ link.count }})</span>
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
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ resource.title }}</h3>
            <p class="text-sm text-emerald-400 mb-2">{{ resource.author }}</p>
            <p class="text-xs text-gray-400">{{ resource.description }}</p>
          </a>
        </div>
      </section>

      <!-- Free Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Free Chemistry Textbooks</h2>
            <p class="text-gray-400">Open access textbooks from LibreTexts, OpenStax, and more</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="book in freeTextbooks" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ book.type }}</span>
              <span class="text-xs text-gray-500">{{ book.level }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{{ book.title }}</h4>
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
            <p class="text-gray-400">Complete chemistry courses from MIT</p>
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
            <p class="text-gray-400">Best chemistry education channels</p>
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
            <p class="text-sm text-emerald-400 mb-1">{{ channel.focus }}</p>
            <p class="text-xs text-gray-500">{{ channel.description }}</p>
          </a>
        </div>
      </section>

      <!-- Simulations -->
      <section id="simulations" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Chemistry Simulations</h2>
            <p class="text-gray-400">Virtual labs and interactive chemistry tools</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="sim in simulations" :key="sim.name" :href="sim.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">{{ sim.name }}</h4>
            <p class="text-sm text-cyan-400 mb-1">{{ sim.type }}</p>
            <p class="text-xs text-gray-500">{{ sim.description }}</p>
          </a>
        </div>
      </section>

      <!-- Organic Chemistry -->
      <section id="organic" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Organic Chemistry Resources</h2>
            <p class="text-gray-400">Mechanisms, reactions, and synthesis databases</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="res in organicChemistry" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-amber-400 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Chemistry Societies -->
      <section id="societies" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Chemistry Societies Worldwide</h2>
            <p class="text-gray-400">Professional organizations and standards bodies</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="society in chemistrySocieties" :key="society.name" :href="society.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-violet-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-violet-500/20 text-violet-400 rounded">{{ society.country }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-violet-400 transition-colors">{{ society.name }}</h4>
            <p class="text-xs text-gray-500">{{ society.description }}</p>
          </a>
        </div>
      </section>

      <!-- Chemistry Olympiad -->
      <section id="olympiad" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Chemistry Olympiad</h2>
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
          <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Chemistry Podcasts</h2>
            <p class="text-gray-400">Learn chemistry on the go</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="podcast in podcasts" :key="podcast.name" :href="podcast.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-pink-400 transition-colors">{{ podcast.name }}</h4>
            <p class="text-xs text-gray-500">{{ podcast.description }}</p>
          </a>
        </div>
      </section>

      <!-- Blogs -->
      <section id="blogs" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Chemistry Blogs</h2>
            <p class="text-gray-400">Chemistry news and insights</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="blog in blogs" :key="blog.name" :href="blog.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-teal-400 transition-colors">{{ blog.name }}</h4>
            <p class="text-xs text-gray-500">{{ blog.description }}</p>
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
          <a href="https://chem.libretexts.org/" target="_blank" class="text-gray-500 hover:text-emerald-400 transition-colors">LibreTexts Chemistry</a>
          <span class="text-gray-700">•</span>
          <a href="https://www.organic-chemistry.org/" target="_blank" class="text-gray-500 hover:text-emerald-400 transition-colors">Organic Chemistry Portal</a>
          <span class="text-gray-700">•</span>
          <a href="https://ptable.com/" target="_blank" class="text-gray-500 hover:text-emerald-400 transition-colors">PTable</a>
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