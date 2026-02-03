<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-orange-950 via-space-900 to-amber-950 pb-20 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-orange-300 ring-1 ring-orange-500/30">
            <Icon name="cog" :size="24" class="text-orange-400" />
            <span class="text-sm font-medium">STEAM Category</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineering
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Apply scientific principles to design and build the world around us. 
            From mechanical systems to software architecture, master the disciplines 
            that shape modern civilization.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">10</div>
              <div class="text-xs text-slate-400">Disciplines</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">15,200+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">ABET</div>
              <div class="text-xs text-slate-400">Accreditation</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">PE License</div>
              <div class="text-xs text-slate-400">Professional</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Subjects Grid -->
    <section class="relative py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold text-white">Engineering Disciplines</h2>
          <p class="mt-4 text-slate-400">
            Choose your field and start building the future
          </p>
        </div>
        
        <SubjectGrid 
          :subjects="subjects" 
          category-slug="engineering"
          :columns="3"
        />
      </div>
    </section>

    <!-- Featured Resources -->
    <section class="relative border-t border-orange-500/10 bg-space-900/30 py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-white">Featured Resources</h2>
          <p class="mt-4 text-slate-400">
            Top platforms for engineering education
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a href="https://ocw.mit.edu/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10"><Icon name="graduation-cap" :size="24" class="text-orange-400" /></div>
            <h3 class="mb-2 text-lg font-semibold text-white group-hover:text-orange-400">MIT OpenCourseWare</h3>
            <p class="text-sm text-slate-400">Free MIT engineering courses across all disciplines. Lectures, notes, and assignments.</p>
          </a>
          
          <a href="https://nptel.ac.in/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10"><Icon name="flag" :size="24" class="text-orange-400" /></div>
            <h3 class="mb-2 text-lg font-semibold text-white group-hover:text-orange-400">NPTEL</h3>
            <p class="text-sm text-slate-400">Indian engineering courses from IITs and IISc. Comprehensive video lectures.</p>
          </a>
          
          <a href="https://www.engineeringtoolbox.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10"><Icon name="wrench" :size="24" class="text-orange-400" /></div>
            <h3 class="mb-2 text-lg font-semibold text-white group-hover:text-orange-400">Engineering Toolbox</h3>
            <p class="text-sm text-slate-400">Reference resources, formulas, and calculators for engineers.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Start Your Engineering Journey
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Engineering combines creativity with analytical thinking to solve real-world problems.
          Choose a discipline and begin building your foundation.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink 
            to="/engineering/mechanical"
            class="rounded-lg bg-orange-600 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-500"
          >
            Explore Mechanical
          </NuxtLink>
          <NuxtLink 
            to="/engineering/software"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Software Engineering
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { engineeringSubjects, getCategoryBySlug } from '~/data/subjects'

const subjects = engineeringSubjects
const categoryInfo = getCategoryBySlug('engineering')

useHead({
  title: 'Engineering - Mechanical, Electrical, Civil & More | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Explore engineering disciplines with 15,200+ resources. Mechanical, electrical, civil, chemical, aerospace, software, and biomedical engineering.' 
    }
  ]
})
</script>
