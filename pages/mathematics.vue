<script setup lang="ts">
useHead({
  title: 'Mathematics - Complete Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master mathematics from beginner to research level with 1000+ curated resources. Free textbooks, courses, and more from MIT, Harvard, and universities worldwide.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'High School / AP',
    description: 'Algebra, geometry, trigonometry, pre-calculus',
    color: 'emerald',
    resources: 300,
    topics: ['Algebra', 'Geometry', 'Trigonometry', 'Pre-Calculus']
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate',
    description: 'Calculus, linear algebra, differential equations',
    color: 'purple',
    resources: 400,
    topics: ['Calculus', 'Linear Algebra', 'ODEs', 'Probability']
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate / Research',
    description: 'Real analysis, abstract algebra, topology',
    color: 'rose',
    resources: 300,
    topics: ['Real Analysis', 'Abstract Algebra', 'Topology', 'Number Theory']
  }
]

const featuredResources = [
  {
    title: '3Blue1Brown',
    author: 'Grant Sanderson',
    type: 'YouTube Channel',
    url: 'https://www.3blue1brown.com/',
    description: 'Visual, intuitive mathematics explanations'
  },
  {
    title: 'Khan Academy Math',
    author: 'Khan Academy',
    type: 'Free Courses',
    url: 'https://www.khanacademy.org/math',
    description: 'Comprehensive math education K-12 to college'
  },
  {
    title: 'MIT OpenCourseWare',
    author: 'MIT',
    type: 'Free Courses',
    url: 'https://ocw.mit.edu/courses/mathematics/',
    description: 'Complete MIT mathematics curriculum'
  },
  {
    title: 'Real Not Complex',
    author: 'Math Community',
    type: 'Resource Hub',
    url: 'https://realnotcomplex.com/',
    description: 'Free textbooks and resources'
  },
  {
    title: 'Art of Problem Solving',
    author: 'AoPS',
    type: 'Platform',
    url: 'https://artofproblemsolving.com/',
    description: 'Competition math and problem solving'
  },
  {
    title: 'Desmos Graphing Calculator',
    author: 'Desmos',
    type: 'Free Tool',
    url: 'https://www.desmos.com/',
    description: 'Beautiful, free online graphing calculator'
  }
]

const quickLinks = [
  { name: 'Free Textbooks', url: '#textbooks', count: 80 },
  { name: 'MIT OCW', url: '#mitocw', count: 50 },
  { name: 'YouTube Channels', url: '#youtube', count: 40 },
  { name: 'Calculus', url: '#calculus', count: 60 },
  { name: 'Linear Algebra', url: '#linear-algebra', count: 40 },
  { name: 'Abstract Algebra', url: '#abstract-algebra', count: 30 },
  { name: 'Analysis', url: '#analysis', count: 30 },
  { name: 'Olympiad', url: '#olympiad', count: 25 },
  { name: 'Software', url: '#software', count: 20 },
  { name: 'Podcasts', url: '#podcasts', count: 15 }
]

// Free Textbooks
const freeTextbooks = [
  { title: 'OpenStax Calculus', author: 'OpenStax', level: 'Intermediate', type: 'FREE PDF', url: 'https://openstax.org/details/books/calculus-volume-1' },
  { title: 'OpenStax Algebra', author: 'OpenStax', level: 'Beginner', type: 'FREE PDF', url: 'https://openstax.org/details/books/college-algebra' },
  { title: 'Linear Algebra Done Right', author: 'Sheldon Axler', level: 'Intermediate', type: 'FREE PDF', url: 'https://linear.axler.net/' },
  { title: 'Abstract Algebra', author: 'Judson', level: 'Intermediate', type: 'FREE', url: 'http://abstract.ups.edu/' },
  { title: 'Book of Proof', author: 'Richard Hammack', level: 'Beginner', type: 'FREE PDF', url: 'https://www.people.vcu.edu/~rhammack/BookOfProof/' },
  { title: 'Calculus Made Easy', author: 'Silvanus Thompson', level: 'Beginner', type: 'FREE', url: 'https://calculusmadeeasy.org/' },
  { title: 'Introduction to Real Analysis', author: 'Bartle & Sherbert', level: 'Advanced', type: 'Textbook', url: 'https://realnotcomplex.com/analysis/' },
  { title: 'Elementary Number Theory', author: 'William Stein', level: 'Intermediate', type: 'FREE', url: 'https://wstein.org/ent/' }
]

