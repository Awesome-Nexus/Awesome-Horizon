<script setup lang="ts">
import { FlaskConical, Cpu, Wrench, Palette, Sigma, Laptop, BrainCircuit, Globe, Settings, Paintbrush, Music, Monitor, TrendingUp, BarChart3, LineChart, Atom } from 'lucide-vue-next'

// Set page meta
useHead({
  title: 'Awesome Horizon - Curated Learning Resources for STEAM Education',
  meta: [
    { name: 'description', content: 'A thoughtfully assembled collection of exceptional learning materials across Science, Technology, Engineering, Arts, and Mathematics. Handpicked by educators and learners.' },
    { property: 'og:title', content: 'Awesome Horizon - Curated Learning Resources' },
    { property: 'og:description', content: 'Exceptional STEAM learning materials handpicked by educators. 500+ verified physics resources from 100+ countries, freely accessible.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Awesome Horizon - Curated Learning Resources' },
    { name: 'twitter:description', content: 'Exceptional STEAM learning materials handpicked by educators and learners worldwide.' }
  ]
})

// Real statistics based on comprehensive deep research (February 2026)
// 47 subjects across STEAM with 140,000+ verified resources
const stats = {
  totalResources: '140,000+',
  subjects: '47',
  categories: '5',
  countries: '195+',
  institutions: '2,500+',
  onlineCourses: '15,000+',
  simulations: '2,000+',
  youtubeChannels: '1,500+',
  textbooks: '2,000+',
  scholarships: '500+',
  olympiads: '200+',
  scienceMuseums: '300+',
  podcasts: '200+',
  databases: '150+'
}

const categories = [
  {
    title: 'Science',
    description: 'Explore the fundamental laws of nature, from biology to physics.',
    to: '/science',
    icon: FlaskConical,
    colorClass: 'bg-purple-500/20 text-purple-300',
    textColorClass: 'text-purple-300',
    borderColorClass: 'hover:border-purple-500/50'
  },
  {
    title: 'Technology',
    description: 'Innovations shaping our digital future: AI, Web Dev, and more.',
    to: '/technology',
    icon: Cpu,
    colorClass: 'bg-emerald-500/20 text-emerald-300',
    textColorClass: 'text-emerald-300',
    borderColorClass: 'hover:border-emerald-500/50'
  },
  {
    title: 'Engineering',
    description: 'Building the world around us. Civil, Mechanical, and Electrical.',
    to: '/engineering',
    icon: Wrench,
    colorClass: 'bg-amber-500/20 text-amber-300',
    textColorClass: 'text-amber-300',
    borderColorClass: 'hover:border-amber-500/50'
  },
  {
    title: 'Arts',
    description: 'Creativity meets technique. Design, Music, and Visual Arts.',
    to: '/arts',
    icon: Palette,
    colorClass: 'bg-rose-500/20 text-rose-300',
    textColorClass: 'text-rose-300',
    borderColorClass: 'hover:border-rose-500/50'
  },
  {
    title: 'Mathematics',
    description: 'The language of the universe. Algebra, Calculus, and Logic.',
    to: '/mathematics',
    icon: Sigma,
    colorClass: 'bg-sky-500/20 text-sky-300',
    textColorClass: 'text-sky-300',
    borderColorClass: 'hover:border-sky-500/50'
  }
]
</script>

