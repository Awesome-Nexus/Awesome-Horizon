<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-space-900 to-violet-950 pb-20 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-indigo-300 ring-1 ring-indigo-500/30">
            <Icon name="sigma" :size="24" class="text-indigo-400" />
            <span class="text-sm font-medium">STEAM Category</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Mathematics
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            The language of patterns and structures. From basic algebra to advanced research, 
            discover the beauty and power of mathematical thinking.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-indigo-500/20">
              <div class="text-2xl font-bold text-indigo-400">10</div>
              <div class="text-xs text-slate-400">Subjects</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-indigo-500/20">
              <div class="text-2xl font-bold text-indigo-400">13,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-indigo-500/20">
              <div class="text-2xl font-bold text-indigo-400">3Blue1Brown</div>
              <div class="text-xs text-slate-400">Top Channel</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-indigo-500/20">
              <div class="text-2xl font-bold text-indigo-400">All Levels</div>
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
          <h2 class="text-3xl font-bold text-white">Explore Mathematics</h2>
          <p class="mt-4 text-slate-400">
            From foundations to frontiers
          </p>
        </div>
        
        <SubjectGrid 
          :subjects="subjects" 
          category-slug="mathematics"
          :columns="3"
        />
      </div>
    </section>

    <!-- Featured Resources -->
    <section class="relative border-t border-indigo-500/10 bg-space-900/30 py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-white">Top Math Resources</h2>
          <p class="mt-4 text-slate-400">
            The best platforms for learning mathematics
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a href="https://www.khanacademy.org/math" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-indigo-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10"><Icon name="book-open" :size="24" class="text-indigo-400" /></div>
            <h3 class="mb-2 text-lg font-semibold text-white group-hover:text-indigo-400">Khan Academy</h3>
            <p class="text-sm text-slate-400">Free comprehensive math courses from arithmetic to calculus and beyond.</p>
          </a>
          
          <a href="https://www.3blue1brown.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-indigo-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10"><Icon name="film" :size="24" class="text-indigo-400" /></div>
            <h3 class="mb-2 text-lg font-semibold text-white group-hover:text-indigo-400">3Blue1Brown</h3>
            <p class="text-sm text-slate-400">Beautiful animated explanations of math concepts. Essence of calculus and linear algebra.</p>
          </a>
          
          <a href="https://ocw.mit.edu/courses/mathematics/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-indigo-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10"><Icon name="graduation-cap" :size="24" class="text-indigo-400" /></div>
            <h3 class="mb-2 text-lg font-semibold text-white group-hover:text-indigo-400">MIT OCW Mathematics</h3>
            <p class="text-sm text-slate-400">MIT's undergraduate and graduate math courses. Complete lecture materials.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Discover the Beauty of Mathematics
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Mathematics is not just about numbers—it's about patterns, reasoning, and understanding 
          the world. Start with Khan Academy or 3Blue1Brown.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink 
            to="/mathematics/algebra"
            class="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-500"
          >
            Start with Algebra
          </NuxtLink>
          <NuxtLink 
            to="/mathematics/calculus"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Explore Calculus
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { mathematicsSubjects, getCategoryBySlug } from '~/data/subjects'

const subjects = mathematicsSubjects
const categoryInfo = getCategoryBySlug('mathematics')

useHead({
  title: 'Mathematics - Algebra, Calculus, Statistics & More | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Explore mathematics with 13,500+ resources. Algebra, calculus, linear algebra, statistics, discrete math, and more. From basics to advanced topics.' 
    }
  ]
})
</script>