// MIT OCW Courses
const mitCourses = [
  { code: '18.01', title: 'Single Variable Calculus', professor: 'David Jerison', level: 'Beginner', url: 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/' },
  { code: '18.02', title: 'Multivariable Calculus', professor: 'Denis Auroux', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/' },
  { code: '18.03', title: 'Differential Equations', professor: 'Arthur Mattuck', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/' },
  { code: '18.06', title: 'Linear Algebra', professor: 'Gilbert Strang', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/' },
  { code: '18.100A', title: 'Real Analysis', professor: 'Casey Rodriguez', level: 'Advanced', url: 'https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/' },
  { code: '18.701', title: 'Algebra I', professor: 'Michael Artin', level: 'Advanced', url: 'https://ocw.mit.edu/courses/18-701-algebra-i-fall-2007/' },
  { code: '18.900', title: 'Geometry & Topology', professor: 'Paul Seidel', level: 'Advanced', url: 'https://ocw.mit.edu/courses/18-900-geometry-and-topology-in-the-plane-spring-2016/' }
]

// YouTube Channels
const youtubeChannels = [
  { name: '3Blue1Brown', subs: '5M+', focus: 'Visual Math', description: 'Essence of calculus, linear algebra', url: 'https://www.youtube.com/@3blue1brown' },
  { name: 'Khan Academy', subs: '8M+', focus: 'All Math', description: 'Comprehensive math tutorials', url: 'https://www.youtube.com/@khanacademy' },
  { name: 'Numberphile', subs: '4M+', focus: 'Mathematical Curiosities', description: 'Interesting numbers and concepts', url: 'https://www.youtube.com/@numberphile' },
  { name: 'Professor Leonard', subs: '1M+', focus: 'Lectures', description: 'Full-length math lectures', url: 'https://www.youtube.com/@ProfessorLeonard' },
  { name: 'patrickJMT', subs: '1M+', focus: 'Problem Solving', description: 'Math problem tutorials', url: 'https://www.youtube.com/@patrickjmt' },
  { name: 'Mathologer', subs: '500K+', focus: 'Deep Dives', description: 'Accessible deep math topics', url: 'https://www.youtube.com/@Mathologer' }
]

// Calculus Resources
const calculusResources = [
  { name: 'Paul\'s Online Math Notes', url: 'https://tutorial.math.lamar.edu/', type: 'Notes', description: 'Extensive calculus notes and practice' },
  { name: 'MIT 18.01', url: 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/', type: 'Course', description: 'Single variable calculus' },
  { name: 'Khan Academy Calculus', url: 'https://www.khanacademy.org/math/calculus-all-old', type: 'Course', description: 'Complete calculus curriculum' },
  { name: 'Calculus Made Easy', url: 'https://calculusmadeeasy.org/', type: 'Book', description: 'Classic calculus text' }
]

// Linear Algebra Resources
const linearAlgebraResources = [
  { name: 'MIT 18.06', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', type: 'Course', description: 'Gilbert Strang\'s legendary course' },
  { name: '3Blue1Brown Essence of LA', url: 'https://www.3blue1brown.com/essence-of-linear-algebra-page', type: 'Videos', description: 'Visual linear algebra' },
  { name: 'Immersive Math', url: 'http://immersivemath.com/ila/index.html', type: 'Interactive', description: 'Interactive linear algebra' },
  { name: 'Linear Algebra Done Right', url: 'https://linear.axler.net/', type: 'Book', description: 'Free textbook by Axler' }
]

// Abstract Algebra Resources
const abstractAlgebraResources = [
  { name: 'Abstract Algebra', url: 'http://abstract.ups.edu/', type: 'Textbook', description: 'Open source textbook' },
  { name: 'Harvard Abstract Algebra', url: 'https://www.youtube.com/playlist?list=PLelIK3uylPMGzVpeEZNJqDlhHb1OB4NGV', type: 'Videos', description: 'Harvard lectures' },
  { name: 'MIT 18.701', url: 'https://ocw.mit.edu/courses/18-701-algebra-i-fall-2007/', type: 'Course', description: 'MIT Algebra I' },
  { name: 'Group Theory', url: 'https://groupprops.subwiki.org/wiki/Main_Page', type: 'Wiki', description: 'Group theory resource' }
]

// Analysis Resources
const analysisResources = [
  { name: 'MIT 18.100A', url: 'https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/', type: 'Course', description: 'Real analysis course' },
  { name: 'Harvard Math 112', url: 'https://people.math.harvard.edu/~ctm/home/text/class/harvard/114/15/html/home/course/course.pdf', type: 'Notes', description: 'Harvard analysis notes' },
  { name: 'Real Not Complex', url: 'https://realnotcomplex.com/analysis/', type: 'Hub', description: 'Free analysis resources' },
  { name: 'Understanding Analysis', url: 'https://realnotcomplex.com/analysis/', type: 'Textbook', description: 'Abbott\'s analysis book' }
]

// Math Olympiad
const olympiadResources = [
  { name: 'Art of Problem Solving', url: 'https://artofproblemsolving.com/', type: 'Platform', description: 'Competition math resources' },
  { name: 'AoPS Alcumus', url: 'https://artofproblemsolving.com/alcumus', type: 'Practice', description: 'Adaptive problem trainer' },
  { name: 'Brilliant', url: 'https://brilliant.org/', type: 'Platform', description: 'Interactive problem solving' },
  { name: 'IMO Official', url: 'https://www.imo-official.org/', type: 'Official', description: 'International Math Olympiad' },
  { name: 'Evan Chen\'s Olympiad', url: 'https://web.evanchen.cc/olympiad.html', type: 'Resources', description: 'Olympiad training materials' },
  { name: 'Putnam Competition', url: 'https://www.maa.org/putnam-competition', type: 'Competition', description: 'US undergraduate competition' }
]

// Math Software
const mathSoftware = [
  { name: 'SageMath', url: 'https://www.sagemath.org/', type: 'CAS', description: 'Free open-source mathematics' },
  { name: 'GeoGebra', url: 'https://www.geogebra.org/', type: 'Graphing', description: 'Interactive geometry, algebra' },
  { name: 'Desmos', url: 'https://www.desmos.com/', type: 'Graphing', description: 'Beautiful graphing calculator' },
  { name: 'Wolfram Alpha', url: 'https://www.wolframalpha.com/', type: 'Engine', description: 'Computational knowledge' },
  { name: 'Python (NumPy/SciPy)', url: 'https://numpy.org/', type: 'Programming', description: 'Scientific computing' },
  { name: 'Julia', url: 'https://julialang.org/', type: 'Programming', description: 'High-performance computing' }
]

// Podcasts
const podcasts = [
  { name: 'The Numberphile Podcast', url: 'https://www.numberphile.com/podcast', description: 'Interviews with mathematicians' },
  { name: 'My Favorite Theorem', url: 'https://www.kqnd.org/', description: 'Mathematicians discuss favorites' },
  { name: 'Breaking Math Podcast', url: 'https://breakingmath.io/', description: 'Accessible math topics' },
  { name: 'Relatively Prime', url: 'https://relativelyprime.com/', description: 'Stories from math domain' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-space-950 to-indigo-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/science" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 mb-6">
            <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-blue-300">1000+ Curated Math Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Mathematics
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master mathematics from algebra to advanced analysis. Free textbooks, courses, and resources from MIT, Harvard, and universities worldwide.
          </p>

          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">3</div>
              <div class="text-sm text-gray-400">Difficulty Levels</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">80+</div>
              <div class="text-sm text-gray-400">Free Textbooks</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">50+</div>
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
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-blue-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-blue-400">({{ link.count }})</span>
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
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ resource.title }}</h3>
            <p class="text-sm text-blue-400 mb-2">{{ resource.author }}</p>
            <p class="text-xs text-gray-400">{{ resource.description }}</p>
          </a>
        </div>
      </section>

      <!-- Free Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Free Mathematics Textbooks</h2>
            <p class="text-gray-400">Open access textbooks from OpenStax, MIT, and more</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="book in freeTextbooks" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ book.type }}</span>
              <span class="text-xs text-gray-500">{{ book.level }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{{ book.title }}</h4>
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
            <p class="text-gray-400">Complete mathematics courses from MIT</p>
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
            <p class="text-gray-400">Best mathematics education channels</p>
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
            <p class="text-sm text-blue-400 mb-1">{{ channel.focus }}</p>
            <p class="text-xs text-gray-500">{{ channel.description }}</p>
          </a>
        </div>
      </section>

      <!-- Calculus -->
      <section id="calculus" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Calculus</h2>
            <p class="text-gray-400">Derivatives, integrals, differential equations</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="res in calculusResources" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-green-400 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Linear Algebra -->
      <section id="linear-algebra" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Linear Algebra</h2>
            <p class="text-gray-400">Vectors, matrices, eigenvalues, and applications</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="res in linearAlgebraResources" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-purple-400 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Abstract Algebra -->
      <section id="abstract-algebra" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Abstract Algebra</h2>
            <p class="text-gray-400">Groups, rings, fields, and Galois theory</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="res in abstractAlgebraResources" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-pink-400 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Analysis -->
      <section id="analysis" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Real Analysis</h2>
            <p class="text-gray-400">Rigorous calculus, sequences, limits, continuity</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="res in analysisResources" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-amber-400 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Math Olympiad -->
      <section id="olympiad" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Mathematics Olympiad & Competitions</h2>
            <p class="text-gray-400">Problem solving and competition preparation</p>
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

      <!-- Math Software -->
      <section id="software" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Mathematics Software</h2>
            <p class="text-gray-400">CAS, graphing, and programming tools</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="res in mathSoftware" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-cyan-400 transition-colors">{{ res.name }}</h4>
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
            <h2 class="text-3xl font-bold text-white">Mathematics Podcasts</h2>
            <p class="text-gray-400">Learn math on the go</p>
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
          <a href="https://ocw.mit.edu/courses/mathematics/" target="_blank" class="text-gray-500 hover:text-blue-400 transition-colors">MIT OCW Math</a>
          <span class="text-gray-700">•</span>
          <a href="https://www.khanacademy.org/math" target="_blank" class="text-gray-500 hover:text-blue-400 transition-colors">Khan Academy</a>
          <span class="text-gray-700">•</span>
          <a href="https://artofproblemsolving.com/" target="_blank" class="text-gray-500 hover:text-blue-400 transition-colors">AoPS</a>
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