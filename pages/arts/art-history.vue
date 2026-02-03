<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-rose-950 via-space-900 to-red-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-4 py-2 text-rose-300 ring-1 ring-rose-500/30">
            <Icon name="landmark" :size="24" />
            <span class="text-sm font-medium">Arts</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Art History
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Explore the story of human creativity through the ages. From prehistoric 
            cave paintings to contemporary installations.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-rose-500/20">
              <div class="text-2xl font-bold text-rose-400">1,800+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-rose-500/20">
              <div class="text-2xl font-bold text-rose-400">All Levels</div>
              <div class="text-xs text-slate-400">Welcome</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-rose-500/20">
              <div class="text-2xl font-bold text-rose-400">Smarthistory</div>
              <div class="text-xs text-slate-400">Top Resource</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-rose-500/20">
              <div class="text-2xl font-bold text-rose-400">Free</div>
              <div class="text-xs text-slate-400">Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Top Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://smarthistory.org/" target="_blank" class="group rounded-xl bg-gradient-to-br from-rose-500/10 to-red-500/10 p-6 ring-1 ring-rose-500/30 transition-all hover:ring-rose-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-rose-400">Smarthistory</h3>
            <p class="text-slate-300">
              Free art history resource by Khan Academy. Essays, videos, and images 
              covering all periods and cultures. The best free art history resource.
            </p>
          </a>
          
          <a href="https://www.khanacademy.org/humanities/art-history" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-rose-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-rose-400">Khan Academy Art History</h3>
            <p class="text-slate-400">
              Comprehensive art history courses. Periods, artists, and movements 
              with quizzes and assessments.
            </p>
          </a>
          
          <a href="https://www.metmuseum.org/art/collection" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-rose-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-rose-400">The Met Collection</h3>
            <p class="text-slate-400">
              Over 500,000 artworks from The Metropolitan Museum. High-resolution 
              images, descriptions, and audio guides.
            </p>
          </a>
          
          <a href="https://artsandculture.google.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-rose-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-rose-400">Google Arts & Culture</h3>
            <p class="text-slate-400">
              Virtual museum tours, high-res artwork, and cultural stories from 
              institutions worldwide.
            </p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('arts')
const subjectInfo = getSubjectBySlug('art-history')

useHead({
  title: 'Art History - Movements, Artists, Periods | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn art history with 1,800+ resources. Smarthistory, Khan Academy, museum collections, ancient to contemporary art movements.' 
    }
  ]
})
</script>
