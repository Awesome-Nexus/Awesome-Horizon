<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-pink-950 via-space-900 to-rose-950 pb-20 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-500/10 px-4 py-2 text-pink-300 ring-1 ring-pink-500/30">
            <Icon name="palette" :size="24" class="text-pink-400" />
            <span class="text-sm font-medium">STEAM Category</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Arts
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Explore visual arts, music, design, and creative expression. From traditional 
            techniques to digital creation, discover resources for every artistic journey.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-pink-500/20">
              <div class="text-2xl font-bold text-pink-400">10</div>
              <div class="text-xs text-slate-400">Subjects</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-pink-500/20">
              <div class="text-2xl font-bold text-pink-400">12,000+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-pink-500/20">
              <div class="text-2xl font-bold text-pink-400">Museums</div>
              <div class="text-xs text-slate-400">Virtual Tours</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-pink-500/20">
              <div class="text-2xl font-bold text-pink-400">All Levels</div>
              <div class="text-xs text-slate-400">Welcome</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Subjects Grid -->
    <section class="relative py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold text-white">Explore Arts Subjects</h2>
          <p class="mt-4 text-slate-400">
            Find your creative path
          </p>
        </div>
        
        <SubjectGrid 
          :subjects="subjects" 
          category-slug="arts"
          :columns="3"
        />
      </div>
    </section>

    <!-- CTA -->
    <section class="relative border-t border-pink-500/10 py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Express Your Creativity
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Art is for everyone. Whether you're drawing your first lines or mastering 
          advanced techniques, start creating today.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink 
            to="/arts/visual-arts"
            class="rounded-lg bg-pink-600 px-6 py-3 font-medium text-white transition-colors hover:bg-pink-500"
          >
            Start with Visual Arts
          </NuxtLink>
          <NuxtLink 
            to="/arts/music"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Explore Music
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { artsSubjects, getCategoryBySlug } from '~/data/subjects'

const subjects = artsSubjects
const categoryInfo = getCategoryBySlug('arts')

useHead({
  title: 'Arts - Visual Arts, Music, Design, Photography | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Explore arts subjects with 12,000+ resources. Visual arts, music, art history, photography, graphic design, architecture, and digital art.' 
    }
  ]
})
</script>
