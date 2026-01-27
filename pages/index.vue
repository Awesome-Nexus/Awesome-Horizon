<script setup lang="ts">
import { FlaskConical, Cpu, Wrench, Palette, Sigma } from 'lucide-vue-next'
import CategoryCard from '~/components/CategoryCard.vue'

const categories = [
  {
    title: 'Science',
    description: 'Explore the fundamental laws of nature, from biology to physics.',
    to: '/science',
    icon: FlaskConical,
    colorClass: 'bg-purple-500/20 text-purple-300',
    textColorClass: 'text-purple-300'
  },
  {
    title: 'Technology',
    description: 'Innovations shaping our digital future: AI, Web Dev, and more.',
    to: '/technology',
    icon: Cpu,
    colorClass: 'bg-emerald-500/20 text-emerald-300',
    textColorClass: 'text-emerald-300'
  },
  {
    title: 'Engineering',
    description: 'Building the world around us. Civil, Mechanical, and Electrical.',
    to: '/engineering',
    icon: Wrench,
    colorClass: 'bg-amber-500/20 text-amber-300',
    textColorClass: 'text-amber-300'
  },
  {
    title: 'Arts',
    description: 'Creativity meets technique. Design, Music, and Visual Arts.',
    to: '/arts',
    icon: Palette,
    colorClass: 'bg-rose-500/20 text-rose-300',
    textColorClass: 'text-rose-300'
  },
  {
    title: 'Mathematics',
    description: 'The language of the universe. Algebra, Calculus, and Logic.',
    to: '/mathematics',
    icon: Sigma,
    colorClass: 'bg-sky-500/20 text-sky-300',
    textColorClass: 'text-sky-300'
  }
]
</script>

<template>
  <div class="space-y-16">
    <!-- Hero Section -->
    <section class="text-center space-y-6 pt-12 pb-8 relative">
      <div class="absolute inset-0 bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight">
        <span class="text-white animate-fade-in">
          Unlock Your Potential
        </span>
      </h1>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto animate-slide-up">
        A curated collection of the best learning resources for the modern creator.
        Dive into Science, Tech, and more.
      </p>
      

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