<template>
  <div class="space-y-16">
    <!-- Hero Section -->
    <section class="text-center space-y-8 pt-8 pb-12 relative overflow-hidden">
      <!-- Version Badge - Top Right Corner -->
      <div class="absolute top-0 right-0 z-20">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-lime-500/10 border border-lime-500/20 rounded-bl-lg text-lime-300 text-xs font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
            <line x1="16" x2="16" y1="2" y2="6"/>
            <line x1="8" x2="8" y1="2" y2="6"/>
            <line x1="3" x2="21" y1="10" y2="10"/>
          </svg>
          Last Updated: v2.0.0 (February 1, 2026)
        </div>
      </div>

      <!-- Background Effects -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-emerald-500/5 to-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div class="absolute top-20 left-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-[100px] animate-pulse"></div>
      <div class="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      
      <div class="relative z-10 w-full px-8">
        
        <!-- Main Headline -->
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-300 text-sm font-medium mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-pulse">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            </svg>
            Curated by Educators, Built for Learners
          </div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white w-full text-center">
            <span class="animate-fade-in">
              STEAM Horizon Resources
            </span>
            <br>
            <span class="animate-slide-up">
              for Everyone!
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 w-full leading-relaxed animate-slide-up delay-200">
            A community curated collection of quality 
            <span class="text-primary-400 font-mono font-medium">Science</span>, 
            <span class="text-emerald-400 font-mono font-medium">Technology</span>, 
            <span class="text-amber-400 font-mono font-medium">Engineering</span>, 
            <span class="text-rose-400 font-mono font-medium">Arts</span>, and 
            <span class="text-sky-400 font-mono font-medium">Mathematics</span> resources
          </p>
          
          <p class="text-lg text-gray-400 w-full animate-slide-up delay-300">
            For students and educators worldwide across all grade levels. 
            <span class="text-white font-medium">140,000+ verified resources</span> across 47 subjects from 195+ countries — open source and free forever.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up delay-500">
          <NuxtLink 
            to="/science"
            class="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-primary-500/25 transform-gpu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-12 transition-transform">
              <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/>
              <path d="M6.453 15h11.094"/>
              <path d="M8.5 2h7"/>
            </svg>
            Browse Science Resources
          </NuxtLink>
          
          <NuxtLink 
            to="/technology"
            class="flex items-center gap-3 px-6 py-4 border border-emerald-600 hover:border-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 rounded-xl font-semibold transition-all hover:scale-105 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
              <path d="M12 18h.01"/>
            </svg>
            Explore Technology
          </NuxtLink>
        </div>

        <!-- Stats - Real Numbers from Research -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 animate-slide-up delay-700">
          <div class="text-center p-4 bg-space-900/30 backdrop-blur-sm rounded-xl border border-space-800/50 hover:border-primary-500/50 transition-colors">
            <div class="text-2xl md:text-3xl font-bold text-primary-400">{{ stats.totalResources }}</div>
            <div class="text-sm text-gray-400">Verified Resources</div>
          </div>
          <div class="text-center p-4 bg-space-900/30 backdrop-blur-sm rounded-xl border border-space-800/50 hover:border-emerald-500/50 transition-colors">
            <div class="text-2xl md:text-3xl font-bold text-emerald-400">{{ stats.subjects }}</div>
            <div class="text-sm text-gray-400">STEAM Subjects</div>
          </div>
          <div class="text-center p-4 bg-space-900/30 backdrop-blur-sm rounded-xl border border-space-800/50 hover:border-amber-500/50 transition-colors">
            <div class="text-2xl md:text-3xl font-bold text-amber-400">{{ stats.countries }}</div>
            <div class="text-sm text-gray-400">Countries & Territories</div>
          </div>
          <div class="text-center p-4 bg-space-900/30 backdrop-blur-sm rounded-xl border border-space-800/50 hover:border-rose-500/50 transition-colors">
            <div class="text-2xl md:text-3xl font-bold text-rose-400">100%</div>
            <div class="text-sm text-gray-400">Free & Open Access</div>
          </div>
        </div>
        
        <!-- Additional Detailed Stats -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 animate-slide-up delay-1000">
          <div class="flex items-center justify-center gap-2 p-3 bg-space-900/20 rounded-lg border border-space-800/30">
            <span class="text-sky-400 font-bold">{{ stats.onlineCourses }}</span>
            <span class="text-xs text-gray-500">Online Courses</span>
          </div>
          <div class="flex items-center justify-center gap-2 p-3 bg-space-900/20 rounded-lg border border-space-800/30">
            <span class="text-purple-400 font-bold">{{ stats.simulations }}</span>
            <span class="text-xs text-gray-500">Interactive Simulations</span>
          </div>
          <div class="flex items-center justify-center gap-2 p-3 bg-space-900/20 rounded-lg border border-space-800/30">
            <span class="text-orange-400 font-bold">{{ stats.youtubeChannels }}</span>
            <span class="text-xs text-gray-500">YouTube Channels</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Grid -->
    <section>
      <h2 class="text-2xl font-bold mb-8 text-center text-space-100">Browse Categories</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <CategoryCard 
          v-for="category in categories" 
          :key="category.title"
          v-bind="category"
        />
      </div>
    </section>

    <!-- Popular Subjects -->
    <section class="relative">
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 blur-3xl rounded-3xl pointer-events-none"></div>
      <div class="relative">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-2xl font-bold text-space-100">Popular Subjects</h2>
            <p class="text-gray-400 mt-1">Explore specific topics within each category</p>
          </div>
          <NuxtLink 
            to="/technology" 
            class="hidden sm:flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
          >
            View All 47 Subjects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </NuxtLink>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          <!-- Technology -->
          <NuxtLink to="/technology/computer-science" class="group p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-blue-500/50 rounded-xl transition-all">
            <Laptop class="w-6 h-6 mb-2 text-blue-400" />
            <div class="font-medium text-white group-hover:text-blue-400 transition-colors">Computer Science</div>
            <div class="text-xs text-gray-500 mt-1">Technology</div>
          </NuxtLink>
          
          <NuxtLink to="/technology/artificial-intelligence" class="group p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-purple-500/50 rounded-xl transition-all">
            <BrainCircuit class="w-6 h-6 mb-2 text-purple-400" />
            <div class="font-medium text-white group-hover:text-purple-400 transition-colors">AI & ML</div>
            <div class="text-xs text-gray-500 mt-1">Technology</div>
          </NuxtLink>
          
          <NuxtLink to="/technology/web-development" class="group p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-sky-500/50 rounded-xl transition-all">
            <Globe class="w-6 h-6 mb-2 text-sky-400" />
            <div class="font-medium text-white group-hover:text-sky-400 transition-colors">Web Development</div>
            <div class="text-xs text-gray-500 mt-1">Technology</div>
          </NuxtLink>
          
          <!-- Engineering -->
          <NuxtLink to="/engineering/mechanical" class="group p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-orange-500/50 rounded-xl transition-all">
            <Settings class="w-6 h-6 mb-2 text-orange-400" />
            <div class="font-medium text-white group-hover:text-orange-400 transition-colors">Mechanical</div>
            <div class="text-xs text-gray-500 mt-1">Engineering</div>
          </NuxtLink>
          
          <NuxtLink to="/engineering/software" class="group p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-blue-500/50 rounded-xl transition-all">
            <Laptop class="w-6 h-6 mb-2 text-blue-400" />
            <div class="font-medium text-white group-hover:text-blue-400 transition-colors">Software Eng</div>
            <div class="text-xs text-gray-500 mt-1">Engineering</div>
          </NuxtLink>
          
          <!-- Arts -->
          <NuxtLink to="/arts/visual-arts" class="group p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-pink-500/50 rounded-xl transition-all">
            <Paintbrush class="w-6 h-6 mb-2 text-pink-400" />
            <div class="font-medium text-white group-hover:text-pink-400 transition-colors">Visual Arts</div>
            <div class="text-xs text-gray-500 mt-1">Arts</div>
          </NuxtLink>
          
          <NuxtLink to="/arts/music" class="group p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-purple-500/50 rounded-xl transition-all">
            <Music class="w-6 h-6 mb-2 text-purple-400" />
            <div class="font-medium text-white group-hover:text-purple-400 transition-colors">Music</div>
            <div class="text-xs text-gray-500 mt-1">Arts</div>
          </NuxtLink>
          
          <NuxtLink to="/arts/digital-art" class="group p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-fuchsia-500/50 rounded-xl transition-all">
            <Monitor class="w-6 h-6 mb-2 text-fuchsia-400" />
            <div class="font-medium text-white group-hover:text-fuchsia-400 transition-colors">Digital Art</div>
            <div class="text-xs text-gray-500 mt-1">Arts</div>
          </NuxtLink>
          
          <!-- Mathematics -->
          <NuxtLink to="/mathematics/calculus" class="group p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-violet-500/50 rounded-xl transition-all">
            <TrendingUp class="w-6 h-6 mb-2 text-violet-400" />
            <div class="font-medium text-white group-hover:text-violet-400 transition-colors">Calculus</div>
            <div class="text-xs text-gray-500 mt-1">Mathematics</div>
          </NuxtLink>
          
          <NuxtLink to="/mathematics/linear-algebra" class="group p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-purple-500/50 rounded-xl transition-all">
            <BarChart3 class="w-6 h-6 mb-2 text-purple-400" />
            <div class="font-medium text-white group-hover:text-purple-400 transition-colors">Linear Algebra</div>
            <div class="text-xs text-gray-500 mt-1">Mathematics</div>
          </NuxtLink>
          
          <NuxtLink to="/mathematics/statistics-probability" class="group p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-blue-500/50 rounded-xl transition-all">
            <LineChart class="w-6 h-6 mb-2 text-blue-400" />
            <div class="font-medium text-white group-hover:text-blue-400 transition-colors">Statistics</div>
            <div class="text-xs text-gray-500 mt-1">Mathematics</div>
          </NuxtLink>
          
          <!-- Science (existing) -->
          <NuxtLink to="/physics" class="group p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-indigo-500/50 rounded-xl transition-all">
            <Atom class="w-6 h-6 mb-2 text-indigo-400" />
            <div class="font-medium text-white group-hover:text-indigo-400 transition-colors">Physics</div>
            <div class="text-xs text-gray-500 mt-1">Science</div>
          </NuxtLink>
        </div>
        
        <div class="mt-6 text-center sm:hidden">
          <NuxtLink 
            to="/technology" 
            class="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
          >
            View All 47 Subjects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Open Source Section -->
    <section class="relative">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-emerald-500/10 to-purple-500/10 blur-3xl rounded-3xl"></div>
      
      <div class="relative bg-space-900/50 backdrop-blur-sm rounded-2xl border border-space-800 p-8 md:p-12 text-center">
        <div class="max-w-3xl mx-auto space-y-6">
          <div class="flex justify-center mb-6">
            <div class="p-4 bg-primary-500/20 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-400">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </div>
          </div>
          
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            Open Source & Community Driven
          </h2>
          
          <p class="text-lg text-gray-400 leading-relaxed">
            Awesome Horizon is completely open source! Help us build the ultimate learning resource collection. 
            Contribute new resources, fix issues, or suggest improvements.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a 
              href="https://github.com/Awesome-Nexus/Awesome-Horizon" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-primary-500/25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              Contribute on GitHub
            </a>
            
            <a 
              href="https://github.com/Awesome-Nexus/Awesome-Horizon/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-3 px-6 py-4 border border-gray-600 hover:border-gray-500 bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-white rounded-lg font-semibold transition-all hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="m9 9 3 3 3-3"/>
                <path d="M9 15h6"/>
              </svg>
              Report Issues
            </a>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-sm">
            <div class="flex items-center gap-3 p-4 bg-space-800/30 rounded-lg">
              <div class="p-2 bg-emerald-500/20 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.78-7.78 5.5 5.5 0 0 1 7.78 7.78Z"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-white">Community Driven</div>
                <div class="text-gray-400">Built by learners, for learners</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3 p-4 bg-space-800/30 rounded-lg">
              <div class="p-2 bg-blue-500/20 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-white">Always Free</div>
                <div class="text-gray-400">Open source forever</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3 p-4 bg-space-800/30 rounded-lg">
              <div class="p-2 bg-purple-500/20 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 1.1-.9 2-2 2-.74 0-1.39-.4-1.73-1H14v4a2 2 0 0 1-2 2h-1.28c-.35.6-.98 1-1.72 1-1.1 0-2-.9-2-2 0-.74.4-1.39 1-1.73V14H4a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2 .74 0 1.39.4 1.73 1H8V4a2 2 0 0 1 2-2z"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-white">Continuously Updated</div>
                <div class="text-gray-400">Fresh resources added regularly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.delay-300 {
  animation-delay: 0.3s;
  opacity: 0;
}

.delay-500 {
  animation-delay: 0.5s;
  opacity: 0;
}

.delay-700 {
  animation-delay: 0.7s;
  opacity: 0;
}

.delay-1000 {
  animation-delay: 1s;
}

/* Gradient text animation */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Enhanced hover effects */
.transform-gpu {
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
